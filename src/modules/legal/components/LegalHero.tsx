import { motion } from "framer-motion";

interface Props {
  eyebrow: string;
  title: string;
  description: string;
}

export default function LegalHero({
  eyebrow,
  title,
  description,
}: Props) {
  return (
    <section className="relative overflow-hidden bg-[#071A3D] px-4 pb-20 pt-32 text-white sm:px-6 sm:pt-40">
      <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative mx-auto max-w-4xl"
      >
        <span className="text-sm font-bold uppercase tracking-widest text-cyan-300">
          {eyebrow}
        </span>

        <h1 className="mt-5 text-3xl font-bold leading-tight sm:text-5xl">
          {title}
        </h1>

        <p className="mt-6 max-w-2xl leading-8 text-blue-100/70">
          {description}
        </p>
      </motion.div>
    </section>
  );
}