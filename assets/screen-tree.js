/* =====================================================================
   SKILL TREE SCREEN
   Assembly over TRACKS from engine.js. Every visual value comes from
   tokens.css through components.css. The search vocabulary and the group
   notes are data the page passes in, so this file stays a renderer.

   A rung is the same exercise row the weekly screens use and opens the
   same teaching panel through detailFor(), so an exercise looks and
   teaches identically wherever it appears.
   ===================================================================== */

/* Read by buildExtra() in engine.js to link a supporting drill back to
   its full ladder entry, so it has to be a global. */
const LADDER_INDEX = {};

function renderTree(opts){
  const o = opts || {};
  const NOTES    = o.groupNotes    || {};
  const KEYWORDS = o.trackKeywords || {};
  const SYN      = o.synonyms      || [];
  const LVW      = o.levelWords    || {};
  const STOP     = new Set(o.stopWords || []);

  const ICON = {
    back: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>',
    chev: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>'
  };
  const slug = s => s.toLowerCase().replace(/&amp;/g,"and").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
  const clean = x => (" " + x + " ").toLowerCase().replace(/<[^>]*>/g," ").replace(/&amp;/g,"&").replace(/\s+/g," ");

  const root  = document.getElementById("screen");
  const inner = el("div","screen-inner tree");

  /* --- app bar and hero ------------------------------------------------- */
  const bar = el("div","appbar");
  const back = el("a","appbar-back", ICON.back);
  back.href = o.backHref || "index.html";
  back.setAttribute("aria-label","Back");
  bar.append(back, el("div","appbar-title","Skill tree"));
  inner.append(bar);

  const hero = el("div","hero");
  hero.append(el("div","hero-wash"));
  hero.append(el("p","kicker", o.kicker || ""));
  hero.append(el("h1","screen-title", o.title || "Skill tree"));
  hero.append(el("p","name-line","Name:&nbsp;____________________ &nbsp; Date:&nbsp;__________ &nbsp; Course&nbsp;week:&nbsp;____"));
  hero.append(el("p","lede", o.lede || ""));
  inner.append(hero);

  /* --- search and filters ----------------------------------------------- */
  const q = el("input","search");
  q.type = "search";
  q.placeholder = o.placeholder || "Search in plain language";
  q.setAttribute("aria-label","Search exercises");
  inner.append(q);

  const tryRow = el("div","fchips quiet scroll");
  (o.suggestions || []).forEach(t=>{
    const b = el("button","fchip", t); b.type = "button";
    b.addEventListener("click", ()=>{ q.value = t; apply(); q.focus(); });
    tryRow.append(b);
  });
  inner.append(tryRow);

  const LV = [["All",null],["1\u20133",[1,3]],["4",[4,4]],["5",[5,5]],["6",[6,6]],["7\u20138",[7,8]],["9\u201310",[9,10]]];
  let lvFilter = null;
  const lvRow = el("div","fchips fill");
  lvRow.setAttribute("aria-label","Filter by level");
  LV.forEach(([label, range], i)=>{
    const b = el("button","fchip" + (i === 0 ? " on" : ""), label); b.type = "button";
    b.addEventListener("click", ()=>{
      lvFilter = range;
      lvRow.querySelectorAll(".fchip").forEach(x=> x.classList.toggle("on", x === b));
      apply();
    });
    lvRow.append(b);
  });
  inner.append(lvRow);
  if(o.levelNote) inner.append(el("p","browse-note", o.levelNote));

  const countEl = el("p","browse-count");
  inner.append(countEl);

  /* --- one rung --------------------------------------------------------- */
  function rung(track, step){
    const key = track.name + "|" + step.name;
    const d = el("details","exrow rung");
    d.id = "ex-" + slug(track.name + "-" + step.name);
    d.dataset.lv = step.lv;

    const sum = el("summary");
    const thumb = el("div","thumb");
    if(!staticFigure(thumb, key)) thumb.classList.add("blank");

    const body = el("div","exbody");
    body.append(el("div","name", step.name));
    const line = el("div","presc-row");
    line.append(el("div","presc", step.target));
    line.append(el("span","badge" + (step.lv >= 4 && step.lv <= 6 ? " course" : ""), "LV " + step.lv));
    body.append(line);

    const assess = el("span","assess","<span><i></i>Not yet</span><span><i></i>Working on it</span><span><i></i>Owned</span>");
    sum.append(thumb, body, assess, el("span","state", ICON.chev));
    d.append(sum);

    /* The teaching panel is built the first time it is opened, so 159
       rungs cost nothing until someone actually looks at one. */
    d.addEventListener("toggle", ()=>{
      if(!d.open) return;
      if(!d._det && INDEX[key]){ d._det = detailFor(key); d.append(d._det); }
      if(d._det) d._det._open();
    });

    [step.name.toLowerCase().trim(), extraKey(step.name)].forEach(k=>{
      if(!LADDER_INDEX[k]) LADDER_INDEX[k] = {id:d.id, track:track.name};
    });

    const hayT = [track.name, track.cat, KEYWORDS[track.name] || ""].join(" ");
    d.dataset.hay1 = clean([step.name, (step.primary||[]).join(" "), hayT].join(" "));
    d.dataset.hay2 = clean([(step.secondary||[]).join(" "), step.target].join(" "));
    d.dataset.hay3 = clean([(step.cues||[]).join(" "), (step.faults||[]).join(" ")].join(" "));
    d.dataset.level = step.level;
    return d;
  }

  /* --- the advanced and supporting pills ------------------------------- */
  function pills(names){
    const wrap = el("div","pills");
    names.forEach(n=>{
      const p = el("details","pill");
      p.append(el("summary",null,n));
      const panel = el("div","pillbody");
      p.append(panel);
      p.addEventListener("toggle", ()=>{
        if(p.open && !panel.dataset.built){ buildExtra(panel, n); panel.dataset.built = "1"; }
      });
      wrap.append(p);
    });
    return wrap;
  }

  /* --- one track -------------------------------------------------------- */
  function track(t){
    const lvs = t.ladder.map(s=> s.lv);
    const d = el("details","trackcard");
    const sum = el("summary");

    /* The tile shows the end goal, because that is how every ladder is
       read: start from where it is going. */
    const tile = el("div","thumb");
    let drawn = false;
    for(let i = t.ladder.length - 1; i >= 0 && !drawn; i--)
      drawn = staticFigure(tile, t.name + "|" + t.ladder[i].name);
    if(!drawn) tile.classList.add("blank");

    const txt = el("div","txt");
    txt.append(el("div","t", t.name));
    if(t.tag) txt.append(el("p","s", t.tag));
    const meta = el("div","meta");
    meta.append(el("span","badge","LV " + Math.min(...lvs) + " to " + Math.max(...lvs)));
    meta.append(el("span","badge", t.ladder.length + " rungs"));
    const match = el("span","badge match");
    match.hidden = true;
    meta.append(match);
    txt.append(meta);

    sum.append(tile, txt, el("span","state", ICON.chev));
    d.append(sum);

    const body = el("div","trackbody");
    body.append(el("div","sect","<h2>The ladder</h2>"));
    t.ladder.forEach(step=> body.append(rung(t, step)));
    if(t.advanced && t.advanced.length){
      body.append(el("div","sect","<h2>Advanced versions</h2>"));
      body.append(pills(t.advanced));
    }
    if(t.support && t.support.length){
      body.append(el("div","sect","<h2>Supporting work</h2>"));
      body.append(pills(t.support));
    }
    d.append(body);
    d._match = match;
    return d;
  }

  /* --- groups ------------------------------------------------------------ */
  let group = null, section = null;
  TRACKS.forEach(t=>{
    if(t.group !== group){
      group = t.group;
      section = el("section","group");
      const head = el("div","grouphead");
      head.append(el("h2",null,t.group));
      if(NOTES[t.group]) head.append(el("p",null,NOTES[t.group]));
      section.append(head);
      inner.append(section);
    }
    section.append(track(t));
  });

  /* --- the paper sheet and the closing note ---------------------------- */
  const tail = el("div");
  tail.style.marginTop = "var(--space-7)";
  const print = el("button","btn btn-ghost","Print test sheet"); print.type = "button";
  tail.append(print);
  if(o.footNote) tail.append(el("p","browse-note", o.footNote));
  inner.append(tail);

  root.append(inner, bottomNav("Skills", o.base || ""));

  /* =====================================================================
     SEARCH. The matching itself is unchanged from the previous page: level
     words, synonym phrases, then plain words, tried against the name and
     prime movers first, widening to the cues only if nothing matched.
     ===================================================================== */
  const allRungs  = [...inner.querySelectorAll("details.rung")];
  const allTracks = [...inner.querySelectorAll("details.trackcard")];
  const total = allRungs.length;
  const BASE = TRACKS.length + " tracks · <b>" + total + "</b> exercises · levels 1 to 10";
  countEl.innerHTML = BASE;
  let openedBySearch = new Set();

  function parseQuery(raw){
    let s = " " + raw.toLowerCase().replace(/[^a-z0-9\s-]/g," ").replace(/\s+/g," ") + " ";
    const levels = [], concepts = [];
    Object.keys(LVW).forEach(w=>{
      if(s.includes(" " + w + " ")){
        LVW[w].forEach(l=>{ if(!levels.includes(l)) levels.push(l); });
        s = s.split(" " + w + " ").join(" ");
      }
    });
    const phrases = [];
    SYN.forEach((e,idx)=> e.q.forEach(p=> phrases.push({p, idx})));
    phrases.sort((a,b)=> b.p.length - a.p.length);
    phrases.forEach(ph=>{
      if(s.includes(" " + ph.p + " ")){
        if(!concepts.some(c=> c.src === ph.idx))
          concepts.push({src:ph.idx, label:ph.p, terms:SYN[ph.idx].t.concat(SYN[ph.idx].q)});
        s = s.split(" " + ph.p + " ").join(" ");
      }
    });
    s.split(" ").filter(Boolean).forEach(w=>{
      if(STOP.has(w) || w.length < 3) return;
      const stem = w.replace(/(ing|es|s)$/,"");
      concepts.push({src:"w:"+w, label:w, terms:[w, stem].filter(x=> x.length > 2)});
    });
    const esc = t=> t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");
    concepts.forEach(c=>{
      c.rx = c.terms.filter(t=> t && t.length > 2)
        .map(t=> new RegExp("(^|[^a-z])" + esc(t) + "(s|es|ing)?([^a-z]|$)"));
    });
    return {levels, concepts};
  }

  function apply(){
    const raw = q.value.trim();
    const inLv = r=> !lvFilter || (+r.dataset.lv >= lvFilter[0] && +r.dataset.lv <= lvFilter[1]);
    let matched, note = "", bits = [], tierNote = "";

    if(!raw){
      matched = allRungs.filter(inLv);
    } else {
      const p = parseQuery(raw);
      const need = p.concepts.length;
      const tierOk = r=> !p.levels.length || p.levels.includes(r.dataset.level);
      const hits = (r, c, tier)=>{
        let hay = r.dataset.hay1;
        if(tier > 1) hay += r.dataset.hay2;
        if(tier > 2) hay += r.dataset.hay3;
        return c.rx.some(x=> x.test(hay));
      };
      let tier = 1; matched = [];
      for(; tier <= 3 && !matched.length; tier++)
        matched = allRungs.filter(r=> inLv(r) && tierOk(r) && p.concepts.every(c=> hits(r, c, tier)));
      tier--;
      if(!matched.length && need > 1){
        note = ". Nothing covered all of that, so these are the closest";
        matched = allRungs.filter(r=> inLv(r) && tierOk(r) &&
          p.concepts.filter(c=> hits(r, c, 3)).length >= need - 1);
      } else if(tier === 3){
        note = ", matched in the coaching notes";
      }
      if(!matched.length && !need && p.levels.length)
        matched = allRungs.filter(r=> inLv(r) && tierOk(r));
      bits = p.concepts.map(c=> c.label);
      tierNote = p.levels.length ? " · " + p.levels.join(" or ") + " only" : "";
    }

    const set = new Set(matched);
    allRungs.forEach(r=> r.hidden = !set.has(r));

    /* A typed search opens the tracks it found, so the answer is on the
       screen. A level filter alone only counts, or it would open half the
       tree at once. Clearing the search closes what the search opened. */
    const nextOpened = new Set();
    allTracks.forEach(t=>{
      const n = [...t.querySelectorAll("details.rung")].filter(r=> set.has(r)).length;
      t.hidden = !n;
      t._match.hidden = !(n && (raw || lvFilter));
      t._match.textContent = n + (n === 1 ? " match" : " matches");
      if(raw && n){
        if(!t.open){ t.open = true; nextOpened.add(t); }
        else if(openedBySearch.has(t)) nextOpened.add(t);
      }
    });
    openedBySearch.forEach(t=>{ if(!nextOpened.has(t)) t.open = false; });
    openedBySearch = nextOpened;

    inner.querySelectorAll("section.group").forEach(g=>{
      g.hidden = !g.querySelector("details.trackcard:not([hidden])");
    });

    if(!raw && !lvFilter){ countEl.innerHTML = BASE; return; }
    const lvLabel = lvFilter
      ? (lvFilter[0] === lvFilter[1] ? " at level " + lvFilter[0] : " at levels " + lvFilter[0] + " to " + lvFilter[1])
      : "";
    countEl.innerHTML = matched.length
      ? "<b>" + matched.length + "</b> exercise" + (matched.length === 1 ? "" : "s") + lvLabel +
        (bits.length ? " for " + bits.join(" + ") : "") + tierNote + note
      : "Nothing matched. Try a body part, like lower back, shoulders or grip, a skill like handstand, or clear the level filter.";
  }

  q.addEventListener("input", apply);

  /* --- print ------------------------------------------------------------
     Closed details render nothing on paper whatever the CSS says, so the
     tracks are opened for the print and put back exactly as they were. */
  print.addEventListener("click", ()=>{
    const wasOpen = allTracks.map(t=> t.open);
    const rungOpen = allRungs.map(r=> r.open);
    const wasHidden = allTracks.map(t=> t.hidden);
    allTracks.forEach(t=>{ t.open = true; t.hidden = false; });
    allRungs.forEach(r=>{ r.open = false; r.hidden = false; });
    inner.querySelectorAll("section.group").forEach(g=> g.hidden = false);
    const restore = ()=>{
      allTracks.forEach((t,i)=>{ t.open = wasOpen[i]; t.hidden = wasHidden[i]; });
      allRungs.forEach((r,i)=> r.open = rungOpen[i]);
      apply();
      window.removeEventListener("afterprint", restore);
    };
    window.addEventListener("afterprint", restore);
    window.print();
  });
}
