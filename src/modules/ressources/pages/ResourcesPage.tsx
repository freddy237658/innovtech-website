import { useMemo, useState } from "react";
import { BookOpen, FileSearch } from "lucide-react";

import ResourcesHero from "../components/ResourcesHero";
import FeaturedArticle from "../components/FeaturedArticle";
import ArticleCard from "../components/ArticleCard";
import ResourcesFilters from "../components/ResourcesFilters";
import NewsletterSection from "../components/NewsletterSection";

import {
  articles,
  getFeaturedArticle,
} from "../data/articlesData";

export default function ResourcesPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Tous");

  const featuredArticle = getFeaturedArticle();

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory =
        category === "Tous" || article.category === category;

      const searchValue = search.toLowerCase();

      const matchesSearch =
        article.title.toLowerCase().includes(searchValue) ||
        article.excerpt.toLowerCase().includes(searchValue) ||
        article.category.toLowerCase().includes(searchValue) ||
        article.tags.some((tag) =>
          tag.toLowerCase().includes(searchValue)
        );

      return (
        matchesCategory &&
        matchesSearch &&
        article.id !== featuredArticle?.id
      );
    });
  }, [category, search, featuredArticle?.id]);

  return (
    <main className="min-h-screen overflow-hidden bg-white">
      <ResourcesHero />

      {featuredArticle && <FeaturedArticle article={featuredArticle} />}

      <section
        id="articles"
        className="scroll-mt-24 bg-slate-50 px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Notre bibliothèque
            </span>

            <div className="mt-3 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <h2 className="text-3xl font-bold text-[#071A3D] sm:text-4xl">
                  Explorez nos ressources
                </h2>

                <p className="mt-3 max-w-2xl leading-7 text-slate-500">
                  Des contenus pour comprendre les technologies,
                  développer vos compétences et découvrir de nouvelles
                  perspectives.
                </p>
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-500">
                <BookOpen size={18} className="text-blue-600" />
                {articles.length} articles disponibles
              </div>
            </div>
          </div>

          <ResourcesFilters
            search={search}
            setSearch={setSearch}
            category={category}
            setCategory={setCategory}
          />

          <div className="mt-10">
            {filteredArticles.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredArticles.map((article, index) => (
                  <ArticleCard
                    key={article.id}
                    article={article}
                    index={index}
                  />
                ))}
              </div>
            ) : (
              <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-5 py-16 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <FileSearch size={26} />
                </div>

                <h3 className="mt-5 text-xl font-bold text-[#071A3D]">
                  Aucun article trouvé
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Essayez un autre mot-clé ou sélectionnez une autre
                  catégorie.
                </p>

                <button
                  onClick={() => {
                    setSearch("");
                    setCategory("Tous");
                  }}
                  className="mt-6 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  Réinitialiser les filtres
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <NewsletterSection />
    </main>
  );
}