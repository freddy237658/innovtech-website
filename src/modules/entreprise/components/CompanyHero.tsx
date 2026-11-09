import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface CompanyHeroProps {
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  image: string;
  imageAlt: string;
}

export default function CompanyHero({
  eyebrow,
  title,
  highlight,
  description,
  image,
  imageAlt,
}: CompanyHeroProps) {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/50 to-cyan-50/40">
      <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-28">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 min-w-0"
        >
          <span className="mb-6 inline-flex rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-blue-700 shadow-sm sm:text-sm">
            {t(eyebrow)}
          </span>

          <h1 className="break-words text-4xl font-extrabold leading-[1.15] tracking-tight text-[#071A3D] sm:text-5xl lg:text-6xl">
            {t(title)}{" "}
            <span className="bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">
              {t(highlight)}
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
            {t(description)}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex max-w-full items-center justify-center gap-3 rounded-xl bg-blue-700 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-blue-700/20 transition hover:-translate-y-1 hover:bg-blue-800 sm:text-base"
            >
              {t("Parlons de votre projet")}
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/realisations"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-4 text-sm font-bold text-[#071A3D] transition hover:border-blue-300 hover:text-blue-700 sm:text-base"
            >
              {t("Nos réalisations")}
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative min-w-0"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-blue-500/20 to-cyan-400/20 blur-2xl" />

          <div className="relative overflow-hidden rounded-3xl border border-white bg-white p-2 shadow-2xl shadow-blue-900/10">
            <img
              src={image}
              alt={imageAlt}
              className="h-64 w-full rounded-2xl object-cover sm:h-80 lg:h-[460px]"
            />

            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/50 bg-white/90 p-4 shadow-lg backdrop-blur-md sm:bottom-8 sm:left-8 sm:right-8 sm:p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-blue-700">
                INNOVTECH
              </p>
              <p className="mt-1 text-sm font-bold text-[#071A3D] sm:text-base">
                {t("L'innovation au service de votre avenir numérique.")}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}