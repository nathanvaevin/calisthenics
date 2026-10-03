# Calisthenics Platform: Vision

**Know your level. Choose your goal. Master what comes next.**

Status: vision document, v2 (October 2026)
Owner: Nathan van Veen

---

## 1. What this is

Not a workout app. A **progression and identity system for calisthenics**.

The platform exists to create a universal language for one question:

> How strong and skilled am I in calisthenics, and what do I need to master next?

Chess has Elo. Games have XP and levels. Dragon Ball has power levels read off a scouter. Calisthenics has a word already circulating in its own culture: **aura**. That is the unit this platform makes real, measurable and comparable.

The insight is that calisthenics already has a hierarchy, everyone in the community intuitively feels it, and nobody has made it legible. Athletes know a one arm planche sits above a full planche. They know a one hand handstand push up is a different universe from a wall handstand. What is missing is the shared scale, the honest assessment, and the map between where you stand and what you want.

### What it is not

- Not points for opening the app. Aura represents **demonstrated physical capability**, never engagement.
- Not another exercise library competing on volume. A competitor has 1000+ exercises. A bigger pile of exercises is not the product.
- Not a replacement for coaching. It is the instrument a coach and an athlete both read from.
- Not a gym app. No calories, no body weight tracking, no aesthetics metrics. This platform rates what you can do.

---

## 2. Where it stands today

Three sections exist in some form.

**1. Weekly class exercises.** The 8 week calisthenics course. Eight weeks of programmed sessions, every exercise modifiable to the level of the person doing it. Levels run 1 to 10 and mean the same thing everywhere: the weekly sheets, the handstand plan and every rung of the skill tree. Weeks 1 and 2 are built, the rest get built ahead of delivery.

**2. The handstand course.** The Inversion Method, 4 weeks. Same situation: weeks 1 and 2 built, weeks 3 and 4 to come.

**3. The skill tree.** 125 exercises across 24 tracks in four groups (Foundations, Lower Body, Balance and Straight Arm Skills, Dynamic on Bars and Rings). Animated 2D figures with coaching steps, interactive muscle maps, a 3D rotating figure toggle, synonym aware search with difficulty filtering. This is the most developed asset and the one everything else will eventually hang off.

Honest read on the gap: the content quality is there, the structure is there, the coverage is thin and the three pieces do not yet talk to each other. Nothing is personalised, nothing is logged, nothing persists. That is exactly what v0.1 fixes.

---

## 3. The core mechanic: Aura

Aura is a single number that expresses demonstrated capability in calisthenics.

Two rules protect it from becoming noise:

1. **Aura rewards capability first.** Consistency and progress earn something, but far less than proving a skill.
2. **Aura is earned, not accumulated.** You cannot grind your way up by showing up. You go up by getting better.

### Aura v0.1 (a starting formula, open to revision)

```
Aura = Skill × Difficulty × Execution Quality × Strength × Consistency
```

Skill and Difficulty come from the skill tree node. Execution Quality comes from how cleanly the rep was performed. Strength captures load, reps or hold time relative to the standard. Consistency is the small multiplier that rewards repeatability over a lucky single attempt.

This is v0.1 and it is meant to be wrong in interesting ways. Design it so the weights live in one place and can be retuned without rewriting history. Recomputing everyone's Aura after a formula change should be a job we can run, not a migration we dread. That decision has to be made at the start, because retrofitting it later is the expensive version.

### The verification ladder

Not all evidence is equal. Aura should carry a confidence level alongside the number.

| Tier | Source | Weight |
|---|---|---|
| 1 | Self reported | Lowest |
| 2 | Coach verified | Higher |
| 3 | AI verified (video execution analysis) | Higher still |
| 4 | Competition verified | Highest |

This ladder is the thing that makes the long game possible. A number anyone can self declare is gamification. A number backed by coach and competition verification is a **rating system**, and a rating system is infrastructure.

Backing: start with Nathan's own coaching design, since it is already in use and already reasonably accurate. Layer in experienced coaches and sport science literature as the population grows and the data says where the model is off.

---

## 4. The athlete profile

The profile is the product's front page and its identity layer. Opening it should feel like reading a character sheet you earned.

```
NATHAN                                   Level 7
                                      4,820 Aura

ATTRIBUTES
  Strength        7.2
  Pull            8.1
  Push            6.8
  Handstand       9.2
  Straight Arm    6.3
  Core            7.8
  Mobility        6.8

ABILITIES
  ✓ Muscle up            ✓ Handstand
  ✓ L sit                ✓ Pistol squat
  ✓ Handstand push up    ✓ Front lever
  ✓ Human flag           ◐ Planche (half)
  ✗ One arm handstand      locked
```

