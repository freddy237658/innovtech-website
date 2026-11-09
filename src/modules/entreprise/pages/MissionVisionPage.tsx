import {
  Compass,
  Eye,
  Flag,
  Globe,
  Lightbulb,
  Rocket,
} from "lucide-react";
import { useTranslation } from "react-i18next";

import CompanyCTA from "../components/CompanyCTA";
import SectionHeading from "../components/SectionHeading";

export default function MissionVisionPage() {
  const { t } = useTranslation();

  return (
    <main className="w-full overflow-hidden">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#071A3D]">
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-blue-600/30 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-24 text-center sm:px-6 sm:py-28 lg:px-8 lg:py-36">
          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold text-cyan-200">
            {t("Notre raison d'être")}
          </span>

          <h1 className="mx-auto mt-8 max-w-4xl break-words text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-7xl">
            {t("Imaginer aujourd'hui les solutions numériques de")}{" "}
            <span className="text-cyan-300">{t("demain.")}</span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-blue-100 sm:text-lg">
            {t("Notre mission et notre vision définissent la direction que nous souhaitons donner à chaque projet, chaque innovation et chaque collaboration.")}
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="min-w-0 overflow-hidden rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=85"
              alt={t("Collaboration autour d'un projet numérique")}
              className="h-72 w-full object-cover sm:h-[430px]"
            />
          </div>

          <div className="min-w-0">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
              <Flag size={32} />
            </div>

            <SectionHeading
              eyebrow="Notre mission"
              title="Rendre la technologie utile et accessible."
              description="Notre mission est de concevoir et de développer des solutions numériques fiables, innovantes et adaptées aux besoins réels des entreprises, des entrepreneurs et des organisations."
            />

            <p className="mt-6 text-base leading-8 text-slate-600">
              {t("Nous voulons simplifier les opérations, améliorer la productivité, faciliter l'accès aux outils numériques et accompagner nos partenaires dans leur transformation digitale.")}
            </p>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="min-w-0 lg:order-2">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700">
              <Eye size={32} />
            </div>

            <SectionHeading
              eyebrow="Notre vision"
              title="Devenir un acteur technologique de référence."
              description="Nous aspirons à construire une entreprise technologique capable de concevoir des produits numériques à fort impact, depuis l'Afrique vers le monde."
            />

            <p className="mt-6 text-base leading-8 text-slate-600">
              {t("Notre ambition est de contribuer à un écosystème où les entreprises, les institutions et les communautés disposent des technologies nécessaires pour innover et se développer.")}
            </p>
          </div>

          <div className="min-w-0 lg:order-1">
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=85"
              alt={t("Réseau technologique mondial")}
              className="h-72 w-full rounded-3xl object-cover shadow-xl sm:h-[430px]"
            />
          </div>
        </div>
      </section>

      {/* Ambitions */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Notre ambition"
            title="Construire un avenir numérique plus prometteur."
            description="Notre vision se traduit par des orientations concrètes qui guident notre développement."
            centered
          />

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Rocket,
                title: "Innover",
                text: "Explorer de nouvelles approches et technologies.",
              },
              {
                icon: Globe,
                title: "Rayonner",
                text: "Développer des solutions pour des marchés internationaux.",
              },
              {
                icon: Lightbulb,
                title: "Créer",
                text: "Transformer les idées en produits numériques utiles.",
              },
              {
                icon: Compass,
                title: "Accompagner",
                text: "Aider les organisations à évoluer durablement.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-100 p-6 transition hover:-translate-y-2 hover:shadow-xl sm:p-7"
                >
                  <Icon className="mb-5 text-blue-700" size={30} />
                  <h3 className="text-xl font-bold text-[#071A3D]">
                    {t(item.title)}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {t(item.text)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CompanyCTA />
    </main>
  );
}