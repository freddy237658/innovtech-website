import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function NotFound() {
  const { t } = useTranslation()

  return (
    <section className="section container">
      <h1 className="section-title">{t('Page introuvable')}</h1>
      <p className="section-description">
        {t('L’adresse demandée ne correspond à aucune page du site.')}
      </p>
      <Link to="/" className="btn btn-primary">
        {t('Retour à l’accueil')}
      </Link>
    </section>
  )
}