Three layers, each answering a different question:

- **Aura and level**: where do I sit overall.
- **Attributes**: what kind of athlete am I, and where am I unbalanced.
- **Abilities**: what can I actually do, and what is still locked.

The locked entries matter as much as the unlocked ones. They are the map's edge, and they are what pulls someone back into the app.

### The persona

The profile carries a 3D character of the athlete, expressing two things at once on two independent axes. Goals sit on the profile alongside it.

**Pose: what you can do.** The character holds the athlete's highest unlocked skill. A crow in week 1, a handstand in week 6, a one arm handstand at level 9. Reuses the 3D figure already built into the skill tree, so the asset cost is close to zero.

**Glow: where you stand.** A visible aura around the character, scaled by Aura tier, Dragon Ball style. The platform's unit is already called aura, so rendering an actual one closes the loop between the name and the thing.

Keeping the two axes independent matters: an athlete with one freakish skill and an athlete with broad competence should not look identical.

### How it renders

Not an orbitable model. A fixed camera on a character standing there, alive with a small idle motion.

- **Fixed framing, front three quarter angle.** Lit once, framed once, so the silhouette and the glow read correctly every time. An orbitable model has to look right from every angle, which is far more work for nothing gained.
- **The pose is the idle.** Breathing, a slight weight shift, a loop of a few seconds. If the highest skill is a handstand, the idle is a held handstand with micro corrections, which is both accurate and charming, because a real handstand is never still.
- **Transitions are the celebration beat.** On unlocking a new skill, the character moves from the old pose into the new one, once, on the profile. Same for crossing an Aura tier.
- **Figure and glow are separate layers.** Composite the glow over the character rather than baking them together. Then poses and tiers combine additively instead of needing an asset per combination.

Note the difference from the skill tree's existing 3D figure, which rotates because it is a teaching tool and you need to see a handstand from several angles. The persona is a portrait, not a demonstration, so it holds still and the camera stays put.

### Tier rules

- **Tiers, not a gradient.** Six to eight discrete steps, each a clear change in colour and intensity. A continuous brightness curve is invisible to the person living inside it. Crossing a tier is an event, and the event is the reward.
- **The first tier change must be reachable inside one course by a beginner.** If tier two costs 2000 Aura, nobody in the first cohort sees the glow change during the eight weeks and the feature does not exist for the only people using it. Set the first threshold where a beginner lands around week five.

A real photo sits alongside the character, because people want to see a face.

Physique is deliberately not what the character represents. Section 1 says the platform rates what you can do, and a body shape avatar quietly argues the opposite.

**Build note:** this is the most enjoyable part of the product to build and the easiest place to lose a week while nothing else works. Design the tier scale now, since that costs nothing, and build the glow in 0.2 once sessions are logging and Aura is actually moving. A glowing character attached to a number that never changes is worse than no character.

### Stat tiles

Aura, level, skills unlocked, sessions completed. Explicitly not calories.

---

## 5. The skill tree is the engine

Stop thinking of the skill tree as a library. It is a **map of calisthenics itself**.

A ladder, for example:

```
shrug stand → crow → tuck handstand → handstand → press handstand → one arm handstand
```

Every rung is a node. Every node carries:

- Technique and coaching cues
- **Nathan's own demonstration video** (replacing the 3D figures over time, starting with what his own students train on)
- Prerequisites (what must be true before you attempt this)
- Progressions (what comes next)
- Regressions (what to drop back to)
- Difficulty rating
- Muscles involved
- Recommended volume
- Objective execution criteria (eventually, the standard the AI and the coach both judge against)

The supporting exercises for each node hang off it, so a node answers both "what is this skill" and "what do I train to get it."

Once the map exists and the profile exists, the platform knows three things at once:

1. Where you are
2. Where you want to go
3. Everything that lies between

That is the whole magic trick. Someone clicks **Full planche**, and receives their personal road toward it. Not a generic programme. Their road, from their current node, with their gaps filled in.

---

## 6. Accounts and access

### Sign in

**Google sign in.** No passwords stored, no reset flow to build, one button. Email and profile scope only, which returns name, email and photo and nothing more.

Two rules that are cheap now and expensive later:

- **Identity is keyed on the provider's stable user ID**, never on the email address. People change email addresses, and an email keyed record loses its entire training history the day they do.
- **Go through an auth provider** rather than wiring Google directly, so adding magic link email later for anyone without a Google account is a configuration change rather than a rebuild.

### Roles

Three roles: **athlete**, **coach**, **admin**.

