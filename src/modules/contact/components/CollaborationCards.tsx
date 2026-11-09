import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { collaborationTypes } from "../data/contactData";

export default function CollaborationCards() {
  return (
    <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Travaillons ensemble
          </span>

          <h2 className="mt-4 text-3xl font-bold text-[#071A3D] sm:text-4xl">
            Comment pouvons-nous collaborer ?
          </h2>

          <p className="mt-4 leading-8 text-slate-500">
            Que vous soyez entrepreneur, entreprise, développeur ou porteur
            de projet, plusieurs possibilités s'offrent à vous.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {collaborationTypes.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group rounded-3xl border border-slate-100 bg-white p-6 transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-900/5"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                  <Icon size={25} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#071A3D]">
                  {item.title}
                </h3>

                <p className="mt-3 min-h-20 text-sm leading-7 text-slate-500">
                  {item.description}
                </p>

                <Link
                  to="/contact"
                  state={{ requestType: item.id }}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition group-hover:gap-3"
                >
                  {item.label}
                  <ArrowUpRight size={17} />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}