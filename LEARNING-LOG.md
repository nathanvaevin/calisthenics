# Learning log

One line per concept, the date, and the file where it was first used.
When a concept comes back, reread the note rather than asking for it again.

| Date | Concept | First used in |
|---|---|---|
| 2026-10-03 | **Design tokens.** Named variables hold every visual value, and components reference the name rather than the value. Change `--surface-1` once and every card follows. The discipline is that a component must never contain a raw hex, pixel size, radius or duration, because the moment one does, that component stops following the system and nobody notices until a recolour misses it. | `assets/components.css`, values from `tokens.css` |
| 2026-10-03 | **Why training content has to be structured data.** Two live examples found on the same day. The exercise prescription is a single string, `"Build to 30 seconds"`, so the card cannot render set rows: there is nothing to count. And `CURRENT = 2` in `weeks/index.html` is a hand set constant with no course start date behind it, so it silently went stale and nothing in the repo could detect it. Both are the same bug: a fact about training that exists only as display text cannot be reasoned over. | `assets/week.js`, `weeks/index.html` |
| 2026-10-03 | **Cascade order decides which token system wins.** `tokens.css` and `assets/styles.css` both define `--bg`. Loading tokens second makes the page near black while every variable the two files do not share, like `--panel` and `--line`, still resolves from the old file. That is why importing tokens moved the page background but left the block cards navy. | `weeks/week-2.html` |
