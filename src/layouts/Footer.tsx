import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react'

import logo from '../assets/logo/logo-innovtech.png'
import './footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">

      <div className="footer-main container">

        <div className="footer-brand">

          <img
            src={logo}
            alt="INNOVTECH"
          />

          <p>
            Nous transformons vos idées en solutions
            numériques innovantes pour construire
            votre avenir digital.
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
          <h3>Entreprise</h3>
          <a href="/entreprise">À propos</a>
          <a href="/entreprise/mission-vision">Mission & vision</a>
          <a href="/realisations">Nos réalisations</a>
          <a href="/communaute">Communauté</a>
        </div>

        <div className="footer-column">
          <h3>Nos services</h3>
          <a href="/services/developpement-logiciel">Développement logiciel</a>
          <a href="/services/solutions-saas">Solutions SaaS</a>
          <a href="/services/developpement-web">Développement web</a>
          <a href="/services/digitalisation">Digitalisation</a>
          <a href="/services/design-ui-ux">UI/UX Design</a>
        </div>

        <div className="footer-column">
          <h3>Explorer</h3>
          <a href="/expertises">Expertises</a>
          <a href="/innovation">Innovation & R&D</a>
          <a href="/ressources">Blog & ressources</a>
          <a href="/faq">FAQ</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="footer-column footer-contact">
          <h3>Contact</h3>

          <p>
            <MapPin size={16} />
            Cameroun
          </p>

          <p>
            <Mail size={16} />
            Contactez-nous
          </p>

          <p>
            <Phone size={16} />
            Discutons de votre projet
          </p>

          <a href="/contact" className="footer-contact-link">
            Nous contacter
            <ArrowUpRight size={16} />
          </a>

        </div>

      </div>

      <div className="footer-bottom">

        <div className="container footer-bottom-content">

          <p>
            © {new Date().getFullYear()} INNOVTECH.
            Tous droits réservés.
          </p>

          <div>
            <a href="/confidentialite">Confidentialité</a>
            <a href="/conditions-generales">Conditions générales</a>
            <a href="/mentions-legales">Mentions légales</a>
          </div>

          <span>
            Votre vision, nos technologies, votre réussite.
          </span>

        </div>

      </div>

    </footer>
  )
}