# Working rules

## Never build an exercise without asking first

The exercise library in `assets/engine.js` is the master list. **Do not add a
new exercise to it, or invent one, unless I have said yes to that specific
exercise.**

When a week's plan needs something that is not in the library yet, or when I
upload a list that contains exercises we do not have:

1. Say which exercises are missing, by name.
2. Ask whether to build them.
3. Wait. Build nothing until I answer.

This holds even when adding it seems obviously helpful, and even when it is a
one-line change. Ask every time.

## Levels

Levels are 1–10 and mean the same thing everywhere — the weekly sheets, the
handstand plan and every rung of the skill tree. 4 is where the course starts,
5 is the step up, 6 is the top of what we train now. Anchor any new level
against what the weekly sheets already prescribe.

## Check animations before calling them done

`tools/` screenshots an exercise's 2D keyframes and 3D rig using the local
Chrome. Run it and actually look at the result before saying an animation
works. See `tools/README.md`.

## Deploying

The site is on GitHub Pages, served from `main` at the repo root, so a push
publishes it — usually live within a minute at
https://nathanvaevin.github.io/calisthenics/

There are no build minutes to ration here, so push when the work is finished
and checked. Say what went live, since a push changes what the class sees.

## Project docs

Read these before planning any feature or writing any UI:

- `docs/platform-vision.md` is what we are building and why. The Aura model, the verification ladder, the skill tree as engine, accounts and roles, the v0.1 scope, the screen list, the build order.
- `docs/building-principles.md` is how we work. What to protect, the teaching rules, the AI opportunity backlog and what each one depends on.
- `design-system.md` is the visual system, with `tokens.css` as the source of truth and `design-system.html` as the living reference.

The rules below are the short enforceable version of those docs. The docs carry the reasoning. If a rule here and a doc ever disagree, say so rather than silently picking one.

## Design

Read `design-system.md` before any UI work. `tokens.css` is the source of truth for every visual value. `design-system.html` is the living reference.

**Hard rules:**

- Never write a raw hex colour, pixel size, border radius or duration in a component. Only tokens from `tokens.css`. If a value is missing, add a token, do not inline it.
- Maximum one level of card nesting. Depth comes from surface lightness and spacing, never from stacked borders.
- One amber accent per screen, reserved for the primary action or the current focus. Values and labels are white or muted.
- Space Mono is for timers, counts, Aura values and at most two system labels per screen. Headings are display type.
- One primary action per screen: full width, 56px, bottom, black on amber.
- Mobile first at 390px. Minimum tap target 44px. Respect the bottom safe area inset.
- Glow appears only on the persona aura, a tier or unlock moment, the primary button, and a running timer.
- Never add calories, body weight, body fat or physique tracking. The platform rates capability, not appearance.

**Method:**

- Build a component into `design-system.html` before using it in a screen. Screens are assembly, not invention.
- After any UI change, screenshot at 390x844 with the repo's screenshot tool (`tools/page.mjs`, `tools/elshot.mjs`, puppeteer-core driving local Chrome) and compare against `design/references/`. Those references are composition only, never a source for colour, type or brand identity.
- If a screen needs a value the system does not have, fix the system, then the screen.

## Architecture

- Exercises, skills, prerequisites, sessions, set results, assessments, Aura events and achievements are structured data. `assets/engine.js` is the current home of the exercise library and stays the master list. Never hard code training content into a component.
- Aura is stored as an event log, not as a column. The current total is derived. Every event records the skill, the evidence, the verification tier and the weights used.
- Skill prerequisites are rows connecting skills, not text inside a description.
- Course length is data. A coach sets it. Currently 4 or 8 weeks.
- Role lives on the membership between a person and a class, not on the person. A coach of one class can be an athlete in another. Admin is global.
- Permission scoping is enforced in the database on every request, never in the interface. Hiding a button is not a permission.
- Identity is keyed on the auth provider's stable user ID, never on email address.
- Aura weights, level thresholds and tier thresholds live in one place and are changeable without rewriting history.

## How to work with me

- Understand, design, build, test, verify, commit. Small working increments over large changes.
- Before significant functionality, briefly state what we are building, why this way, what it affects, and how we will verify it.
- When an important concept comes up, flag it as `🎓 LEARN THIS` and explain in 2 to 5 sentences. Teach when it is relevant, do not lecture every step.
- Append each concept to `LEARNING-LOG.md`: one line, the date, and the file where it was first used.
- For foundational concepts, tell me when a task is a good one for me to write myself, and let me do it.
- Never expose API keys or secrets in frontend code.
- Secrets, costs and rate limits are part of any feature that calls an external service. Say what one run costs before building it.
- No em dashes and no hyphens used as connective punctuation in any copy, UI text or documentation.
