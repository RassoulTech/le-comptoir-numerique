/**
 * Captures d'écran de contrôle (responsive + états du formulaire).
 *
 * Prérequis, à installer une seule fois :
 *   npm install -D playwright
 *   npx playwright install chromium
 *
 * Usage : le serveur doit tourner sur http://localhost:3000
 *   npm run build && npm run start   (terminal 1)
 *   node scripts/captures.mjs        (terminal 2)
 *
 * Les captures sont écrites dans le dossier défini par DOSSIER ci-dessous.
 */
import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const BASE = "http://localhost:3000";
const DOSSIER = process.env.DOSSIER_CAPTURES ?? "./captures";
mkdirSync(DOSSIER, { recursive: true });

const FORMATS = [
  { nom: "01-petit-mobile-360", largeur: 360, hauteur: 780 },
  { nom: "02-mobile-390", largeur: 390, hauteur: 844 },
  { nom: "03-tablette-768", largeur: 768, hauteur: 1024 },
  { nom: "04-portable-1280", largeur: 1280, hauteur: 800 },
  { nom: "05-grand-ecran-1920", largeur: 1920, hauteur: 1080 },
];

const PAGES = [
  ["accueil", "/"],
  ["a-propos", "/a-propos"],
  ["produits", "/produits"],
  ["produits-electromenager", "/produits/electromenager"],
  ["solutions-numeriques", "/solutions-numeriques"],
  ["solution-sites-web", "/solutions/sites-web"],
  ["solution-referencement-seo", "/solutions/referencement-seo"],
  ["devis", "/devis"],
  ["contact", "/contact"],
];

const erreursConsole = [];

// Chromium pré-installé dans l'environnement de test.
// CHROMIUM_PATH permet d'utiliser un Chromium déjà présent sur la machine.
// Sans cette variable, Playwright utilise le navigateur qu'il a installé.
const navigateur = await chromium.launch(
  process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {},
);

async function nouvelOnglet(largeur, hauteur) {
  const contexte = await navigateur.newContext({
    viewport: { width: largeur, height: hauteur },
    deviceScaleFactor: 1,
  });
  const page = await contexte.newPage();
  page.on("console", (m) => {
    if (m.type() === "error") erreursConsole.push(`${page.url()} → ${m.text()}`);
  });
  page.on("pageerror", (e) => erreursConsole.push(`${page.url()} → ${e.message}`));
  return { contexte, page };
}

/**
 * Une capture pleine page ne fait pas défiler le document : les blocs qui
 * apparaissent au défilement resteraient invisibles sur l'image. On parcourt
 * donc toute la page, on attend la fin des transitions, puis on remonte.
 */
async function parcourirLaPage(page) {
  await page.evaluate(async () => {
    const pas = window.innerHeight * 0.8;
    for (let y = 0; y < document.body.scrollHeight; y += pas) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 90));
    }
    window.scrollTo(0, document.body.scrollHeight);
  });
  await page.waitForTimeout(900);
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(250);
}

/* 1. Accueil sur tous les formats (page entière) */
for (const f of FORMATS) {
  const { contexte, page } = await nouvelOnglet(f.largeur, f.hauteur);
  await page.goto(`${BASE}/`, { waitUntil: "networkidle" });
  await parcourirLaPage(page);
  await page.screenshot({
    path: `${DOSSIER}/accueil-${f.nom}.png`,
    fullPage: true,
  });
  await contexte.close();
}

/* 2. Toutes les pages en mobile et en bureau */
for (const [nom, chemin] of PAGES) {
  for (const f of [FORMATS[1], FORMATS[3]]) {
    const { contexte, page } = await nouvelOnglet(f.largeur, f.hauteur);
    await page.goto(`${BASE}${chemin}`, { waitUntil: "networkidle" });
    await parcourirLaPage(page);
    await page.screenshot({
      path: `${DOSSIER}/page-${nom}-${f.largeur}.png`,
      fullPage: true,
    });
    await contexte.close();
  }
}

