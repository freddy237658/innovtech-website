import {
  ArrowRight,
  Users,
  Lightbulb,
  Rocket,
} from 'lucide-react'

import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function CommunitySection() {
  const { t } = useTranslation()

  return (
    <section className="py-14 sm:py-16 lg:py-24">

      <div className="mx-auto grid w-full max-w-[1240px] grid-cols-1 items-center gap-10 px-4 sm:gap-12 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">

        <div className="min-w-0">

          <span className="inline-flex text-xs font-bold tracking-[0.12em] text-blue-700 sm:text-sm">
            {t('COMMUNAUTÉ INNOVTECH')}
          </span>

          <h2 className="my-4 text-3xl font-extrabold leading-tight text-[#071A3D] sm:text-4xl lg:text-5xl">
            {t('Les grandes innovations commencent souvent par')}{' '}
            <span className="bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">
              {t('une idée.')}
            </span>
          </h2>

          <p className="text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            {t('Nous souhaitons encourager les étudiants, développeurs et entrepreneurs à apprendre, expérimenter et transformer leurs idées en véritables projets technologiques.')}
          </p>

          <div className="my-6 grid gap-4 sm:my-8">

            <div className="flex items-center gap-3 text-sm font-semibold text-slate-700">
              <Users size={22} className="shrink-0 text-blue-700" />
              <span>{t('Rencontrer des passionnés')}</span>
            </div>

            <div className="flex items-center gap-3 text-sm font-semibold text-slate-700">
              <Lightbulb size={22} className="shrink-0 text-blue-700" />
              <span>{t('Partager et développer des idées')}</span>
            </div>

            <div className="flex items-center gap-3 text-sm font-semibold text-slate-700">
              <Rocket size={22} className="shrink-0 text-blue-700" />
              <span>{t('Construire des projets innovants')}</span>
            </div>

          </div>

          <Link to="/communaute" className="inline-flex min-h-12 max-w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-700 to-cyan-500 px-5 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-blue-700/20 transition hover:-translate-y-0.5 sm:px-6">
            {t('Rejoindre la communauté')}
            <ArrowRight size={18} />
          </Link>

        </div>

        <div className="relative min-w-0 px-1 pb-5 sm:px-2">

          <img
            src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1100&q=85"
            alt={t("Groupe de personnes collaborant autour d'un projet")}
            loading="lazy"
            className="h-[280px] w-full rounded-2xl object-cover sm:h-[360px] sm:rounded-3xl lg:h-[430px]"
          />

          <div className="absolute bottom-0 left-4 right-4 rounded-xl bg-white/95 p-4 shadow-lg sm:left-6 sm:right-6 sm:p-5">
            <strong className="block text-base text-blue-700">INNOVTECH</strong>
            <span className="mt-1 block text-xs text-slate-500 sm:text-sm">{t("Ensemble, construisons l'avenir.")}</span>
          </div>

        </div>

      </div>

    </section>
  )
}