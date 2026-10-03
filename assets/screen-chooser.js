/* =====================================================================
   WEEK CHOOSER
   Both courses pick a week the same way, so they share this renderer and
   differ only in their data. Assembly over a list, nothing invented here.

   The week the class is in is derived from when the course started, so
   nobody has to remember to move a number. The start date is the data a
   coach sets. Course length is data too: it is WEEKS.length, never a
   hard coded 8.
   ===================================================================== */

/* START is the Monday of week 1, as an ISO date. Before the course starts
   this reads week 1, after it ends it reads the last week. */
function courseWeek(startISO, total){
  const start = new Date(startISO + "T00:00:00");
  if(isNaN(start)) return 1;
  const days = Math.floor((Date.now() - start.getTime()) / 86400000);
  return Math.min(total, Math.max(1, Math.floor(days / 7) + 1));
}
function renderChooser(WEEKS, opts){
  const o = opts || {};
  const current = o.current;

  const CHEV = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>';
  const BACK = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>';

  const root  = document.getElementById("screen");
  const inner = document.createElement("div");
  inner.className = "screen-inner";

  inner.innerHTML =
    '<div class="appbar">' +
      '<a class="appbar-back" href="' + (o.backHref || "../index.html") + '" aria-label="Back">' + BACK + "</a>" +
      '<div class="appbar-title">' + (o.barTitle || "") + "</div>" +
    "</div>" +
    '<div class="hero">' +
      '<div class="hero-wash"></div>' +
      '<p class="kicker">' + (o.kicker || "") + "</p>" +
      '<h1 class="screen-title">' + (o.title || "") + "</h1>" +
      '<p class="lede">' + (o.lede || "") + "</p>" +
    "</div>";

  WEEKS.forEach(w=>{
    const open = !!w.file;
    const now  = open && w.n === current;
    const row  = document.createElement(open ? "a" : "div");
    row.className = "linkrow" + (now ? " now" : open ? "" : " soon");
    if(open) row.href = w.file;

    const tag = now ? " · this week" : (w.rest ? " · in class" : "");
    row.innerHTML =
      '<span class="txt">' +
        '<span class="k">Week ' + w.n + tag + "</span>" +
        '<span class="t">' + (w.t || "Unlocked soon") + "</span>" +
        '<p class="s">' + (w.s || "Added after class.") + "</p>" +
      "</span>" +
      '<span class="state">' + (open ? CHEV : "") + "</span>";
    inner.append(row);
  });

  root.append(inner, bottomNav("Train", o.base || "../"));
}
