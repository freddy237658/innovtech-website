import { ArrowRight, Clock3 } from "lucide-react";
import { Link } from "react-router-dom";
import type { Article } from "../data/articlesData";

interface Props {
  article: Article;
}

export default function FeaturedArticle({ article }: Props) {
  const formattedDate = new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(article.date));

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            À découvrir
          </span>
          <h2 className="mt-2 text-2xl font-bold text-[#071A3D] sm:text-3xl">
            À la une
          </h2>
        </div>

        <span className="rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold text-blue-700">
          Article sélectionné
        </span>
      </div>

      <div className="grid overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-xl shadow-blue-900/5 lg:grid-cols-2">
        <div className="relative min-h-[280px] overflow-hidden sm:min-h-[380px]">
          <img
            src={article.image}
            alt={article.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071A3D]/30 to-transparent" />
        </div>

        <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-12">
          <span className="w-fit rounded-full bg-blue-50 px-4 py-2 text-xs font-bold text-blue-700">
            {article.category}
          </span>

          <h3 className="mt-6 text-2xl font-bold leading-tight text-[#071A3D] sm:text-3xl lg:text-4xl">
            {article.title}
          </h3>

          <p className="mt-5 leading-8 text-slate-500">
            {article.excerpt}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-400">
            <span>{formattedDate}</span>
            <span className="inline-flex items-center gap-2">
              <Clock3 size={15} />
              {article.readingTime} min de lecture
            </span>
          </div>

          <Link
            to={`/ressources/${article.slug}`}
            className="mt-8 inline-flex w-fit items-center gap-3 rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700"
          >
            Lire l'article
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}