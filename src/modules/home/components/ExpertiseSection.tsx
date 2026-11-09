import {
  ArrowRight,
  Database,
  Code,
  Server,
  Smartphone,
  ShieldCheck,
  Cloud,
} from 'lucide-react'

import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const expertises = [
  {
    icon: Code,
    title: 'Frontend Development',
    description: 'Interfaces modernes et expériences utilisateur.',
  },
  {
    icon: Server,
    title: 'Backend Development',
    description: 'Architectures robustes et APIs performantes.',
  },
  {
    icon: Database,
    title: 'Data & Databases',
    description: 'Gestion et structuration des données.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Applications mobiles et multiplateformes.',
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    description: 'Infrastructure, déploiement et automatisation.',
  },
  {
    icon: ShieldCheck,
    title: 'Cybersecurity',
    description: 'Bonnes pratiques de sécurité informatique.',
  },
]

export default function ExpertiseSection() {
  const { t } = useTranslation()

  return (
    <section className="py-14 sm:py-16 lg:py-24">

      <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8">

        <div className="mb-8 max-w-3xl sm:mb-10 lg:mb-12">

          <span className="inline-flex text-xs font-bold tracking-[0.12em] text-blue-700 sm:text-sm">
            {t('NOS EXPERTISES')}
          </span>

          <h2 className="my-3 text-3xl font-extrabold leading-tight text-[#071A3D] sm:my-4 sm:text-4xl lg:text-5xl">
            {t('La technologie comme')}{' '}
            <span className="bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">
              {t("moteur d'innovation.")}
            </span>
          </h2>

          <p className="max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            {t('Nous mobilisons différentes technologies et compétences pour concevoir des solutions performantes et évolutives.')}
          </p>

        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:gap-7">

          <div className="relative min-h-[280px] overflow-hidden rounded-2xl sm:min-h-[360px] lg:min-h-[440px]">

            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1100&q=85"
              alt={t('Circuit électronique et composants technologiques')}
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#071A3D]/90 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-5 z-10 text-white sm:bottom-8 sm:left-8">
              <span className="text-[11px] tracking-[0.15em]">{t('TECHNOLOGIES')}</span>
              <h3 className="mt-2 text-xl font-bold sm:text-2xl">{t('Construire le futur numérique.')}</h3>
            </div>

          </div>

          <div className="grid grid-cols-1 gap-3 min-[480px]:grid-cols-2 sm:gap-4">

            {expertises.map((item) => {
              const Icon = item.icon

              return (
                <div className="rounded-2xl border border-slate-200 p-5 transition hover:border-blue-200 hover:shadow-lg sm:p-6" key={item.title}>

                  <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-blue-50 text-blue-700 sm:mb-5">
                    <Icon size={23} />
                  </div>

                  <h3 className="mb-2 text-sm font-bold text-[#071A3D] sm:text-base">{t(item.title)}</h3>

                  <p className="text-xs leading-6 text-slate-600 sm:text-sm">{t(item.description)}</p>

                </div>
              )
            })}

          </div>

        </div>

        <div className="mt-8 text-center sm:mt-9">
          <Link to="/expertises" className="inline-flex min-h-12 max-w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-700 to-cyan-500 px-5 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-blue-700/20 transition hover:-translate-y-0.5 sm:px-6">
            {t('Explorer nos expertises')}
            <ArrowRight size={18} />
          </Link>
        </div>

      </div>

    </section>
  )
}