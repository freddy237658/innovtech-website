import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { Service } from "../data/servicesData";
import { useTranslation } from "react-i18next";

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({
  service,
  index,
}: ServiceCardProps) {
  const Icon = service.icon;
  const { t } = useTranslation();

  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="group flex min-w-0 flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-900/10"
    >
      <div className="relative h-52 overflow-hidden sm:h-56">
        <img
          src={service.image}
          alt={t(service.title)}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#071A3D]/70 to-transparent" />

        <span className="absolute left-5 top-5 rounded-full border border-white/30 bg-white/20 px-4 py-2 text-xs font-bold text-white backdrop-blur-md">
          {t("SERVICE")} {service.number}
        </span>

        <div className="absolute bottom-5 left-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-blue-700 shadow-lg">
          <Icon size={25} />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="text-xl font-bold leading-snug text-[#071A3D] sm:text-2xl">
          {t(service.title)}
        </h3>

        <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">
          {t(service.description)}
        </p>

        <Link
          to={`/services/${service.slug}`}
          className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-blue-700 transition group-hover:gap-4"
        >
          {t("Découvrir ce service")}
          <ArrowUpRight size={18} />
        </Link>
      </div>
    </motion.article>
  );
}