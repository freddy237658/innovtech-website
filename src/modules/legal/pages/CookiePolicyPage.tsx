import LegalHero from "../components/LegalHero";
import LegalLayout from "../components/LegalLayout";
import LegalSection from "../components/LegalSection";

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <LegalHero
        eyebrow="Navigation & préférences"
        title="Politique relative aux cookies"
        description="Comprenez le rôle des cookies et découvrez comment gérer vos préférences de navigation sur le site INNOVTECH."
      />

      <LegalLayout currentPath="/cookies">
        <div className="mb-10 rounded-2xl border border-amber-100 bg-amber-50 p-5">
          <p className="text-sm font-bold text-amber-800">
            Configuration à vérifier
          </p>

          <p className="mt-2 text-sm leading-7 text-amber-700">
            Cette politique doit être ajustée après inventaire des cookies,
            traceurs, outils statistiques et services tiers réellement
            installés sur le site.
          </p>
        </div>

        <LegalSection title="1. Qu'est-ce qu'un cookie ?">
          <p>
            Un cookie est un petit fichier ou identifiant enregistré sur
            votre appareil par un site web afin de conserver certaines
            informations relatives à votre navigation.
          </p>
        </LegalSection>

        <LegalSection title="2. Les catégories de cookies">
          <p>
            Les cookies susceptibles d'être utilisés sur le site sont
            regroupés en plusieurs catégories :
          </p>

          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Essentiels :</strong> nécessaires au fonctionnement
              et à la sécurité du site.
            </li>
            <li>
              <strong>Préférences :</strong> mémorisent certains choix de
              navigation.
            </li>
            <li>
              <strong>Statistiques :</strong> permettent de comprendre
              l'utilisation du site lorsqu'un outil de mesure est installé.
            </li>
            <li>
              <strong>Marketing :</strong> servent éventuellement à
              mesurer ou personnaliser des campagnes publicitaires.
            </li>
          </ul>
        </LegalSection>

        <LegalSection title="3. Cookies essentiels">
          <p>
            Certains mécanismes techniques peuvent être indispensables
            pour assurer la sécurité, conserver les préférences ou faire
            fonctionner certaines fonctionnalités.
          </p>
        </LegalSection>

        <LegalSection title="4. Gestion de vos préférences">
          <p>
            Vous pouvez utiliser le panneau de préférences affiché sur le
            site pour accepter ou refuser les catégories facultatives
            proposées.
          </p>

          <p>
            Les choix disponibles doivent correspondre aux traceurs
            réellement utilisés. Les catégories facultatives ne doivent
            pas être activées avant le consentement lorsqu'un tel
            consentement est requis.
          </p>
        </LegalSection>

        <LegalSection title="5. Durée de conservation">
          <p>
            Les durées de conservation des cookies doivent être définies
            selon leur finalité, leur fournisseur et les règles applicables.
          </p>
        </LegalSection>

        <LegalSection title="6. Contact">
          <p>
            Pour toute question concernant les cookies et les préférences
            de navigation, contactez INNOVTECH par le formulaire de contact.
          </p>
        </LegalSection>
      </LegalLayout>
    </main>
  );
}