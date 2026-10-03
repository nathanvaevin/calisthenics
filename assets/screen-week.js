/* =====================================================================
   WEEK SCREEN
   Assembly only. Every visual value comes from tokens.css through the
   classes in components.css. Nothing here invents a style.

   Reads the same BLOCKS data the old renderer read, so the training
   content stays where it belongs and this file stays a view over it.
   ===================================================================== */

const ICONS = {
  back:  '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>',
  chev:  '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>',
  caret: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>',
  tick:  '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>',
  train: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M3.5 9.5v5M6.5 6.5v11M17.5 6.5v11M20.5 9.5v5M6.5 12h11"/></svg>',
  skills:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="19" r="1.8"/><path d="M12 17.2V13M12 13L7 8M12 13l5-5"/><circle cx="7" cy="6.5" r="1.8"/><circle cx="17" cy="6.5" r="1.8"/></svg>',
  prog:  '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M5 20V10M12 20V4M19 20v-7"/></svg>',
  prof:  '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="3.4"/><path d="M4.5 20a7.5 7.5 0 0 1 15 0"/></svg>'
};

/* Completion has no home in the data model yet: a rung has no id and there
   is no per athlete record. Until that exists it lives here, in the view,
   so the finished states are visible and reviewable. Replace this with the
   real source the moment sessions are logged. */
const DONE = new Set();

