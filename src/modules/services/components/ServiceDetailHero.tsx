import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import type { Service } from "../data/servicesData";
import { useTranslation } from "react-i18next";

interface Props {
  service: Service;
}

export default function ServiceDetailHero({ service }: Props) {
  const Icon = service.icon;
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#071A3D] via-blue-950 to-blue-800">
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-2 lg:px-8 lg:py-28">
        <div className="min-w-0">
          <Link
            to="/services"
            className="text-sm font-semibold text-cyan-200 transition hover:text-white"
          >
            ← {t("Tous nos services")}
          </Link>

          <div className="mt-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-blue-700">
            <Icon size={28} />
          </div>

          <span className="mt-7 block text-sm font-bold uppercase tracking-wider text-cyan-300">
            {t("Service")} {service.number}
          </span>

          <h1 className="mt-4 break-words text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            {t(service.title)}
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-blue-100 sm:text-lg">
            {t(service.fullDescription)}
          </p>

          <div className="mt-8 space-y-3">
            {service.features.slice(0, 3).map((feature) => (
              <div key={feature} className="flex items-start gap-3">
                <CheckCircle2
                  size={19}
                  className="mt-1 shrink-0 text-cyan-300"
                />
                <span className="text-sm leading-6 text-white sm:text-base">
                  {t(feature)}
                </span>
              </div>
            ))}
          </div>

          <Link
            to="/contact"
            className="mt-9 inline-flex max-w-full items-center justify-center gap-3 rounded-xl bg-white px-6 py-4 text-sm font-bold text-blue-800 transition hover:-translate-y-1 hover:bg-cyan-50 sm:text-base"
          >
            {t("Discuter de votre projet")}
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="min-w-0">
          <div className="overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-2 shadow-2xl">
            <img
              src={service.image}
              alt={t(service.title)}
              className="h-64 w-full rounded-2xl object-cover sm:h-96 lg:h-[470px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}