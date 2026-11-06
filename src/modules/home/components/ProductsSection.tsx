import {
  ArrowUpRight,
  Users,
  BrainCircuit,
  GraduationCap,
} from 'lucide-react'

import { Link } from 'react-router-dom'

const products = [
  {
    name: 'InnovConnect',
    category: 'PLATEFORME PROFESSIONNELLE',
    description:
      'Une plateforme destinée à connecter les développeurs, ingénieurs, entreprises et passionnés de technologie.',
    image:
      'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=85',
    icon: Users,
    status: 'Projet en développement',
  },
  {
    name: 'InnovLLM',
    category: 'INTELLIGENCE ARTIFICIELLE',
    description:
      'Un projet de recherche visant à développer des modèles de langage et des technologies IA.',
    image:
      'https://images.unsplash.com/photo-1676299081847-824916de030a?auto=format&fit=crop&w=900&q=85',
    icon: BrainCircuit,
    status: 'Recherche & développement',
  },
  {
    name: 'Fred School',
    category: 'EDTECH / SAAS',
    description:
      'Une plateforme de gestion scolaire pensée pour moderniser les établissements éducatifs.',
    image:
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=85',
    icon: GraduationCap,
    status: 'Projet en développement',
  },
]

export default function ProductsSection() {
  return (
    <section className="section products-section">

      <div className="container">

        <div className="section-heading">

          <div>
            <span className="section-label">
              NOS PRODUITS
            </span>

            <h2 className="section-title">
              Des idées transformées en{' '}
              <span className="text-gradient">
                produits numériques.
              </span>
            </h2>

            <p className="section-description">
              Découvrez les solutions et projets
              technologiques développés au sein
              de notre écosystème.
            </p>
          </div>

          <Link to="/realisations" className="text-link">
            Voir tous les projets
            <ArrowUpRight size={18} />
          </Link>

        </div>

        <div className="products-grid">

          {products.map((product) => {
            const Icon = product.icon

            return (
              <article className="product-card" key={product.name}>

                <div className="product-image">

                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                  />

                  <span className="product-category">
                    {product.category}
                  </span>

                </div>

                <div className="product-content">

                  <div className="product-heading">

                    <div className="product-icon">
                      <Icon size={22} />
                    </div>

                    <span className="product-status">
                      {product.status}
                    </span>

                  </div>

                  <h3>{product.name}</h3>

                  <p>{product.description}</p>

                  <Link to="/realisations" className="product-link">
                    Découvrir le projet
                    <ArrowUpRight size={17} />
                  </Link>

                </div>

              </article>
            )
          })}

        </div>

      </div>

    </section>
  )
}