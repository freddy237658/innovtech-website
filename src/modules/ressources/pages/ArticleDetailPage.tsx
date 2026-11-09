import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Clock3, Share2 } from "lucide-react";
import { useState } from "react";

import ArticleContent from "../components/ArticleContent";
import RelatedArticles from "../components/RelatedArticles";

import { getArticleBySlug } from "../data/articlesData";

export default function ArticleDetailPage() {
  const { slug } = useParams();
  const article = slug ? getArticleBySlug(slug) : undefined;
  const [copied, setCopied] = useState(false);

  if (!article) {
    return (
      <main className="flex min-h-[65vh] items-center justify-center px-4">
        <div className="max-w-md text-center">
          <span className="text-6xl font-bold text-blue-600">404</span>

          <h1 className="mt-5 text-2xl font-bold text-[#071A3D]">
            Article introuvable
          </h1>

          <p className="mt-3 leading-7 text-slate-500">
            Cet article n'existe pas ou n'est plus disponible.
          </p>

          <Link
            to="/ressources"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white hover:bg-blue-700"
          >
            <ArrowLeft size={18} />
            Retour aux ressources
          </Link>
        </div>
      </main>
    );
  }

  const formattedDate = new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(article.date));

  const handleShare = async () => {
    const shareData = {
      title: article.title,
      text: article.excerpt,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(shareData.url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }
    } catch {
      // Le partage peut être annulé par l'utilisateur.
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-4 pb-10 pt-28 sm:px-6 sm:pt-36 lg:px-8">
        <Link
          to="/ressources"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-blue-600"
        >
          <ArrowLeft size={17} />
          Retour aux ressources
        </Link>

        <div className="mx-auto mt-12 max-w-4xl">
          <span className="rounded-full bg-blue-50 px-4 py-2 text-xs font-bold text-blue-700">
            {article.category}
          </span>

          <h1 className="mt-7 text-3xl font-bold leading-tight tracking-tight text-[#071A3D] sm:text-4xl lg:text-5xl">
            {article.title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-500">
            {article.excerpt}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-5 border-y border-slate-100 py-6">
            <div className="flex min-w-0 items-center gap-3">
              <img
                src={article.authorImage}
                alt=""
                className="h-12 w-12 rounded-full object-cover"
              />

              <div className="min-w-0">
                <p className="truncate text-sm font-bold text-[#071A3D]">
                  {article.author}
                </p>
                <p className="text-xs text-slate-400">
                  {article.authorRole}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
              <span>{formattedDate}</span>

              <span className="flex items-center gap-2">
                <Clock3 size={16} />
                {article.readingTime} min
              </span>

              <button
                onClick={handleShare}
                className="inline-flex items-center gap-2 rounded-lg bg-blue-50 px-4 py-2 font-semibold text-blue-700 transition hover:bg-blue-100"
              >
                <Share2 size={16} />
                {copied ? "Lien copié" : "Partager"}
              </button>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-3xl">
          <img
            src={article.image}
            alt={article.title}
            className="max-h-[520px] w-full object-cover"
          />
        </div>

        <article className="mx-auto grid max-w-7xl gap-12 py-14 lg:grid-cols-[minmax(0,1fr)_280px] lg:py-20">
          <div className="mx-auto w-full max-w-3xl">
            <ArticleContent article={article} />

            <div className="mt-12 flex flex-wrap gap-2 border-t border-slate-100 pt-8">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-600"
                >
                  #{tag.replaceAll(" ", "")}
                </span>
              ))}
            </div>
          </div>

          <aside className="h-fit rounded-3xl border border-slate-100 bg-slate-50 p-6">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
              INNOVTECH
            </span>

            <h3 className="mt-4 text-xl font-bold text-[#071A3D]">
              L'innovation au service de votre avenir numérique.
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-500">
              Nous concevons des solutions numériques pour accompagner les
              entreprises dans leur transformation.
            </p>

            <Link
              to="/contact"
              className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-5 py-4 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Parlons de votre projet
            </Link>
          </aside>
        </article>
      </div>

      <RelatedArticles currentArticle={article} />
    </main>
  );
}