import { chromium } from "playwright";
const navigateur = await chromium.launch();
const contexte = await navigateur.newContext({ viewport: { width: 390, height: 844 } });
const page = await contexte.newPage();
await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });
await page.waitForTimeout(500);
const info = await page.evaluate(() => {
  const b = document.querySelector('button[aria-controls="menu-mobile"]');
  const header = b.closest("header");
  const div = b.parentElement;
  const sb = getComputedStyle(b), sh = getComputedStyle(header), sd = getComputedStyle(div);
  const r = b.getBoundingClientRect(), rh = header.getBoundingClientRect(), rd = div.getBoundingClientRect();
  return {
    bouton: { pos: sb.position, top: sb.top, left: sb.left, bottom: sb.bottom, w: Math.round(r.width), h: Math.round(r.height), rect: `t${Math.round(r.top)} l${Math.round(r.left)}` },
    divActions: { pos: sd.position, rect: `t${Math.round(rd.top)} l${Math.round(rd.left)} w${Math.round(rd.width)} h${Math.round(rd.height)}` },
    header: { pos: sh.position, top: sh.top, rect: `t${Math.round(rh.top)} l${Math.round(rh.left)} w${Math.round(rh.width)} h${Math.round(rh.height)}`, overflow: sh.overflow, display: sh.display },
  };
});
console.log(JSON.stringify(info, null, 2));
await navigateur.close();
