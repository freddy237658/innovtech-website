import { ArrowUpRight } from 'lucide-react'

import { Link } from 'react-router-dom'

export default function ProjectsSection() {
  return (
    <section className="section projects-section">

      <div className="container">

        <div className="projects-heading">

          <div>
            <span className="section-label">
              NOS RÉALISATIONS
            </span>

            <h2 className="section-title">
              La technologie au service{' '}
              <span className="text-gradient">
                des idées concrètes.
              </span>
            </h2>
          </div>

          <p className="section-description">
            Des projets qui illustrent notre volonté
            de transformer les besoins en solutions
            numériques utiles.
          </p>

        </div>

        <div className="projects-feature">

          <div className="projects-feature-image">

            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=85"
              alt="Environnement de développement logiciel"
              loading="lazy"
            />

          </div>

          <div className="projects-feature-content">

            <span>PROJETS TECHNOLOGIQUES</span>

            <h3>
              Construire des solutions qui ont du sens.
            </h3>

            <p>
              Chaque projet représente une opportunité
              de résoudre un problème, d'améliorer une
              expérience ou de créer de nouvelles
              possibilités grâce à la technologie.
            </p>

            <Link to="/realisations" className="btn btn-primary">
              Explorer nos réalisations
              <ArrowUpRight size={18} />
            </Link>

          </div>

        </div>

      </div>

    </section>
  )
}