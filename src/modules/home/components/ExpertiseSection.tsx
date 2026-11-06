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
  return (
    <section className="section expertise-section">

      <div className="container">

        <div className="expertise-header">

          <span className="section-label">
            NOS EXPERTISES
          </span>

          <h2 className="section-title">
            La technologie comme{' '}
            <span className="text-gradient">
              moteur d'innovation.
            </span>
          </h2>

          <p className="section-description">
            Nous mobilisons différentes technologies
            et compétences pour concevoir des
            solutions performantes et évolutives.
          </p>

        </div>

        <div className="expertise-layout">

          <div className="expertise-image">

            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1100&q=85"
              alt="Circuit électronique et composants technologiques"
            />

            <div className="expertise-image-label">
              <span>TECHNOLOGIES</span>
              <h3>Construire le futur numérique.</h3>
            </div>

          </div>

          <div className="expertise-grid">

            {expertises.map((item) => {
              const Icon = item.icon

              return (
                <div className="expertise-card" key={item.title}>

                  <div className="expertise-icon">
                    <Icon size={23} />
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                </div>
              )
            })}

          </div>

        </div>

        <div className="expertise-footer">
          <Link to="/expertises" className="btn btn-primary">
            Explorer nos expertises
            <ArrowRight size={18} />
          </Link>
        </div>

      </div>

    </section>
  )
}