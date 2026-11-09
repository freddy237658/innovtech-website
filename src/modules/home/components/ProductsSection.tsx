import {
  ArrowUpRight,
  Users,
  BrainCircuit,
  GraduationCap,
} from 'lucide-react'

import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const products = [
  {
    name: 'InnovConnect',
    category: 'PLATEFORME PROFESSIONNELLE',
    description:
      'Une plateforme destinée à connecter les développeurs, ingénieurs, entreprises et passionnés de technologie.',
    image:
      'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=85',
    icon: Users,
    status: 'Projet en développement',
  },
  {
    name: 'InnovLLM',
    category: 'INTELLIGENCE ARTIFICIELLE',
    description:
      'Un projet de recherche visant à développer des modèles de langage et des technologies IA.',
    image:
      'https://images.unsplash.com/photo-1676299081847-824916de030a?auto=format&fit=crop&w=900&q=85',
    icon: BrainCircuit,
    status: 'Recherche & développement',
  },
  {
    name: 'Fred School',
    category: 'EDTECH / SAAS',
    description:
      'Une plateforme de gestion scolaire pensée pour moderniser les établissements éducatifs.',
    image:
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=85',
    icon: GraduationCap,
    status: 'Projet en développement',
  },
]

export default function ProductsSection() {
  const { t } = useTranslation()

  return (
    <section className="bg-[#f7faff] py-14 sm:py-16 lg:py-24">

      <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8">

        <div className="mb-8 flex flex-col gap-5 sm:mb-10 lg:mb-12 lg:flex-row lg:items-end lg:justify-between">

          <div>
            <span className="inline-flex text-xs font-bold tracking-[0.12em] text-blue-700 sm:text-sm">
              {t('NOS PRODUITS')}
            </span>

            <h2 className="my-3 max-w-3xl text-3xl font-extrabold leading-tight text-[#071A3D] sm:my-4 sm:text-4xl lg:text-5xl">
              {t('Des idées transformées en')}{' '}
              <span className="bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">
                {t('produits numériques.')}
              </span>
            </h2>

            <p className="max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              {t('Découvrez les solutions et projets technologiques développés au sein de notre écosystème.')}
            </p>
          </div>

          <Link to="/realisations" className="inline-flex w-fit items-center gap-2 whitespace-normal text-sm font-bold text-blue-700">
            {t('Voir tous les projets')}
            <ArrowUpRight size={18} />
          </Link>

        </div>

        <div className="grid grid-cols-1 gap-4 min-[520px]:grid-cols-2 sm:gap-5 xl:grid-cols-3">

          {products.map((product) => {
            const Icon = product.icon

            return (
              <article className="group min-w-0 overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1.5 hover:shadow-xl" key={product.name}>

                <div className="relative h-48 overflow-hidden sm:h-56">

                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <span className="absolute bottom-3 left-3 max-w-[calc(100%-1.5rem)] rounded-full bg-white px-3 py-2 text-[9px] font-extrabold text-blue-700">
                    {t(product.category)}
                  </span>

                </div>

                <div className="p-5 sm:p-6">

                  <div className="mb-5 flex min-w-0 items-center justify-between gap-3">

                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-50 text-blue-700">
                      <Icon size={22} />
                    </div>

                    <span className="max-w-[70%] rounded-full bg-slate-100 px-2.5 py-2 text-center text-[9px] font-bold leading-tight text-slate-600 sm:px-3">
                      {t(product.status)}
                    </span>

                  </div>

                  <h3 className="text-lg font-bold text-[#071A3D] sm:text-xl">{product.name}</h3>

                  <p className="my-3 text-sm leading-6 text-slate-600 sm:mb-5">{t(product.description)}</p>

                  <Link to="/realisations" className="inline-flex items-center gap-2 text-xs font-bold text-blue-700">
                    {t('Découvrir le projet')}
                    <ArrowUpRight size={17} />
                  </Link>

                </div>

              </article>
            )
          })}

        </div>

      </div>

    </section>
  )
}