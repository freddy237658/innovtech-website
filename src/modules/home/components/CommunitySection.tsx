import {
  ArrowRight,
  Users,
  Lightbulb,
  Rocket,
} from 'lucide-react'

import { Link } from 'react-router-dom'

export default function CommunitySection() {
  return (
    <section className="section community-section">

      <div className="container community-container">

        <div className="community-content">

          <span className="section-label">
            COMMUNAUTÉ INNOVTECH
          </span>

          <h2 className="section-title">
            Les grandes innovations commencent souvent par{' '}
            <span className="text-gradient">
              une idée.
            </span>
          </h2>

          <p className="section-description">
            Nous souhaitons encourager les étudiants,
            développeurs et entrepreneurs à apprendre,
            expérimenter et transformer leurs idées
            en véritables projets technologiques.
          </p>

          <div className="community-benefits">

            <div>
              <Users size={22} />
              <span>Rencontrer des passionnés</span>
            </div>

            <div>
              <Lightbulb size={22} />
              <span>Partager et développer des idées</span>
            </div>

            <div>
              <Rocket size={22} />
              <span>Construire des projets innovants</span>
            </div>

          </div>

          <Link to="/communaute" className="btn btn-primary">
            Rejoindre la communauté
            <ArrowRight size={18} />
          </Link>

        </div>

        <div className="community-image">

          <img
            src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1100&q=85"
            alt="Groupe de personnes collaborant autour d'un projet"
            loading="lazy"
          />

          <div className="community-image-badge">
            <strong>INNOVTECH</strong>
            <span>Ensemble, construisons l'avenir.</span>
          </div>

        </div>

      </div>

    </section>
  )
}