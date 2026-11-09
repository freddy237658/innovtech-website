import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import type { Expertise } from "../data/expertisesData";

interface ExpertiseCardProps {
  expertise: Expertise;
  index: number;
}

export default function ExpertiseCard({
  expertise,
  index,
}: ExpertiseCardProps) {
  const Icon = expertise.icon;
  const { t } = useTranslation();

  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="group flex min-w-0 flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-900/10"
    >
      <div className="relative h-48 overflow-hidden sm:h-52">
        <img
          src={expertise.image}
          alt={t(expertise.title)}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#071A3D]/80 to-transparent" />

        <span className="absolute left-5 top-5 rounded-full border border-white/30 bg-white/20 px-4 py-2 text-xs font-bold text-white backdrop-blur-md">
          {t("EXPERTISE")} {expertise.number}
        </span>

        <div className="absolute bottom-5 left-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-blue-700 shadow-lg">
          <Icon size={25} />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h2 className="break-words text-xl font-bold leading-snug text-[#071A3D] sm:text-2xl">
          {t(expertise.title)}
        </h2>

        <p className="mt-2 text-sm font-semibold text-blue-700">
          {t(expertise.subtitle)}
        </p>

        <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">
          {t(expertise.description)}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {expertise.technologies.slice(0, 3).map((technology) => (
            <span
              key={technology}
              className="max-w-full break-words rounded-lg bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-600"
            >
              {technology}
            </span>
          ))}
        </div>

        <Link
          to={`/expertises/${expertise.slug}`}
          className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-blue-700 transition group-hover:gap-4"
        >
          {t("Explorer cette expertise")}
          <ArrowUpRight size={18} />
        </Link>
      </div>
    </motion.article>
  );
}