# Render tools

Dev-only. Not used by the site itself — these give Claude (or you) a way
to actually *see* a skill-tree exercise's 2D stick-figure animation and
3D rig before trusting hand-typed joint coordinates.

Uses your local Chrome via `puppeteer-core`, so there's no browser
download — just `npm install` inside this folder once.

## Setup
```
cd tools
npm install
```

## Usage
```
node render.mjs "Track Name|Exercise Name"          # 2D keyframes only
node render.mjs --3d "Track Name|Exercise Name"     # 3D rig only
node render.mjs --both "Track Name|Exercise Name"   # both
```

Screenshots land in `tools/renders/` (gitignored — regenerate anytime).
Each 2D render shows every authored keyframe pose side by side, exactly
as written in `EXMOVE`, no easing — so a bad joint coordinate is obvious
at a glance rather than hidden inside a smooth animation.

For checking several exercises at once without relaunching Chrome each
time, write a JSON list and use `batch.mjs`:
```
node batch.mjs mykeys.json
```
where `mykeys.json` is `[{"key":"Track|Exercise","mode":"2d"}, ...]`.

Note: track names in the skill tree use the literal text `&amp;` (not an
actual ampersand) inside the key string, e.g.
`"Hanging &amp; Grip|Active hang"` — that's how they're written in
`assets/engine.js`, so match it exactly when calling these scripts.

## Checking phone layout

```
node page.mjs weeks/week-2.html 390          # whole page at 390px wide
node page.mjs weeks/week-2.html 390 900 --full
node elshot.mjs weeks/week-2.html ".ex" 390 wk2   # just the first matching elements
```

`page.mjs` also reports `scrollWidth` vs `clientWidth` and lists any
element overflowing horizontally — the usual phone-layout smell. If those
two numbers differ, something is too wide.

## Reviewing every 3D rig at once

```
node sheetshot.mjs --all-holds 1     # every hold, drawn at the END of the rep
node sheetshot.mjs --all-reps 1      # every rep, drawn at the end of its range
node sheetshot.mjs mysheet 1 "Track|Ex" "Track|Ex" ...
```

Contact sheets of 12, with a fixed camera so poses can be compared. A hold
is outlined green and captioned with the `t` it is frozen at.

**Rendering a hold at t=1 is the test that matters:** a hold must look
identical at t=0 and t=1. If it changes, it is animating when it should not.
