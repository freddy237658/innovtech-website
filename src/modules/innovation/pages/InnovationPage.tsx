import { ArrowRight, FlaskConical, Lightbulb, Microscope } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import InnovationHero from "../components/InnovationHero";
import InnovationCard from "../components/InnovationCard";
import InnovationCTA from "../components/InnovationCTA";
import InnovationSectionTitle from "../components/InnovationSectionTitle";
import { innovations } from "../data/innovationData";

const approach = [
  {
    icon: Lightbulb,
    title: "Identifier les opportunités",
    description:
      "Analyser les besoins et identifier les problèmes pouvant bénéficier de nouvelles technologies.",
  },
  {
    icon: Microscope,
    title: "Explorer et expérimenter",
    description:
      "Étudier les technologies, tester les approches et réaliser des preuves de concept.",
  },
  {
    icon: FlaskConical,
    title: "Construire des solutions",
    description:
      "Faire évoluer les expérimentations pertinentes vers des produits et fonctionnalités concrets.",
  },
];

export default function InnovationPage() {
  const { t } = useTranslation();

  return (
    <main className="min-w-0 overflow-x-clip bg-white">
      <InnovationHero />

      {/* Introduction */}
      <section className="px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div className="min-w-0">
            <InnovationSectionTitle
              eyebrow="Notre vision"
              title="L'innovation comme moteur de transformation."
              description="La technologie évolue constamment. Notre ambition est de comprendre ces évolutions, d'en explorer le potentiel et de les transformer progressivement en solutions utiles."
            />

            <Link
              to="/entreprise"
              className="inline-flex min-h-11 items-center gap-2 font-bold text-blue-700 transition hover:gap-4"
            >
              {t("Découvrir INNOVTECH")}
              <ArrowRight size={18} />
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative min-w-0"
          >
            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-3xl bg-cyan-100" />
            <img
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=85"
              alt={t("Recherche et expérimentation technologique")}
              loading="lazy"
              className="relative h-[320px] w-full rounded-[2rem] object-cover shadow-xl sm:h-[420px]"
            />
            <div className="absolute -bottom-5 right-4 max-w-[230px] rounded-2xl border border-slate-100 bg-white p-5 shadow-xl sm:right-8">
              <p className="text-sm font-bold text-[#071A3D]">
                {t("Penser. Expérimenter. Construire.")}
              </p>
              <p className="mt-2 text-xs leading-6 text-slate-500">
                {t("Une démarche progressive tournée vers l'avenir.")}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Domaines */}
      <section
        id="domaines-innovation"
        className="scroll-mt-24 bg-slate-50 px-5 py-20 sm:px-8 lg:px-10 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <InnovationSectionTitle
            eyebrow="Nos domaines d'exploration"
            title="Les technologies que nous explorons."
            description="Découvrez les domaines technologiques sur lesquels portent nos activités d'exploration, d'expérimentation et de développement."
            centered
          />

          <div className="grid min-w-0 grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {innovations.map((innovation, index) => (
              <InnovationCard
                key={innovation.id}
                innovation={innovation}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Approche */}
      <section className="px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <InnovationSectionTitle
            eyebrow="Notre approche"
            title="De l'idée à la solution."
            description="Nous privilégions une démarche structurée pour transformer les opportunités technologiques en projets concrets."
            centered
          />

          <div className="grid gap-8 md:grid-cols-3">
            {approach.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12 }}
                  className="min-w-0 rounded-3xl border border-slate-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl sm:p-9"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                    <Icon size={27} />
                  </div>

                  <span className="mt-7 block text-xs font-bold uppercase tracking-widest text-blue-600">
                    {t("Étape")} 0{index + 1}
                  </span>

                  <h3 className="mt-3 break-words text-xl font-bold text-[#071A3D]">
                    {t(item.title)}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-500">
                    {t(item.description)}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* InnovLLM */}
      <section className="overflow-hidden bg-[#071A3D] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div className="min-w-0">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-cyan-200">
              <Lightbulb size={15} />
              {t("Projet IA")}
            </span>

            <h2 className="mt-7 break-words text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              {t("InnovLLM : explorer le potentiel des modèles de langage.")}
            </h2>

            <p className="mt-6 text-base leading-8 text-blue-100/70">
              {t("InnovLLM est un projet de recherche et de développement autour des grands modèles de langage. L'objectif est d'explorer les architectures, les méthodes d'entraînement et les possibilités de création d'assistants intelligents.")}
            </p>

            <div className="mt-7">
              <span className="inline-flex rounded-full border border-blue-300/20 bg-blue-400/10 px-4 py-2 text-xs font-semibold text-blue-100">
                {t("Projet en développement")}
              </span>
            </div>

            <Link
              to="/realisations"
              className="mt-9 inline-flex min-h-12 items-center gap-3 rounded-xl bg-white px-6 py-3 font-bold text-[#071A3D] transition hover:bg-cyan-50"
            >
              {t("Découvrir nos projets")}
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="relative min-w-0">
            <div className="absolute -inset-5 rounded-full bg-blue-500/20 blur-3xl" />
            <img
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=85"
              alt={t("Illustration de l'intelligence artificielle")}
              loading="lazy"
              className="relative h-[320px] w-full rounded-[2rem] object-cover sm:h-[440px]"
            />
          </div>
        </div>
      </section>

      <InnovationCTA />
    </main>
  );
}