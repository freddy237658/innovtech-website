import { ArrowUpRight, Clock3 } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { Article } from "../data/articlesData";

interface Props {
  article: Article;
  index?: number;
}

export default function ArticleCard({ article, index = 0 }: Props) {
  const formattedDate = new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(article.date));

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white transition duration-300 hover:-translate-y-2 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-900/5"
    >
      <Link
        to={`/ressources/${article.slug}`}
        className="relative block overflow-hidden"
      >
        <img
          src={article.image}
          alt={article.title}
          loading="lazy"
          className="h-52 w-full object-cover transition duration-700 group-hover:scale-105 sm:h-56"
        />

        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-2 text-xs font-semibold text-blue-700 shadow-sm">
          {article.category}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
          <span>{formattedDate}</span>
          <span>·</span>
          <span className="inline-flex items-center gap-1">
            <Clock3 size={13} />
            {article.readingTime} min de lecture
          </span>
        </div>

        <Link to={`/ressources/${article.slug}`}>
          <h3 className="mt-4 text-lg font-bold leading-snug text-[#071A3D] transition group-hover:text-blue-700 sm:text-xl">
            {article.title}
          </h3>
        </Link>

        <p className="mt-3 flex-1 text-sm leading-7 text-slate-500">
          {article.excerpt}
        </p>

        <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
          <div className="flex min-w-0 items-center gap-3">
            <img
              src={article.authorImage}
              alt=""
              loading="lazy"
              className="h-9 w-9 rounded-full object-cover"
            />
            <span className="truncate text-xs font-semibold text-slate-600">
              {article.author}
            </span>
          </div>

          <Link
            to={`/ressources/${article.slug}`}
            aria-label={`Lire ${article.title}`}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-700 transition group-hover:bg-blue-600 group-hover:text-white"
          >
            <ArrowUpRight size={19} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}