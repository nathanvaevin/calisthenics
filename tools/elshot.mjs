import puppeteer from "puppeteer-core";
import path from "node:path"; import fs from "node:fs";
import { fileURLToPath } from "node:url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const [file, sel, w, name] = process.argv.slice(2);
const browser = await puppeteer.launch({ executablePath:"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", headless:true });
const page = await browser.newPage();
await page.setViewport({ width:Number(w||390), height:1000, deviceScaleFactor:2, isMobile:true });
await page.goto("file://"+path.join(ROOT,file), { waitUntil:"load" });
await new Promise(r=>setTimeout(r,400));
const els = await page.$$(sel);
for(let i=0;i<Math.min(els.length,2);i++){
  const out = path.join(__dirname,"renders",`${name}-${i}.png`);
  await els[i].screenshot({ path: out });
  console.log("->", path.relative(process.cwd(), out));
}
await browser.close();
