import puppeteer from "puppeteer-core";
import path from "node:path"; import { fileURLToPath } from "node:url";
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const browser = await puppeteer.launch({ executablePath:"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", headless:true });
for(const f of process.argv.slice(2)){
  const page = await browser.newPage();
  await page.goto("file://"+path.join(ROOT,f), { waitUntil:"load" });
  const out = await page.evaluate(() => {
    const idx = {};
    TRACKS.forEach(t => t.ladder.forEach(s => idx[t.name+"|"+s.name] = s.lv));
    return BLOCKS.map(b => ({
      name: b.name,
      levels: Object.fromEntries(Object.entries(b.levels || {}).map(([l, items]) =>
        [l, items.map(i => (i[3] ? "lv"+idx[i[3]] : "lv?") + " " + i[0])]))
    }));
  });
  console.log("\n=== " + f + " ===");
  for(const b of out){
    console.log("  " + b.name);
    for(const [l, items] of Object.entries(b.levels))
      console.log("    L" + l + " (" + items.length + "): " + items.join(" | "));
  }
  await page.close();
}
await browser.close();
