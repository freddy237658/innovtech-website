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
  return (
    <section className="section services-section">

      <div className="container">

        <div className="section-heading">

          <div>
            <span className="section-label">
              NOS SERVICES
            </span>

            <h2 className="section-title">
              Des solutions pour{' '}
              <span className="text-gradient">
                aller plus loin.
              </span>
            </h2>

            <p className="section-description">
              De l'idée à la réalisation, nous mettons
              la technologie au service de vos projets.
            </p>
          </div>

          <Link to="/services" className="text-link">
            Tous nos services
            <ArrowUpRight size={18} />
          </Link>

        </div>

        <div className="services-grid">

          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <Link
                to={service.link}
                className="service-card"
                key={service.title}
              >

                <div className="service-icon">
                  <Icon size={25} />
                </div>

                <span className="service-number">
                  0{index + 1}
                </span>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <div className="service-card-link">
                  Découvrir
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