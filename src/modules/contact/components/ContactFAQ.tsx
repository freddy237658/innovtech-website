import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { contactFAQs } from "../data/contactData";

export default function ContactFAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Questions fréquentes
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-[#071A3D] sm:text-4xl">
            Vous avez des questions ?
          </h2>

          <p className="mt-5 leading-8 text-slate-500">
            Retrouvez ici quelques réponses aux questions que vous pourriez
            vous poser avant de collaborer avec INNOVTECH.
          </p>

          <div className="mt-8 overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=85"
              alt="Discussion autour d'un projet"
              loading="lazy"
              className="h-64 w-full object-cover"
            />
          </div>
        </div>

        <div className="space-y-3">
          {contactFAQs.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`overflow-hidden rounded-2xl border transition ${
                  isActive
                    ? "border-blue-200 bg-blue-50/50"
                    : "border-slate-100 bg-white"
                }`}
              >
                <button
                  type="button"
                  onClick={() =>
                    setActiveIndex(isActive ? null : index)
                  }
                  aria-expanded={isActive}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
                >
                  <span className="font-semibold leading-7 text-[#071A3D]">
                    {item.question}
                  </span>

                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-blue-600 transition-transform ${
                      isActive ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isActive && (
                  <div className="px-5 pb-6 sm:px-6">
                    <p className="text-sm leading-7 text-slate-500">
                      {item.answer}
                    </p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}