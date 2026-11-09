import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ArticleCard from "./ArticleCard";
import { articles, type Article } from "../data/articlesData";

interface Props {
  currentArticle: Article;
}

export default function RelatedArticles({ currentArticle }: Props) {
  const related = articles
    .filter(
      (article) =>
        article.id !== currentArticle.id &&
        article.category === currentArticle.category
    )
    .slice(0, 3);

  const recommendations =
    related.length > 0
      ? related
      : articles
          .filter((article) => article.id !== currentArticle.id)
          .slice(0, 3);

  return (
    <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-9 flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Continuer à explorer
            </span>

            <h2 className="mt-3 text-2xl font-bold text-[#071A3D] sm:text-3xl">
              Vous pourriez aussi aimer
            </h2>
          </div>

          <Link
            to="/ressources"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800"
          >
            Toutes les ressources
            <ArrowRight size={17} />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recommendations.map((article, index) => (
            <ArticleCard
              key={article.id}
              article={article}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}