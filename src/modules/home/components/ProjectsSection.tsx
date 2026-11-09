import { ArrowUpRight } from 'lucide-react'

import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function ProjectsSection() {
  const { t } = useTranslation()

  return (
    <section className="py-14 sm:py-16 lg:py-24">

      <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8">

        <div className="mb-8 flex flex-col gap-4 sm:mb-10 lg:mb-10 lg:flex-row lg:items-end lg:justify-between">

          <div>
            <span className="inline-flex text-xs font-bold tracking-[0.12em] text-blue-700 sm:text-sm">
              {t('NOS RÉALISATIONS')}
            </span>

            <h2 className="mt-3 max-w-3xl text-3xl font-extrabold leading-tight text-[#071A3D] sm:mt-4 sm:text-4xl lg:text-5xl">
              {t('La technologie au service')}{' '}
              <span className="bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">
                {t('des idées concrètes.')}
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            {t('Des projets qui illustrent notre volonté de transformer les besoins en solutions numériques utiles.')}
          </p>

        </div>

        <div className="grid grid-cols-1 overflow-hidden rounded-2xl bg-[#f4f8ff] lg:grid-cols-[1.1fr_0.9fr] lg:rounded-3xl">

          <div className="min-h-[240px] sm:min-h-[320px] lg:min-h-[400px]">

            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=85"
              alt={t('Environnement de développement logiciel')}
              loading="lazy"
              className="h-full min-h-[240px] w-full object-cover sm:min-h-[320px] lg:min-h-full"
            />

          </div>

          <div className="flex min-w-0 flex-col items-start justify-center p-5 sm:p-8 lg:p-12">

            <span className="text-[11px] font-extrabold tracking-[0.12em] text-blue-700">{t('PROJETS TECHNOLOGIQUES')}</span>

            <h3 className="my-4 text-2xl font-bold leading-snug text-[#071A3D] sm:my-5 sm:text-3xl">
              {t('Construire des solutions qui ont du sens.')}
            </h3>

            <p className="mb-5 text-sm leading-7 text-slate-600 sm:mb-6 sm:text-base sm:leading-8">
              {t("Chaque projet représente une opportunité de résoudre un problème, d'améliorer une expérience ou de créer de nouvelles possibilités grâce à la technologie.")}
            </p>

            <Link to="/realisations" className="inline-flex min-h-12 max-w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-700 to-cyan-500 px-5 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-blue-700/20 transition hover:-translate-y-0.5 sm:px-6">
              {t('Explorer nos réalisations')}
              <ArrowUpRight size={18} />
            </Link>

          </div>

        </div>

      </div>

    </section>
  )
}