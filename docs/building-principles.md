# Building Principles and AI Learning Roadmap

Status: v1 (September 2026)
Owner: Nathan van Veen
Companion to: `claude/platform-vision.md`

This document has two halves that serve different purposes.

**Part A (sections 1 to 6)** is how we work. These are standing instructions. Read them before writing code.
**Part B (sections 7 to 11)** is the opportunity backlog. These are things to keep in mind, not things to build now.

---

## Purpose

I am not only building a calisthenics platform. I want this project to become my practical education in AI, software development, databases, APIs, automation, agents, computer vision and product architecture.

Whenever possible, teach me what we are building rather than simply building it for me. Keep explanations concise and practical.

The test for whether this project succeeded on the learning goal: in six months I should be able to open any file in this codebase, explain what it does and why it is structured that way, and change it without help.

---

# Part A: How we work

## 1. Build carefully

Before implementing significant functionality:

```
Understand → Design → Build → Test → Verify → Commit
```

Do not blindly generate large amounts of code. For important changes, briefly explain:

1. What we are building
2. Why it should work this way
3. What part of the system it affects
4. How we will verify that it works

Prefer small, working increments over huge changes. A feature that works end to end and does one thing beats four half wired features.

**Boring by default.** Choose well documented, widely used tools over clever ones. When I get stuck at 11pm, the size of the community around a tool matters more than its elegance. Novelty is a cost I pay in debugging time.

## 2. Protect the foundations

Particular attention to:

**Database architecture.** Design the data model properly before the platform becomes complicated. This is the decision that is cheapest now and most expensive later.

**Authentication and permissions.** Athletes should only access what they should. Coaches should have appropriate access to their groups and submissions, and no access to other coaches' athletes. Write the permission rules down as a table before implementing them.

**Security.** Never expose API keys or secrets in frontend code. Anything the browser can read, a user can read.

**Data ownership.** Exercises, skills, workouts, attempts, assessments, Aura and achievements are structured data, never hard coded into UI components. If a fact about training lives only inside a React component, it does not really exist.

**Migrations.** Database changes should be reproducible and documented. I should be able to rebuild the database from zero by running the migrations in order.

**Version control.** Use Git properly. Logical commits, meaningful messages, working versions preserved. Never a commit that leaves the app broken.

**Testing.** Important calculations and workflows have tests, especially Aura, assessments and progression logic. If the Aura formula silently changes behaviour, I want a test to fail, not a student to notice.

**Modularity.** Assume that formulas, skill relationships and AI providers will change. Do not lock the product to one implementation. Aura weights live in one place. AI calls go through one interface.

**Privacy and consent.** This platform stores video of real people, including people in my classes. Before the first video upload ships, decide and document: who can view a submission, how long it is retained, whether it can be deleted on request, and what students consent to. Amsterdam means GDPR applies. Consent is a product feature here, not paperwork.

**Costs.** AI calls, video storage and video processing cost real money per use. Before adding an AI step, know roughly what one run costs and what 100 students per week would cost. Design for failure and rate limits: what the user sees when the AI call times out is part of the feature.

## 3. Teach me while building

When we encounter an important concept I should understand, flag it:

> 🎓 **LEARN THIS**

Then explain it in roughly 2 to 5 sentences. Teach concepts when they naturally become relevant. Do not turn every development step into a lecture.

**Learn in this order.** Not all of these are equally useful early. Roughly:

| Tier | Concepts | When |
|---|---|---|
| Foundations | Databases, SQL, data modelling, frontend vs backend, JSON, APIs, authentication, Git | v0.1, unavoidable |
| Operational | Testing, environment variables and secrets, edge and serverless functions, webhooks, caching, queues | As the platform grows |
| AI layer | LLMs, structured outputs, prompt design, embeddings, vector databases, semantic search | Once the data model is stable |
| Frontier | Agents, computer vision, evaluation of AI output quality | Last, and only with real data behind it |

Resist reaching into the frontier tier early. Embeddings on an empty database teach nothing.

**Retention mechanism.** Explanations I read once and never revisit are entertainment, not education. Keep a running `LEARNING-LOG.md` in the repo: one line per concept with the date and the file where I first used it. When a concept returns, I reread my own note rather than getting re explained to.

**I write some of it myself.** For each foundations tier concept, I write the code at least once, even if slower and worse. Reading generated code teaches recognition. Typing it teaches recall. Tell me when a task is a good candidate for this and let me do it.

## 4. Automation mindset

Whenever we encounter repetitive work, ask: could this become an automated workflow?

Think in systems:

```
Trigger → Data → Intelligence → Action
```

Example:

```
Student uploads skill attempt
        ↓
System identifies exercise
        ↓
AI analyzes performance
        ↓
Technique criteria are evaluated
        ↓
Coach receives preliminary analysis
        ↓
Coach verifies
        ↓
Aura and skill progression update
```

The goal is not to add AI everywhere. The goal is to use AI where it removes friction or enables something previously impossible.

Note what that example really is: the human coach stays in the loop and the AI shortens his work. That ordering is deliberate and should stay the default shape for anything that touches an athlete's rating.

## 5. Architecture for future intelligence

Structure the database so AI can eventually reason over:

- Athletes
- Skills
- Exercises
- Prerequisites
- Goals
- Workouts
- Workout results
- Assessments
- Video attempts
- Coach feedback
- Achievements
- Aura events

The quality of future AI will depend heavily on the quality of this underlying data.

**Structured data first. AI intelligence second.**

Two specifics worth deciding early because they are hard to add later:

