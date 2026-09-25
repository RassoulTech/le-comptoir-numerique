import { redirect } from "next/navigation";

/**
 * L'ancienne page « Services » a été requalifiée en pôle « Solutions
 * numériques », conformément au nouveau plan du site :
 *
 *   /services          →  /solutions-numeriques   (hub des sept offres)
 *   #solutions         →  pages détail  /solutions/<slug>
 *
 * Cette redirection permanente préserve les liens déjà partagés
 * (impressions, WhatsApp, réseaux sociaux) au lieu de les briser.
 */
export default function PageServices() {
  redirect("/solutions-numeriques");
}