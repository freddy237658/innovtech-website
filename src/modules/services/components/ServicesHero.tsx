import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function ServicesHero() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#071A3D] via-blue-950 to-blue-800">
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-blue-500/30 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-2 lg:px-8 lg:py-32">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="min-w-0"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-cyan-200">
            <Sparkles size={16} />
            {t("Nos services")}
          </span>

          <h1 className="mt-7 break-words text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            {t("Des solutions numériques pour")}{" "}
            <span className="text-cyan-300">{t("aller plus loin.")}</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-blue-100 sm:text-lg">
            {t("Du développement logiciel à la transformation digitale, nous mettons la technologie au service de vos ambitions.")}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#nos-services"
              className="inline-flex max-w-full items-center justify-center gap-3 rounded-xl bg-white px-6 py-4 text-sm font-bold text-blue-800 transition hover:-translate-y-1 hover:bg-cyan-50 sm:text-base"
            >
              {t("Découvrir nos services")}
              <ArrowRight size={18} />
            </a>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-white/30 px-6 py-4 text-sm font-bold text-white transition hover:bg-white/10 sm:text-base"
            >
              {t("Demander un devis")}
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative min-w-0"
        >
          <div className="overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-2 shadow-2xl backdrop-blur-sm">
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85"
              alt={t("Équipe collaborant sur des solutions numériques")}
              className="h-64 w-full rounded-2xl object-cover sm:h-96"
            />
          </div>

          <div className="absolute -bottom-5 left-3 right-3 rounded-2xl border border-white/30 bg-white p-4 shadow-xl sm:-bottom-7 sm:left-8 sm:right-auto sm:max-w-xs sm:p-5">
            <p className="text-xs font-bold uppercase tracking-wider text-blue-700">
              INNOVTECH
            </p>
            <p className="mt-1 text-sm font-bold text-[#071A3D]">
              {t("L'innovation au service de votre avenir numérique.")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}