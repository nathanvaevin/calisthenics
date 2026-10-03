-- =====================================================================
-- CALISTHENICS PLATFORM, v0.1 SCHEMA
--
-- Run this once, in the Supabase SQL editor, against a fresh project.
-- It is written to be read top to bottom: types, tables, helper
-- functions, then every Row Level Security policy in one block so the
-- access rules can be reviewed in one place.
--
-- The architecture rules this encodes, from CLAUDE.md:
--   - Identity is the auth provider's stable user ID, never an email.
--   - Role lives on the membership between a person and a class, never
--     on the person. A coach of one class can be an athlete in another.
--   - Aura is an event log. The total is derived, never a column.
--   - Prerequisites are rows connecting skills, never text.
--   - Course length is data a coach sets.
--   - Scoring weights and thresholds live in one place and change
--     without rewriting history.
--   - Permission scoping is enforced here, on every request. Hiding a
--     button is not a permission.
--
-- Deliberately absent, and to stay absent: calories, body weight, body
-- fat, measurements, physique. The platform rates capability.
-- =====================================================================

create extension if not exists pgcrypto;

-- =====================================================================
-- 1. PEOPLE
-- =====================================================================

-- One row per human. The primary key IS the provider's stable user ID,
-- so identity can never drift to an email address.
create table public.profiles (
  id            uuid primary key references auth.users(id) on delete cascade,
  display_name  text not null check (length(trim(display_name)) between 1 and 80),
  persona       jsonb not null default '{}'::jsonb,
  created_at    timestamptz not null default now()
);

-- Admin is global, so it is its own table rather than a role on a
-- membership. Membership roles are per class and cannot express this.
create table public.admins (
  person_id  uuid primary key references public.profiles(id) on delete cascade,
  granted_at timestamptz not null default now()
);

-- =====================================================================
-- 2. CLASSES AND MEMBERSHIP
-- =====================================================================

-- Course length is data. starts_on is the Monday of week 1, which is
-- what the week choosers already derive the current week from, so the
-- number never has to be moved by hand.
create table public.classes (
  id           uuid primary key default gen_random_uuid(),
  name         text not null check (length(trim(name)) between 1 and 120),
  course_weeks int  not null default 8 check (course_weeks between 1 and 52),
  starts_on    date not null,
  created_by   uuid not null references public.profiles(id),
  created_at   timestamptz not null default now()
);

create type public.class_role as enum ('athlete', 'coach');

-- The role is HERE, on the join, not on the person.
create table public.memberships (
  id        uuid primary key default gen_random_uuid(),
  class_id  uuid not null references public.classes(id) on delete cascade,
  person_id uuid not null references public.profiles(id) on delete cascade,
  role      public.class_role not null default 'athlete',
  joined_at timestamptz not null default now(),
  unique (class_id, person_id)
);

create index on public.memberships (person_id);
create index on public.memberships (class_id, role);

-- =====================================================================
-- 3. THE EXERCISE LIBRARY
--
-- assets/engine.js stays the master list. This is a mirror, so that set
-- results and Aura events can reference a skill by foreign key instead
-- of by a loose string. The key is the same "Track|Exercise" key the
-- weekly sheets already use, so nothing has to be renamed to sync.
-- =====================================================================

create table public.skills (
  key        text primary key,
  track      text not null,
  name       text not null,
  level      int  not null check (level between 1 and 10),
  category   text,
  synced_at  timestamptz not null default now()
);

-- Prerequisites are rows connecting skills, never a sentence in a
-- description. A skill cannot require itself.
create table public.skill_prerequisites (
  skill_key    text not null references public.skills(key) on delete cascade,
  requires_key text not null references public.skills(key) on delete cascade,
  primary key (skill_key, requires_key),
  check (skill_key <> requires_key)
);

