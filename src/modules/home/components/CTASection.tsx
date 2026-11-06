import { ArrowUpRight, MessageCircle } from 'lucide-react'

import { Link } from 'react-router-dom'

export default function CTASection() {
  return (
    <section className="cta-section">

      <div className="container">

        <div className="cta-content">

          <div className="cta-decoration" />

          <span>VOTRE PROCHAIN PROJET COMMENCE ICI</span>

          <h2>
            Et si nous construisions
            quelque chose d'exceptionnel
            ensemble ?
          </h2>

          <p>
            Partagez votre idée avec nous.
            Nous serons ravis de discuter de vos
            ambitions et d'imaginer les solutions
            adaptées à vos besoins.
          </p>

          <div className="cta-actions">

            <Link to="/contact" className="btn cta-primary">
              Démarrer un projet
              <ArrowUpRight size={18} />
            </Link>

            <Link to="/contact" className="btn cta-secondary">
              <MessageCircle size={18} />
              Nous contacter
            </Link>

          </div>

        </div>

      </div>

    </section>
  )
}