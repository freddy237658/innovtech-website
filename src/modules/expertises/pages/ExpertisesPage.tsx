import {
  ArrowRight,
  CheckCircle2,
  Lightbulb,
  Layers3,
  Workflow,
} from "lucide-react";

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import ExpertiseHero from "../components/ExpertiseHero";
import ExpertiseCard from "../components/ExpertiseCard";
import { expertises } from "../data/expertisesData";

import CompanyCTA from "../../entreprise/components/CompanyCTA";
import SectionHeading from "../../entreprise/components/SectionHeading";

export default function ExpertisesPage() {
  const { t } = useTranslation();

  return (
    <main className="w-full overflow-hidden">
      <ExpertiseHero />

      {/* Introduction */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="min-w-0">
            <SectionHeading
              eyebrow="Notre savoir-faire"
              title="Des compétences techniques complémentaires."
              description="La conception d'une solution numérique nécessite plusieurs compétences. Nous structurons notre approche autour de domaines technologiques qui travaillent ensemble."
            />

            <p className="mt-6 text-base leading-8 text-slate-600">
              {t("Notre démarche consiste à choisir les technologies adaptées à chaque projet, à organiser les différents composants et à rechercher un équilibre entre performance, sécurité, qualité et évolutivité.")}
            </p>

            <Link
              to="/services"
              className="mt-8 inline-flex items-center gap-3 font-bold text-blue-700 transition hover:text-cyan-600"
            >
              {t("Découvrir nos services")}
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="relative min-w-0">
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1100&q=85"
              alt={t("Collaboration technique entre développeurs")}
              className="h-72 w-full rounded-3xl object-cover shadow-xl sm:h-[420px]"
            />

            <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/50 bg-white/95 p-5 shadow-xl backdrop-blur sm:bottom-8 sm:left-8 sm:right-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 shrink-0 text-blue-700" />

                <div>
                  <p className="font-bold text-[#071A3D]">
                    {t("Une approche technologique globale")}
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {t("Des interfaces aux infrastructures, chaque composant contribue au fonctionnement de la solution.")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Domaines */}
      <section
        id="domaines"
        className="scroll-mt-24 bg-slate-50 px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Nos domaines techniques"
            title="Explorez nos expertises."
            description="Découvrez les différents domaines technologiques sur lesquels nous développons nos compétences et construisons nos solutions."
            centered
          />

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {expertises.map((expertise, index) => (
              <ExpertiseCard
                key={expertise.id}
                expertise={expertise}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Approche technique */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Notre approche technique"
            title="Construire des solutions cohérentes."
            description="Une solution performante repose sur plusieurs éléments qui doivent fonctionner ensemble."
            centered
          />

          <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              {
                icon: Layers3,
                title: "Architecture",
                description:
                  "Organiser les composants, les services et les données de manière cohérente.",
              },
              {
                icon: Workflow,
                title: "Intégration",
                description:
                  "Assurer la communication entre les interfaces, les API et les systèmes.",
              },
              {
                icon: Lightbulb,
                title: "Évolution",
                description:
                  "Préparer les solutions à accueillir de nouvelles fonctionnalités.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="min-w-0 rounded-3xl border border-slate-100 p-7 transition hover:-translate-y-2 hover:shadow-xl sm:p-9"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                    <Icon size={28} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-[#071A3D]">
                    {t(item.title)}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {t(item.description)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="bg-[#071A3D] px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="text-sm font-bold uppercase tracking-wider text-cyan-300">
              {t("Écosystème technologique")}
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
              {t("Des outils adaptés aux défis numériques.")}
            </h2>

            <p className="mt-5 text-base leading-8 text-blue-100">
              {t("Nous sélectionnons les environnements techniques selon les objectifs, les contraintes et les besoins de chaque projet.")}
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {[
              "React",
              "Next.js",
              "Laravel",
              "PHP",
              "Python",
              "JavaScript",
              "TypeScript",
              "PostgreSQL",
              "MySQL",
              "Docker",
              "Git",
              "Linux",
              "Redis",
              "REST API",
              "Tailwind CSS",
            ].map((technology) => (
              <span
                key={technology}
                className="max-w-full break-words rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CompanyCTA />
    </main>
  );
}