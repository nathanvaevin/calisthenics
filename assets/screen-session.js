/* =====================================================================
   WORKOUT MODE
   Two renderings of one session, per docs/platform-vision.md section 8.
   List view shows the whole session, one row per set. Guided view shows
   one set at a time with the timer running.

   They share SESSION.sets. A tick in either view is the same write, so
   switching mid session never loses anything and never disagrees with
   itself. That is the whole reason carrying both views is cheap.

   Results live in memory only. There is no athlete record to write to
   yet, so a reload loses the session. That is a known gap, not a design.
   ===================================================================== */

const SICON = {
  close: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>',
  tick:  '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>',
  big:   '<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>'
};

const RING_C = 2 * Math.PI * 45;          // the r=45 circle in the ring svg

function clock(sec){
  sec = Math.max(0, Math.ceil(sec));
  return Math.floor(sec / 60) + ":" + String(sec % 60).padStart(2, "0");
}

/* What a set asks for, in words, from structure only. */
function setTarget(d){
  if(d.kind === "time") return clock(d.value) + (d.to ? " to " + clock(d.to) : "");
  if(d.kind === "reps") return d.value + (d.to ? " to " + d.to : "") +
                               (d.value === 1 && !d.to ? " rep" : " reps");
  return d.note || d.raw;                  // an open set keeps the coach's words
}

/* ---------------------------------------------------------------------
   Flatten the chosen blocks into exercises, and exercises into sets.
   Done once, so both views and the summary count the same things.
   --------------------------------------------------------------------- */
function buildSession(blocks, levelOf){
  const exercises = [];
  blocks.forEach((b, i)=>{
    const rows = b.levels ? (b.levels[levelOf(i)] || []) : (b.items || []);
    rows.forEach(row=>{
      const [name, dose, note, key] = row;
      const d = parseDose(dose);
      const ex = { bi: i, section: b.name, name, note, key, dose: d, raw: dose, sets: [] };
      for(let n = 0; n < d.sets; n++) ex.sets.push({ ex, n, done: false });
      exercises.push(ex);
    });
  });
  const sets = exercises.flatMap(e=> e.sets);
  return { exercises, sets, started: Date.now() };
}