A person can be an athlete in one class and the coach of another, so **role lives on the membership between a person and a class, not on the person**. Admin is global and sits on the person. Nathan holds admin.

| Capability | Athlete | Coach | Admin |
|---|---|---|---|
| Own profile, programme, progress | yes | yes | yes |
| See classmates' names and shared activity | yes | yes | yes |
| See full detail of athletes in own classes | no | yes | yes |
| See athletes in other coaches' classes | no | no | yes |
| Review and respond to video submissions | own only | own classes | all |
| Create and assign programmes | no | own classes | all |
| Edit skill tree content | no | propose only | yes |
| Change Aura weights and verification rules | no | no | yes |

### The rule that prevents the classic bug

Scoping is enforced in the database, on every request, not in the interface. Hiding a button is not a permission. The common failure is a UI that shows the right thing while the API happily returns another coach's athletes to anyone who asks for them.

The multi coach product is phase 0.3. The multi coach **data model** is day one: every athlete belongs to a class, every class belongs to a coach, from the first migration.

---

## 7. v0.1: my students are the first users

The first release is for the people already in the room. They are version 0.1, and they are the first members of something bigger. Target: a working platform within weeks, not quarters.

**1. Account and athlete profile**
Google sign in, persona, Aura, overall level, attributes, abilities, goals, progress.

**2. Assessment**
The existing class assessment already sorts people into levels 1 to 7, with level 8 as the final boss. It is reasonably accurate and good enough to ship. Today it is printed and run in class. Two paths into the app: scan the paper card, or complete the assessment in app. Ship the scan path first, since that is how class actually runs. The assessment gets more elaborate later; it does not need to be better to be useful.

**3. Skill tree**
Already built. 125 exercises is enough to start and grows continuously.

**4. Goals**
"I want a muscle up." "I want a 30 second handstand." "I want 10 pull ups." Offer a curated set of options plus suggestions based on the current assessment, and let the athlete set a time horizon. Goal setting is not decoration; it is the input the whole recommendation engine runs on.

**5. My weekly programme**
The class programme, delivered in app, per athlete, at their level. Plus **shuffle**: generate an appropriate session from their level, their goal and the equipment they have available. This is what turns the platform from a class handout into something they use when training alone at home.

**6. Workout mode**
Two views over the same session, described in section 8. Usable one handed, mid set, sweaty, on a phone.

**7. Progress and history**
Personal records, skills mastered, Aura development over time, distance remaining to each goal. After the course, an athlete should be able to see exactly what changed, and compare against where the group started.

**8. Video submission**
Upload an attempt, optionally flag it as a coach review request. This is the raw material for both coach feedback now and AI verification later, so start collecting it from day one. Ships with the consent and retention rules decided first.

**9. Coach dashboard**
My classes, my athletes, their goals, their current levels, their progress, their submitted videos. Notification when something comes in, with the athlete's name. Assign workouts from the library. In v0.1 this can be plain and unstyled, because the only user is Nathan.

---

## 8. The interface

Patterns reviewed against Gymshark and Ladder, with decisions taken.

### Navigation

Four tabs: **Train**, **Skill Tree**, **Progress**, **Profile**.

### Onboarding

- Nathan on video explaining Aura and the skill tree before signup, Ladder style. Roughly 40 seconds.
- Multi step with a visible progress indicator rather than one long form.
- **Persona creation** as the identity step, replacing the gender preference step that fitness apps use.
- Goals set during onboarding and carried on the profile.

### The session

- **Session detail**: meta chips (duration, level, equipment, focus) and a single START button.
- **Sections** with skip: Warmup, Main, Finisher. This matches how the classes already run.
- **Supersets and circuits** stay grouped, so stations look the same in the app as on the floor.
- **Demonstration video** at the top of each exercise, swipeable between exercises. This is where Nathan's own footage lands.

### Workout mode: two views, one session

This is the one place where neither reference app alone was right, so the platform takes both.

**List view (Gymshark style).** The whole session scrollable, every exercise visible at once, one row per set, tick as you go. For training with a coach present, or when you want to see the shape of the session.

**Guided view (Ladder style).** Full screen, the exercise video looping, the timer running, one button to complete and move to the next. For training alone, phone on the floor, no reading.

Same session, same data, same logging. A toggle switches the presentation. Only the view differs, which is exactly why this costs little: the session is data, and these are two renderings of it.

Within both:

- **Timed hold screen** with a large countdown ring. Handstands, L sits and levers are time based, so this matters at least as much as the rep version.
- **Rest timer** with adjust by 10 seconds.
- **Session complete**: time, Aura gained, and a shareable card. Ladder calls this Share Proof, and proof is the right word here given the verification ladder.

### Skill tree browse

