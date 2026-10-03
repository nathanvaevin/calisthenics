#!/usr/bin/env node
/* One-off batch QA pass: screenshot a list of keys in a single browser
   session (much faster than relaunching Chrome per key). */
import puppeteer from "puppeteer-core";
import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const outDir = path.join(__dirname, "renders");
fs.mkdirSync(outDir, { recursive: true });

const keys = JSON.parse(fs.readFileSync(process.argv[2], "utf8"));

const slug = key => key.toLowerCase().replace(/&amp;/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const browser = await puppeteer.launch({ executablePath: CHROME, headless: true });
for(const {key, mode, wait} of keys){
  const page = await browser.newPage();
  await page.setViewport({ width: 1400, height: 700, deviceScaleFactor: 2 });
  const url = "file://" + path.join(__dirname, "harness.html") + "?mode=" + mode + "&key=" + encodeURIComponent(key);
  await page.goto(url, { waitUntil: "load" });
  await new Promise(r => setTimeout(r, wait || 150));
  const status = await page.$eval("#status", el => el.textContent).catch(() => "");
  const err = await page.$eval("#err", el => el.textContent).catch(() => "");
  const outFile = path.join(outDir, slug(key) + (mode === "3d" ? "-3d" : "") + ".png");
  if(err){ console.error(`[${mode}] ${key} -> ERROR: ${err}`); }
  else {
    const target = await page.$("#out");
    await target.screenshot({ path: outFile });
    console.log(`[${mode}] ${key} -> ${status} -> ${path.relative(process.cwd(), outFile)}`);
  }
  await page.close();
}
await browser.close();
