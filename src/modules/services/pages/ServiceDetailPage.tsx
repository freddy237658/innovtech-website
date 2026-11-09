import { useParams, Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Users,
  Zap,
} from "lucide-react";
import { useTranslation } from "react-i18next";

import { services } from "../data/servicesData";
import ServiceDetailHero from "../components/ServiceDetailHero";
import ServiceCard from "../components/ServiceCard";
import CompanyCTA from "../../entreprise/components/CompanyCTA";
import SectionHeading from "../../entreprise/components/SectionHeading";

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const { t } = useTranslation();

  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return (
      <main className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
        <h1 className="text-3xl font-extrabold text-[#071A3D]">
          {t("Service introuvable")}
        </h1>

        <p className="mt-4 max-w-md text-slate-600">
          {t("Le service recherché n'existe pas ou n'est plus disponible.")}
        </p>

        <Link
          to="/services"
          className="mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-700 px-6 py-3 font-bold text-white"
        >
          {t("Voir nos services")}
          <ArrowRight size={18} />
        </Link>
      </main>
    );
  }

  const otherServices = services
    .filter((item) => item.slug !== service.slug)
    .slice(0, 3);

  return (
    <main className="w-full overflow-hidden">
      <ServiceDetailHero service={service} />

      {/* Présentation */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="min-w-0">
            <SectionHeading
              eyebrow="Présentation du service"
              title={t("Pourquoi choisir {{service}} ?", { service: t(service.shortTitle) })}
              description={service.fullDescription}
            />

            <p className="mt-6 text-base leading-8 text-slate-600">
              {t("Chez INNOVTECH, nous cherchons à proposer une solution adaptée à votre contexte. Nous étudions vos besoins, vos contraintes et vos objectifs avant de définir l'approche technique.")}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              {
                icon: CheckCircle2,
                title: "Solutions adaptées",
                description: "Une réponse construite autour de vos besoins.",
              },
              {
                icon: Code2,
                title: "Expertise technique",
                description: "Des technologies sélectionnées avec attention.",
              },
              {
                icon: Users,
                title: "Collaboration",
                description: "Une communication tout au long du projet.",
              },
              {
                icon: Zap,
                title: "Évolutivité",
                description: "Des solutions pensées pour accompagner votre croissance.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="min-w-0 rounded-2xl border border-slate-100 p-5 sm:p-6"
                >
                  <Icon className="mb-4 text-blue-700" size={28} />

                  <h3 className="font-bold text-[#071A3D]">
                    {t(item.title)}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {t(item.description)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Prestations */}
      <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Nos prestations"
            title="Ce que nous pouvons réaliser."
            description="Découvrez les différentes prestations que nous pouvons proposer dans le cadre de ce service."
            centered
          />

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.features.map((feature, index) => (
              <div
                key={feature}
                className="flex min-w-0 items-start gap-4 rounded-2xl border border-slate-100 bg-white p-5"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-blue-700">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="pt-1 text-sm font-semibold leading-6 text-[#071A3D]">
                  {t(feature)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Les avantages"
            title="La valeur que nous souhaitons vous apporter."
            description="Chaque prestation est orientée vers des résultats concrets et une meilleure expérience."
            centered
          />

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {service.benefits.map((benefit) => (
              <div
                key={benefit}
                className="rounded-2xl border border-blue-100 bg-blue-50/50 p-6"
              >
                <CheckCircle2 className="mb-4 text-blue-700" size={27} />
                <p className="text-sm font-semibold leading-7 text-[#071A3D]">
                  {t(benefit)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="bg-[#071A3D] px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="text-sm font-bold uppercase tracking-wider text-cyan-300">
              {t("Environnement technologique")}
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
              {t("Des technologies adaptées à chaque projet.")}
            </h2>

            <p className="mt-5 text-base leading-8 text-blue-100">
              {t("Nous sélectionnons les outils en fonction des objectifs, des contraintes et de l'environnement du projet.")}
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {service.technologies.map((technology) => (
              <span
                key={technology}
                className="max-w-full break-words rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white"
              >
                {t(technology)}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Public cible */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="À qui s'adresse ce service ?"
            title="Nous accompagnons différents profils."
            description="Nos prestations peuvent être adaptées aux besoins de plusieurs types d'organisations."
          />

          <div className="mt-10 flex flex-wrap gap-3">
            {service.idealFor.map((target) => (
              <span
                key={target}
                className="rounded-xl bg-blue-50 px-5 py-3 text-sm font-bold text-blue-800"
              >
                {t(target)}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Autres services */}
      <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Découvrir également"
            title="Explorez nos autres services."
            description="Découvrez d'autres expertises pour compléter votre projet."
            centered
          />

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {otherServices.map((item, index) => (
              <ServiceCard
                key={item.id}
                service={item}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <CompanyCTA />
    </main>
  );
}