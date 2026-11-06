import {
  MessageSquare,
  Lightbulb,
  Code2,
  Rocket,
} from 'lucide-react'

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
  return (
    <section className="section process-section">

      <div className="container">

        <div className="process-heading">

          <span className="section-label">
            NOTRE APPROCHE
          </span>

          <h2 className="section-title">
            De votre idée à une{' '}
            <span className="text-gradient">
              solution concrète.
            </span>
          </h2>

          <p className="section-description">
            Une démarche structurée pour transformer
            vos ambitions en réalisations numériques.
          </p>

        </div>

        <div className="process-grid">

          {steps.map((step) => {
            const Icon = step.icon

            return (
              <div className="process-card" key={step.number}>

                <div className="process-top">
                  <span>{step.number}</span>

                  <div className="process-icon">
                    <Icon size={25} />
                  </div>
                </div>

                <h3>{step.title}</h3>

                <p>{step.description}</p>

              </div>
            )
          })}

        </div>

      </div>

    </section>
  )
}