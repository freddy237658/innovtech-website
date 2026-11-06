import {
  ArrowUpRight,
  BrainCircuit,
  Eye,
  Cpu,
  Network,
  Sparkles,
} from 'lucide-react'

import { Link } from 'react-router-dom'

export default function InnovationSection() {

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
    <section className="section innovation-section">

      <div className="container innovation-container">

        <div className="innovation-content">

          <span className="section-label">
            INNOVATION & RECHERCHE
          </span>

          <h2 className="section-title">
            Explorer aujourd'hui les{' '}
            <span className="innovation-gradient">
              technologies de demain.
            </span>
          </h2>

          <p>
            Nous explorons les possibilités offertes
            par l'intelligence artificielle, le
            Machine Learning et les technologies
            émergentes pour imaginer de nouvelles
            solutions numériques.
          </p>

          <div className="innovation-fields">

            {fields.map((field) => {
              const Icon = field.icon

              return (
                <div key={field.title}>
                  <Icon size={19} />
                  <span>{field.title}</span>
                </div>
              )
            })}

          </div>

          <Link to="/innovation" className="btn innovation-button">
            Explorer notre univers technologique
            <ArrowUpRight size={18} />
          </Link>

        </div>

        <div className="innovation-visual">

          <div className="innovation-glow" />

          <img
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1100&q=85"
            alt="Intelligence artificielle et réseaux neuronaux"
          />

          <div className="innovation-floating-card">

            <Sparkles size={20} />

            <div>
              <strong>INNOVTECH R&D</strong>
              <span>Imaginer. Expérimenter. Innover.</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  )
}