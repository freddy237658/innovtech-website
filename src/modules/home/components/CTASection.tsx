import { ArrowUpRight, MessageCircle } from 'lucide-react'

import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function CTASection() {
  const { t } = useTranslation()

  return (
    <section className="py-10 sm:py-14 lg:pb-24 lg:pt-12">

      <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8">

        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#071a3d] to-[#0753bb] px-5 py-12 text-center text-white sm:rounded-3xl sm:px-8 sm:py-16 lg:px-10 lg:py-20">

          <div aria-hidden="true" className="absolute -right-20 -top-32 h-64 w-64 rounded-full border border-white/10 sm:-right-20 sm:-top-48 sm:h-[22rem] sm:w-[22rem]" />

          <span className="relative text-[10px] font-extrabold tracking-[0.15em] text-cyan-200 sm:text-xs sm:tracking-[0.2em]">{t('VOTRE PROCHAIN PROJET COMMENCE ICI')}</span>

          <h2 className="relative mx-auto my-5 max-w-3xl text-3xl font-extrabold leading-tight text-white sm:my-6 sm:text-4xl lg:text-5xl">
            {t('Et si nous construisions quelque chose d’exceptionnel ensemble ?')}
          </h2>

          <p className="relative mx-auto max-w-2xl text-sm leading-7 text-blue-100 sm:text-base sm:leading-8">
            {t("Partagez votre idée avec nous. Nous serons ravis de discuter de vos ambitions et d'imaginer les solutions adaptées à vos besoins.")}
          </p>

          <div className="relative mt-7 flex flex-col justify-center gap-3 min-[420px]:flex-row min-[420px]:flex-wrap sm:mt-8">

            <Link to="/contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-center text-sm font-semibold text-blue-700 transition hover:-translate-y-0.5 hover:bg-blue-50 sm:px-6">
              {t('Démarrer un projet')}
              <ArrowUpRight size={18} />
            </Link>

            <Link to="/contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/40 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10 sm:px-6">
              <MessageCircle size={18} />
              {t('Nous contacter')}
            </Link>

          </div>

        </div>

      </div>

    </section>
  )
}