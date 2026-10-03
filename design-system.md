# Aura Design System

The visual rules for the calisthenics platform. Read this before writing any UI.

**Direction:** Gymshark's structural discipline, the platform's own amber and navy identity, and a Dragon Ball energy language expressed through glow. Ladder's full screen guided workout pattern for the training flow.

Files:

- `tokens.css` is the source of truth for every value. Import it once, globally.
- `design-system.html` is the living reference. Open it, compare against it, keep it updated.

---

## 1. The six rules

These are what separate the current build from the reference apps. They are not stylistic preferences, they are the gap.

**1. Stop nesting bordered boxes.** The current pages put a bordered card inside a bordered card inside a bordered section. Maximum one level of card. Depth comes from background lightness (`--surface-1` through `--surface-3`) and from spacing, not from outlines. If you are reaching for a border, use the next surface up instead.

**2. Go near black.** The base is `--bg` at `#08090C`, not navy. Mid tone navy backgrounds make every element sit at the same visual distance, which is why the current screens read as flat. Content separates because it is lighter than the void behind it.

**3. One accent per screen.** Amber marks the single most important thing on the screen, usually the primary action. Values like "3 sets of 8" are white, not amber. When everything is accented, nothing is.

Refined from the week screen mockup (October 2026). Counting ambers was the wrong test. What governs is that amber marks **state and action, never content**: the primary button, the level you are currently on, the one line the coach wants remembered, the hero wash. Exercise names, prescriptions and cues are never amber. Three ambers that all carry state read as a system. Thirty that decorate content read as noise.

**4. Mono is for data only.** Space Mono is for timers, counts, Aura values and at most two system labels per screen. Section headings are display type, not letterspaced mono. Overusing mono makes a whole page feel like a legend.

**5. Stack on mobile.** No left hand label column with content to its right. That pattern halves the usable width on a 390px screen. Label above, content full width.

**6. One primary action per screen, at the bottom, full width.** Black text on amber, 56px tall, impossible to miss. Both reference apps do this on every screen. Currently there is no clear action anywhere.

---

## 2. Surfaces and depth

| Token | Use |
|---|---|
| `--bg` | Page background. The void. |
| `--surface-1` | Cards, list rows. |
| `--surface-2` | Nested content inside a card, input fields. |
| `--surface-3` | Hover and pressed states, selected chips. |
| `--surface-raised` | Sheets and modals sitting above everything. |

Borders are the exception, not the rule. `--border` for a hairline divider between list rows. `--border-strong` only on a focused input or a selected control.

---

## 3. Type

| Role | Font | Size | Treatment |
|---|---|---|---|
| Timer | Mono | `--fs-timer` | Tabular numerals, so digits do not jump |
| Screen title | Display | `--fs-display` | Uppercase, tracking `--tracking-display` |
| Section heading | Display | `--fs-h1` | Uppercase |
| Card title | Display | `--fs-h2` | Sentence case |
| Body | Body | `--fs-body` | Line height `--lh-body` |
| Secondary | Body | `--fs-sm` | `--text-muted` |
| Label | Mono | `--fs-label` | Uppercase, tracking `--tracking-label`, `--text-faint` |

Three sizes per screen is the target. If a screen uses five, two of them are doing the same job.

---

## 4. Colour meaning

- **Amber** is the primary action and the current focus. One per screen.
- **Teal** is success and completion. A ticked set, a finished session.
- **Red** is a warning or a technique fault. The "watch for" items.
- **Purple** is information and the skill tree's own identity.
- **White** is a value the athlete cares about. Reps, sets, times.
- **Muted** is everything explanatory.

Never use amber for ordinary emphasis. It is reserved.

---

## 5. Glow, the Dragon Ball layer

Glow is the signature and the whole reason the product's unit is called Aura. It appears in exactly five places:

1. The persona's aura, by tier.
2. The moment a tier changes or a skill unlocks.
3. The primary action button, at `--glow-sm`, subtle.
4. The active state of a timer running.
5. The hero wash, `--glow-hero`, once per screen, behind the top right of the title block only.

