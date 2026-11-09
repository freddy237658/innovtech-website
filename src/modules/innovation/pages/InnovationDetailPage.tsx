import { ArrowLeft, ArrowRight, CheckCircle2, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";

import InnovationStatus from "../components/InnovationStatus";
import InnovationCTA from "../components/InnovationCTA";
import InnovationSectionTitle from "../components/InnovationSectionTitle";
import { innovations } from "../data/innovationData";
import { useTranslation } from "react-i18next";

export default function InnovationDetailPage() {
  const { slug } = useParams();
  const { t } = useTranslation();

  const innovation = innovations.find((item) => item.slug === slug);

  if (!innovation) {
    return (
      <main className="flex min-h-[65vh] flex-col items-center justify-center px-5 text-center">
        <h1 className="text-3xl font-bold text-[#071A3D]">
          {t("Domaine introuvable")}
        </h1>

        <p className="mt-4 text-slate-500">
          {t("Cette page d'innovation n'existe pas ou n'est plus disponible.")}
        </p>

        <Link
          to="/innovation"
          className="mt-7 inline-flex items-center gap-2 font-bold text-blue-700"
        >
          <ArrowLeft size={18} />
          {t("Retour aux innovations")}
        </Link>
      </main>
    );
  }

  const Icon = innovation.icon;

  return (
    <main className="min-w-0 overflow-x-clip bg-white">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[#071A3D]">
        <div className="absolute inset-0 -z-10">
          <img
            src={innovation.image}
            alt=""
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071A3D] via-[#071A3D]/95 to-[#0645C0]/70" />
        </div>

        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <Link
            to="/innovation"
            className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-blue-100/80 transition hover:text-white"
          >
            <ArrowLeft size={18} />
            {t("Toutes les innovations")}
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 max-w-3xl"
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-300/15 text-cyan-300">
                <Icon size={25} />
              </span>

              <InnovationStatus
                status={innovation.status}
                label={innovation.statusLabel}
              />
            </div>

            <p className="mt-8 text-sm font-bold uppercase tracking-widest text-cyan-300">
              Innovation & R&D / {innovation.number}
            </p>

            <h1 className="mt-4 break-words text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              {t(innovation.title)}
            </h1>

            <p className="mt-5 text-lg font-medium text-blue-200">
              {t(innovation.subtitle)}
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-blue-100/70">
              {t(innovation.description)}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Présentation */}
      <section className="px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <InnovationSectionTitle
              eyebrow="Présentation"
              title={t("Comprendre notre démarche.")}
              description={t(innovation.fullDescription)}
            />

            <div className="flex items-start gap-4 rounded-2xl border border-blue-100 bg-blue-50/70 p-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-blue-700">
                <Code2 size={22} />
              </div>

              <div className="min-w-0">
                <h3 className="font-bold text-[#071A3D]">
                  {t("Une démarche progressive")}
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {t("Les travaux présentés évoluent selon les expérimentations, les ressources disponibles et la validation des cas d'usage.")}
                </p>
              </div>
            </div>
          </div>

          <div className="min-w-0">
            <img
              src={innovation.image}
              alt={t(innovation.title)}
              loading="lazy"
              className="h-[300px] w-full rounded-[2rem] object-cover shadow-xl sm:h-[420px]"
            />
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="bg-slate-50 px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <InnovationSectionTitle
            eyebrow="Cas d'utilisation"
            title="Les applications envisagées."
            description="Voici quelques exemples de domaines dans lesquels cette technologie peut apporter de la valeur."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {innovation.applications.map((application) => (
              <div
                key={application}
                className="flex min-w-0 items-start gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                  <CheckCircle2 size={19} />
                </span>

                <p className="break-words pt-1 font-semibold text-[#071A3D]">
                  {t(application)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objectifs et technologies */}
      <section className="px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-[#071A3D] sm:text-3xl">
              {t("Nos objectifs")}
            </h2>

            <div className="mt-7 space-y-5">
              {innovation.objectives.map((objective) => (
                <div key={objective} className="flex items-start gap-3">
                  <CheckCircle2
                    size={21}
                    className="mt-1 shrink-0 text-blue-600"
                  />
                  <p className="text-sm leading-7 text-slate-600">
                    {t(objective)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-[#071A3D] p-7 sm:p-9">
            <h2 className="text-2xl font-bold text-white">
              {t("Technologies étudiées")}
            </h2>

            <p className="mt-3 text-sm leading-7 text-blue-100/70">
              {t("Technologies et outils susceptibles d'être utilisés dans ce domaine.")}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {innovation.technologies.map((technology) => (
                <span
                  key={technology}
                  className="max-w-full break-words rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-semibold text-white"
                >
                  {t(technology)}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="px-5 pb-10 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl border-t border-slate-100 pt-8">
          <Link
            to="/innovation"
            className="inline-flex min-h-12 items-center gap-3 font-bold text-blue-700 transition hover:gap-5"
          >
            {t("Voir les autres domaines d'innovation")}
            <ArrowRight size={19} />
          </Link>
        </div>
      </section>

      <InnovationCTA />
    </main>
  );
}