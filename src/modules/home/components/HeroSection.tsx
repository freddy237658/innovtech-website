import {
  ArrowRight,
  Play,
  Sparkles,
  ShieldCheck,
  Cpu,
} from 'lucide-react'

import { motion } from 'framer-motion'

import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function HeroSection() {
  const { t } = useTranslation()

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f5faff] to-white py-14 sm:py-16 lg:py-24">

      <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-32 h-72 w-72 rounded-full bg-blue-500/5 blur-3xl sm:h-[28rem] sm:w-[28rem]" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 left-[10%] h-48 w-48 rounded-full bg-cyan-400/10 blur-2xl sm:left-[20%] sm:h-64 sm:w-64" />

      <div className="relative z-10 mx-auto grid w-full max-w-[1240px] grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-8">

        <motion.div
          className="min-w-0"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2.5 text-xs font-semibold text-blue-700 sm:mb-7 sm:text-sm">
            <Sparkles size={15} />

            <span>
              {t("L'innovation au service de votre avenir")}
            </span>
          </div>

          <h1 className="max-w-[680px] break-words text-4xl font-extrabold leading-[1.12] tracking-tight text-[#071A3D] sm:text-5xl lg:text-[4.05rem]">
            {t('Transformons vos idées en')}{' '}
            <span className="bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">
              {t('solutions numériques')}
            </span>
            {' '}{t('innovantes.')}
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:mt-6 sm:text-base sm:leading-8">
            {t('INNOVTECH accompagne les entreprises, entrepreneurs et organisations dans leur transformation digitale grâce à des technologies modernes, performantes et adaptées à leurs ambitions.')}
          </p>

          <div className="mt-7 flex flex-col items-stretch gap-4 min-[420px]:flex-row min-[420px]:flex-wrap min-[420px]:items-center sm:mt-9">

            <Link to="/contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-700 to-cyan-500 px-5 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-blue-700/20 transition hover:-translate-y-0.5 hover:shadow-xl sm:px-6">
              {t('Parlons de votre projet')}
              <ArrowRight size={18} />
            </Link>

            <Link to="/services" className="inline-flex items-center gap-2.5 text-sm font-semibold text-[#071A3D]">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-slate-200 text-blue-700">
                <Play size={15} fill="currentColor" />
              </span>

              {t('Découvrir nos services')}
            </Link>

          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 sm:mt-10">

            <div className="flex items-center gap-2 text-xs text-slate-600 sm:text-sm">
              <ShieldCheck size={19} className="shrink-0 text-blue-700" />
              <span>{t('Solutions fiables')}</span>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-600 sm:text-sm">
              <Cpu size={19} className="shrink-0 text-blue-700" />
              <span>{t('Technologies modernes')}</span>
            </div>

          </div>

        </motion.div>

        <motion.div
          className="relative min-w-0 px-2 min-[420px]:px-3 lg:px-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >

          <div className="relative h-[300px] overflow-hidden rounded-3xl shadow-[0_25px_70px_rgba(7,26,61,0.15)] min-[420px]:h-[350px] sm:h-[420px] lg:h-[490px] lg:rounded-[2rem]">

            <img
              src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=85"
              alt={t('Illustration technologique et intelligence artificielle')}
              className="h-full w-full object-cover"
            />

            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#071A3D]/80 via-transparent to-transparent" />

            <div className="absolute bottom-5 left-5 text-white sm:bottom-8 sm:left-8">
              <span className="text-xs font-extrabold tracking-[0.2em]">INNOVTECH</span>
              <p className="mt-2 text-sm">{t('Building tomorrow’s digital world.')}</p>
            </div>

          </div>

          <div className="absolute -left-1 top-5 z-10 flex max-w-[calc(100%-1rem)] items-center gap-2.5 rounded-xl bg-white/95 p-2.5 shadow-xl sm:-left-5 sm:top-12 sm:gap-3 sm:rounded-2xl sm:p-4">

            <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-blue-50 text-blue-700 sm:h-10 sm:w-10">
              <Cpu size={20} />
            </div>

            <div>
              <strong className="block text-xs text-[#071A3D]">{t('Innovation')}</strong>
              <span className="mt-1 block text-[10px] text-slate-500">{t('Technologies avancées')}</span>
            </div>

          </div>

          <div className="absolute -right-1 bottom-5 z-10 flex max-w-[calc(100%-1rem)] items-center gap-2.5 rounded-xl bg-white/95 p-2.5 shadow-xl sm:-right-5 sm:bottom-12 sm:gap-3 sm:rounded-2xl sm:p-4">

            <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-blue-50 text-blue-700 sm:h-10 sm:w-10">
              <Sparkles size={20} />
            </div>

            <div>
              <strong className="block text-xs text-[#071A3D]">{t('Transformation digitale')}</strong>
              <span className="mt-1 block text-[10px] text-slate-500">{t('Vos idées, nos solutions')}</span>
            </div>

          </div>

        </motion.div>

      </div>

      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-700 to-cyan-500" />

    </section>
  )
}