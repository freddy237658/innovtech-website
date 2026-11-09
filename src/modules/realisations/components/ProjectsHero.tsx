import { ArrowDown, ArrowRight, Layers3, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function ProjectsHero() {
  const { t } = useTranslation();

  return (
    <section className="relative isolate overflow-hidden bg-[#071A3D]">
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2000&q=85"
          alt=""
          className="h-full w-full object-cover opacity-20"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#071A3D] via-[#071A3D]/95 to-[#0645C0]/75" />
      </div>

      <div className="absolute -right-20 top-10 -z-10 h-72 w-72 rounded-full bg-blue-500/20 blur-[100px]" />

      <div className="mx-auto grid min-h-[590px] max-w-7xl items-center gap-12 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:px-10">
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="min-w-0"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-cyan-200">
            <Sparkles size={15} />
            {t("Portfolio INNOVTECH")}
          </span>

          <h1 className="mt-8 break-words text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {t("Des idées qui deviennent")}
            <span className="mt-2 block bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
              {t("des solutions.")}
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-blue-100/75 sm:text-lg">
            {t("Découvrez nos produits, plateformes et projets technologiques conçus pour répondre aux défis numériques des entreprises et des organisations.")}
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#catalogue-projets"
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-white px-6 py-3 font-bold text-[#071A3D] transition hover:bg-cyan-50"
            >
              {t("Explorer nos réalisations")}
              <ArrowDown size={18} />
            </a>

            <Link
              to="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl border border-white/25 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              {t("Proposer un projet")}
              <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto w-full max-w-lg"
        >
          <div className="absolute -inset-5 rounded-[2.5rem] bg-blue-400/20 blur-2xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 p-3 backdrop-blur-xl">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=85"
              alt={t("Équipe travaillant sur un projet technologique")}
              className="h-[300px] w-full rounded-[1.5rem] object-cover sm:h-[370px]"
            />

            <div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/20 bg-[#071A3D]/85 p-5 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400/15 text-cyan-300">
                  <Layers3 size={23} />
                </div>

                <div className="min-w-0">
                  <p className="font-bold text-white">
                    {t("Notre écosystème de produits")}
                  </p>
                  <p className="mt-1 text-xs text-blue-100/70">
                    {t("Logiciels, SaaS et innovations.")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}