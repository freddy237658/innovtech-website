import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import ContactHero from "../components/ContactHero";
import ContactInfoCard from "../components/ContactInfoCard";
import ContactForm from "../components/ContactForm";
import CollaborationCards from "../components/CollaborationCards";
import ContactFAQ from "../components/ContactFAQ";
import ContactCTA from "../components/ContactCTA";

export default function ContactPage() {
  const location = useLocation();

  useEffect(() => {
    const requestType = location.state?.requestType;

    if (!requestType) return;

    const timer = window.setTimeout(() => {
      document.getElementById("formulaire")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 300);

    return () => window.clearTimeout(timer);
  }, [location.state]);

  return (
    <main className="min-h-screen overflow-hidden bg-white">
      <ContactHero />

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-9">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Nos coordonnées
            </span>

            <h2 className="mt-3 text-3xl font-bold text-[#071A3D]">
              Entrons en contact
            </h2>

            <p className="mt-3 max-w-2xl leading-7 text-slate-500">
              Notre équipe est disponible pour étudier vos demandes et
              discuter de nouvelles opportunités.
            </p>
          </div>

          <ContactInfoCard />
        </div>
      </section>

      <CollaborationCards />

      <section
        id="formulaire"
        className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="lg:sticky lg:top-28">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Démarrons ensemble
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-[#071A3D] sm:text-4xl">
              Donnez-nous quelques détails sur votre projet.
            </h2>

            <p className="mt-5 leading-8 text-slate-500">
              Remplissez notre formulaire. Il vous guidera étape par étape
              pour nous présenter votre besoin.
            </p>

            <div className="mt-9 rounded-2xl border border-blue-100 bg-blue-50 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-blue-600">
                <span className="text-xl font-bold">IT</span>
              </div>

              <h3 className="mt-5 font-bold text-[#071A3D]">
                INNOVTECH
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-500">
                Votre vision, nos technologies, votre réussite.
              </p>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <ContactFAQ />

      <ContactCTA />
    </main>
  );
}