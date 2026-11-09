import { useTranslation } from 'react-i18next'

export default function ComingSoon() {
  const { t } = useTranslation()

  return (
    <section className="section container">
      <h1 className="section-title">
        INNOVTECH
      </h1>

      <p className="section-description">
        {t('Cette page sera bientôt disponible.')}
      </p>
    </section>
  )
}
