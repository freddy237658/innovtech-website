import { motion } from "framer-motion";
import { ArrowDown, BookOpen, Sparkles } from "lucide-react";

export default function ResourcesHero() {
  return (
    <section className="relative overflow-hidden bg-[#071A3D] px-4 pb-20 pt-28 text-white sm:px-6 sm:pb-24 sm:pt-36 lg:px-8">
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-500/20 blur-[100px]" />
      <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-cyan-400/10 blur-[100px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-blue-200">
            <Sparkles size={15} />
            <span>Le centre de connaissances INNOVTECH</span>
          </div>

          <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Explorez les idées qui
            <span className="block bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              façonnent demain.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-blue-100/75 sm:text-lg">
            Découvrez nos articles, tutoriels et analyses autour des
            technologies, du développement logiciel et de l'innovation
            numérique.
          </p>

          <a
            href="#articles"
            className="mt-9 inline-flex items-center gap-3 rounded-xl bg-white px-6 py-4 font-semibold text-[#071A3D] transition hover:-translate-y-1 hover:bg-blue-50"
          >
            Explorer les ressources
            <ArrowDown size={18} />
          </a>

          <div className="mt-12 flex items-center gap-3 text-sm text-blue-100/60">
            <BookOpen size={19} />
            Des connaissances pour construire le numérique de demain.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-blue-500/30 to-cyan-400/10 blur-2xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 p-3 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=85"
              alt="Espace de lecture et de réflexion"
              className="h-[280px] w-full rounded-3xl object-cover sm:h-[380px]"
            />

            <div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/20 bg-[#071A3D]/85 p-5 backdrop-blur-xl">
              <span className="text-xs font-semibold uppercase tracking-widest text-cyan-300">
                Innovation · Technologie · Futur
              </span>
              <p className="mt-2 text-lg font-semibold text-white sm:text-xl">
                Apprendre aujourd'hui. Innover demain.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}