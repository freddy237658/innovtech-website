import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react'
import { Link } from 'react-router-dom'

import logo from '../assets/logo/logo-innovtech.png'
import { useTranslation } from 'react-i18next'
import './footer.css'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="site-footer">

      <div className="footer-main container">

        <div className="footer-brand">

          <img
            src={logo}
            alt="INNOVTECH"
          />

          <p>
            {t('Nous transformons vos idées en solutions numériques innovantes pour construire votre avenir digital.')}
          </p>

          <div className="footer-socials">

            <a href="#" aria-label="LinkedIn">
              in
            </a>

            <a href="#" aria-label="Facebook">
              f
            </a>

            <a href="#" aria-label="Instagram">
              ◎
            </a>

            <a href="#" aria-label="GitHub">
              gh
            </a>

          </div>

        </div>

        <div className="footer-column">
          <h3>{t('Entreprise')}</h3>
          <a href="/entreprise">{t('À propos')}</a>
          <a href="/entreprise/mission-vision">{t('Mission & vision')}</a>
          <a href="/realisations">{t('Nos réalisations')}</a>
          <a href="/communaute">{t('Communauté')}</a>
        </div>

        <div className="footer-column">
          <h3>{t('Nos services')}</h3>
          <a href="/services/developpement-logiciel">{t('Développement logiciel')}</a>
          <a href="/services/solutions-saas">{t('Solutions SaaS')}</a>
          <a href="/services/developpement-web">{t('Développement web')}</a>
          <a href="/services/digitalisation">{t('Digitalisation')}</a>
          <a href="/services/design-ui-ux">{t('UI/UX Design')}</a>
        </div>

        <div className="footer-column">
          <h3>{t('Explorer')}</h3>
          <a href="/expertises">{t('Expertises')}</a>
          <a href="/innovation">{t('Innovation & R&D')}</a>
          <Link to="/ressources">{t('Blog & ressources')}</Link>
          <a href="/faq">FAQ</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="footer-column footer-contact">
          <h3>{t('Contact')}</h3>

          <p>
            <MapPin size={16} />
            {t('Cameroun')}
          </p>

          <p>
            <Mail size={16} />
            {t('Contactez-nous')}
          </p>

          <p>
            <Phone size={16} />
            {t('Discutons de votre projet')}
          </p>

          <a href="/contact" className="footer-contact-link">
            {t('Nous contacter')}
            <ArrowUpRight size={16} />
          </a>

        </div>

      </div>

      <div className="footer-bottom">

        <div className="container footer-bottom-content">

          <p>
            © {new Date().getFullYear()} INNOVTECH.
            {t('Tous droits réservés.')}
          </p>

          <div>
            <a href="/confidentialite">{t('Confidentialité')}</a>
            <a href="/conditions-generales">{t('Conditions générales')}</a>
            <a href="/mentions-legales">{t('Mentions légales')}</a>
          </div>

          <span>
            {t('Votre vision, nos technologies, votre réussite.')}
          </span>

        </div>

      </div>

    </footer>
  )
}