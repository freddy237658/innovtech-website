import LegalHero from "../components/LegalHero";
import LegalLayout from "../components/LegalLayout";
import LegalSection from "../components/LegalSection";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <LegalHero
        eyebrow="Règles d'utilisation"
        title="Conditions générales d'utilisation"
        description="Les présentes conditions définissent les règles générales d'accès et d'utilisation du site INNOVTECH."
      />

      <LegalLayout currentPath="/conditions-generales">
        <div className="mb-10 rounded-2xl border border-amber-100 bg-amber-50 p-5">
          <p className="text-sm font-bold text-amber-800">
            Version provisoire
          </p>

          <p className="mt-2 text-sm leading-7 text-amber-700">
            Ce document doit être adapté aux services réellement proposés
            et vérifié juridiquement avant publication.
          </p>
        </div>

        <LegalSection title="1. Objet">
          <p>
            Les présentes conditions encadrent l'accès et l'utilisation du
            site web officiel d'INNOVTECH.
          </p>
        </LegalSection>

        <LegalSection title="2. Accès au site">
          <p>
            Le site est destiné à présenter INNOVTECH, ses activités, ses
            expertises, ses produits et ses services.
          </p>

          <p>
            L'utilisateur s'engage à utiliser le site conformément aux
            lois applicables et aux présentes conditions.
          </p>
        </LegalSection>

        <LegalSection title="3. Utilisation des formulaires">
          <p>
            Les utilisateurs s'engagent à communiquer des informations
            exactes, licites et à jour lorsqu'ils utilisent les formulaires
            disponibles.
          </p>

          <p>
            Il est interdit d'utiliser ces formulaires pour transmettre
            des contenus frauduleux, malveillants, illicites ou portant
            atteinte aux droits d'autrui.
          </p>
        </LegalSection>

        <LegalSection title="4. Propriété intellectuelle">
          <p>
            Sauf indication contraire, les éléments du site, notamment
            les textes, logos, illustrations, interfaces, créations
            graphiques et éléments logiciels, sont protégés par les
            dispositions applicables en matière de propriété intellectuelle.
          </p>

          <p>
            Leur reproduction ou exploitation nécessite l'autorisation
            préalable du titulaire des droits, sauf exception légale.
          </p>
        </LegalSection>

        <LegalSection title="5. Responsabilité">
          <p>
            INNOVTECH s'efforce de fournir des informations exactes et
            actualisées. Toutefois, certaines informations peuvent
            évoluer et le site peut être temporairement indisponible.
          </p>

          <p>
            Les informations présentées ne constituent pas
            automatiquement une offre commerciale ou un engagement
            contractuel.
          </p>
        </LegalSection>

        <LegalSection title="6. Liens externes">
          <p>
            Le site peut contenir des liens vers des plateformes tierces.
            INNOVTECH ne contrôle pas nécessairement leur contenu ni
            leurs politiques.
          </p>
        </LegalSection>

        <LegalSection title="7. Protection des données">
          <p>
            Le traitement des données personnelles est décrit dans notre
            politique de confidentialité.
          </p>
        </LegalSection>

        <LegalSection title="8. Modification des conditions">
          <p>
            INNOVTECH peut modifier les présentes conditions pour tenir
            compte de l'évolution du site et de ses services.
          </p>
        </LegalSection>

        <LegalSection title="9. Droit applicable">
          <p>
            Le droit applicable et les modalités de règlement des
            différends devront être précisés en fonction de la situation
            juridique de l'entreprise et des textes applicables.
          </p>
        </LegalSection>
      </LegalLayout>
    </main>
  );
}