import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import type { CommunityOpportunity } from "../data/communityData";

interface Props {
  opportunity: CommunityOpportunity;
  index: number;
}

export default function CommunityOpportunityCard({
  opportunity,
  index,
}: Props) {
  const Icon = opportunity.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="flex min-w-0 flex-col rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition hover:shadow-xl sm:p-7"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
        <Icon size={23} />
      </div>

      <span className="mt-6 text-xs font-bold uppercase tracking-widest text-blue-600">
        {opportunity.type}
      </span>

      <h3 className="mt-3 break-words text-xl font-bold text-[#071A3D]">
        {opportunity.title}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-7 text-slate-500">
        {opportunity.description}
      </p>

      <a
        href="#participer"
        className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-blue-700 transition hover:gap-4"
      >
        En savoir plus
        <ArrowRight size={17} />
      </a>
    </motion.div>
  );
}