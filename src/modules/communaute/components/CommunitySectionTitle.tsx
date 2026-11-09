import { motion } from "framer-motion";

interface Props {
  eyebrow: string;
  title: string;
  description: string;
  centered?: boolean;
}

export default function CommunitySectionTitle({
  eyebrow,
  title,
  description,
  centered = false,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 max-w-3xl ${centered ? "mx-auto text-center" : ""}`}
    >
      <span className="mb-4 inline-flex rounded-full bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
        {eyebrow}
      </span>

      <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#071A3D] sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      <p className="mt-5 text-base leading-8 text-slate-500 sm:text-lg">
        {description}
      </p>
    </motion.div>
  );
}