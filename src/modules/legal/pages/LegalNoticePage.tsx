import LegalHero from "../components/LegalHero";
import LegalLayout from "../components/LegalLayout";
import LegalSection from "../components/LegalSection";

export default function LegalNoticePage() {
  return (
    <main className="min-h-screen bg-white">
      <LegalHero
        eyebrow="Informations institutionnelles"
        title="Mentions légales"
        description="Retrouvez les informations relatives à l'éditeur, à l'hébergement et à la propriété intellectuelle du site INNOVTECH."
      />

      <LegalLayout currentPath="/mentions-legales">
        <div className="mb-10 rounded-2xl border border-amber-100 bg-amber-50 p-5">
          <p className="text-sm font-bold text-amber-800">
            Informations à compléter obligatoirement
          </p>

          <p className="mt-2 text-sm leading-7 text-amber-700">
            Les informations entre crochets sont des champs provisoires.
            Elles doivent être remplacées par les informations juridiques
            et administratives exactes de l'entreprise.
          </p>
        </div>

        <LegalSection title="1. Éditeur du site">
          <p>
            Nom commercial : INNOVTECH.
          </p>

          <p>
            Raison sociale : [À compléter].
          </p>

          <p>
            Forme juridique : [À compléter].
          </p>

          <p>
            Adresse du siège : [À compléter].
          </p>

          <p>
            Numéro d'immatriculation : [À compléter si applicable].
          </p>

          <p>
            Responsable de publication : [À compléter].
          </p>

          <p>
            Email : [Adresse email officielle].
          </p>
        </LegalSection>

        <LegalSection title="2. Hébergement">
          <p>
            Hébergeur : [Nom du fournisseur d'hébergement].
          </p>

          <p>
            Adresse : [Adresse de l'hébergeur].
          </p>

          <p>
            Site web : [Adresse officielle de l'hébergeur].
          </p>
        </LegalSection>

        <LegalSection title="3. Propriété intellectuelle">
          <p>
            Les éléments présents sur ce site sont protégés par les
            dispositions applicables en matière de propriété intellectuelle.
          </p>

          <p>
            Toute utilisation non autorisée des éléments appartenant à
            INNOVTECH peut faire l'objet de mesures prévues par la loi.
          </p>
        </LegalSection>

        <LegalSection title="4. Crédits">
          <p>
            Les crédits des photographies, illustrations, icônes,
            bibliothèques et ressources externes devront être indiqués
            lorsque leur licence ou leurs conditions d'utilisation
            l'exigent.
          </p>
        </LegalSection>

        <LegalSection title="5. Contact">
          <p>
            Pour toute question concernant le site, vous pouvez utiliser
            le formulaire de contact d'INNOVTECH.
          </p>
        </LegalSection>
      </LegalLayout>
    </main>
  );
}