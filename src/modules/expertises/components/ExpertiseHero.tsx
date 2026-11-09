import { ArrowRight, Code2, Cpu, Database } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function ExpertiseHero() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-[#071A3D]">
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-600/30 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-2 lg:px-8 lg:py-32">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="min-w-0"
        >
          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-cyan-200">
            {t("Nos expertises technologiques")}
          </span>

          <h1 className="mt-7 break-words text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            {t("L'expertise technique au service de")}{" "}
            <span className="text-cyan-300">{t("l'innovation.")}</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-blue-100 sm:text-lg">
            {t("Du frontend à l'infrastructure, nous explorons les technologies qui permettent de concevoir, développer et faire évoluer des solutions numériques.")}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#domaines"
              className="inline-flex max-w-full items-center justify-center gap-3 rounded-xl bg-white px-6 py-4 text-sm font-bold text-blue-800 transition hover:-translate-y-1 hover:bg-cyan-50 sm:text-base"
            >
              {t("Explorer nos expertises")}
              <ArrowRight size={18} />
            </a>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-white/30 px-6 py-4 text-sm font-bold text-white transition hover:bg-white/10 sm:text-base"
            >
              {t("Nous contacter")}
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative min-w-0"
        >
          <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-2 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85"
              alt={t("Circuit électronique et composants technologiques")}
              className="h-64 w-full rounded-2xl object-cover sm:h-96"
            />
          </div>

          <div className="absolute -bottom-6 left-3 right-3 grid grid-cols-3 gap-2 rounded-2xl border border-white/30 bg-white p-3 shadow-xl sm:left-8 sm:right-8 sm:gap-4 sm:p-5">
            {[
              { icon: Code2, label: "Software" },
              { icon: Database, label: "Data" },
              { icon: Cpu, label: "Technology" },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="flex min-w-0 flex-col items-center gap-2 text-center"
                >
                  <Icon className="text-blue-700" size={24} />
                  <span className="break-words text-xs font-bold text-[#071A3D] sm:text-sm">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}