import { motion } from "framer-motion";
import { contactInformation } from "../data/contactData";

export default function ContactInfoCard() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {contactInformation.map((item, index) => {
        const Icon = item.icon;

        const content = (
          <div className="flex h-full items-start gap-4 rounded-2xl border border-slate-100 bg-white p-5 transition hover:-translate-y-1 hover:border-blue-100 hover:shadow-lg sm:p-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <Icon size={22} />
            </div>

            <div className="min-w-0">
              <h3 className="font-bold text-[#071A3D]">{item.title}</h3>

              <p className="mt-2 break-words text-sm font-semibold text-blue-600">
                {item.value}
              </p>

              <p className="mt-2 text-xs leading-6 text-slate-400">
                {item.description}
              </p>
            </div>
          </div>
        );

        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            {item.href ? (
              <a href={item.href} className="block h-full">
                {content}
              </a>
            ) : (
              content
            )}
          </motion.div>
        );
      })}
    </div>
  );
}