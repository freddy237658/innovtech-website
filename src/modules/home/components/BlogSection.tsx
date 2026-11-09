import { ArrowUpRight, Clock } from 'lucide-react'

import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const articles = [
  {
    category: 'TECHNOLOGIE',
    title: 'Comment la transformation digitale change les entreprises',
    image:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=85',
  },
  {
    category: 'INTELLIGENCE ARTIFICIELLE',
    title: 'Comprendre les possibilités de l’intelligence artificielle',
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=85',
  },
  {
    category: 'DÉVELOPPEMENT',
    title: 'Pourquoi créer une plateforme SaaS pour son activité ?',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=85',
  },
]

export default function BlogSection() {
  const { t } = useTranslation()

  return (
    <section className="bg-[#f7faff] py-14 sm:py-16 lg:py-24">

      <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8">

        <div className="mb-8 flex flex-col gap-5 sm:mb-10 lg:mb-12 lg:flex-row lg:items-end lg:justify-between">

          <div>
            <span className="inline-flex text-xs font-bold tracking-[0.12em] text-blue-700 sm:text-sm">
              {t('BLOG & RESSOURCES')}
            </span>

            <h2 className="my-3 max-w-3xl text-3xl font-extrabold leading-tight text-[#071A3D] sm:my-4 sm:text-4xl lg:text-5xl">
              {t('Apprendre, découvrir et')}{' '}
              <span className="bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">
                {t('progresser.')}
              </span>
            </h2>
          </div>

          <Link to="/ressources" className="inline-flex w-fit items-center gap-2 whitespace-normal text-sm font-bold text-blue-700">
            {t('Toutes les ressources')}
            <ArrowUpRight size={18} />
          </Link>

        </div>

        <div className="grid grid-cols-1 gap-4 min-[520px]:grid-cols-2 sm:gap-5 xl:grid-cols-3">

          {articles.map((article) => (
            <article className="group min-w-0 overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl" key={article.title}>

              <div className="h-48 overflow-hidden sm:h-56">
                <img
                  src={article.image}
                  alt={t(article.title)}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-5 sm:p-6">

                <span className="text-[10px] font-extrabold tracking-[0.08em] text-blue-700">
                  {t(article.category)}
                </span>

                <h3 className="my-4 text-base font-bold leading-6 text-[#071A3D] sm:my-5 sm:text-lg">{t(article.title)}</h3>

                <div className="flex items-center justify-between gap-3 border-t border-slate-200 pt-4">

                  <span className="inline-flex items-center gap-2 text-xs text-slate-500">
                    <Clock size={14} />
                    {t('Article')}
                  </span>

                  <Link to="/ressources" className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700">
                    {t('Lire')}
                    <ArrowUpRight size={16} />
                  </Link>

                </div>

              </div>

            </article>
          ))}

        </div>

      </div>

    </section>
  )
}