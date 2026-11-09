import { motion } from "framer-motion";
import {
  CheckCircle2,
  ArrowRight,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

interface Props {
  onReset: () => void;
}

export default function ContactFormSuccess({ onReset }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-xl shadow-blue-900/5"
    >
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-700 to-blue-500 px-6 py-12 text-center text-white sm:px-10">
        <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan-300/20 blur-3xl" />

        <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-white/15 backdrop-blur-md">
          <CheckCircle2 size={42} />
        </div>

        <span className="relative mt-6 block text-xs font-bold uppercase tracking-[0.2em] text-blue-100">
          INNOVTECH · Contact
        </span>

        <h2 className="relative mt-4 text-2xl font-bold sm:text-3xl">
          Votre formulaire a été traité !
        </h2>

        <p className="relative mx-auto mt-4 max-w-md text-sm leading-7 text-blue-100">
          Vous venez de terminer avec succès la démonstration de notre
          formulaire de contact.
        </p>
      </div>

      <div className="px-6 py-9 sm:px-10 sm:py-12">
        <div className="mx-auto max-w-lg text-center">
          <h3 className="text-xl font-bold text-[#071A3D]">
            Merci de votre intérêt pour INNOVTECH.
          </h3>

          <p className="mt-4 text-sm leading-7 text-slate-500">
            La transmission réelle des demandes sera activée lors de
            l'intégration de notre API Laravel.
          </p>

          <div className="mt-7 flex items-start gap-3 rounded-2xl border border-amber-100 bg-amber-50 p-4 text-left">
            <ShieldCheck
              size={21}
              className="mt-0.5 shrink-0 text-amber-600"
            />

            <div>
              <p className="text-sm font-bold text-amber-800">
                Mode démonstration
              </p>

              <p className="mt-1 text-xs leading-6 text-amber-700">
                Aucune donnée personnelle n'a été envoyée, enregistrée ou
                transmise à INNOVTECH.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={onReset}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              <RefreshCw size={17} />
              Nouvelle demande
            </button>

            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-6 py-4 text-sm font-semibold text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
            >
              Retour à l'accueil
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}