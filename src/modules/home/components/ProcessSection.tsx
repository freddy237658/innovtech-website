import {
  MessageSquare,
  Lightbulb,
  Code2,
  Rocket,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Écouter',
    description:
      'Comprendre vos besoins, vos objectifs et les défis de votre activité.',
  },
  {
    number: '02',
    icon: Lightbulb,
    title: 'Concevoir',
    description:
      'Définir une stratégie et imaginer une solution adaptée.',
  },
  {
    number: '03',
    icon: Code2,
    title: 'Développer',
    description:
      'Construire, tester et améliorer votre solution.',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Déployer',
    description:
      'Mettre votre solution en production et vous accompagner.',
  },
]

export default function ProcessSection() {
  const { t } = useTranslation()

  return (
    <section className="bg-[#f7faff] py-14 sm:py-16 lg:py-24">

      <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8">

        <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-10 lg:mb-12">

          <span className="inline-flex text-xs font-bold tracking-[0.12em] text-blue-700 sm:text-sm">
            {t('NOTRE APPROCHE')}
          </span>

          <h2 className="my-3 text-3xl font-extrabold leading-tight text-[#071A3D] sm:my-4 sm:text-4xl lg:text-5xl">
            {t('De votre idée à une')}{' '}
            <span className="bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">
              {t('solution concrète.')}
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            {t('Une démarche structurée pour transformer vos ambitions en réalisations numériques.')}
          </p>

        </div>

        <div className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 sm:gap-5 xl:grid-cols-4">

          {steps.map((step) => {
            const Icon = step.icon

            return (
              <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7" key={step.number}>

                <div className="mb-6 flex items-center justify-between sm:mb-8">
                  <span className="text-2xl font-extrabold text-blue-100">{step.number}</span>

                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-blue-50 text-blue-700">
                    <Icon size={25} />
                  </div>
                </div>

                <h3 className="mb-2 text-lg font-bold text-[#071A3D]">{t(step.title)}</h3>

                <p className="text-sm leading-6 text-slate-600">{t(step.description)}</p>

              </div>
            )
          })}

        </div>

      </div>

    </section>
  )
}