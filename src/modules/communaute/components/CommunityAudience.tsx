import { motion } from "framer-motion";
import type { CommunityAudience as CommunityAudienceData } from "../data/communityData";

interface Props {
  audience: CommunityAudienceData;
  index: number;
}

export default function CommunityAudience({ audience, index }: Props) {
  const Icon = audience.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="min-w-0 overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm"
    >
      <img
        src={audience.image}
        alt=""
        loading="lazy"
        className="h-48 w-full object-cover sm:h-56"
      />

      <div className="p-6 sm:p-7">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
          <Icon size={24} />
        </div>

        <h3 className="mt-5 text-xl font-bold text-[#071A3D]">
          {audience.title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-slate-600">
          {audience.description}
        </p>
      </div>
    </motion.article>
  );
}