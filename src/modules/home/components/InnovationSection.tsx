import {
  ArrowUpRight,
  BrainCircuit,
  Eye,
  Cpu,
  Network,
  Sparkles,
} from 'lucide-react'

import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function InnovationSection() {
  const { t } = useTranslation()

  const fields = [
    {
      icon: BrainCircuit,
      title: 'IA générative',
    },
    {
      icon: Cpu,
      title: 'Machine Learning',
    },
    {
      icon: Eye,
      title: 'Computer Vision',
    },
    {
      icon: Network,
      title: 'IoT & systèmes intelligents',
    },
  ]

  return (
    <section className="overflow-hidden bg-[#071a3d] py-14 text-white sm:py-16 lg:py-24">

      <div className="mx-auto grid w-full max-w-[1240px] grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">

        <div className="min-w-0">

          <span className="inline-flex text-xs font-bold tracking-[0.12em] text-cyan-300 sm:text-sm">
            {t('INNOVATION & RECHERCHE')}
          </span>

          <h2 className="my-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
            {t("Explorer aujourd'hui les")}{' '}
            <span className="bg-gradient-to-r from-cyan-300 to-cyan-100 bg-clip-text text-transparent">
              {t('technologies de demain.')}
            </span>
          </h2>

          <p className="text-sm leading-7 text-blue-100 sm:text-base sm:leading-8">
            {t("Nous explorons les possibilités offertes par l'intelligence artificielle, le Machine Learning et les technologies émergentes pour imaginer de nouvelles solutions numériques.")}
          </p>

          <div className="my-6 grid grid-cols-1 gap-4 min-[420px]:grid-cols-2 sm:my-8 sm:gap-5">

            {fields.map((field) => {
              const Icon = field.icon

              return (
                <div className="flex items-center gap-2.5 text-xs text-blue-50 sm:text-sm" key={field.title}>
                  <Icon size={19} className="shrink-0 text-cyan-400" />
                  <span>{t(field.title)}</span>
                </div>
              )
            })}

          </div>

          <Link to="/innovation" className="inline-flex min-h-12 max-w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-center text-sm font-semibold text-[#071A3D] transition hover:-translate-y-0.5 hover:bg-blue-50 sm:px-6">
            {t('Explorer notre univers technologique')}
            <ArrowUpRight size={18} />
          </Link>

        </div>

        <div className="relative min-w-0 px-2 sm:px-4 lg:px-0">

          <div aria-hidden="true" className="absolute -inset-5 bg-cyan-400/20 blur-3xl sm:-inset-8" />

          <img
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1100&q=85"
            alt={t('Intelligence artificielle et réseaux neuronaux')}
            className="relative z-10 h-[280px] w-full rounded-2xl object-cover sm:h-[360px] sm:rounded-3xl lg:h-[440px]"
          />

          <div className="absolute bottom-4 left-0 z-20 flex max-w-[calc(100%-0.5rem)] items-center gap-3 rounded-xl bg-white px-4 py-3 text-blue-700 shadow-xl sm:bottom-6 sm:left-0 sm:gap-4 sm:rounded-2xl sm:px-5 sm:py-4">

            <Sparkles size={20} className="shrink-0" />

            <div>
              <strong className="block text-xs">INNOVTECH R&D</strong>
              <span className="mt-1 block text-[10px] text-slate-500 sm:text-xs">{t('Imaginer. Expérimenter. Innover.')}</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  )
}