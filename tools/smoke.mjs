#!/usr/bin/env node
/* Load every page in a real browser and report console errors plus a few
   structural counts. Usage: node smoke.mjs [file ...]  (default: all pages) */
import puppeteer from "puppeteer-core";
import path from "node:path"; import fs from "node:fs";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const DEFAULT = ["index.html","skill-tree.html","weeks/index.html","handstand/index.html",
  "weeks/week-1.html","weeks/week-2.html","weeks/week-3.html","weeks/week-4.html",
  "weeks/week-5.html","weeks/week-6.html","weeks/week-7.html",
  "handstand/week-1.html","handstand/week-2.html"];
const files = process.argv.slice(2).length ? process.argv.slice(2) : DEFAULT;

const browser = await puppeteer.launch({ executablePath: CHROME, headless: true });
let bad = 0;
for(const f of files){
  const full = path.join(ROOT, f);
  if(!fs.existsSync(full)){ console.log(`${f.padEnd(24)} MISSING FILE`); bad++; continue; }
  const page = await browser.newPage();
  const errs = [];
  page.on("pageerror", e => errs.push(e.message));
  page.on("console", m => { if(m.type() === "error") errs.push(m.text()); });
  await page.goto("file://" + full, { waitUntil: "load" });
  await new Promise(r => setTimeout(r, 250));
  const n = await page.evaluate(() => ({
    /* new screen */
    sects:   document.querySelectorAll(".sect").length,
    exrows:  document.querySelectorAll("details.exrow").length,
    thumbs:  document.querySelectorAll(".exrow .thumb svg.fig").length,
    openOnLoad: document.querySelectorAll("details[open]").length,
    primary: document.querySelectorAll(".action .btn-primary").length,
    nav:     document.querySelectorAll("nav.nav a").length,
    lvchip:  document.querySelectorAll(".appbar .lvchip").length,
    /* legacy screen, still live on the pages not yet migrated */
    blocks:  document.querySelectorAll(".ex").length,
    legacy:  document.querySelectorAll("details.pex").length + document.querySelectorAll(".flat").length,
    rungs:   document.querySelectorAll("ol.ladder > li").length,
    cards:   document.querySelectorAll(".wk").length,
    overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth
  }));

  /* A week page that renders no exercises is the failure this tool exists to
     catch, so an empty page must not report clean. */
  const isWeek = /week-\d+\.html$/.test(f);
  const rows = n.exrows + n.legacy;
  const problems = [];
  if(errs.length) problems.push(errs.join(" | "));
  if(isWeek && rows === 0) problems.push("no exercise rows rendered");
  if(isWeek && n.exrows && n.thumbs < n.exrows) problems.push(`${n.exrows - n.thumbs} thumbnail(s) missing`);
  if(isWeek && n.exrows && n.primary !== 1) problems.push(`primary actions=${n.primary}, expected 1`);
  if(n.openOnLoad) problems.push(`${n.openOnLoad} row(s) open on load`);
  if(n.overflow > 0) problems.push(`page overflows by ${n.overflow}px`);
  if(problems.length) bad++;

  console.log(`${f.padEnd(24)} ${problems.length ? "FAIL  " + problems.join(" | ") : "ok"}` +
    `  rows=${rows}` + (n.sects ? ` sects=${n.sects} thumbs=${n.thumbs} nav=${n.nav} lv=${n.lvchip}` : "") +
    (n.blocks ? ` blocks=${n.blocks}` : "") +
    (n.rungs ? ` rungs=${n.rungs}` : "") + (n.cards ? ` cards=${n.cards}` : ""));
  await page.close();
}
await browser.close();
console.log(bad ? `\n${bad} page(s) with problems` : "\nall pages clean");
process.exit(bad ? 1 : 0);