Card lists with level and typical duration on every card, the way a category list works in Gymshark, rendered from the tree rather than from a flat library.

### Progress

- Weekly activity bar chart.
- Personal record line per skill.
- **Course completion grid**, the dot grid pattern applied to the course length. Length is configurable, currently 4 or 8 weeks, and a coach can set it for their own course. Course length is data, never hard coded.

### Deliberately excluded

- Gender preference onboarding step.
- Capped style multi select at signup.
- Calories, anywhere, in any screen.

### Deferred past v0.1

| Pattern | Phase |
|---|---|
| Explore and discovery surface, other programmes, quotes | 0.2 |
| Class chat with pinned coach messages | 0.2 |
| Weekday completion strip showing the whole group | 0.2 |
| Teammates training now, with one tap cheers | 0.3 |
| Explore coaches and teams | 0.3 and 1.0 |

The weekday strip and "training now" are the small scale version of the location layer in section 9. Worth noting that the same mechanic reappears at every scale: a class, a gym, a park, a city.

---

## 9. How it expands

Once the students prove the system works, the next customer is not another athlete. It is **another coach**.

**Coaches.** A coach creates a team, invites 20 athletes, assigns programmes from the library, watches progression, reviews videos, sees Aura. Their own demonstration videos can sit on the nodes they teach. Everything that makes the platform valuable to one coach with one class multiplies with zero extra content work.

**Gyms.** Same shape, more teams, plus the gym's own leaderboard and identity.

**Communities.** Calisthenics parks, online groups, and eventually named athletes whose verified skills are visible on their profiles.

**The social layer.**

```
📍 Calisthenics Park • Amsterdam
   12 athletes nearby
   Average Aura: 2,140
   🔥 3 training now
   ⚡ Elite athlete nearby
```

Someone opens your profile, sees the skills you have verified, challenges you, trains with you, or follows your progression. That "elite athlete nearby" alert is half a joke and entirely the point: it makes the invisible hierarchy visible in physical space, which is exactly where calisthenics lives.

At that point this is closer to **Strava × Duolingo × Chess.com for calisthenics** than to another fitness programme app.

---

## 10. Principles

- **Human built, human verified.** The content comes from a coach who teaches these classes every week. AI assists verification and scale; it does not author the standard.
- **Demonstrated over declared.** Every design decision should push toward proving capability rather than claiming it.
- **Fun before progression.** The classes already run on this. The platform must not turn training into admin.
- **Build for iteration from the start.** Aura weights, level thresholds, course lengths and execution criteria will all change. Structure the data so changing them is cheap.
- **Useful at n=1.** If this never scales beyond Nathan's own classes, it is still worth building, because it makes those classes better this semester.

---

## 11. Decisions still open

- Aura tier thresholds: how many tiers, and where the first one sits so a beginner reaches it mid course.
- How Aura maps to level. Is level a threshold on total Aura, or derived from the attribute profile?
- Whether attributes are computed from verified abilities, or assessed separately.
- Where level 1 to 10 (class levels) and the Aura scale meet, and whether they stay two systems or converge into one.
- Exercise video production: what gets filmed first, and in what order, given the skill tree is 125 nodes deep.
- Whether shuffle generates from templates or from a constraint solver over the skill tree.
- What "execution quality" means concretely per node, since it is the input AI verification will eventually need.
- Whether Aura decays with inactivity. It makes the number more honest and makes people angrier. Probably worth testing later, not at launch.
- Video consent and retention: who can view, how long it is kept, how deletion works. Required before item 8 of v0.1 ships.
- Stack: framework, database, auth provider, file storage, hosting.

**Decided:** Google sign in. Three roles with class scoped permissions. Four tab navigation. Dual workout view. Configurable course length. Persona as a fixed camera character with skill pose and Aura glow. No calories, no physique tracking.

---

## 12. Build order

| Phase | Scope | Who it serves |
|---|---|---|
| **0.1** | Google sign in, roles and class scoping, profile and persona, assessment import, skill tree browse, goals, weekly programme, shuffle, dual workout mode, progress, video upload, coach view | Nathan's current students |
| **0.2** | Nathan's own demo videos on nodes, Aura v0.1 live, persona glow and pose transitions, coach verification, course comparison, class chat, group week strip, discovery surface | Same students, second cohort |
| **0.3** | Multi coach: teams, invites, assignable programmes, training now and cheers | Other coaches |
| **1.0** | AI execution verification, public profiles, gyms, explore coaches | The wider calisthenics community |
| **Later** | Location layer, challenges, events, athlete marketplace | Everyone |

---

**Know your level. Choose your goal. Master what comes next.**
