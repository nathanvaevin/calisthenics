# Supabase

Everything the platform needs that a static site cannot do by itself:
accounts, persistence, class scoping and file storage.

## Status

`schema.sql` is **written but not yet run anywhere**. There is no Postgres,
Docker or Supabase CLI on this machine, so it has not been executed and the
SQL is unverified. The first run is the test. Run it against a fresh,
empty project where a mistake costs nothing, read the errors, and we fix
them before a single student signs in.

## Setting it up

1. Create a project at supabase.com. The free tier covers accounts, the
   assessment and progress comfortably.
2. Open the SQL editor, paste `schema.sql`, run it. Report any error back
   and we correct the file rather than patching the database by hand, so
   the file stays the source of truth.
3. Authentication, Providers, enable Google.
4. Make yourself the first admin. There is no bootstrap for this on
   purpose, because a self service admin grant is a hole:

   ```sql
   insert into public.admins (person_id)
   select id from auth.users where email = 'you@example.com';
   ```

5. Create your class. `starts_on` is the Monday of week 1, the same date
   the week choosers already derive the current week from:

   ```sql
   insert into public.classes (name, course_weeks, starts_on, created_by)
   select 'Autumn 2026', 8, date '2026-09-14', id
   from auth.users where email = 'you@example.com';
   ```

6. Settings, API. Copy the **Project URL** and the **anon public** key
   into `assets/config.js`, modelled on `assets/config.example.js`.

## About that key in the frontend

CLAUDE.md says never expose API keys or secrets in frontend code, so this
needs stating plainly rather than slipping past.

The **anon key is not a secret**. It is an identifier that says which
project you are talking to, it is designed to sit in client code, and
every request it makes is still filtered by the Row Level Security
policies in `schema.sql`. What stops someone reading another athlete's
data is the policy, never the key being hidden. This is a static site
served from GitHub Pages, so the key has to be in a committed file or the
site cannot connect at all.

The **`service_role` key is a real secret**. It bypasses every policy. It
must never be in this repository, in any file the browser can fetch, or in
any screenshot. It belongs only in a server side job, if we ever need one.

The consequence worth knowing: because secrecy is doing none of the work,
a wrong policy is a silent data leak rather than a visible bug. That is
why every table in `schema.sql` is denied by default and opened
deliberately, and why the policies are written in one block where they can
be read together.

## What is deliberately not here

No calories, body weight, body fat, measurements or physique of any kind.
The platform rates capability.

## Still undecided

Video consent and retention. `video_submissions` has `consent_given_at`
and `retain_until` columns ready, but the rule itself is not set: who can
view a submission, how long it is kept, and what deletion actually does.
`docs/platform-vision.md` says this is settled before video ships, and the
columns hold a decision rather than making one.
