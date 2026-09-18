#!/usr/bin/env node
/* Screenshot a whole page at a given viewport — for checking phone layout.
   Usage: node page.mjs weeks/week-2.html [width] [height] [--full] */
import puppeteer from "puppeteer-core";
import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const args = process.argv.slice(2);
const full = args.includes("--full");
const positional = args.filter(a => !a.startsWith("--"));
const file = positional[0];
const width = Number(positional[1] || 390);
const height = Number(positional[2] || 900);
if(!file){ console.error('usage: node page.mjs <file.html> [width] [height] [--full]'); process.exit(1); }

const outDir = path.join(__dirname, "renders");
fs.mkdirSync(outDir, { recursive: true });
const slug = file.replace(/[^a-z0-9]+/gi, "-").replace(/-html$/, "") + "-" + width;
const outFile = path.join(outDir, slug + ".png");

const browser = await puppeteer.launch({ executablePath: CHROME, headless: true });
const page = await browser.newPage();
await page.setViewport({ width, height, deviceScaleFactor: 2, isMobile: width < 700 });
await page.goto("file://" + path.join(ROOT, file), { waitUntil: "load" });
await new Promise(r => setTimeout(r, 400));

// report anything overflowing horizontally — the usual phone-layout smell
const overflow = await page.evaluate(() => {
  const bad = [];
  document.querySelectorAll("*").forEach(el => {
    if(el.scrollWidth > el.clientWidth + 2 && el.clientWidth > 0){
      bad.push((el.className || el.tagName) + " scroll=" + el.scrollWidth + " client=" + el.clientWidth);
    }
  });
  return { docScroll: document.documentElement.scrollWidth, docClient: document.documentElement.clientWidth, bad: bad.slice(0, 8) };
});
await page.screenshot({ path: outFile, fullPage: full });
console.log(`${file} @ ${width}px -> ${path.relative(process.cwd(), outFile)}`);
console.log(`  page scrollWidth=${overflow.docScroll} clientWidth=${overflow.docClient}`);
if(overflow.bad.length) console.log("  overflowing:", overflow.bad.join(" | "));
await browser.close();