Nowhere else. A glow on every card is a neon sign, not an aura.

The fifth entry was added from the week screen mockup (October 2026). It is a background radial, not a box shadow, which is why it is a separate token. One per screen, behind the hero only, never behind a card or a list.

### Aura tiers

| Tier | Name | Token | Glow |
|---|---|---|---|
| 0 | Dormant | `--aura-0` | none |
| 1 | Awakened | `--aura-1` | `--glow-sm` |
| 2 | Charged | `--aura-2` | `--glow-sm` |
| 3 | Ascended | `--aura-3` | `--glow-md` |
| 4 | Crimson | `--aura-4` | `--glow-md` |
| 5 | Azure | `--aura-5` | `--glow-lg` |
| 6 | Radiant | `--aura-6` | `--glow-lg`, slow pulse |

Set `--glow-color` on the element and the glow tokens follow it.

Tiers are discrete steps, never a gradient. Tier 1 must be reachable by a beginner inside one eight week course, or the first cohort never sees the system work.

---

## 6. Components

**Button, primary.** Full width, 56px, `--radius-pill`, amber background, `--text-on-accent` text, display font uppercase, `--glow-sm`. One per screen.

**Button, secondary.** Same shape, `--surface-2` background, `--text` text, no glow.

**Chip.** `--radius-pill`, `--surface-2`, `--fs-sm`. Selected state uses `--surface-3` with a 1px `--border-strong`. Used for meta like duration, equipment and focus.

**Level badge.** Pill, mono, `--fs-label`, `--surface-2`, `--text-muted`. Reads `LV 3`.

**Exercise row (list view).** `--surface-1`, `--radius-md`, `--space-4` padding. Title in `--fs-h2` display. Prescription in `--fs-body` white. One line of coaching cue in `--text-muted`. Set ticks on the right at `--touch-min` square. No nested card inside it.

**Set row.** A horizontal strip per set: set number in mono, target reps, and a tick target of at least 44px. Completed state fills teal.

**Stat tile.** Value in display `--fs-h1`, label in mono `--fs-label` beneath. Four across on a phone. Aura, level, skills, sessions. Never calories.

**Timer, guided view.** Video fills the screen behind a gradient scrim. Timer in mono `--fs-timer`, tabular. Ring progress in amber. One button: complete and advance.

**Bottom nav.** Four items: Train, Skill Tree, Progress, Profile. 56px tall plus safe area inset. Active item amber, inactive `--text-faint`.

---

## 7. Layout

- Mobile first. Design at 390px wide, verify at 390x844.
- `--gutter` of 16px on both sides, always. Nothing touches the edge except full bleed media.
- Content column capped at `--max-width`, centred on larger screens.
- Vertical rhythm from the spacing scale only.
- Minimum tap target `--touch-min`. People use this with chalk on their hands.
- Respect `env(safe-area-inset-bottom)` on the nav and any fixed action.

---

## 8. The training flow, two views

The same session renders two ways. Same data, same logging, a toggle switches presentation.

**List view.** The whole session scrollable, every exercise visible, one row per set, tick as you go. For training with a coach present.

**Guided view.** Full screen, demonstration video looping, timer running, one button to complete and advance. For training alone with the phone on the floor.

Build the session as data first. Both views are renderings of it. If either view hard codes session content, the toggle becomes a rewrite.

---

## 9. What this product never shows

- Calories
- Body weight, body fat, measurements
- Before and after physique photography

This platform rates what a person can do. Those metrics argue the opposite, and leaving them out is a positioning decision, not an oversight.

---

## 10. Working method

1. Build the component into `design-system.html` first.
2. Screenshot at 390x844 with the repo's screenshot tool, `tools/page.mjs` or `tools/elshot.mjs`. Both drive the local Chrome through puppeteer-core. There is no Playwright in this repo.
3. Compare against the reference screenshots in `design/references/`.
4. Only then use the component in a screen.

Screens are assembly. If a screen introduces a new visual value, the system is missing a token and the system gets fixed, not the screen.
