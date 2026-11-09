import {
  ArrowUpRight,
  CheckCircle2,
} from 'lucide-react'

import { Link } from 'react-router-dom'

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export default function AboutSection() {
  const { t } = useTranslation()

  const advantages = [
    'Des solutions adaptées à vos besoins',
    'Une approche centrée sur l’innovation',
    'Des technologies modernes et évolutives',
    'Un accompagnement tout au long du projet',
  ]

  return (
    <section className="py-14 sm:py-16 lg:py-24">

      <div className="mx-auto grid w-full max-w-[1240px] grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">

        <motion.div
          className="relative min-w-0 px-2 pb-5 sm:px-4"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >

          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85"
            alt={t('Équipe travaillant sur des projets technologiques')}
            className="relative z-10 h-[280px] w-full rounded-2xl object-cover sm:h-[360px] sm:rounded-3xl lg:h-[450px]"
          />

          <div className="absolute bottom-0 right-0 z-20 max-w-[calc(100%-1rem)] rounded-xl bg-white px-4 py-3 shadow-xl sm:right-0 sm:px-6 sm:py-5">
            <strong className="block text-base text-blue-700 sm:text-lg">INNOVTECH</strong>
            <span className="mt-1 block text-xs text-slate-500 sm:text-sm">{t('Votre partenaire technologique')}</span>
          </div>

          <div aria-hidden="true" className="absolute -left-1 -top-2 h-24 w-24 rounded-2xl bg-blue-50 sm:-left-1 sm:-top-1 sm:h-36 sm:w-36" />

        </motion.div>

        <div className="min-w-0">

          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.12em] text-blue-700 sm:text-sm">
            {t('QUI SOMMES-NOUS ?')}
          </span>

          <h2 className="my-4 text-3xl font-extrabold leading-tight text-[#071A3D] sm:my-5 sm:text-4xl lg:text-5xl">
            {t('Nous donnons vie à vos')}{' '}
            <span className="bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">
              {t('ambitions numériques.')}
            </span>
          </h2>

          <p className="text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            {t('INNOVTECH est une entreprise technologique spécialisée dans la conception de solutions numériques innovantes. Nous accompagnons les entreprises, entrepreneurs et organisations dans la création de logiciels, plateformes SaaS, applications et services digitaux.')}
          </p>

          <div className="my-6 grid gap-4 sm:my-8">

            {advantages.map((item) => (
              <div className="flex items-start gap-3 text-sm font-medium text-slate-700" key={item}>
                <CheckCircle2 size={19} className="mt-0.5 shrink-0 text-blue-700" />
                <span>{t(item)}</span>
              </div>
            ))}

          </div>

          <Link
            to="/entreprise"
            className="inline-flex min-h-12 max-w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-700 to-cyan-500 px-5 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-blue-700/20 transition hover:-translate-y-0.5 sm:px-6"
          >
            {t('Découvrir INNOVTECH')}
            <ArrowUpRight size={18} />
          </Link>

        </div>

      </div>

    </section>
  )
}