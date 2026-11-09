import { motion } from "framer-motion";
import type { CommunityPillar } from "../data/communityData";

interface Props {
  pillar: CommunityPillar;
  index: number;
}

const colorStyles: Record<string, string> = {
  blue: "bg-blue-50 text-blue-700",
  cyan: "bg-cyan-50 text-cyan-700",
  purple: "bg-purple-50 text-purple-700",
  orange: "bg-orange-50 text-orange-700",
};

export default function CommunityPillarCard({ pillar, index }: Props) {
  const Icon = pillar.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="min-w-0 rounded-3xl border border-slate-100 bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:shadow-xl sm:p-8"
    >
      <div className="flex items-center justify-between gap-4">
        <div
          className={`flex h-14 w-14 items-center justify-center rounded-2xl ${colorStyles[pillar.color]}`}
        >
          <Icon size={27} />
        </div>

        <span className="text-3xl font-bold text-slate-100">
          {pillar.number}
        </span>
      </div>

      <h3 className="mt-7 text-2xl font-bold text-[#071A3D]">
        {pillar.title}
      </h3>

      <p className="mt-4 text-sm leading-7 text-slate-500">
        {pillar.description}
      </p>
    </motion.article>
  );
}