import { Link } from "react-router-dom";
import LegalHero from "../components/LegalHero";
import LegalLayout from "../components/LegalLayout";
import LegalSection from "../components/LegalSection";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <LegalHero
        eyebrow="Protection des données"
        title="Politique de confidentialité"
        description="Découvrez comment INNOVTECH prévoit de collecter, utiliser, conserver et protéger les informations personnelles communiquées à travers son site."
      />

      <LegalLayout currentPath="/confidentialite">
        <div className="mb-10 rounded-2xl border border-amber-100 bg-amber-50 p-5">
          <p className="text-sm font-bold text-amber-800">
            Document à compléter avant publication
          </p>

          <p className="mt-2 text-sm leading-7 text-amber-700">
            Ce modèle constitue une base de travail. Les coordonnées du
            responsable du traitement, les durées de conservation, les
            prestataires utilisés et les modalités d'exercice des droits
            doivent être vérifiés et complétés par INNOVTECH.
          </p>
        </div>

        <div className="mb-8 text-xs text-slate-400">
          Dernière mise à jour : 9 novembre 2026
        </div>

        <LegalSection title="1. Responsable du traitement">
          <p>
            Le responsable du traitement des données collectées à travers
            ce site est INNOVTECH.
          </p>

          <p>
            Adresse : [Adresse officielle à compléter].
          </p>

          <p>
            Contact : [Adresse email officielle à compléter].
          </p>
        </LegalSection>

        <LegalSection title="2. Informations susceptibles d'être collectées">
          <p>
            Selon les fonctionnalités effectivement activées, le site peut
            collecter les informations suivantes :
          </p>

          <ul className="list-disc space-y-2 pl-6">
            <li>Nom et prénom.</li>
            <li>Adresse email et numéro de téléphone.</li>
            <li>Nom de l'entreprise ou de l'organisation.</li>
            <li>Informations relatives aux projets et demandes.</li>
            <li>Informations communiquées dans les candidatures.</li>
            <li>Préférences de consentement aux cookies.</li>
            <li>Données techniques nécessaires au fonctionnement et à la sécurité du site.</li>
          </ul>
        </LegalSection>

        <LegalSection title="3. Finalités de la collecte">
          <p>
            Les données peuvent être utilisées pour :
          </p>

          <ul className="list-disc space-y-2 pl-6">
            <li>Répondre aux demandes de contact.</li>
            <li>Étudier les demandes de devis et de projets.</li>
            <li>Examiner les propositions de partenariat.</li>
            <li>Traiter les candidatures.</li>
            <li>Améliorer le fonctionnement et la sécurité du site.</li>
            <li>Envoyer des communications lorsque la personne y a valablement consenti.</li>
          </ul>
        </LegalSection>

        <LegalSection title="4. Base juridique">
          <p>
            Selon la nature du traitement, INNOVTECH devra identifier la
            base juridique applicable : consentement, mesures
            précontractuelles, exécution d'un contrat, obligation légale ou
            intérêt légitime lorsque celui-ci est applicable.
          </p>
        </LegalSection>

        <LegalSection title="5. Durée de conservation">
          <p>
            Les données doivent être conservées pendant une durée adaptée
            à leur finalité et aux obligations applicables.
          </p>

          <p>
            INNOVTECH devra définir et documenter des durées distinctes
            pour les demandes commerciales, les candidatures, les
            inscriptions à la newsletter et les journaux techniques.
          </p>
        </LegalSection>

        <LegalSection title="6. Partage des données">
          <p>
            Les informations ne doivent être communiquées qu'aux personnes
            habilitées et aux prestataires nécessaires au fonctionnement
            des services, dans les limites des finalités annoncées.
          </p>

          <p>
            Les éventuels transferts de données hors du Cameroun devront
            faire l'objet des vérifications et garanties requises par la
            réglementation applicable.
          </p>
        </LegalSection>

        <LegalSection title="7. Sécurité">
          <p>
            INNOVTECH prévoit de mettre en place des mesures techniques et
            organisationnelles adaptées pour protéger les données contre
            les accès non autorisés, les pertes, les modifications et les
            divulgations non souhaitées.
          </p>
        </LegalSection>

        <LegalSection title="8. Vos droits">
          <p>
            Sous réserve des dispositions légales applicables, vous pouvez
            notamment demander l'accès à vos informations, leur
            rectification, leur suppression ou vous opposer à certains
            traitements.
          </p>

          <p>
            Pour exercer vos droits, contactez : [Adresse email officielle
            à compléter].
          </p>
        </LegalSection>

        <LegalSection title="9. Modifications">
          <p>
            Cette politique peut être mise à jour pour refléter les
            évolutions des services, des traitements ou de la
            réglementation applicable.
          </p>
        </LegalSection>

        <div className="rounded-2xl bg-blue-50 p-5">
          <p className="text-sm leading-7 text-slate-600">
            Pour toute question concernant la confidentialité, vous
            pouvez utiliser notre{" "}
            <Link
              to="/contact"
              className="font-semibold text-blue-700 underline"
            >
              formulaire de contact
            </Link>.
          </p>
        </div>
      </LegalLayout>
    </main>
  );
}