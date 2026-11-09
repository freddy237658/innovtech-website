import {
  Award,
  HeartHandshake,
  Lightbulb,
  ShieldCheck,
  Target,
  Users,
  Zap,
  RefreshCw,
} from "lucide-react";
import { useTranslation } from "react-i18next";

import CompanyCTA from "../components/CompanyCTA";
import SectionHeading from "../components/SectionHeading";

const values = [
  {
    icon: Lightbulb,
    number: "01",
    title: "Innovation",
    description:
      "Nous encourageons la créativité, l'exploration et l'adoption de nouvelles technologies pour concevoir des solutions pertinentes.",
  },
  {
    icon: ShieldCheck,
    number: "02",
    title: "Qualité",
    description:
      "Nous accordons une attention particulière à la fiabilité, à la sécurité, à la performance et à la maintenabilité de nos réalisations.",
  },
  {
    icon: HeartHandshake,
    number: "03",
    title: "Intégrité",
    description:
      "Nous privilégions la transparence, le respect des engagements et des relations professionnelles fondées sur la confiance.",
  },
  {
    icon: Users,
    number: "04",
    title: "Collaboration",
    description:
      "Nous croyons que les meilleurs résultats naissent de l'écoute, du partage des idées et du travail collectif.",
  },
  {
    icon: Target,
    number: "05",
    title: "Orientation résultats",
    description:
      "Nous concentrons nos efforts sur les besoins réels et les objectifs concrets de nos partenaires.",
  },
  {
    icon: RefreshCw,
    number: "06",
    title: "Amélioration continue",
    description:
      "Nous apprenons, évaluons et améliorons constamment nos méthodes et nos solutions.",
  },
  {
    icon: Zap,
    number: "07",
    title: "Agilité",
    description:
      "Nous savons nous adapter aux changements, aux contraintes et aux évolutions des projets.",
  },
  {
    icon: Award,
    number: "08",
    title: "Responsabilité",
    description:
      "Nous cherchons à développer des solutions utiles, durables et respectueuses de leurs utilisateurs.",
  },
];

export default function ValuesPage() {
  const { t } = useTranslation();

  return (
    <main className="w-full overflow-hidden">
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
        <div className="mx-auto max-w-7xl text-center">
          <span className="inline-flex rounded-full border border-blue-100 bg-white px-5 py-2 text-sm font-bold text-blue-700 shadow-sm">
            {t("Ce qui nous définit")}
          </span>

          <h1 className="mx-auto mt-8 max-w-4xl break-words text-4xl font-extrabold leading-tight tracking-tight text-[#071A3D] sm:text-5xl lg:text-7xl">
            {t("Nos valeurs, le fondement de")}{" "}
            <span className="bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">
              {t("chacune de nos actions.")}
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            {t("Les principes qui orientent nos décisions, notre manière de collaborer et la qualité des solutions que nous construisons.")}
          </p>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Nos principes"
            title="Des valeurs qui donnent du sens à notre travail."
            description="Nos valeurs ne sont pas de simples déclarations. Elles représentent les principes que nous souhaitons appliquer au quotidien."
            centered
          />

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article
                  key={value.number}
                  className="group min-w-0 rounded-3xl border border-slate-100 bg-white p-6 transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-900/5 sm:p-7"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white">
                      <Icon size={27} />
                    </div>

                    <span className="text-2xl font-extrabold text-slate-100">
                      {value.number}
                    </span>
                  </div>

                  <h2 className="mt-7 text-xl font-bold text-[#071A3D]">
                    {t(value.title)}
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {t(value.description)}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#071A3D] px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            {t("Des principes solides. Des solutions durables.")}
          </h2>

          <p className="mt-6 text-base leading-8 text-blue-100 sm:text-lg">
            {t("Nous voulons construire des relations de confiance et développer des technologies qui créent une valeur réelle.")}
          </p>
        </div>
      </section>

      <CompanyCTA />
    </main>
  );
}