import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ContactCTA() {
  return (
    <section className="px-4 pb-20 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-r from-blue-700 to-blue-500 px-6 py-14 text-center sm:px-12 sm:py-16"
      >
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-300/20 blur-3xl" />

        <div className="relative mx-auto max-w-2xl">
          <Sparkles className="mx-auto text-cyan-200" size={32} />

          <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl">
            Votre prochaine idée mérite de devenir réalité.
          </h2>

          <p className="mt-5 leading-8 text-blue-100">
            Discutons de vos ambitions et imaginons ensemble les solutions
            technologiques qui feront avancer votre activité.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-3 rounded-xl bg-white px-7 py-4 font-bold text-blue-700 transition hover:-translate-y-1 hover:bg-blue-50"
          >
            Contacter INNOVTECH
            <ArrowRight size={18} />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}