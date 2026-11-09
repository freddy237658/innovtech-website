import { Link } from "react-router-dom";
import { ArrowLeft, Home, Search } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFoundPage() {
  return (
    <main className="flex min-h-[85vh] items-center justify-center overflow-hidden bg-slate-50 px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative mx-auto max-w-2xl text-center"
      >
        <div className="text-[100px] font-black leading-none tracking-tighter text-blue-100 sm:text-[160px]">
          404
        </div>

        <div className="relative -mt-8">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-xl shadow-blue-600/20">
            <Search size={30} />
          </div>

          <h1 className="mt-7 text-3xl font-bold text-[#071A3D] sm:text-4xl">
            Cette page est introuvable.
          </h1>

          <p className="mx-auto mt-5 max-w-lg leading-8 text-slate-500">
            La page que vous recherchez n'existe pas, a été déplacée ou
            n'est plus disponible.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700"
            >
              <Home size={18} />
              Accueil
            </Link>

            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-4 font-semibold text-slate-600 transition hover:bg-slate-100"
            >
              <ArrowLeft size={18} />
              Page précédente
            </button>
          </div>
        </div>
      </motion.div>
    </main>
  );
}