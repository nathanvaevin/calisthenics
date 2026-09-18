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
