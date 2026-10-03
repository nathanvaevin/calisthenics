import puppeteer from "puppeteer-core";
import path from "node:path"; import { fileURLToPath } from "node:url";
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const b = await puppeteer.launch({ executablePath:"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", headless:true });
const p = await b.newPage();
await p.setViewport({ width:390, height:844, deviceScaleFactor:2, isMobile:true });
await p.goto("file://"+path.join(ROOT,"weeks/week-2.html"), { waitUntil:"load" });
await new Promise(r=>setTimeout(r,400));

const out = await p.evaluate(() => {
  const cs = el => getComputedStyle(el);
  const card = document.querySelector(".exercise");
  const legacy = document.querySelector("details.pex");
  const borderedAncestors = el => { let n=0,e=el; while(e && e!==document.body){ const b=cs(e).borderTopWidth; if(b && b!=="0px") n++; e=e.parentElement; } return n; };
  return {
    bodyBg: cs(document.body).backgroundColor,
    blockBg: cs(document.querySelector(".ex")).backgroundColor,
    cardBg: cs(card).backgroundColor,
    cardBorder: cs(card).borderTopWidth,
    titleFont: cs(card.querySelector(".ex-title")).fontFamily.split(",")[0],
    titleSize: cs(card.querySelector(".ex-title")).fontSize,
    prescColor: cs(card.querySelector(".ex-presc")).color,
    legacyPrescColor: cs(legacy.querySelector(".pdose")).color,
    badgeFont: cs(card.querySelector(".badge")).fontFamily.split(",")[0],
    badgeTracking: cs(card.querySelector(".badge")).letterSpacing,
    newCardBorderedAncestors: borderedAncestors(card),
    legacyCardBorderedAncestors: borderedAncestors(legacy),
    tapHeight: card.querySelector("summary").getBoundingClientRect().height,
  };
});

// does it still work when opened?
await p.click(".exercise > summary");
await new Promise(r=>setTimeout(r,500));
const fn = await p.evaluate(() => {
  const c = document.querySelector(".exercise");
  return { open: c.open, figure: !!c.querySelector("svg.fig"), d3btn: !!c.querySelector(".d3btn"),
           tabs: c.querySelectorAll(".tab").length };
});
console.log(JSON.stringify({...out, opened: fn}, null, 1));
await b.close();
