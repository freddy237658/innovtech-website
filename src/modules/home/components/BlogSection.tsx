import { ArrowUpRight, Clock } from 'lucide-react'

import { Link } from 'react-router-dom'

const articles = [
  {
    category: 'TECHNOLOGIE',
    title: 'Comment la transformation digitale change les entreprises',
    image:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=85',
  },
  {
    category: 'INTELLIGENCE ARTIFICIELLE',
    title: 'Comprendre les possibilités de l’intelligence artificielle',
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=85',
  },
  {
    category: 'DÉVELOPPEMENT',
    title: 'Pourquoi créer une plateforme SaaS pour son activité ?',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=85',
  },
]

export default function BlogSection() {
  return (
    <section className="section blog-section">

      <div className="container">

        <div className="section-heading">

          <div>
            <span className="section-label">
              BLOG & RESSOURCES
            </span>

            <h2 className="section-title">
              Apprendre, découvrir et{' '}
              <span className="text-gradient">
                progresser.
              </span>
            </h2>
          </div>

          <Link to="/ressources" className="text-link">
            Toutes les ressources
            <ArrowUpRight size={18} />
          </Link>

        </div>

        <div className="blog-grid">

          {articles.map((article) => (
            <article className="blog-card" key={article.title}>

              <div className="blog-image">
                <img
                  src={article.image}
                  alt={article.title}
                  loading="lazy"
                />
              </div>

              <div className="blog-content">

                <span className="blog-category">
                  {article.category}
                </span>

                <h3>{article.title}</h3>

                <div className="blog-footer">

                  <span>
                    <Clock size={14} />
                    Article
                  </span>

                  <Link to="/ressources">
                    Lire
                    <ArrowUpRight size={16} />
                  </Link>

                </div>

              </div>

            </article>
          ))}

        </div>

      </div>

    </section>
  )
}