-- =====================================================================
-- 4. TRAINING: SESSIONS AND SET RESULTS
--
-- This is the shape workout mode already produces. A set knows what it
-- asked for and what was done, so a prescription that changes later
-- never rewrites what an athlete actually did.
-- =====================================================================

create table public.sessions (
  id          uuid primary key default gen_random_uuid(),
  person_id   uuid not null references public.profiles(id) on delete cascade,
  class_id    uuid references public.classes(id) on delete set null,
  week        int  check (week between 1 and 52),
  source      text not null default 'weekly' check (source in ('weekly','shuffle','freestyle')),
  started_at  timestamptz not null default now(),
  ended_at    timestamptz,
  check (ended_at is null or ended_at >= started_at)
);

create index on public.sessions (person_id, started_at desc);

create type public.target_kind as enum ('time', 'reps', 'open');

create table public.set_results (
  id             bigint generated always as identity primary key,
  session_id     uuid not null references public.sessions(id) on delete cascade,
  -- Nullable on purpose: not every prescribed row is a library skill yet.
  skill_key      text references public.skills(key) on delete set null,
  exercise_name  text not null,
  set_index      int  not null check (set_index >= 1),
  target_kind    public.target_kind not null,
  target_value   int  check (target_value is null or target_value >= 0),
  achieved_value int  check (achieved_value is null or achieved_value >= 0),
  completed      boolean not null default false,
  recorded_at    timestamptz not null default now(),
  unique (session_id, exercise_name, set_index)
);

create index on public.set_results (skill_key);

-- =====================================================================
-- 5. ASSESSMENT
-- =====================================================================

