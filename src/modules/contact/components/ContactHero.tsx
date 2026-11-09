import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-[#071A3D] px-4 pb-20 pt-28 text-white sm:px-6 sm:pb-28 sm:pt-36 lg:px-8">
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-500/20 blur-[100px]" />
      <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-cyan-400/10 blur-[100px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-blue-200">
            <MessageCircle size={16} />
            <span>Construisons quelque chose ensemble</span>
          </div>

          <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Parlons de votre
            <span className="block bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              prochain projet.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-blue-100/75 sm:text-lg">
            Une idée, un besoin technologique ou une opportunité de
            collaboration ? INNOVTECH est à votre écoute pour transformer
            vos ambitions en solutions numériques.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#formulaire"
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-blue-500 px-6 py-4 font-semibold text-white transition hover:-translate-y-1 hover:bg-blue-400"
            >
              Démarrer une discussion
              <ArrowDown size={18} />
            </a>

            <Link
              to="/realisations"
              className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/20 px-6 py-4 font-semibold text-white transition hover:bg-white/10"
            >
              Nos réalisations
              <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 text-sm text-blue-100/60">
            <span>✓ Étude de vos besoins</span>
            <span>✓ Solutions adaptées</span>
            <span>✓ Collaboration flexible</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-blue-500/30 to-cyan-400/10 blur-2xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 p-3 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85"
              alt="Équipe travaillant sur un projet collaboratif"
              className="h-[300px] w-full rounded-3xl object-cover sm:h-[420px]"
            />

            <div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/20 bg-[#071A3D]/85 p-5 backdrop-blur-xl">
              <span className="text-xs font-semibold uppercase tracking-widest text-cyan-300">
                Votre vision, notre expertise
              </span>
              <p className="mt-2 text-lg font-semibold text-white sm:text-xl">
                Chaque grande innovation commence par une conversation.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}