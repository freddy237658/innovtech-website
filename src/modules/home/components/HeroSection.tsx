import {
  ArrowRight,
  Play,
  Sparkles,
  ShieldCheck,
  Cpu,
} from 'lucide-react'

import { motion } from 'framer-motion'

import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="hero-section">

      <div className="hero-background-circle circle-one" />
      <div className="hero-background-circle circle-two" />

      <div className="container hero-container">

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <div className="hero-badge">
            <Sparkles size={15} />

            <span>
              L'innovation au service de votre avenir
            </span>
          </div>

          <h1>
            Transformons vos idées en{' '}
            <span className="text-gradient">
              solutions numériques
            </span>
            innovantes.
          </h1>

          <p className="hero-description">
            INNOVTECH accompagne les entreprises,
            entrepreneurs et organisations dans leur
            transformation digitale grâce à des
            technologies modernes, performantes
            et adaptées à leurs ambitions.
          </p>

          <div className="hero-actions">

            <Link to="/contact" className="btn btn-primary">
              Parlons de votre projet
              <ArrowRight size={18} />
            </Link>

            <Link to="/services" className="hero-secondary-button">
              <span className="play-icon">
                <Play size={15} fill="currentColor" />
              </span>

              Découvrir nos services
            </Link>

          </div>

          <div className="hero-trust">

            <div>
              <ShieldCheck size={19} />
              <span>Solutions fiables</span>
            </div>

            <div>
              <Cpu size={19} />
              <span>Technologies modernes</span>
            </div>

          </div>

        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >

          <div className="hero-image-wrapper">

            <img
              src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=85"
              alt="Illustration technologique et intelligence artificielle"
              className="hero-image"
            />

            <div className="hero-image-overlay" />

            <div className="hero-image-caption">
              <span>INNOVTECH</span>
              <p>Building tomorrow's digital world.</p>
            </div>

          </div>

          <div className="floating-card floating-card-top">

            <div className="floating-icon">
              <Cpu size={20} />
            </div>

            <div>
              <strong>Innovation</strong>
              <span>Technologies avancées</span>
            </div>

          </div>

          <div className="floating-card floating-card-bottom">

            <div className="floating-icon">
              <Sparkles size={20} />
            </div>

            <div>
              <strong>Transformation digitale</strong>
              <span>Vos idées, nos solutions</span>
            </div>

          </div>

        </motion.div>

      </div>

      <div className="hero-bottom-gradient" />

    </section>
  )
}