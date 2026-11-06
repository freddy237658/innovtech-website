import {
  ArrowUpRight,
  CheckCircle2,
} from 'lucide-react'

import { Link } from 'react-router-dom'

import { motion } from 'framer-motion'

export default function AboutSection() {

  const advantages = [
    'Des solutions adaptées à vos besoins',
    'Une approche centrée sur l’innovation',
    'Des technologies modernes et évolutives',
    'Un accompagnement tout au long du projet',
  ]

  return (
    <section className="section about-section">

      <div className="container about-container">

        <motion.div
          className="about-visual"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >

          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85"
            alt="Équipe travaillant sur des projets technologiques"
          />

          <div className="about-floating-card">
            <strong>INNOVTECH</strong>
            <span>Votre partenaire technologique</span>
          </div>

          <div className="about-decoration" />

        </motion.div>

        <div className="about-content">

          <span className="section-label">
            QUI SOMMES-NOUS ?
          </span>

          <h2 className="section-title">
            Nous donnons vie à vos{' '}
            <span className="text-gradient">
              ambitions numériques.
            </span>
          </h2>

          <p className="section-description">
            INNOVTECH est une entreprise technologique
            spécialisée dans la conception de solutions
            numériques innovantes.

            Nous accompagnons les entreprises,
            entrepreneurs et organisations dans la
            création de logiciels, plateformes SaaS,
            applications et services digitaux.
          </p>

          <div className="about-advantages">

            {advantages.map((item) => (
              <div key={item}>
                <CheckCircle2 size={19} />
                <span>{item}</span>
              </div>
            ))}

          </div>

          <Link
            to="/entreprise"
            className="btn btn-primary"
          >
            Découvrir INNOVTECH
            <ArrowUpRight size={18} />
          </Link>

        </div>

      </div>

    </section>
  )
}