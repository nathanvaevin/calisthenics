# Calisthenics practice site

## The folder

```
Calisthenics/
├── index.html              landing page, links to every week
├── assets/
│   ├── engine.js           exercise library, animations, 3D rig, muscle map
│   └── styles.css          all styling
└── weeks/
    ├── week-1.html         week 1 plan  (this is your old index1)
    ├── week-2.html         added each week
    └── ...
```

**Why it is split this way.** The single-file version carried the whole engine inside it, so four weeks would mean four copies of the same 170 KB and four places to fix a typo. Now a week page is about 14 KB and holds nothing but that week's plan. The engine is downloaded once and cached, so week 2 onwards loads instantly.

Rename `index1.html` to `weeks/week-1.html`, or keep your own names. Just keep the two asset paths at the top of each week page pointing at `../assets/`.

## Putting it online

Any static host works, there is no server code here.

- **GitHub Pages.** Push the folder to a repo, then Settings → Pages → deploy from `main`, root. You get `username.github.io/calisthenics/`. Free, and it updates when you push from VS Code.
- **Netlify.** Drag the folder onto app.netlify.com/drop. Live in ten seconds, and you can attach a custom domain later.
- **Cloudflare Pages.** Same idea, connect the repo.

Send the group one link to `index.html` and never send a file again. Every week they open the same link and the new week is there.

## Local preview in VS Code

Install the **Live Server** extension, right click `index.html`, "Open with Live Server". Opening the file directly with `file://` also works here, since nothing is fetched over the network.

---

## The weekly prompt

Paste this into our chat when you want the next week built. Fill in the parts in capitals.

> Build **week N** of the practice site.
>
> **Focus this week:** WHAT THE CLASS WORKED ON, AND WHAT THEY SHOULD PRACTISE.
>
> **Changes from last week:** WHO MOVED UP, WHAT WAS TOO EASY OR TOO HARD, ANYTHING TO DROP OR ADD.
>
> Keep the same structure as week 1: same six blocks, levels 4 to 6, per block level switcher, everything closed on load. Give me `weeks/week-N.html` only, using the existing `../assets/engine.js` and `../assets/styles.css`, and the updated `index.html` with the new week linked.

That is the whole thing. I already have the engine, the exercise library and the styling in this chat, so a new week only needs the plan.

**Shorter version, once we get into a rhythm:**

> Week N please. Focus: SKILL OR PATTERN. Notes: ANYTHING THAT CHANGED.

If a week needs an exercise that is not yet in the library, say so in the prompt. That one needs a change to `engine.js` as well, and I will hand you both files.

## What to check before you publish

1. Open the week page and tap one exercise. Animation, 3D button and muscle map all load.
2. Check the level switchers on two blocks.
3. Open it on your phone, since that is where they will read it.
