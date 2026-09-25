/**
 * Diagnostic temporaire : identifie les éléments qui débordent
 * horizontalement à 360px sur une page donnée. À supprimer après usage.
 * Usage : node scripts/diag-debordement.mjs /solutions/sites-web 360
 */
import { chromium } from "playwright";

const url = process.argv[2] ?? "/solutions/sites-web";
const largeur = Number(process.argv[3] ?? 360);

const navigateur = await chromium.launch();
const contexte = await navigateur.newContext({
  viewport: { width: largeur, height: 800 },
});
const page = await contexte.newPage();
await page.goto(`http://localhost:3000${url}`, { waitUntil: "networkidle" });

const rapport = await page.evaluate(() => {
  const el = document.documentElement;
  const debordants = [];
  document.querySelectorAll("body *").forEach((n) => {
    const r = n.getBoundingClientRect();
    if (r.right > el.clientWidth + 1 && r.width > 0) {
      const cls = String(n.className)
        .split(" ")
        .filter(Boolean)
        .slice(0, 4)
        .join(".");
      debordants.push(
        `${n.tagName}${cls ? "." + cls : ""} right=${Math.round(r.right)} w=${Math.round(r.width)} texte="${(n.textContent ?? "").trim().slice(0, 40)}"`,
      );
    }
  });
  return {
    clientW: el.clientWidth,
    scrollW: el.scrollWidth,
    debordants: debordants.slice(0, 15),
  };
});

console.log(JSON.stringify(rapport, null, 2));
await navigateur.close();