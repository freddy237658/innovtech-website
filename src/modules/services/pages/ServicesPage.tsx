import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import ServicesHero from "../components/ServicesHero";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data/servicesData";
import CompanyCTA from "../../entreprise/components/CompanyCTA";
import SectionHeading from "../../entreprise/components/SectionHeading";

export default function ServicesPage() {
  const { t } = useTranslation();

  return (
    <main className="w-full overflow-hidden">
      <ServicesHero />

      {/* Présentation */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="min-w-0">
            <SectionHeading
              eyebrow="Notre expertise"
              title="La technologie adaptée à vos besoins."
              description="Nous réunissons plusieurs compétences complémentaires pour accompagner vos projets, de la conception à la mise en œuvre."
            />

            <p className="mt-6 text-base leading-8 text-slate-600">
              {t("Chaque organisation possède ses propres défis. Nous cherchons à comprendre vos objectifs avant de proposer une solution technique adaptée à votre contexte.")}
            </p>

            <Link
              to="/entreprise/notre-approche"
              className="mt-8 inline-flex items-center gap-3 font-bold text-blue-700 hover:text-cyan-600"
            >
              {t("Découvrir notre approche")}
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="relative min-w-0">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1100&q=85"
              alt={t("Professionnels collaborant sur un projet")}
              className="h-72 w-full rounded-3xl object-cover shadow-xl sm:h-[420px]"
            />

            <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/50 bg-white/95 p-5 shadow-xl backdrop-blur sm:bottom-8 sm:left-8 sm:right-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 shrink-0 text-blue-700" />

                <div>
                  <p className="font-bold text-[#071A3D]">
                    {t("Une approche orientée résultats")}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {t("Des solutions pensées pour répondre à des problématiques concrètes.")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catalogue */}
      <section
        id="nos-services"
        className="scroll-mt-24 bg-slate-50 px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Nos domaines d'intervention"
            title="Découvrez nos services."
            description="Explorez nos différentes prestations et identifiez les solutions qui correspondent à vos objectifs."
            centered
          />

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Notre engagement */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 rounded-3xl bg-gradient-to-br from-blue-50 to-cyan-50 p-6 sm:p-10 lg:grid-cols-2 lg:p-14">
          <div className="min-w-0">
            <span className="inline-flex items-center gap-2 text-sm font-bold text-blue-700">
              <Sparkles size={17} />
              {t("Notre engagement")}
            </span>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#071A3D] sm:text-4xl">
              {t("Votre projet mérite une solution pensée pour lui.")}
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              {t("Nous ne cherchons pas à imposer une technologie ou une solution standard. Nous étudions vos besoins pour construire une réponse adaptée à vos contraintes et à vos ambitions.")}
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex max-w-full items-center gap-3 rounded-xl bg-blue-700 px-6 py-4 text-sm font-bold text-white transition hover:bg-blue-800"
            >
              {t("Présenter mon projet")}
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="min-w-0">
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1100&q=85"
              alt={t("Équipe en séance de réflexion")}
              loading="lazy"
              className="h-64 w-full rounded-2xl object-cover sm:h-80"
            />
          </div>
        </div>
      </section>

      <CompanyCTA />
    </main>
  );
}