import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { FAQItem } from "../data/faqData";

interface Props {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: Props) {
  const [activeId, setActiveId] = useState<number | null>(items[0]?.id ?? null);

  return (
    <div className="space-y-3">
      {items.map((item) => {
        const active = activeId === item.id;

        return (
          <div
            key={item.id}
            className={`overflow-hidden rounded-2xl border transition ${
              active
                ? "border-blue-200 bg-blue-50/50"
                : "border-slate-100 bg-white"
            }`}
          >
            <button
              type="button"
              aria-expanded={active}
              onClick={() => setActiveId(active ? null : item.id)}
              className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
            >
              <span className="font-semibold leading-7 text-[#071A3D]">
                {item.question}
              </span>

              <ChevronDown
                size={20}
                className={`shrink-0 text-blue-600 transition-transform ${
                  active ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence initial={false}>
              {active && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <p className="px-5 pb-6 text-sm leading-8 text-slate-500 sm:px-6">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}