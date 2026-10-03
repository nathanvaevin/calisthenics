/* =====================================================================
   BOTTOM NAV
   One definition, used by every screen, so a tab cannot be live on one
   page and missing on another. A tab with no screen behind it yet is
   rendered off rather than linked somewhere that does not exist.
   ===================================================================== */
const NAV_ICONS = {
  Train:    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M3.5 9.5v5M6.5 6.5v11M17.5 6.5v11M20.5 9.5v5M6.5 12h11"/></svg>',
  Skills:   '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="19" r="1.8"/><path d="M12 17.2V13M12 13L7 8M12 13l5-5"/><circle cx="7" cy="6.5" r="1.8"/><circle cx="17" cy="6.5" r="1.8"/></svg>',
  Progress: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M5 20V10M12 20V4M19 20v-7"/></svg>',
  Profile:  '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="3.4"/><path d="M4.5 20a7.5 7.5 0 0 1 15 0"/></svg>'
};

/* base is "" at the repo root, "../" one folder down. */
function bottomNav(active, base){
  base = base || "";
  const hrefs = { Train: base + "index.html", Skills: base + "skill-tree.html" };
  const n = document.createElement("nav");
  n.className = "nav";
  Object.keys(NAV_ICONS).forEach(label=>{
    const href = hrefs[label];
    const a = document.createElement("a");
    a.className = label === active ? "active" : (href ? "" : "off");
    if(href && label !== active) a.href = href;
    else if(href) a.href = href;
    else a.setAttribute("aria-disabled", "true");
    a.innerHTML = NAV_ICONS[label] + "<span>" + label + "</span>";
    n.append(a);
  });
  return n;
}
