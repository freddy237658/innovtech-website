import {
  communityPillars,
  communityAudiences,
  communityOpportunities,
} from "../data/communityData";

import CommunityHero from "../components/CommunityHero";
import CommunityPillarCard from "../components/CommunityPillarCard";
import CommunityAudience from "../components/CommunityAudience";
import CommunityOpportunityCard from "../components/CommunityOpportunityCard";
import CommunityIdeaForm from "../components/CommunityIdeaForm";
import CommunityCTA from "../components/CommunityCTA";
import CommunitySectionTitle from "../components/CommunitySectionTitle";

export default function CommunityPage() {
  return (
    <main className="min-w-0 overflow-x-clip bg-white">
      <CommunityHero />

      {/* Introduction */}
      <section className="px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <CommunitySectionTitle
              eyebrow="Notre communauté"
              title="Un écosystème où les talents se rencontrent."
              description="INNOVTECH souhaite favoriser les échanges entre les personnes qui partagent une passion pour la technologie et souhaitent participer à la transformation numérique."
            />

            <p className="text-sm leading-8 text-slate-500">
              Que vous soyez débutant, étudiant, développeur expérimenté,
              entrepreneur ou représentant d'une entreprise, vous pouvez
              apporter votre contribution à cet écosystème.
            </p>
          </div>

          <div className="relative min-w-0">
            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-3xl bg-cyan-100" />

            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85"
              alt="Communauté travaillant ensemble"
              loading="lazy"
              className="relative h-[320px] w-full rounded-[2rem] object-cover shadow-xl sm:h-[420px]"
            />
          </div>
        </div>
      </section>

      {/* Piliers */}
      <section className="bg-slate-50 px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <CommunitySectionTitle
            eyebrow="Nos piliers"
            title="Quatre valeurs pour avancer ensemble."
            description="La communauté INNOVTECH repose sur des principes qui encouragent le partage, la progression et la création de valeur."
            centered
          />

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {communityPillars.map((pillar, index) => (
              <CommunityPillarCard
                key={pillar.id}
                pillar={pillar}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Public */}
      <section className="px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <CommunitySectionTitle
            eyebrow="Qui peut participer ?"
            title="Une communauté ouverte à différents profils."
            description="Nous souhaitons réunir des profils complémentaires pour favoriser les échanges et les collaborations."
            centered
          />

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {communityAudiences.map((audience, index) => (
              <CommunityAudience
                key={audience.id}
                audience={audience}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Opportunités */}
      <section className="bg-slate-50 px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <CommunitySectionTitle
            eyebrow="Opportunités"
            title="Plusieurs façons de participer."
            description="La communauté est un espace de rencontre et de collaboration autour des projets et des ambitions technologiques."
          />

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {communityOpportunities.map((opportunity, index) => (
              <CommunityOpportunityCard
                key={opportunity.id}
                opportunity={opportunity}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Formulaire */}
      <section
        id="participer"
        className="scroll-mt-24 px-5 py-20 sm:px-8 lg:px-10 lg:py-28"
      >
        <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <CommunitySectionTitle
              eyebrow="Participer"
              title="Votre prochaine collaboration commence ici."
              description="Présentez-vous, partagez une idée ou expliquez comment vous aimeriez contribuer à l'écosystème INNOVTECH."
            />

            <div className="rounded-3xl bg-[#071A3D] p-7 sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/15 text-cyan-300">
                <span className="text-2xl font-bold">IT</span>
              </div>

              <h3 className="mt-6 text-xl font-bold text-white">
                Chaque idée mérite d'être explorée.
              </h3>

              <p className="mt-4 text-sm leading-7 text-blue-100/70">
                Nous sommes intéressés par les idées de produits, les
                propositions de collaboration, les initiatives technologiques
                et les partenariats qui peuvent créer de la valeur.
              </p>

              <div className="mt-7 border-t border-white/10 pt-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-cyan-300">
                  INNOVTECH
                </p>

                <p className="mt-2 text-sm text-blue-100/70">
                  Votre vision, nos technologies, votre réussite.
                </p>
              </div>
            </div>
          </div>

          <div className="min-w-0 rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_10px_50px_rgba(7,26,61,0.07)] sm:p-9">
            <h3 className="text-2xl font-bold text-[#071A3D]">
              Envoyer une proposition
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-500">
              Remplissez le formulaire ci-dessous pour nous présenter votre
              profil, votre idée ou votre proposition.
            </p>

            <div className="mt-8">
              <CommunityIdeaForm />
            </div>
          </div>
        </div>
      </section>

      <CommunityCTA />
    </main>
  );
}