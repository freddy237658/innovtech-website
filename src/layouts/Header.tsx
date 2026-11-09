import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  Menu,
  X,
  ChevronDown,
  ArrowUpRight,
} from 'lucide-react'
import { Link } from 'react-router-dom'

import logo from '../assets/logo/logo-innovtech.png'
import { expertises } from '../modules/expertises/data/expertisesData'
import { innovations } from '../modules/innovation/data/innovationData'
import { projects } from '../modules/realisations/data/projectsData'
import { services } from '../modules/services/data/servicesData'
import './header.css'

type NavigationItem = {
  label: string
  href: string
  children?: { label: string; href: string }[]
}

const serviceLinks = services.map(({ title, slug }) => ({
  label: title,
  href: `/services/${slug}`,
}))

const expertiseLinks = expertises.map(({ title, slug }) => ({
  label: title,
  href: `/expertises/${slug}`,
}))

const innovationLinks = innovations.map(({ title, slug }) => ({
  label: title,
  href: `/innovation/${slug}`,
}))

const projectLinks = projects
  .filter(({ slug }) =>
    ['innovconnect', 'innovllm', 'fred-school', 'djelica'].includes(slug),
  )
  .map(({ name, slug }) => ({
    label: name,
    href: `/realisations/${slug}`,
  }))

const navigation: NavigationItem[] = [
  {
    label: 'Accueil',
    href: '/',
  },
  {
    label: 'Entreprise',
    href: '/entreprise',
  },
  {
    label: 'Services',
    href: '/services',
    children: serviceLinks,
  },
  {
    label: 'Expertises',
    href: '/expertises',
    children: expertiseLinks,
  },
  {
    label: 'Innovation & R&D',
    href: '/innovation',
    children: innovationLinks,
  },
  {
    label: 'Réalisations',
    href: '/realisations',
    children: projectLinks,
  },
  {
    label: 'Communauté',
    href: '/communaute',
  },
  {
    label: 'Ressources',
    href: '/ressources',
  },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { i18n, t } = useTranslation()

  return (
    <header className="site-header">

      <div className="header-container">

        <Link to="/" className="brand-logo">
          <img
            src={logo}
            alt="INNOVTECH"
            className="max-[360px]:!w-[120px]"
          />
        </Link>

        <nav className={`main-navigation ${menuOpen ? 'active' : ''}`}>

          {navigation.map((item) => (
            <div className="nav-item" key={item.label}>

              <Link
                to={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {t(item.label)}

                {item.children && (
                  <ChevronDown size={14} />
                )}
              </Link>

              {item.children && (
                <div className="dropdown-menu">

                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      to={child.href}
                      onClick={() => setMenuOpen(false)}
                    >
                      {t(child.label)}
                    </Link>
                  ))}

                </div>
              )}

            </div>
          ))}

          <div className="mobile-contact">

            <Link to="/contact" className="btn btn-primary">
              {t('Parlons de votre projet')}
              <ArrowUpRight size={16} />
            </Link>

          </div>

        </nav>

        <div className="header-actions">

          <button
            className="language-button"
            type="button"
            aria-label={i18n.language === 'en' ? 'Switch to French' : 'Switch to English'}
            aria-pressed={i18n.language === 'en'}
            onClick={() => void i18n.changeLanguage(i18n.language === 'en' ? 'fr' : 'en')}
          >
            {i18n.language === 'en' ? 'EN' : 'FR'}
            <ChevronDown size={14} />
          </button>

          <Link to="/contact" className="btn btn-primary header-cta max-[1150px]:!hidden">
            {t('Parlons de votre projet')}
            <ArrowUpRight size={16} />
          </Link>

          <button
            className="mobile-menu-button !h-[42px] !w-[42px] shrink-0"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? t('Fermer le menu') : t('Ouvrir le menu')}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>

        </div>

      </div>

    </header>
  )
}