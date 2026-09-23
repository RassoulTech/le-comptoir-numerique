import Conteneur from "@/components/ui/Conteneur";
import Bouton from "@/components/ui/Bouton";
import Icone from "@/components/ui/Icone";

export const metadata = {
  title: "Page introuvable",
  robots: { index: false, follow: true },
};

export default function PageIntrouvable() {
  return (
    <section className="bg-ivoire py-24 lg:py-32">
      <Conteneur>
        <div className="mx-auto max-w-lg text-center">
          <p className="text-intitule text-bronze-texte uppercase">
            Erreur 404
          </p>
          <h1 className="mt-5 text-titre-1 text-foret">
            Cette page n&apos;existe pas
          </h1>
          <p className="mt-4 text-anthracite-doux">
            Le lien est peut-être incorrect ou la page a été déplacée.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Bouton href="/">
              Retour à l&apos;accueil
              <Icone nom="fleche" className="size-4" />
            </Bouton>
            <Bouton href="/contact" variante="secondaire">
              Nous contacter
            </Bouton>
          </div>
        </div>
      </Conteneur>
    </section>
  );
}