**Aura events, not an Aura column.** Store every event that changed someone's Aura (what skill, what evidence, what verification tier, what weights were used, when). The current number is then derived. This makes the formula changeable, the history auditable, and progress analysis possible. A single mutable `aura` integer throws all of that away.

**Prerequisites as real relationships.** The skill tree's edges are the most valuable data in the platform, because they are what makes goal planning possible. Model them as rows connecting skills, not as text inside a skill description.

## 6. Anti patterns

Things to actively refuse:

- Generating a large feature in one pass because it is faster than explaining it
- Adding a framework, library or service to solve a problem we do not yet have
- Storing training logic in UI code
- Building the AI version of something before the manual version works
- Shipping an AI output as authoritative when it should be a suggestion for the coach
- Letting me skip understanding because the code already runs

---

# Part B: Opportunity backlog

Keep these in mind. Do not prematurely build them. Each one is listed with what has to exist first, because almost all of them depend on data we do not have yet.

## 7. AI opportunities

**AI Coach.** An athlete asks "why am I stuck on my muscle up?" and the AI answers with knowledge of their training history, skills, assessment, goals, submitted videos and previous coach feedback.
*Requires:* several months of real logged training data per athlete. Useless before that.

**Intelligent workout generation.** Goal plus level plus equipment plus training history plus weaknesses plus recovery, producing a personalised workout rather than a random one.
*Requires:* the skill tree with prerequisite edges, plus workout history. A simpler rules based version should ship first and may well be good enough.

**Semantic exercise search.** An athlete writes "I want something easier than dips that trains the same muscles" and the system understands meaning rather than requiring exact names.
*Requires:* embeddings over the exercise library. Reachable relatively early and a good first real AI feature, since the synonym search already proves the need.

**Computer vision.** Analyse uploaded videos for body position, joint angles, range of motion, repetitions, tempo, hold duration and technical execution.
*Requires:* execution criteria defined per skill (currently missing), plus a library of labelled example videos. This is the hardest item on the list. It should assist human judgment long before it is trusted as an autonomous authority.

**Aura verification ladder.** Self reported → coach verified → AI assisted → competition verified.
*Requires:* the Aura event model from section 5, and verification tier stored per event from day one.

**AI progress analysis.** For example: "your pulling strength increased significantly over the last eight weeks, but straight arm strength is becoming the limiting factor for front lever progression."
*Requires:* two or more assessment cycles of data. This is one of the highest value and lowest difficulty items once the data exists.

**AI goal planning.** Athlete selects Full Planche. The system analyses the skill tree and athlete profile and returns current position, missing prerequisites, recommended progression, training focus and estimated milestones.
*Requires:* prerequisite edges. Note that most of this is graph traversal, not AI. Build the deterministic version first. Avoid pretending that AI can reliably predict exact achievement dates.

**Automatic content generation.** When a new exercise is added, AI drafts description, technique cues, common mistakes, progressions, regressions, muscle groups and coach notes.
*Requires:* nothing. Usable immediately as a drafting tool. A human approves all training information before it goes live, because the content being human verified is part of the platform's pitch.

**Coach copilot.** The dashboard says "5 athletes need attention", "3 submitted videos", "2 have not trained this week", "Sarah appears ready to progress from tuck front lever".
*Requires:* the coach dashboard and logged training. Most of these lines are database queries rather than AI, which is exactly why this is an early win. It turns the dashboard from a database into an assistant.

**Voice interface.** "Start my workout." "Log eight pull ups." "Show me my next exercise." "How close am I to muscle up?" The athlete interacts without constantly touching their phone.
*Requires:* workout mode. Genuinely valuable in a real training context, where hands are chalked and phones are on the floor.

## 8. Agentic future

Long term, parts of the platform could operate through specialised agents:

| Agent | Role |
|---|---|
| Programming Agent | Creates and adapts workouts |
| Progress Agent | Analyses athlete development |
| Coach Agent | Prepares information for the human coach |
| Video Agent | Analyses uploaded performances |
| Content Agent | Helps maintain the exercise library |

These agents operate on the same structured athlete and skill tree data rather than each holding a separate version of reality. One shared source of truth is the whole point; five agents with five private models of an athlete is a bug, not an architecture.

## 9. Learn APIs

A major objective of this project is learning to connect systems. An API lets one piece of software request capabilities or information from another.

Practical experience wanted with: AI models, email, payments, maps, notifications, video processing, analytics, authentication.

Whenever an external service would meaningfully improve the product, explain the API opportunity before implementing it. Cover what it does, what it costs, what happens when it is down, and what we would have to build ourselves instead.

## 10. Frontier principle

Continuously ask: what becomes possible now that was previously too expensive, manual or technically difficult?

Do not copy existing fitness apps feature for feature. Look for capabilities created by AI, agents, automation and computer vision that make this product fundamentally different.

But maintain this priority:

```
Useful → Reliable → Intelligent → Magical
```

Never reverse that order. A magical feature that is unreliable costs more trust than it earns, and trust is the only reason an athlete would accept a number that claims to describe them.

## 11. Decisions to make before v0.1

- Stack: framework, database, auth provider, file storage, hosting. Pick boring, pick documented, pick one.
- Where the repo lives and how deployment happens.
- The permission table: who can read and write what.
- Video storage: retention, consent, deletion, who can view.
- Whether Aura is computed on write or derived on read from events.
- What the first 🎓 LEARN THIS concept is, and whether I type that code myself.

---

**Useful → Reliable → Intelligent → Magical.**
