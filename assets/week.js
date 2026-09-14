/* =====================================================================
   THE WEEKLY SHEET RENDERER
   Shared by every weekly page — calisthenics and handstand alike.

   A page only has to define its BLOCKS and call renderWeek(BLOCKS).
   Each block is:
     {tag, name, why, levels:{4:[...], 5:[...], 6:[...]}}
   and each exercise inside a level is:
     [name, dose, note, key]
   where key is "Track Name|Exercise Name" pointing at the skill tree in
   engine.js — that is what gives the row its animation, its 3D view, its
   steps and its muscle map. Pass null for a drill with no tree entry and
   it renders as a plain, non-expanding row.
   ===================================================================== */

/* index the skill tree so a key gives back the real exercise */
const INDEX = {};
TRACKS.forEach(t=> t.ladder.forEach((step,i)=>{
  INDEX[t.name + "|" + step.name] = {track:t, step:step,
    prev: i > 0 ? t.ladder[i-1].name : null,
    next: i < t.ladder.length - 1 ? t.ladder[i+1].name : null};
}));

/* the detail panel: same two tabs as the skill tree */
function detailFor(key){
  const hit = INDEX[key];
  const det = el("div","step-detail");
  const tabs = el("div","tabs");
  const tabH = el("button","tab on","How it is done"); tabH.type = "button";
  const tabM = el("button","tab","Muscles worked"); tabM.type = "button";
  tabs.append(tabH, tabM);
  const paneH = el("div","pane on"); paneH.dataset.pane = "how";
  const paneM = el("div","pane"); paneM.dataset.pane = "muscles";

  const grid = el("div","detail-grid");
  const dl = el("dl","dl");
  dl.append(el("dt",null,"Prime movers"));
  const dd1 = el("dd"); dd1.append(muscleRow(hit.step.primary)); dl.append(dd1);
  if(hit.step.secondary && hit.step.secondary.length){
    dl.append(el("dt",null,"Also working"));
    const dd2 = el("dd"); dd2.append(muscleRow(hit.step.secondary, "sec", hit.step.primary.length)); dl.append(dd2);
  }
  dl.append(el("dt",null,"Watch for"));
  const dd3 = el("dd");
  const ul = el("ul","faults"); (hit.step.faults||[]).forEach(f=> ul.append(el("li",null,f))); dd3.append(ul); dl.append(dd3);
  const fig = el("div","mmap");
  grid.append(dl, fig);
  paneM.append(grid);
  det.append(tabs, paneH, paneM);

  let built = {};
  const build = name=>{
    if(name === "how" && !built.how){ buildHow(paneH, hit.step, hit.track, hit.prev, hit.next); built.how = 1; }
    if(name === "muscles" && !built.mus){ buildMap(fig, hit.step); built.mus = 1; }
  };
  const setPane = name=>{
    [paneH, paneM].forEach(p=> p.classList.toggle("on", p.dataset.pane === name));
    [tabH, tabM].forEach(b=> b.classList.toggle("on", b === (name === "how" ? tabH : tabM)));
    build(name);
  };
  tabH.addEventListener("click", ()=> setPane("how"));
  tabM.addEventListener("click", ()=> setPane("muscles"));
  det._open = ()=> build("how");
  return det;
}

function exerciseRow(item){
  const [name, dose, note, key] = item;
  const hit = key && INDEX[key];
  if(!hit){
    const flat = el("div","flat");
    flat.append(el("div","pname", name), el("div","pdose", dose), el("div","pnote", note || ""));
    return flat;
  }
  const d = el("details","pex");
  const sum = el("summary");
  const txt = el("div");
  const nameRow = el("div","pname", name);
  nameRow.append(el("span","exlv","Lv " + hit.step.lv));   // where this sits in the skill tree
  txt.append(nameRow, el("div","pdose", dose), el("div","pnote", note || ""));
  const icons = el("div","step-icons");
  const iconH = el("span","anat sel", DUMBBELL); iconH.title = "How it is done";
  icons.append(iconH);
  sum.append(txt, icons);
  const det = detailFor(key);
  d.open = false;                       // every exercise closed on load
  d.append(sum, det);
  d.addEventListener("toggle", ()=>{ if(d.open) det._open(); });
  return d;
}

/* one block only */
function setCard(card, lv){
  card._lv = lv;
  document.querySelectorAll("details.pex[open]").forEach(x=> x.open = false);   // never leave one hanging open
  card.querySelectorAll(".work2").forEach(n=>
    n.classList.toggle("hidden", lv !== "all" && n.dataset.lv !== String(lv)));
  card._nums.forEach(n=> n.classList.toggle("on", lv !== "all" && n.dataset.lv === String(lv)));
  card._prev.disabled = (lv === "all" || lv <= card._levels[0]);
  card._next.disabled = (lv === "all" || lv >= card._levels[card._levels.length - 1]);
  card.classList.toggle("allmode", lv === "all");
}

function renderWeek(BLOCKS, opts){
  const levels = (opts && opts.levels) || [4,5,6];
  const lo = levels[0], hi = levels[levels.length - 1];
  const mount = document.getElementById("blocks");

  BLOCKS.forEach(b=>{
    const card = el("div","ex");
    const head = el("div","ex-head");
    const mid = el("div");
    mid.append(el("div","ex-name", b.name), el("div","ex-why", b.why));
    const sw = el("div","lvsw");
    const prev = el("button","step","‹"); prev.type = "button"; prev.title = "One level easier";
    const next = el("button","step","›"); next.type = "button"; next.title = "One level harder";
    const nums = levels.map(l=>{
      const n = el("button",null,String(l)); n.type = "button"; n.dataset.lv = l;
      n.addEventListener("click", ()=> setCard(card, l));
      return n;
    });
    sw.append(prev, ...nums, next);
    prev.addEventListener("click", ()=> setCard(card, Math.max(lo, (card._lv || lo) - 1)));
    next.addEventListener("click", ()=> setCard(card, Math.min(hi, (card._lv || lo) + 1)));
    head.append(el("div","tag", b.tag), mid, sw);
    const body = el("div","ex-body");
    levels.forEach(l=>{
      const holder = el("div","work2");
      holder.dataset.lv = l;
      (b.levels[l] || []).forEach(item=> holder.append(exerciseRow(item)));
      body.append(holder);
    });
    card.append(head, body);
    card._nums = nums; card._prev = prev; card._next = next; card._levels = levels;
    mount.append(card);
  });

  const lvls = document.getElementById("lvls");
  function setLevel(v){
    lvls.querySelectorAll("button").forEach(b=> b.classList.toggle("on", b.dataset.v === v));
    document.querySelectorAll(".ex").forEach(c=> setCard(c, v === "all" ? "all" : Number(v)));
  }
  levels.forEach(l=>{
    const b = el("button",null,"Level " + l); b.type = "button"; b.dataset.v = String(l);
    b.addEventListener("click", ()=> setLevel(String(l)));
    lvls.append(b);
  });
  setLevel(String(lo));
}
