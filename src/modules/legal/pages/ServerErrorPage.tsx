import { Link } from "react-router-dom";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import { motion } from "framer-motion";

export default function ServerErrorPage() {
  return (
    <main className="flex min-h-[85vh] items-center justify-center bg-slate-50 px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto max-w-xl text-center"
      >
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-red-50 text-red-500">
          <AlertTriangle size={38} />
        </div>

        <span className="mt-7 block text-sm font-bold uppercase tracking-widest text-red-500">
          Erreur serveur
        </span>

        <h1 className="mt-3 text-4xl font-bold text-[#071A3D]">
          Une erreur est survenue.
        </h1>

        <p className="mt-5 leading-8 text-slate-500">
          Le serveur n'a pas pu traiter votre demande. Veuillez réessayer
          dans quelques instants.
        </p>

        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700"
          >
            <RefreshCw size={18} />
            Réessayer
          </button>

          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-4 font-semibold text-slate-600 transition hover:bg-slate-100"
          >
            <Home size={18} />
            Accueil
          </Link>
        </div>
      </motion.div>
    </main>
  );
}