function renderWeekScreen(BLOCKS, opts){
  const o = opts || {};
  const levels = o.levels || [3,4,5,6];
  const state = {};                       // block index -> chosen level
  BLOCKS.forEach((b,i)=> state[i] = o.level || levels[0]);

  const root = document.getElementById("screen");
  const sheet = { el:null, scrim:null, block:0 };

  const rowsFor = (b,i)=> (b.levels ? (b.levels[state[i]] || []) : (b.items || []));
  const key = (b,i,item)=> i + "|" + state[i] + "|" + item[0];

  function build(){
    root.textContent = "";
    const inner = el("div","screen-inner");

    /* app bar */
    const bar = el("div","appbar");
    const back = el("a","appbar-back", ICONS.back);
    back.href = o.backHref || "index.html";
    back.setAttribute("aria-label","Back");
    const chip = el("button","lvchip");
    chip.type = "button";
    chip.innerHTML = '<span class="dot"></span>LV ' + state[0] + '<span class="caret">' + ICONS.caret + '</span>';
    chip.addEventListener("click", ()=> openSheet(0));
    bar.append(back, el("div","appbar-title", o.barTitle || ""), chip);
    inner.append(bar);

    /* hero */
    const hero = el("div","hero");
    hero.append(el("div","hero-wash"));
    hero.append(el("p","kicker", o.kicker || ""));
    hero.append(el("h1","screen-title", o.title || ""));
    hero.append(el("p","lede", o.lede || ""));
    inner.append(hero);

    /* stat strip */
    const exCount = BLOCKS.reduce((n,b,i)=> n + rowsFor(b,i).length, 0);
    const strip = el("div","statstrip");
    [[o.sessions || "2","Sessions"],
     [(o.minutes || "15") + '<span>min</span>',"Each"],
     [String(exCount),"Exercises"]].forEach(([v,k])=>{
      const d = el("div");
      d.append(el("div","v", v), el("div","k", k));
      strip.append(d);
    });
    inner.append(strip);

    /* the one line to remember */
    if(o.rule){
      const c = el("div","callout");
      c.append(el("div","k", o.rule[0]), el("p",null, o.rule[1]));
      inner.append(c);
    }

    /* sections */
    BLOCKS.forEach((b,i)=>{
      const rows = rowsFor(b,i);
      const done = rows.filter(r=> DONE.has(key(b,i,r))).length;

      const head = el("div","sect");
      head.append(el("h2",null, b.name));
      if(rows.length){
        const c = el("span", "count" + (done === rows.length ? " all" : ""),
                     done + " / " + rows.length + " done");
        head.append(c);
      }
      inner.append(head);
      rows.forEach(item=> inner.append(exerciseCard(item, DONE.has(key(b,i,item)))));
    });

    /* one action, bottom, full width */
    const total = BLOCKS.reduce((n,b,i)=> n + rowsFor(b,i).length, 0);
    const finished = BLOCKS.reduce((n,b,i)=>
      n + rowsFor(b,i).filter(r=> DONE.has(key(b,i,r))).length, 0);
    const act = el("div","action");
    const btn = el("button","btn btn-primary",
      finished === 0 ? "Start session" : finished === total ? "Session complete" : "Continue session");
    btn.type = "button";
    btn.addEventListener("click", ()=> startSession(BLOCKS, j=> state[j], {
      /* A finished exercise is one whose every set was ticked. Anything
         less stays open, because a half done exercise is not done. */
      onClose: (S)=>{
        S.exercises.forEach(e=>{
          if(e.sets.length && e.sets.every(x=> x.done))
            DONE.add(e.bi + "|" + state[e.bi] + "|" + e.name);
        });
        build();
      }
    }));
    act.append(btn);
    inner.append(act);

    root.append(inner);
    root.append(bottomNav());
  }

  function exerciseCard(item, isDone){
    const [name, dose, note, k] = item;
    const hit = k && INDEX[k];
    const d = el("details","exrow" + (isDone ? " done" : ""));
    const sum = el("summary");

    const thumb = el("div","thumb");
    if(!(k && staticFigure(thumb, k))) thumb.textContent = "";

    /* Named exbody, not body, because the figure SVG already owns .body. */
    const body = el("div","exbody");
    body.append(el("div","name", name));
    const line = el("div","presc-row");
    line.append(el("div","presc", dose));
    if(hit) line.append(el("span","badge","LV " + hit.step.lv));
    body.append(line);
    if(note) body.append(el("p","cue", note));

    const state = el("span","state", isDone ? ICONS.tick : ICONS.chev);
    sum.append(thumb, body, state);
    d.append(sum);

    if(hit){
      const det = detailFor(k);
      d.append(det);
      d.addEventListener("toggle", ()=>{ if(d.open) det._open(); });
    }
    return d;
  }

  function bottomNav(){
    const n = el("nav","nav");
    [["Train",ICONS.train,true],["Skills",ICONS.skills,false],
     ["Progress",ICONS.prog,false],["Profile",ICONS.prof,false]].forEach(([label,icon,active])=>{
      const a = el("a", active ? "active" : null, icon + "<span>" + label + "</span>");
      a.href = active ? "#" : (o.navHrefs && o.navHrefs[label.toLowerCase()]) || "#";
      n.append(a);
    });
    return n;
  }

  /* --- level sheet ------------------------------------------------------ */
  function openSheet(i){
    const b = BLOCKS[i];
    if(!b.levels) return;
    if(!sheet.el){
      sheet.scrim = el("div","scrim");
      sheet.el = el("div","sheet");
      document.body.append(sheet.scrim, sheet.el);
      sheet.scrim.addEventListener("click", closeSheet);
    }
    sheet.el.textContent = "";
    sheet.el.append(el("div","grab"));
    sheet.el.append(el("div","k","Your level this week"));
    levels.forEach(l=>{
      const names = (b.levels[l] || []).map(x=> x[0]).join(", ");
      if(!names) return;
      const btn = el("button","opt" + (l === state[i] ? " sel" : ""));
      btn.type = "button";
      btn.append(el("span","n","Level " + l), el("span","what", names),
                 el("span","mark", ICONS.tick));
      btn.addEventListener("click", ()=>{
        BLOCKS.forEach((_,j)=> state[j] = l);
        closeSheet(); build();
      });
      sheet.el.append(btn);
    });
    sheet.el.append(el("p","foot","Sets the level for every block"));
    requestAnimationFrame(()=>{ sheet.scrim.classList.add("on"); sheet.el.classList.add("on"); });
  }
  function closeSheet(){
    if(!sheet.el) return;
    sheet.scrim.classList.remove("on");
    sheet.el.classList.remove("on");
  }

  build();
}
