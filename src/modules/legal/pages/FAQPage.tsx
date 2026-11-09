import { useMemo, useState } from "react";
import { HelpCircle, MessageCircle, SearchX } from "lucide-react";
import { Link } from "react-router-dom";

import FAQSearch from "../components/FAQSearch";
import FAQAccordion from "../components/FAQAccordion";

import {
  faqCategories,
  faqData,
} from "../data/faqData";

export default function FAQPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Toutes");

  const filteredFAQs = useMemo(() => {
    const query = search.toLowerCase().trim();

    return faqData.filter((item) => {
      const matchesCategory =
        category === "Toutes" || item.category === category;

      const matchesSearch =
        item.question.toLowerCase().includes(query) ||
        item.answer.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  return (
    <main className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-[#071A3D] px-4 pb-28 pt-32 text-center text-white sm:px-6 sm:pt-40">
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-3xl">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-cyan-300">
            <HelpCircle size={32} />
          </div>

          <span className="mt-7 block text-sm font-semibold uppercase tracking-widest text-cyan-300">
            Centre d'assistance
          </span>

          <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
            Comment pouvons-nous vous aider ?
          </h1>

          <p className="mt-5 leading-8 text-blue-100/70">
            Retrouvez les réponses aux questions les plus fréquentes
            concernant INNOVTECH, nos services et nos collaborations.
          </p>
        </div>
      </section>

      <section className="relative z-10 -mt-10 px-4 sm:px-6">
        <FAQSearch value={search} onChange={setSearch} />
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-9 flex gap-2 overflow-x-auto pb-3">
            {faqCategories.map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`shrink-0 rounded-full px-5 py-3 text-sm font-semibold transition ${
                  category === item
                    ? "bg-blue-600 text-white"
                    : "border border-slate-200 bg-white text-slate-500 hover:border-blue-300 hover:text-blue-600"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="mb-6 flex items-center justify-between gap-3">
            <h2 className="text-xl font-bold text-[#071A3D]">
              Questions fréquentes
            </h2>

            <span className="text-xs text-slate-400">
              {filteredFAQs.length} résultat(s)
            </span>
          </div>

          {filteredFAQs.length > 0 ? (
            <FAQAccordion items={filteredFAQs} />
          ) : (
            <div className="rounded-3xl border border-dashed border-slate-200 py-16 text-center">
              <SearchX className="mx-auto text-slate-300" size={36} />

              <h3 className="mt-5 font-bold text-[#071A3D]">
                Aucun résultat trouvé
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Essayez une autre recherche ou une autre catégorie.
              </p>

              <button
                onClick={() => {
                  setSearch("");
                  setCategory("Toutes");
                }}
                className="mt-5 text-sm font-semibold text-blue-600"
              >
                Réinitialiser
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 rounded-3xl bg-blue-50 p-7 sm:flex-row sm:p-10">
          <div>
            <h2 className="text-xl font-bold text-[#071A3D]">
              Vous n'avez pas trouvé votre réponse ?
            </h2>

            <p className="mt-2 text-sm leading-7 text-slate-500">
              Notre équipe est disponible pour étudier votre demande.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-blue-600 px-6 py-4 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            <MessageCircle size={17} />
            Nous contacter
          </Link>
        </div>
      </section>
    </main>
  );
}