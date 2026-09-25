/**
 * Audit de contraste WCAG 2.1 AA sur toutes les pages.
 *
 * Point délicat : dès qu'une couleur porte une opacité (`text-ivoire/70`),
 * le navigateur la renvoie en `oklab(...)`, et une couleur semi-transparente
 * ne dit rien tant qu'on ne sait pas ce qu'il y a derrière. On ne tente donc
 * pas d'analyser les chaînes CSS : on demande au navigateur de peindre
 * chaque couleur sur un canvas, dans l'ordre réel d'empilement, puis on lit
 * le pixel obtenu. La mesure correspond alors exactement à ce que l'œil voit.
 *
 * Prérequis : npm install -D playwright && npx playwright install chromium
 * Usage : le serveur doit tourner sur http://localhost:3000
 *   node scripts/audit-contraste.mjs
 *   URL_BASE=http://localhost:3311 node scripts/audit-contraste.mjs
 */
import { chromium } from "playwright";

const BASE = process.env.URL_BASE ?? "http://localhost:3000";

const PAGES = [
  ["accueil", "/"],
  ["a-propos", "/a-propos"],
  ["produits", "/produits"],
  ["produits-electromenager", "/produits/electromenager"],
  ["solutions-numeriques", "/solutions-numeriques"],
  ["solution-sites-web", "/solutions/sites-web"],
  ["devis", "/devis"],
  ["contact", "/contact"],
];

const navigateur = await chromium.launch(
  process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {},
);

const problemes = [];

for (const [nom, chemin] of PAGES) {
  const contexte = await navigateur.newContext({
    viewport: { width: 1280, height: 900 },
  });
  const page = await contexte.newPage();
  await page.goto(`${BASE}${chemin}`, { waitUntil: "networkidle" });

  // Déclenche les apparitions, sinon les éléments masqués faussent le relevé
  await page.evaluate(async () => {
    const pas = window.innerHeight * 0.8;
    for (let y = 0; y < document.body.scrollHeight; y += pas) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 60));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(1200);

  const releves = await page.evaluate(() => {
    const toile = document.createElement("canvas");
    toile.width = toile.height = 1;
    const ctx = toile.getContext("2d", { willReadFrequently: true });

    /** Peint une pile de couleurs et renvoie le pixel sRGB obtenu. */
    const composer = (couches) => {
      ctx.clearRect(0, 0, 1, 1);
      // Base blanche : le fond du document est toujours opaque en dessous
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, 1, 1);
      for (const couche of couches) {
        if (typeof couche === "object") {
          // Dégradé Tailwind : on peint from, puis to à moitié transparent.
          // La moyenne des deux extrémités est une bonne approximation du
          // rendu au centre de la carte, où vivent les textes.
          ctx.fillStyle = couche.de;
          ctx.fillRect(0, 0, 1, 1);
          ctx.globalAlpha = 0.5;
          ctx.fillStyle = couche.vers;
          ctx.fillRect(0, 0, 1, 1);
          ctx.globalAlpha = 1;
          continue;
        }
        ctx.fillStyle = couche;
        ctx.fillRect(0, 0, 1, 1);
      }
      const [r, v, b] = ctx.getImageData(0, 0, 1, 1).data;
      return [r, v, b];
    };

    /** Pile des fonds peints, de l'élément vers la racine. */
    const pileDesFonds = (element) => {
      const couches = [];
      let noeud = element;
      while (noeud && noeud !== document.documentElement) {
        const style = getComputedStyle(noeud);
        // Les dégradés Tailwind posent background-image, pas backgroundColor :
        // les ignorer ferait mesurer les textes contre le fond de la SECTION
        // et produirait des alarmes fausses (texte ivoire « sur ivoire »).
        if (style.backgroundImage && style.backgroundImage !== "none") {
          const de = style.getPropertyValue("--tw-gradient-from").trim();
          const vers = style.getPropertyValue("--tw-gradient-to").trim();
          if (de && vers) couches.push({ de, vers });
        }
        const fond = style.backgroundColor;
        if (fond && fond !== "transparent") {
          // On empile même les fonds semi-transparents : ils comptent
          couches.push(fond);
        }
        noeud = noeud.parentElement;
      }
      const racine = getComputedStyle(document.documentElement).backgroundColor;
      if (racine) couches.push(racine);
      return couches.reverse(); // de la racine vers l'élément
    };

    const luminance = ([r, v, b]) => {
      const canal = (c) => {
        c /= 255;
        return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
      };
      return 0.2126 * canal(r) + 0.7152 * canal(v) + 0.0722 * canal(b);
    };

    const resultats = [];
    const selecteur = "p,h1,h2,h3,h4,a,li,span,label,dt,dd,button,strong";

    for (const element of document.querySelectorAll(selecteur)) {
      const texte = (element.textContent || "").trim();
      // Uniquement les feuilles de texte, pour ne pas compter deux fois
      if (!texte || element.children.length > 0) continue;

      const style = getComputedStyle(element);
      if (style.visibility === "hidden" || style.display === "none") continue;
      if (parseFloat(style.opacity) < 0.9) continue;

      const boite = element.getBoundingClientRect();
      if (boite.width < 2 || boite.height < 2) continue;

      const fonds = pileDesFonds(element);
      const couleurFond = composer(fonds);
      // Le texte est peint par-dessus la même pile de fonds
      const couleurTexte = composer([...fonds, style.color]);

      const lf = luminance(couleurFond);
      const lt = luminance(couleurTexte);
      const rapport =
        (Math.max(lf, lt) + 0.05) / (Math.min(lf, lt) + 0.05);

      resultats.push({
        contraste: Math.round(rapport * 100) / 100,
        taille: parseFloat(style.fontSize),
        graisse: parseInt(style.fontWeight) || 400,
        texte: texte.slice(0, 44),
        balise: element.tagName,
        rendu: `rgb(${couleurTexte.join(",")}) sur rgb(${couleurFond.join(",")})`,
      });
    }
    return resultats;
  });

  for (const r of releves) {
    // WCAG : « grand texte » = 24 px, ou 18,66 px en gras
    const grand = r.taille >= 24 || (r.taille >= 18.66 && r.graisse >= 700);
    const seuil = grand ? 3 : 4.5;
    if (r.contraste < seuil) problemes.push({ page: nom, ...r, seuil });
  }

  await contexte.close();
}

await navigateur.close();

console.log("=== CONTRASTES SOUS LE SEUIL WCAG AA ===");
if (problemes.length === 0) {
  console.log("Aucun.");
} else {
  const vus = new Map();
  for (const p of problemes) {
    const cle = `${p.rendu}|${Math.round(p.taille)}`;
    if (!vus.has(cle)) vus.set(cle, { ...p, occurrences: 0 });
    vus.get(cle).occurrences += 1;
  }
  for (const p of [...vus.values()].sort((a, b) => a.contraste - b.contraste)) {
    console.log(
      `  ${p.page.padEnd(13)} ${String(p.contraste).padStart(5)}:1 (min ${p.seuil})  ` +
        `${Math.round(p.taille)}px ${p.balise.padEnd(6)} ×${p.occurrences}`,
    );
    console.log(`     ${p.rendu}`);
    console.log(`     « ${p.texte} »`);
  }
  console.log(
    `\n${problemes.length} occurrences, ${vus.size} combinaisons distinctes.`,
  );
}
