#!/usr/bin/env node
/* Render a contact sheet of 3D rigs so a batch can be reviewed at once.
   Usage: node sheetshot.mjs <name> <t> "Track|Ex" "Track|Ex" ...
          node sheetshot.mjs --all-holds      (every rig marked hold)
          node sheetshot.mjs --all-reps <t>   (every rig that still animates) */
import puppeteer from "puppeteer-core";
import path from "node:path"; import fs from "node:fs";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const eng = fs.readFileSync(path.join(ROOT, "assets/engine.js"), "utf8");
const r3 = eng.slice(eng.indexOf("const RIG3D = {"), eng.indexOf("/* ---- props, drawn in 3D"));
const entries = [...r3.matchAll(/"([^"]+)":\{r:"(\w+)", p:\{([^}]*)\}/g)]
  .map(m => ({ key: m[1], rig: m[2], params: m[3], hold: m[3].includes("hold:") }));

let name, t, keys;
const a = process.argv.slice(2);
if(a[0] === "--all-holds"){ t = Number(a[1] || 0); name = "holds-t" + t; keys = entries.filter(e => e.hold).map(e => e.key); }
else if(a[0] === "--all-reps"){ t = Number(a[1] || 0); name = "reps-t" + t; keys = entries.filter(e => !e.hold).map(e => e.key); }
else { name = a[0]; t = Number(a[1]); keys = a.slice(2); }

const outDir = path.join(__dirname, "renders");
fs.mkdirSync(outDir, { recursive: true });

const browser = await puppeteer.launch({ executablePath: CHROME, headless: true });
const CHUNK = 12;
for(let i = 0; i < keys.length; i += CHUNK){
  const part = keys.slice(i, i + CHUNK);
  const page = await browser.newPage();
  await page.setViewport({ width: 1040, height: 900, deviceScaleFactor: 2 });
  const url = "file://" + path.join(__dirname, "sheet.html")
    + "?t=" + t + "&keys=" + encodeURIComponent(JSON.stringify(part));
  await page.goto(url, { waitUntil: "load" });
  await new Promise(r => setTimeout(r, 300));
  const err = await page.$eval("#err", el => el.textContent).catch(() => "");
  if(err) console.error("  errors:", err);
  const out = path.join(outDir, `sheet-${name}-${Math.floor(i / CHUNK) + 1}.png`);
  await page.$eval("#grid", el => el.scrollIntoView());
  await (await page.$("#grid")).screenshot({ path: out });
  console.log(`${part.length} rigs -> ${path.relative(process.cwd(), out)}`);
  await page.close();
}
await browser.close();