function startSession(blocks, levelOf, opts){
  const o = opts || {};
  const S = buildSession(blocks, levelOf);
  if(!S.sets.length) return;

  let view = "list";
  let cursor = 0;                 // index into S.sets, for guided view
  let finished = false;

  const root = el("div", "session");
  const head = el("div", "session-head");
  const body = el("div", "session-body");
  const foot = el("div", "session-foot");
  root.append(head, body, foot);
  document.body.append(root);
  document.body.style.overflow = "hidden";

  /* one timer owns the clock, so nothing can run twice */
  let timer = null;
  const stopTimer = ()=>{ if(timer){ clearInterval(timer); timer = null; } };

  function close(){
    stopTimer();
    document.body.style.overflow = "";
    root.remove();
    if(o.onClose) o.onClose(S);
  }

  const doneCount = ()=> S.sets.filter(s=> s.done).length;

  /* --- chrome ----------------------------------------------------------- */
  function drawHead(){
    head.textContent = "";
    if(finished) return;
    const top = el("div", "session-top");
    const x = el("button", "icon-btn", SICON.close);
    x.type = "button";
    x.setAttribute("aria-label", "Close session");
    x.addEventListener("click", close);
    const t = el("div", "elapsed");
    t.textContent = clock((Date.now() - S.started) / 1000) + " elapsed";
    top.append(x, t, el("span", "badge", doneCount() + " / " + S.sets.length));
    head.append(top);

    const seg = el("div", "seg");
    seg.setAttribute("role", "tablist");
    [["list", "List"], ["guided", "Guided"]].forEach(([k, label])=>{
      const b = el("button", null, label);
      b.type = "button";
      b.setAttribute("role", "tab");
      b.setAttribute("aria-selected", String(view === k));
      b.addEventListener("click", ()=>{ if(view !== k){ view = k; stopTimer(); draw(); } });
      seg.append(b);
    });
    head.append(seg);
  }

  /* --- list view -------------------------------------------------------- */
  function drawList(){
    let section = null;
    S.exercises.forEach(ex=>{
      if(ex.section !== section){
        section = ex.section;
        body.append(el("div", "sect", "<h2>" + section + "</h2>"));
      }
      const g = el("div", "exgroup");
      g.append(el("h3", "exname", ex.name));
      g.append(el("span", "exmeta", ex.raw));
      ex.sets.forEach(st=>{
        const r = el("button", "setrow" + (st.done ? " done" : ""));
        r.type = "button";
        const target = el("span", "target" + (ex.dose.kind === "open" ? " open" : ""),
                          setTarget(ex.dose));
        if(ex.dose.perSide) target.append(el("span", "qual", " per side"));
        else if(ex.dose.note && ex.dose.kind !== "open")
          target.append(el("span", "qual", " " + ex.dose.note));
        r.append(el("span", "n", String(st.n + 1)), target,
                 el("span", "tick", SICON.tick));
        r.addEventListener("click", ()=>{ st.done = !st.done; draw(); });
        g.append(r);
      });
      body.append(g);
    });

    const b = el("button", "btn btn-primary", "Finish session");
    b.type = "button";
    b.addEventListener("click", finish);
    foot.append(b);
  }

  /* --- guided view ------------------------------------------------------ */
  function drawGuided(){
    while(cursor < S.sets.length && S.sets[cursor].done) cursor++;
    if(cursor >= S.sets.length){ finish(); return; }

    const st = S.sets[cursor];
    const ex = st.ex;
    const timed = ex.dose.kind === "time";

    const v = el("div", "gview");
    v.append(el("p", "where", ex.section + " · set " + (st.n + 1) + " of " + ex.sets.length));
    v.append(el("h2", "exname", ex.name));

    const stage = el("div", "gstage");
    if(ex.key){
      const info = HOWTO[ex.key];
      const move = EXMOVE[ex.key] || (info && MOVES[info.m]);
      if(move){ stage.innerHTML = FIG_SVG; mountFigure(stage, move); }
    }
    if(stage.innerHTML) v.append(stage);

    const act = el("button", "btn", "");
    act.type = "button";

    if(timed){
      const ring = el("div", "ring");
      ring.innerHTML =
        '<svg viewBox="0 0 100 100" aria-hidden="true">' +
          '<circle class="track" cx="50" cy="50" r="45"/>' +
          '<circle class="bar" cx="50" cy="50" r="45" stroke-dasharray="' + RING_C + '"/>' +
        "</svg>" +
        '<div class="face"><div class="clock"></div><div class="cap"></div></div>';
      const bar  = ring.querySelector(".bar");
      const face = ring.querySelector(".clock");
      const cap  = ring.querySelector(".cap");
      const total = ex.dose.value;
      let left = total, running = false;

      const paint = ()=>{
        face.textContent = clock(left);
        cap.textContent = ex.dose.perSide ? "per side" : (running ? "hold" : "ready");
        bar.setAttribute("stroke-dashoffset", String(RING_C * (1 - left / total)));
        ring.classList.toggle("running", running);
        ring.classList.toggle("done", left <= 0);
        /* While the timer runs the ring is the focus, so the button waits. */
        act.className = "btn " + (running && left > 0 ? "btn-ghost" : "btn-primary");
        act.textContent = left <= 0 ? "Done, next" : running ? "Pause" : "Start hold";
      };
      paint();

      act.addEventListener("click", ()=>{
        if(left <= 0){ complete(st); return; }
        if(running){ stopTimer(); running = false; paint(); return; }
        running = true; paint();
        const endAt = Date.now() + left * 1000;
        stopTimer();
        timer = setInterval(()=>{
          left = (endAt - Date.now()) / 1000;
          if(left <= 0){ left = 0; stopTimer(); running = false; }
          paint();
        }, 100);
      });
      v.append(ring);
    } else {
      const rf = el("div", "repface");
      rf.append(el("div", "count", setTarget(ex.dose)),
                el("div", "cap", ex.dose.perSide ? "per side" : "this set"));
      v.append(rf);
      act.className = "btn btn-primary";
      act.textContent = "Done, next";
      act.addEventListener("click", ()=> complete(st));
    }

    if(ex.note) v.append(el("p", "qual", ex.note));
    else if(ex.dose.note && ex.dose.kind !== "open") v.append(el("p", "qual", ex.dose.note));

    body.append(v);
    foot.append(act);
  }

  function complete(st){
    stopTimer();
    st.done = true;
    const rest = st.ex.dose.rest || o.rest || 60;
    const more = S.sets.some(x=> !x.done);
    if(!more){ finish(); return; }
    drawRest(rest);
  }

  /* --- rest timer ------------------------------------------------------- */
  function drawRest(seconds){
    body.textContent = ""; foot.textContent = "";
    let left = seconds, total = seconds;

    const wrap = el("div", "gview rest");
    wrap.append(el("p", "k", "Rest"));
    const ring = el("div", "ring running");
    ring.innerHTML =
      '<svg viewBox="0 0 100 100" aria-hidden="true">' +
        '<circle class="track" cx="50" cy="50" r="45"/>' +
        '<circle class="bar" cx="50" cy="50" r="45" stroke-dasharray="' + RING_C + '"/>' +
      "</svg>" +
      '<div class="face"><div class="clock"></div><div class="cap">until next set</div></div>';
    const bar = ring.querySelector(".bar"), face = ring.querySelector(".clock");
    wrap.append(ring);
    body.append(wrap);

    const paint = ()=>{
      face.textContent = clock(left);
      bar.setAttribute("stroke-dashoffset", String(RING_C * (1 - Math.max(0, left) / total)));
    };

    let endAt = Date.now() + left * 1000;

    const row = el("div", "btn-row");
    const minus = el("button", "btn btn-ghost btn-adj", "−10");
    const plus  = el("button", "btn btn-ghost btn-adj", "+10");
    const skip  = el("button", "btn btn-primary", "Skip rest");
    [minus, plus, skip].forEach(b=> b.type = "button");
    minus.addEventListener("click", ()=>{ left = Math.max(0, left - 10); endAt -= 10000; paint(); });
    plus.addEventListener("click",  ()=>{ left += 10; total = Math.max(total, left); endAt += 10000; paint(); });
    skip.addEventListener("click", ()=>{ stopTimer(); draw(); });
    row.append(minus, skip, plus);
    foot.append(row);

    paint();
    stopTimer();
    timer = setInterval(()=>{
      left = (endAt - Date.now()) / 1000;
      paint();
      if(left <= 0){ stopTimer(); draw(); }
    }, 100);
  }

  /* --- session complete -------------------------------------------------- */
  function finish(){
    stopTimer();
    finished = true;
    const mins = Math.round((Date.now() - S.started) / 60000);
    const done = doneCount();
    const exDone = S.exercises.filter(e=> e.sets.every(s=> s.done)).length;

    body.textContent = ""; foot.textContent = ""; head.textContent = "";
    const w = el("div", "summary");
    w.append(el("div", "mark", SICON.big));
    w.append(el("h2", null, done === S.sets.length ? "Session<br>complete" : "Session<br>logged"));
    w.append(el("p", "lede",
      done + " of " + S.sets.length + " sets, " + exDone + " exercise" +
      (exDone === 1 ? "" : "s") + " finished, " +
      (mins < 1 ? "under a minute" : mins + " minute" + (mins === 1 ? "" : "s")) + "."));

    const strip = el("div", "statstrip");
    [[String(done), "Sets"], [String(exDone), "Exercises"],
     [(mins < 1 ? "<1" : String(mins)) + "<span>min</span>", "Time"]].forEach(([v, k])=>{
      const d = el("div");
      d.append(el("div", "v", v), el("div", "k", k));
      strip.append(d);
    });
    w.append(strip);
    body.append(w);

    const b = el("button", "btn btn-primary", "Done");
    b.type = "button";
    b.addEventListener("click", close);
    foot.append(b);
  }

  /* --- draw ------------------------------------------------------------- */
  function draw(){
    if(finished) return;
    body.textContent = ""; foot.textContent = "";
    drawHead();
    if(view === "list") drawList(); else drawGuided();
  }

  draw();
  return S;
}