create table public.assessments (
  id         uuid primary key default gen_random_uuid(),
  person_id  uuid not null references public.profiles(id) on delete cascade,
  class_id   uuid references public.classes(id) on delete set null,
  taken_on   date not null default current_date,
  source     text not null check (source in ('scan','in_app')),
  -- 1 to 7 with 8 as the final boss, per the existing class scorecard.
  overall_level int not null check (overall_level between 1 and 8),
  detail     jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index on public.assessments (person_id, taken_on desc);

-- =====================================================================
-- 6. AURA
--
-- An event log, never a column. The current total is derived by summing
-- events. Every event stores the weights that produced it, so retuning
-- the formula changes what happens next without rewriting history, and
-- a recompute is a job rather than a migration.
-- =====================================================================

create table public.aura_events (
  id                bigint generated always as identity primary key,
  person_id         uuid not null references public.profiles(id) on delete cascade,
  skill_key         text references public.skills(key) on delete set null,
  -- What actually happened, and how well we know it happened.
  evidence          text not null,
  verification_tier int  not null check (verification_tier between 0 and 4),
  -- The weights used AT THE TIME. This is what makes history stable.
  weights           jsonb not null,
  points            numeric(10,2) not null,
  source_session_id uuid references public.sessions(id) on delete set null,
  occurred_at       timestamptz not null default now()
);

create index on public.aura_events (person_id, occurred_at desc);

-- The derived total. A view, so it can never drift from the log.
create view public.aura_totals as
  select person_id, coalesce(sum(points), 0)::numeric(12,2) as aura
  from public.aura_events
  group by person_id;

-- The one place weights and thresholds live. Single row, enforced.
create table public.scoring_config (
  id               int primary key default 1 check (id = 1),
  aura_weights     jsonb not null,
  level_thresholds jsonb not null,
  tier_thresholds  jsonb not null,
  updated_at       timestamptz not null default now()
);

-- =====================================================================
-- 7. VIDEO
--
-- Consent is recorded before a file exists, not implied by upload.
-- The retention rule itself is still undecided: docs/platform-vision.md
-- says consent and retention must be settled before this ships. These
-- columns hold the decision, they do not make it.
-- =====================================================================

create table public.video_submissions (
  id               uuid primary key default gen_random_uuid(),
  person_id        uuid not null references public.profiles(id) on delete cascade,
  skill_key        text references public.skills(key) on delete set null,
  storage_path     text not null,
  review_requested boolean not null default false,
  consent_given_at timestamptz not null,
  retain_until     date,
  created_at       timestamptz not null default now()
);

create index on public.video_submissions (person_id, created_at desc);

-- =====================================================================
-- 8. HELPER FUNCTIONS
--
-- These are security definer so that a policy on memberships can ask a
-- question about memberships without recursing into its own policy,
-- which is the classic way RLS deadlocks itself on Supabase.
--
-- search_path is pinned on every one of them. A security definer
-- function with a mutable search_path is a privilege escalation, not a
-- style preference.
-- =====================================================================

create or replace function public.is_admin()
returns boolean language sql security definer stable set search_path = public as $$
  select exists (select 1 from public.admins a where a.person_id = auth.uid());
$$;

create or replace function public.is_member_of(p_class uuid)
returns boolean language sql security definer stable set search_path = public as $$
  select exists (
    select 1 from public.memberships m
    where m.class_id = p_class and m.person_id = auth.uid()
  );
$$;

create or replace function public.is_coach_of(p_class uuid)
returns boolean language sql security definer stable set search_path = public as $$
  select exists (
    select 1 from public.memberships m
    where m.class_id = p_class and m.person_id = auth.uid() and m.role = 'coach'
  );
$$;

-- True when the caller coaches a class that p_person is an athlete in.
-- This is what lets a coach see their own athletes and nobody else's.
create or replace function public.coaches_person(p_person uuid)
returns boolean language sql security definer stable set search_path = public as $$
  select exists (
    select 1
    from public.memberships mine
    join public.memberships theirs on theirs.class_id = mine.class_id
    where mine.person_id = auth.uid()
      and mine.role = 'coach'
      and theirs.person_id = p_person
  );
$$;

-- =====================================================================
-- 9. ROW LEVEL SECURITY
--
-- Every table is denied by default and then opened deliberately. The
-- shape repeated below is: a person reaches their own rows, a coach
-- reaches their athletes' rows, an admin reaches everything.
-- =====================================================================

alter table public.profiles            enable row level security;
alter table public.admins              enable row level security;
alter table public.classes             enable row level security;
alter table public.memberships         enable row level security;
alter table public.skills              enable row level security;
alter table public.skill_prerequisites enable row level security;
alter table public.sessions            enable row level security;
alter table public.set_results         enable row level security;
alter table public.assessments         enable row level security;
alter table public.aura_events         enable row level security;
alter table public.scoring_config      enable row level security;
alter table public.video_submissions   enable row level security;

-- --- profiles ---------------------------------------------------------
create policy profiles_read on public.profiles for select
  using (id = auth.uid() or public.coaches_person(id) or public.is_admin());
create policy profiles_insert_self on public.profiles for insert
  with check (id = auth.uid());
create policy profiles_update_self on public.profiles for update
  using (id = auth.uid() or public.is_admin())
  with check (id = auth.uid() or public.is_admin());

-- --- admins -----------------------------------------------------------
-- Readable so the interface can tell, writable only by an admin. The
-- first admin is inserted by hand in the SQL editor.
create policy admins_read on public.admins for select
  using (person_id = auth.uid() or public.is_admin());
create policy admins_write on public.admins for all
  using (public.is_admin()) with check (public.is_admin());

-- --- classes ----------------------------------------------------------
create policy classes_read on public.classes for select
  using (public.is_member_of(id) or public.is_admin());
create policy classes_insert on public.classes for insert
  with check (created_by = auth.uid());
create policy classes_update on public.classes for update
  using (public.is_coach_of(id) or public.is_admin())
  with check (public.is_coach_of(id) or public.is_admin());
create policy classes_delete on public.classes for delete
  using (public.is_admin());

-- --- memberships ------------------------------------------------------
create policy memberships_read on public.memberships for select
  using (person_id = auth.uid() or public.is_coach_of(class_id) or public.is_admin());
create policy memberships_write on public.memberships for all
  using (public.is_coach_of(class_id) or public.is_admin())
  with check (public.is_coach_of(class_id) or public.is_admin());

-- --- the library ------------------------------------------------------
-- Readable by any signed in person, written only by an admin, because
-- engine.js is the master and this is its mirror.
create policy skills_read on public.skills for select
  using (auth.uid() is not null);
create policy skills_write on public.skills for all
  using (public.is_admin()) with check (public.is_admin());

create policy prereq_read on public.skill_prerequisites for select
  using (auth.uid() is not null);
create policy prereq_write on public.skill_prerequisites for all
  using (public.is_admin()) with check (public.is_admin());

-- --- sessions and set results ----------------------------------------
create policy sessions_read on public.sessions for select
  using (person_id = auth.uid() or public.coaches_person(person_id) or public.is_admin());
create policy sessions_write_own on public.sessions for all
  using (person_id = auth.uid()) with check (person_id = auth.uid());

-- Set results inherit their session's owner rather than carrying a
-- person_id of their own, so the two can never disagree.
create policy set_results_read on public.set_results for select
  using (exists (
    select 1 from public.sessions s
    where s.id = session_id
      and (s.person_id = auth.uid() or public.coaches_person(s.person_id) or public.is_admin())
  ));
create policy set_results_write_own on public.set_results for all
  using (exists (select 1 from public.sessions s where s.id = session_id and s.person_id = auth.uid()))
  with check (exists (select 1 from public.sessions s where s.id = session_id and s.person_id = auth.uid()));

-- --- assessments ------------------------------------------------------
create policy assessments_read on public.assessments for select
  using (person_id = auth.uid() or public.coaches_person(person_id) or public.is_admin());
create policy assessments_write on public.assessments for all
  using (person_id = auth.uid() or public.coaches_person(person_id) or public.is_admin())
  with check (person_id = auth.uid() or public.coaches_person(person_id) or public.is_admin());

-- --- aura -------------------------------------------------------------
-- Readable by the athlete and their coach. Deliberately NOT writable by
-- the athlete: Aura is awarded by the system and by coach verification,
-- never self reported, or the verification ladder means nothing.
create policy aura_read on public.aura_events for select
  using (person_id = auth.uid() or public.coaches_person(person_id) or public.is_admin());
create policy aura_write_coach on public.aura_events for insert
  with check (public.coaches_person(person_id) or public.is_admin());

create policy scoring_read on public.scoring_config for select
  using (auth.uid() is not null);
create policy scoring_write on public.scoring_config for all
  using (public.is_admin()) with check (public.is_admin());

-- --- video ------------------------------------------------------------
create policy video_read on public.video_submissions for select
  using (person_id = auth.uid() or public.coaches_person(person_id) or public.is_admin());
create policy video_write_own on public.video_submissions for all
  using (person_id = auth.uid()) with check (person_id = auth.uid());

-- =====================================================================
-- 10. SEED
-- =====================================================================

-- v0.1 starting weights, open to revision. Changing these changes what
-- happens next and leaves every past event exactly as it was.
insert into public.scoring_config (id, aura_weights, level_thresholds, tier_thresholds)
values (
  1,
  '{"base": 10, "per_level": 1.5, "tier_multiplier": {"0": 0.25, "1": 0.5, "2": 1.0, "3": 1.5, "4": 2.0}}'::jsonb,
  '{"1": 0, "2": 150, "3": 400, "4": 800, "5": 1400, "6": 2200, "7": 3200, "8": 4600, "9": 6400, "10": 9000}'::jsonb,
  '{"0": 0, "1": 250, "2": 900, "3": 2200, "4": 4200, "5": 7000, "6": 11000}'::jsonb
)
on conflict (id) do nothing;

-- A new sign in gets a profile automatically, keyed on the provider ID.
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, display_name)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'name', 'Athlete')
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();
