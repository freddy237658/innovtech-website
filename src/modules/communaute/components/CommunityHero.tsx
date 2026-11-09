import {
  ArrowDown,
  ArrowRight,
  Users,
  Sparkles,
} from "lucide-react";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function CommunityHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#071A3D]">
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=2000&q=85"
          alt=""
          className="h-full w-full object-cover opacity-20"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#071A3D] via-[#071A3D]/95 to-[#0645C0]/75" />
      </div>

      <div className="absolute -right-24 top-10 -z-10 h-72 w-72 rounded-full bg-blue-500/20 blur-[100px]" />
      <div className="absolute -bottom-32 left-1/4 -z-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-[100px]" />

      <div className="mx-auto grid min-h-[620px] max-w-7xl items-center gap-12 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:px-10 lg:py-28">
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="min-w-0"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-cyan-200">
            <Users size={15} />
            Community INNOVTECH
          </span>

          <h1 className="mt-8 break-words text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl">
            L'innovation commence
            <span className="mt-2 block bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
              avec les personnes.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-blue-100/75 sm:text-lg">
            Rejoignez un écosystème ouvert aux développeurs, étudiants,
            entrepreneurs et passionnés de technologie qui souhaitent
            apprendre, partager, collaborer et construire ensemble.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#participer"
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-white px-6 py-3 font-bold text-[#071A3D] transition hover:bg-cyan-50"
            >
              Participer à la communauté
              <ArrowDown size={18} />
            </a>

            <Link
              to="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl border border-white/25 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Nous contacter
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-5 border-t border-white/10 pt-7 text-sm text-blue-100/70">
            <span className="inline-flex items-center gap-2">
              <Sparkles size={17} className="text-cyan-300" />
              Partage
            </span>

            <span className="inline-flex items-center gap-2">
              <Users size={17} className="text-cyan-300" />
              Collaboration
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mx-auto w-full max-w-lg"
        >
          <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-cyan-400/20 to-blue-600/20 blur-2xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 p-3 shadow-2xl backdrop-blur-xl">
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85"
              alt="Personnes collaborant sur un projet"
              className="h-[300px] w-full rounded-[1.5rem] object-cover sm:h-[390px]"
            />

            <div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/20 bg-[#071A3D]/85 p-5 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400/15 text-cyan-300">
                  <Users size={23} />
                </div>

                <div className="min-w-0">
                  <p className="font-bold text-white">
                    Ensemble, allons plus loin.
                  </p>

                  <p className="mt-1 text-xs text-blue-100/70">
                    Des compétences. Des idées. Des opportunités.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}