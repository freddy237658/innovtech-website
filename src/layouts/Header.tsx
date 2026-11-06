import { useState } from 'react'
import {
  Menu,
  X,
  ChevronDown,
  ArrowUpRight,
} from 'lucide-react'

import logo from '../assets/logo/logo-innovtech.png'
import './header.css'

const navigation = [
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
    children: [
      'Développement logiciel',
      'Solutions SaaS',
      'Développement web',
      'Applications mobiles & desktop',
      'Digitalisation',
      'UI/UX Design',
      'Services informatiques',
    ],
  },
  {
    label: 'Expertises',
    href: '/expertises',
  },
  {
    label: 'Innovation',
    href: '/innovation',
  },
  {
    label: 'Réalisations',
    href: '/realisations',
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

  const [language, setLanguage] = useState('FR')

  return (
    <header className="site-header">

      <div className="header-container">

        <a href="/" className="brand-logo">
          <img
            src={logo}
            alt="INNOVTECH"
          />
        </a>

        <nav className={`main-navigation ${menuOpen ? 'active' : ''}`}>

          {navigation.map((item) => (
            <div className="nav-item" key={item.label}>

              <a
                href={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}

                {item.children && (
                  <ChevronDown size={14} />
                )}
              </a>

              {item.children && (
                <div className="dropdown-menu">

                  {item.children.map((child) => (
                    <a
                      key={child}
                      href="/services"
                      onClick={() => setMenuOpen(false)}
                    >
                      {child}
                    </a>
                  ))}

                </div>
              )}

            </div>
          ))}

          <div className="mobile-contact">

            <a href="/contact" className="btn btn-primary">
              Parlons de votre projet
              <ArrowUpRight size={16} />
            </a>

          </div>

        </nav>

        <div className="header-actions">

          <button
            className="language-button"
            onClick={() =>
              setLanguage(language === 'FR' ? 'EN' : 'FR')
            }
          >
            {language}
            <ChevronDown size={14} />
          </button>

          <a href="/contact" className="btn btn-primary header-cta">
            Parlons de votre projet
            <ArrowUpRight size={16} />
          </a>

          <button
            className="mobile-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Ouvrir le menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>

        </div>

      </div>

    </header>
  )
}