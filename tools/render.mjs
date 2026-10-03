#!/usr/bin/env node
/* ---------------------------------------------------------------
   Dev-only visual QA tool. Screenshots a 2D or 3D exercise figure
   from the skill tree so it can actually be looked at, rather than
   trusted blind from hand-typed joint coordinates.

   Usage:
     node render.mjs "<Track|Exercise>"          -> 2D keyframes
     node render.mjs --3d "<Track|Exercise>"     -> 3D rig
     node render.mjs --both "<Track|Exercise>"   -> both

   Output: tools/renders/<slug>[-3d].png
   --------------------------------------------------------------- */
import puppeteer from "puppeteer-core";
import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const args = process.argv.slice(2);
const want3d = args.includes("--3d") || args.includes("--both");
const want2d = !args.includes("--3d") || args.includes("--both");
const key = args.find(a => !a.startsWith("--"));
if(!key){ console.error("usage: node render.mjs [--3d|--both] \"Track|Exercise\""); process.exit(1); }

const slug = key.toLowerCase().replace(/&amp;/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const outDir = path.join(__dirname, "renders");
fs.mkdirSync(outDir, { recursive: true });

async function shoot(mode, outFile, waitMs){
  const browser = await puppeteer.launch({ executablePath: CHROME, headless: true });
  try{
    const page = await browser.newPage();
    await page.setViewport({ width: 1400, height: 700, deviceScaleFactor: 2 });
    const url = "file://" + path.join(__dirname, "harness.html")
      + "?mode=" + mode + "&key=" + encodeURIComponent(key);
    await page.goto(url, { waitUntil: "load" });
    await new Promise(r => setTimeout(r, waitMs));
    const status = await page.$eval("#status", el => el.textContent).catch(() => "");
    const err = await page.$eval("#err", el => el.textContent).catch(() => "");
    if(err){ console.error(`  [${mode}] ${err}`); return false; }
    const target = await page.$("#out");
    await target.screenshot({ path: outFile });
    console.log(`  [${mode}] ${status} -> ${path.relative(process.cwd(), outFile)}`);
    return true;
  } finally {
    await browser.close();
  }
}

console.log("rendering:", key);
let ok = true;
if(want2d) ok = await shoot("2d", path.join(outDir, slug + ".png"), 150) && ok;
if(want3d) ok = await shoot("3d", path.join(outDir, slug + "-3d.png"), 900) && ok;
process.exit(ok ? 0 : 1);
