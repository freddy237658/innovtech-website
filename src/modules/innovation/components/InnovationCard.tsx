import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { Innovation } from "../data/innovationData";
import InnovationStatus from "./InnovationStatus";
import { useTranslation } from "react-i18next";

interface Props {
  innovation: Innovation;
  index: number;
}

export default function InnovationCard({ innovation, index }: Props) {
  const Icon = innovation.icon;
  const { t } = useTranslation();

  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      className="group flex min-w-0 flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-[0_8px_35px_rgba(7,26,61,0.05)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_20px_55px_rgba(7,26,61,0.12)]"
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={innovation.image}
          alt={t(innovation.title)}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#071A3D]/70 via-transparent to-transparent" />

        <span className="absolute left-5 top-5 rounded-xl border border-white/30 bg-white/90 px-3 py-2 text-xs font-bold text-[#071A3D] backdrop-blur">
          {innovation.number}
        </span>

        <div className="absolute bottom-5 left-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-blue-700 shadow-lg">
          <Icon size={24} />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <InnovationStatus
          status={innovation.status}
          label={innovation.statusLabel}
        />

        <h3 className="mt-5 break-words text-xl font-bold text-[#071A3D] transition group-hover:text-blue-700">
          {t(innovation.title)}
        </h3>

        <p className="mt-2 text-sm font-medium text-blue-600">
          {t(innovation.subtitle)}
        </p>

        <p className="mt-4 flex-1 text-sm leading-7 text-slate-500">
          {t(innovation.description)}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {innovation.technologies.slice(0, 3).map((technology) => (
            <span
              key={technology}
              className="max-w-full break-words rounded-lg bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600"
            >
              {technology}
            </span>
          ))}
        </div>

        <Link
          to={`/innovation/${innovation.slug}`}
          className="mt-7 inline-flex min-h-11 items-center justify-between gap-3 border-t border-slate-100 pt-5 text-sm font-bold text-[#071A3D] transition hover:text-blue-600"
        >
          {t("Découvrir cette technologie")}
          <ArrowUpRight
            size={19}
            className="shrink-0 transition group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </Link>
      </div>
    </motion.article>
  );
}