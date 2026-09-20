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

## Do not push unless I ask

Every push to `main` is a Netlify production deploy, and deploys are
limited. Pushing after each small change burns them for nothing.

- Commit locally as often as is useful.
- **Wait for me to say "push" before pushing.** Finishing a task is not
  permission to deploy.
- Let commits pile up and go out as one push.
- If a push genuinely only touches `tools/`, docs or comments, `netlify.toml`
  already skips the build. Nothing else needed.

Tell me when work is committed and ready, and I will say when to push.
