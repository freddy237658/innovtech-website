import {
  Search,
  PenTool,
  Code2,
  TestTube2,
  Rocket,
  Headphones,
  CheckCircle2,
} from "lucide-react";
import { useTranslation } from "react-i18next";

import CompanyCTA from "../components/CompanyCTA";
import SectionHeading from "../components/SectionHeading";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Comprendre",
    description:
      "Nous échangeons avec vous pour comprendre vos besoins, vos difficultés, vos objectifs et vos contraintes.",
    result: "Analyse des besoins et définition des objectifs.",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Concevoir",
    description:
      "Nous définissons la solution, son architecture, son expérience utilisateur et ses principales fonctionnalités.",
    result: "Maquettes, spécifications et architecture.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Développer",
    description:
      "Nous transformons la conception en une solution fonctionnelle avec des technologies adaptées au projet.",
    result: "Développement progressif de la solution.",
  },
  {
    number: "04",
    icon: TestTube2,
    title: "Tester",
    description:
      "Nous vérifions le fonctionnement, la sécurité, la performance et l'expérience utilisateur.",
    result: "Corrections et validation technique.",
  },
  {
    number: "05",
    icon: Rocket,
    title: "Déployer",
    description:
      "Nous préparons la mise en production et accompagnons le lancement de votre solution.",
    result: "Mise en ligne et livraison.",
  },
  {
    number: "06",
    icon: Headphones,
    title: "Accompagner",
    description:
      "Nous pouvons poursuivre l'accompagnement avec la maintenance, les améliorations et l'évolution du produit.",
    result: "Suivi et amélioration continue.",
  },
];

export default function ApproachPage() {
  const { t } = useTranslation();

  return (
    <main className="w-full overflow-hidden">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#071A3D]">
        <div className="absolute -right-24 top-0 h-96 w-96 rounded-full bg-blue-600/30 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-2 lg:px-8 lg:py-32">
          <div className="min-w-0">
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-cyan-200">
              {t("Notre méthodologie")}
            </span>

            <h1 className="mt-7 break-words text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              {t("Une approche structurée pour des")}{" "}
              <span className="text-cyan-300">{t("résultats concrets.")}</span>
            </h1>

            <p className="mt-6 text-base leading-8 text-blue-100 sm:text-lg">
              {t("Chaque projet est différent. Notre méthode nous permet de travailler avec clarté, de réduire les incertitudes et de construire des solutions adaptées à vos objectifs.")}
            </p>
          </div>

          <div className="min-w-0">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=85"
              alt={t("Équipe en réunion de planification")}
              className="h-72 w-full rounded-3xl object-cover shadow-2xl sm:h-[400px]"
            />
          </div>
        </div>
      </section>

      {/* Méthode */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Notre processus"
            title="De l'idée à la réalisation."
            description="Nous organisons chaque projet autour de six grandes étapes. Leur contenu peut être adapté selon la nature et l'ampleur du projet."
            centered
          />

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="relative min-w-0 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-2 hover:shadow-xl sm:p-8"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                      <Icon size={28} />
                    </div>

                    <span className="text-4xl font-black text-slate-100">
                      {step.number}
                    </span>
                  </div>

                  <h2 className="mt-7 text-2xl font-bold text-[#071A3D]">
                    {t(step.title)}
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {t(step.description)}
                  </p>

                  <div className="mt-6 flex items-start gap-3 rounded-xl bg-blue-50 p-4">
                    <CheckCircle2
                      size={19}
                      className="mt-0.5 shrink-0 text-blue-700"
                    />
                    <p className="text-sm font-semibold leading-6 text-blue-900">
                      {t(step.result)}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Engagements */}
      <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="min-w-0">
            <SectionHeading
              eyebrow="Nos engagements"
              title="Un accompagnement fondé sur la confiance."
              description="Au-delà du développement technique, nous voulons construire une relation professionnelle transparente et durable."
            />
          </div>

          <div className="space-y-4">
            {[
              "Une communication claire tout au long du projet.",
              "Des solutions pensées selon vos besoins réels.",
              "Une attention particulière à la qualité technique.",
              "Une approche adaptée à votre budget et à vos contraintes.",
              "Un accompagnement dans la durée selon vos besoins.",
            ].map((item) => (
              <div
                key={item}
                className="flex min-w-0 items-start gap-4 rounded-2xl border border-slate-100 bg-white p-5"
              >
                <CheckCircle2
                  size={22}
                  className="mt-0.5 shrink-0 text-blue-700"
                />
                <p className="text-sm font-medium leading-7 text-slate-700">
                  {t(item)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CompanyCTA />
    </main>
  );
}