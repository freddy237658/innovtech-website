import {
  ArrowUpRight,
  Code2,
  Cloud,
  Globe,
  Smartphone,
  Workflow,
  Palette,
  MonitorCog,
} from 'lucide-react'

import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const services = [
  {
    icon: Code2,
    title: 'Développement logiciel',
    description:
      'Des logiciels personnalisés conçus pour répondre aux besoins spécifiques de votre activité.',
    link: '/services/developpement-logiciel',
  },
  {
    icon: Cloud,
    title: 'Solutions SaaS',
    description:
      'Des plateformes intelligentes, accessibles et évolutives pour vos projets numériques.',
    link: '/services/solutions-saas',
  },
  {
    icon: Globe,
    title: 'Développement web',
    description:
      'Des sites web modernes, performants et adaptés à tous les appareils.',
    link: '/services/developpement-web',
  },
  {
    icon: Smartphone,
    title: 'Applications mobiles & desktop',
    description:
      'Des applications pensées pour simplifier les usages et améliorer la productivité.',
    link: '/services/applications',
  },
  {
    icon: Workflow,
    title: 'Digitalisation',
    description:
      'Automatisation et modernisation des processus de votre organisation.',
    link: '/services/digitalisation',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description:
      'Des interfaces intuitives, esthétiques et centrées sur les utilisateurs.',
    link: '/services/design-ui-ux',
  },
  {
    icon: MonitorCog,
    title: 'Services informatiques',
    description:
      'Assistance, maintenance et accompagnement technologique.',
    link: '/services/services-informatiques',
  },
  {
    icon: Cloud,
    title: 'Conseil technologique',
    description:
      'Des orientations stratégiques pour choisir les bonnes technologies.',
    link: '/services/conseil-technologique',
  },
]

export default function ServicesSection() {
  const { t } = useTranslation()

  return (
    <section className="bg-[#f7faff] py-14 sm:py-16 lg:py-24">

      <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8">

        <div className="mb-8 flex flex-col gap-5 sm:mb-10 lg:mb-12 lg:flex-row lg:items-end lg:justify-between">

          <div>
            <span className="inline-flex text-xs font-bold tracking-[0.12em] text-blue-700 sm:text-sm">
              {t('NOS SERVICES')}
            </span>

            <h2 className="my-3 max-w-3xl text-3xl font-extrabold leading-tight text-[#071A3D] sm:my-4 sm:text-4xl lg:text-5xl">
              {t('Des solutions pour')}{' '}
              <span className="bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">
                {t('aller plus loin.')}
              </span>
            </h2>

            <p className="max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              {t("De l'idée à la réalisation, nous mettons la technologie au service de vos projets.")}
            </p>
          </div>

          <Link to="/services" className="inline-flex w-fit items-center gap-2 whitespace-normal text-sm font-bold text-blue-700">
            {t('Tous nos services')}
            <ArrowUpRight size={18} />
          </Link>

        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-4">

          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <Link
                to={service.link}
                className="group relative min-w-0 rounded-2xl border border-slate-100 bg-white p-5 transition duration-300 hover:-translate-y-1.5 hover:border-blue-100 hover:shadow-xl sm:min-h-[260px] sm:p-6 lg:p-7"
                key={service.title}
              >

                <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-blue-50 text-blue-700 sm:mb-6 sm:h-[52px] sm:w-[52px]">
                  <Icon size={25} />
                </div>

                <span className="absolute right-5 top-6 text-xs font-bold text-slate-400 sm:right-6 sm:top-7">
                  0{index + 1}
                </span>

                <h3 className="mb-2 text-base font-bold text-[#071A3D]">{t(service.title)}</h3>

                <p className="text-xs leading-6 text-slate-600 sm:text-sm">{t(service.description)}</p>

                <div className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-blue-700 sm:mt-5">
                  {t('Découvrir')}
                  <ArrowUpRight size={17} />
                </div>

              </Link>
            )
          })}

        </div>

      </div>

    </section>
  )
}