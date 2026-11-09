import { Link, useParams } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Layers3,
  Lightbulb,
  Target,
} from "lucide-react";
import { useTranslation } from "react-i18next";

import { expertises } from "../data/expertisesData";
import ExpertiseCard from "../components/ExpertiseCard";
import TechnologyBadge from "../components/TechnologyBadge";

import CompanyCTA from "../../entreprise/components/CompanyCTA";
import SectionHeading from "../../entreprise/components/SectionHeading";

export default function ExpertiseDetailPage() {
  const { slug } = useParams();
  const { t } = useTranslation();

  const expertise = expertises.find((item) => item.slug === slug);

  if (!expertise) {
    return (
      <main className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
        <h1 className="text-3xl font-extrabold text-[#071A3D]">
          {t("Expertise introuvable")}
        </h1>

        <p className="mt-4 max-w-md text-slate-600">
          {t("Le domaine recherché n'existe pas ou n'est pas disponible.")}
        </p>

        <Link
          to="/expertises"
          className="mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-700 px-6 py-3 font-bold text-white"
        >
          {t("Voir toutes les expertises")}
          <ArrowRight size={18} />
        </Link>
      </main>
    );
  }

  const Icon = expertise.icon;

  const otherExpertises = expertises
    .filter((item) => item.slug !== expertise.slug)
    .slice(0, 3);

  return (
    <main className="w-full overflow-hidden">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#071A3D] via-blue-950 to-blue-800">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div className="min-w-0">
            <Link
              to="/expertises"
              className="text-sm font-semibold text-cyan-200 hover:text-white"
            >
              ← {t("Toutes nos expertises")}
            </Link>

            <div className="mt-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-blue-700">
              <Icon size={32} />
            </div>

            <span className="mt-7 block text-sm font-bold uppercase tracking-wider text-cyan-300">
              {t("Expertise")} {expertise.number}
            </span>

            <h1 className="mt-4 break-words text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              {t(expertise.title)}
            </h1>

            <p className="mt-6 text-base leading-8 text-blue-100 sm:text-lg">
              {t(expertise.fullDescription)}
            </p>

            <Link
              to="/contact"
              className="mt-9 inline-flex max-w-full items-center justify-center gap-3 rounded-xl bg-white px-6 py-4 text-sm font-bold text-blue-800 transition hover:-translate-y-1 hover:bg-cyan-50 sm:text-base"
            >
              {t("Discuter de votre projet")}
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="min-w-0">
            <div className="overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-2 shadow-2xl">
              <img
                src={expertise.image}
                alt={t(expertise.title)}
                className="h-64 w-full rounded-2xl object-cover sm:h-96 lg:h-[450px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Présentation */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="min-w-0">
            <SectionHeading
              eyebrow="Présentation"
              title={t(expertise.subtitle)}
              description={t(expertise.fullDescription)}
            />

            <p className="mt-6 text-base leading-8 text-slate-600">
              {t("Notre démarche consiste à étudier le contexte du projet et à identifier les choix techniques qui permettent d'obtenir une solution cohérente, maintenable et adaptée à ses utilisateurs.")}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              {
                icon: Target,
                title: "Objectif",
                text: "Répondre aux besoins techniques et fonctionnels du projet.",
              },
              {
                icon: Layers3,
                title: "Architecture",
                text: "Organiser les composants de manière cohérente.",
              },
              {
                icon: Lightbulb,
                title: "Innovation",
                text: "Explorer les approches adaptées aux nouveaux besoins.",
              },
              {
                icon: CheckCircle2,
                title: "Qualité",
                text: "Privilégier des solutions fiables et maintenables.",
              },
            ].map((item) => {
              const ItemIcon = item.icon;

              return (
                <div
                  key={item.title}
                  className="min-w-0 rounded-2xl border border-slate-100 p-5 sm:p-6"
                >
                  <ItemIcon className="mb-4 text-blue-700" size={28} />

                  <h3 className="font-bold text-[#071A3D]">
                    {t(item.title)}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {t(item.text)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capacités */}
      <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Nos capacités"
            title="Les domaines d'intervention."
            description="Voici les principales activités associées à cette expertise."
            centered
          />

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {expertise.capabilities.map((capability, index) => (
              <div
                key={capability}
                className="flex min-w-0 items-start gap-4 rounded-2xl border border-slate-100 bg-white p-5"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-blue-700">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="pt-1 text-sm font-semibold leading-6 text-[#071A3D]">
                  {t(capability)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Technologies"
            title="Environnements technologiques."
            description="Les outils susceptibles d'être utilisés selon la nature du projet."
          />

          <div className="mt-10 flex flex-wrap gap-3">
            {expertise.technologies.map((technology) => (
              <TechnologyBadge key=              {t(technology)} name={technology} />
            ))}
          </div>
        </div>
      </section>

      {/* Bénéfices */}
      <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Valeur ajoutée"
            title="Ce que cette expertise peut apporter à votre projet."
            centered
          />

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {expertise.benefits.map((benefit) => (
              <div
                key={benefit}
                className="rounded-2xl border border-blue-100 bg-white p-6"
              >
                <CheckCircle2 className="mb-4 text-blue-700" size={27} />

                <p className="text-sm font-semibold leading-7 text-[#071A3D]">
                  {t(benefit)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Domaines d'application"
            title="Où cette expertise intervient-elle ?"
            centered
          />

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {expertise.applications.map((application) => (
              <span
                key={application}
                className="max-w-full break-words rounded-xl bg-blue-50 px-5 py-3 text-sm font-bold text-blue-800"
              >
                {t(application)}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Autres expertises */}
      <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="À découvrir également"
            title="Nos autres domaines d'expertise."
            centered
          />

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {otherExpertises.map((item, index) => (
              <ExpertiseCard
                key={item.id}
                expertise={item}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <CompanyCTA />
    </main>
  );
}