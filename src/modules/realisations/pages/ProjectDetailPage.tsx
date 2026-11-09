import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Layers3,
  Users,
} from "lucide-react";

import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import ProjectStatus from "../components/ProjectStatus";
import ProjectCTA from "../components/ProjectCTA";
import ProjectSectionTitle from "../components/ProjectSectionTitle";

import { projects } from "../data/projectsData";

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const { t } = useTranslation();

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <main className="flex min-h-[65vh] flex-col items-center justify-center px-5 text-center">
        <h1 className="text-3xl font-bold text-[#071A3D]">
          {t("Projet introuvable")}
        </h1>

        <p className="mt-4 text-slate-500">
          {t("Cette réalisation n'existe pas ou n'est plus disponible.")}
        </p>

        <Link
          to="/realisations"
          className="mt-7 inline-flex items-center gap-2 font-bold text-blue-700"
        >
          <ArrowLeft size={18} />
          {t("Retour aux réalisations")}
        </Link>
      </main>
    );
  }

  const Icon = project.icon;

  return (
    <main className="min-w-0 overflow-x-clip bg-white">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[#071A3D]">
        <div className="absolute inset-0 -z-10">
          <img
            src={project.image}
            alt=""
            className="h-full w-full object-cover opacity-20"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#071A3D] via-[#071A3D]/95 to-[#0645C0]/70" />
        </div>

        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <Link
            to="/realisations"
            className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-blue-100/80 transition hover:text-white"
          >
            <ArrowLeft size={18} />
            {t("Toutes les réalisations")}
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

              <ProjectStatus
                status={project.status}
                label={project.statusLabel}
              />

              <span className="rounded-full border border-white/20 px-3 py-1.5 text-xs font-semibold text-white">
                {t(project.category)}
              </span>
            </div>

            <p className="mt-8 text-sm font-bold uppercase tracking-widest text-cyan-300">
              {t("Réalisation INNOVTECH")} / {project.number}
            </p>

            <h1 className="mt-4 break-words text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              {project.name}
            </h1>

            <p className="mt-5 text-lg font-medium text-blue-200">
              {t(project.tagline)}
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-blue-100/70">
              {t(project.description)}
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              {project.website && project.status === "available" && (
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center gap-3 rounded-xl bg-white px-6 py-3 font-bold text-[#071A3D] transition hover:bg-cyan-50"
                >
                  {t("Visiter le produit")}
                  <ExternalLink size={18} />
                </a>
              )}

              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center gap-3 rounded-xl border border-white/25 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                {t("Demander des informations")}
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Présentation */}
      <section className="px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <ProjectSectionTitle
              eyebrow="Présentation du projet"
              title="Une solution pensée autour de vos besoins."
              description={t(project.fullDescription)}
            />

            <div className="flex items-start gap-4 rounded-2xl border border-blue-100 bg-blue-50/70 p-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-blue-700">
                <Layers3 size={22} />
              </div>

              <div className="min-w-0">
                <h3 className="font-bold text-[#071A3D]">
                  {t("Une approche orientée produit")}
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {t("La conception de ce projet repose sur l'identification des besoins, la définition des fonctionnalités et le choix d'une architecture adaptée.")}
                </p>
              </div>
            </div>
          </div>

          <div className="min-w-0">
            <img
              src={project.image}
              alt={project.name}
              loading="lazy"
              className="h-[300px] w-full rounded-[2rem] object-cover shadow-xl sm:h-[420px]"
            />
          </div>
        </div>
      </section>

      {/* Fonctionnalités */}
      <section className="bg-slate-50 px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <ProjectSectionTitle
            eyebrow="Fonctionnalités"
            title="Ce que propose le projet."
            description="Les principales fonctionnalités prévues ou intégrées dans ce projet."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {project.features.map((feature) => (
              <div
                key={feature}
                className="flex min-w-0 items-start gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                  <CheckCircle2 size={19} />
                </span>

                <p className="break-words pt-1 font-semibold text-[#071A3D]">
                  {t(feature)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Public cible et bénéfices */}
      <section className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
              <Users size={24} />
            </div>

            <h2 className="mt-6 text-2xl font-bold text-[#071A3D] sm:text-3xl">
              {t("À qui s'adresse ce projet ?")}
            </h2>

            <div className="mt-7 flex flex-wrap gap-3">
              {project.targetAudience.map((audience) => (
                <span
                  key={audience}
                  className="max-w-full break-words rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-600"
                >
                  {t(audience)}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#071A3D] sm:text-3xl">
              {t("Les bénéfices recherchés")}
            </h2>

            <div className="mt-7 space-y-5">
              {project.benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <CheckCircle2
                    size={21}
                    className="mt-1 shrink-0 text-blue-600"
                  />

                  <p className="text-sm leading-7 text-slate-600">
                    {t(benefit)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="bg-[#071A3D] px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <ProjectSectionTitle
            eyebrow="Environnement technique"
            title="Les technologies du projet."
            description="Les outils et technologies associés à l'architecture de cette réalisation."
          />

          <div className="flex flex-wrap gap-3">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="max-w-full break-words rounded-xl border border-white/10 bg-white/10 px-5 py-3 text-sm font-semibold text-white"
              >
                {t(technology)}
              </span>
            ))}
          </div>
        </div>
      </section>

      <ProjectCTA />
    </main>
  );
}