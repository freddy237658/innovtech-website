import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="section container">
      <h1 className="section-title">Page introuvable</h1>
      <p className="section-description">
        L’adresse demandée ne correspond à aucune page du site.
      </p>
      <Link to="/" className="btn btn-primary">
        Retour à l’accueil
      </Link>
    </section>
  )
}
