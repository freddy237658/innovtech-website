import {
  Code2,
  Lightbulb,
  Rocket,
  ShieldCheck,
  Target,
  Users,
  Workflow,
  Globe2,
} from "lucide-react";
import { useTranslation } from "react-i18next";

import CompanyHero from "../components/CompanyHero";
import CompanyCTA from "../components/CompanyCTA";
import SectionHeading from "../components/SectionHeading";

const activities = [
  {
    icon: Code2,
    title: "Développement logiciel",
    description:
      "Nous concevons des logiciels et des plateformes adaptés aux besoins spécifiques des organisations.",
  },
  {
    icon: Globe2,
    title: "Solutions web",
    description:
      "Nous créons des sites web et des applications modernes, accessibles et performants.",
  },
  {
    icon: Rocket,
    title: "Produits SaaS",
    description:
      "Nous développons des solutions numériques évolutives pensées pour répondre à des besoins concrets.",
  },
  {
    icon: Workflow,
    title: "Digitalisation",
    description:
      "Nous accompagnons les organisations dans la modernisation et l'automatisation de leurs activités.",
  },
  {
    icon: Lightbulb,
    title: "Innovation technologique",
    description:
      "Nous explorons les technologies émergentes pour imaginer de nouvelles possibilités.",
  },
  {
    icon: ShieldCheck,
    title: "Accompagnement informatique",
    description:
      "Nous proposons des services de conseil, d'assistance et d'accompagnement technologique.",
  },
];

const differentiators = [
  {
    number: "01",
    title: "Comprendre avant de développer",
    description:
      "Chaque projet commence par l'analyse des besoins et des objectifs.",
  },
  {
    number: "02",
    title: "Créer des solutions utiles",
    description:
      "Nous privilégions les fonctionnalités qui apportent une réelle valeur.",
  },
  {
    number: "03",
    title: "Penser à long terme",
    description:
      "Nous accordons une importance particulière à la qualité, à la sécurité et à l'évolutivité.",
  },
];

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <main className="w-full overflow-hidden">
      <CompanyHero
        eyebrow="À propos d'INNOVTECH"
        title="La technologie au service de"
        highlight="vos ambitions."
        description="INNOVTECH est une entreprise technologique dédiée à la conception de solutions numériques innovantes. Nous accompagnons les entreprises, les entrepreneurs et les organisations dans leurs projets de transformation digitale."
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=85"
        imageAlt="Équipe travaillant ensemble sur un projet technologique"
      />

      {/* Présentation */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="min-w-0">
            <SectionHeading
              eyebrow="Qui sommes-nous ?"
              title="Nous transformons les idées en solutions numériques."
              description="Le numérique offre de nouvelles opportunités aux entreprises et aux organisations. Notre rôle est de rendre ces opportunités accessibles grâce à des technologies adaptées, modernes et performantes."
            />

            <p className="mt-6 text-base leading-8 text-slate-600">
              {t("De la réflexion initiale à la mise en œuvre technique, nous cherchons à construire des solutions qui répondent à de véritables problématiques. Notre approche repose sur l'écoute, la créativité, la rigueur et l'amélioration continue.")}
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-blue-100 bg-blue-50/70 p-5">
                <Target className="mb-3 text-blue-700" size={28} />
                <h3 className="font-bold text-[#071A3D]">{t("Notre objectif")}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {t("Apporter des réponses concrètes aux défis numériques.")}
                </p>
              </div>

              <div className="rounded-2xl border border-cyan-100 bg-cyan-50/70 p-5">
                <Users className="mb-3 text-cyan-700" size={28} />
                <h3 className="font-bold text-[#071A3D]">{t("Nos partenaires")}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {t("Entreprises, entrepreneurs et organisations.")}
                </p>
              </div>
            </div>
          </div>

          <div className="relative min-w-0">
            <div className="absolute -bottom-5 -left-5 h-32 w-32 rounded-3xl bg-cyan-100" />
            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1100&q=85"
              alt={t("Espace de travail moderne")}
              className="relative h-72 w-full rounded-3xl object-cover shadow-xl sm:h-[420px]"
            />
            <div className="absolute bottom-5 right-4 max-w-[85%] rounded-2xl bg-white p-4 shadow-xl sm:bottom-8 sm:right-8 sm:p-6">
              <p className="text-sm font-bold text-[#071A3D]">
                {t("Votre vision, nos technologies, votre réussite.")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Activités */}
      <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Nos domaines d'intervention"
            title="Un partenaire pour vos projets numériques."
            description="Nous intervenons sur plusieurs domaines complémentaires pour accompagner les organisations à chaque étape de leur évolution technologique."
            centered
          />

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {activities.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group min-w-0 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 sm:p-8"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white">
                    <Icon size={27} />
                  </div>

                  <h3 className="text-xl font-bold text-[#071A3D]">
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

      {/* Notre différence */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Notre différence"
              title="La valeur avant la technologie."
              description="La meilleure solution n'est pas nécessairement la plus complexe. C'est celle qui répond efficacement au problème rencontré."
            />
          </div>

          <div className="space-y-5">
            {differentiators.map((item) => (
              <div
                key={item.number}
                className="flex min-w-0 gap-5 rounded-2xl border border-slate-100 p-5 sm:p-6"
              >
                <span className="shrink-0 text-2xl font-extrabold text-blue-600">
                  {item.number}
                </span>

                <div className="min-w-0">
                  <h3 className="font-bold text-[#071A3D] sm:text-lg">
                    {t(item.title)}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {t(item.description)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CompanyCTA />
    </main>
  );
}