/* 3. Menu mobile ouvert */
{
  const { contexte, page } = await nouvelOnglet(390, 844);
  await page.goto(`${BASE}/`, { waitUntil: "networkidle" });
  await page.getByRole("button", { name: /ouvrir le menu/i }).click();
  await page.waitForTimeout(350);
  await page.screenshot({ path: `${DOSSIER}/menu-mobile-ouvert.png` });
  await contexte.close();
}

/*
   4. & 5. Formulaire en trois étapes (wizard) :
        1. type de besoin (radios) → 2. message, budget, délai →
        3. coordonnées + envoi. La validation est côté serveur : si une
        étape est incomplète, le serveur renvoie les erreurs et le
        formulaire ramène sur la bonne étape.
*/

/* Parcours complet jusqu'à l'envoi, étape par étape. */
async function remplirEtAllerAletaPage3(page, { message = true } = {}) {
  await page.goto(`${BASE}/devis`, { waitUntil: "networkidle" });
  // Étape 1 : choisir un type de besoin.
  await page
    .locator('input[name="typeBesoin"][value="site-web"]')
    .check();
  await page
    .getByRole("button", { name: /continuer \(détails/i })
    .click();
  // Étape 2 : message obligatoire.
  if (message) {
    await page.fill(
      "#message",
      "Ceci est un test de bout en bout du formulaire.",
    );
  }
  await page.getByRole("button", { name: /continuer \(coordonnées/i }).click();
}

/* 4. Formulaire : erreurs de validation serveur (coordonnées vides) */
{
  const { contexte, page } = await nouvelOnglet(1280, 900);
  await remplirEtAllerAletaPage3(page);
  await page.getByRole("button", { name: /envoyer ma demande/i }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({
    path: `${DOSSIER}/formulaire-erreurs.png`,
    fullPage: true,
  });
  const messages = await page.locator('[role="alert"]').allTextContents();
  const champs = await page
    .locator("text=/Merci d'indiquer votre nom|téléphone est nécessaire/")
    .allTextContents();
  console.log(
    "Messages d'erreur affiches (alertes globales + champs) :",
    messages.length + champs.length,
  );
  [...messages, ...champs].forEach((m) => console.log("   •", m));
  await contexte.close();
}

/* 5. Formulaire : envoi valide, de bout en bout */
{
  const { contexte, page } = await nouvelOnglet(1280, 900);
  await remplirEtAllerAletaPage3(page);
  await page.fill("#nom", "Test Dione");
  await page.fill("#telephone", "+221 77 000 00 00");
  await page.fill("#email", "test@exemple.com");
  await page.getByRole("button", { name: /envoyer ma demande/i }).click();
  await page.waitForTimeout(2500);
  await page.screenshot({ path: `${DOSSIER}/formulaire-succes.png`, fullPage: true });
  const confirmation = await page
    .getByText(/votre demande est bien enregistrée/i)
    .count();
  console.log(
    confirmation > 0
      ? "Confirmation affichee : OK"
      : "Confirmation NON affichee : ECHEC",
  );
  await contexte.close();
}

/* 6. Contrôles automatiques : titres, alt, liens, largeur de défilement */
{
  const { contexte, page } = await nouvelOnglet(360, 780);
  const rapport = [];

  for (const [nom, chemin] of PAGES) {
    await page.goto(`${BASE}${chemin}`, { waitUntil: "networkidle" });

    const debordement = await page.evaluate(
      () => document.documentElement.scrollWidth > window.innerWidth + 1,
    );
    const nbH1 = await page.locator("h1").count();
    const titre = await page.title();
    const description = await page
      .locator('meta[name="description"]')
      .getAttribute("content");
    const imagesSansAlt = await page.locator("img:not([alt])").count();

    rapport.push({
      page: nom,
      h1: nbH1,
      debordementHorizontal: debordement,
      titreLongueur: titre.length,
      descriptionLongueur: description?.length ?? 0,
      imagesSansAlt,
    });
  }

  console.log("\n=== CONTROLES PAR PAGE (largeur 360 px) ===");
  console.table(rapport);
  await contexte.close();
}

await navigateur.close();

console.log("\n=== ERREURS CONSOLE ===");
console.log(
  erreursConsole.length === 0
    ? "Aucune"
    : [...new Set(erreursConsole)].join("\n"),
);
