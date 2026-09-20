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
    blocks: document.querySelectorAll(".ex").length,
    rows: document.querySelectorAll("details.pex").length + document.querySelectorAll(".flat").length,
    openOnLoad: document.querySelectorAll("details.pex[open]").length,
    lvBtns: document.querySelectorAll("#lvls button").length,
    rungs: document.querySelectorAll("ol.ladder > li").length,
    cards: document.querySelectorAll(".wk").length,
    overflow: document.documentElement.scrollWidth > document.documentElement.clientWidth
  }));
  if(errs.length) bad++;
  console.log(`${f.padEnd(24)} err=${errs.length ? errs.join(" | ") : "none"}` +
    `  blocks=${n.blocks} rows=${n.rows} open=${n.openOnLoad} lv=${n.lvBtns}` +
    (n.rungs ? ` rungs=${n.rungs}` : "") + (n.cards ? ` cards=${n.cards}` : ""));
  await page.close();
}
await browser.close();
console.log(bad ? `\n${bad} page(s) with problems` : "\nall pages clean");
process.exit(bad ? 1 : 0);
