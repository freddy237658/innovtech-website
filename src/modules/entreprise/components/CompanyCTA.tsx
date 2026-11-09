import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function CompanyCTA() {
  const { t } = useTranslation();

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-r from-[#071A3D] via-blue-800 to-blue-600 px-6 py-14 text-center sm:px-12 sm:py-16">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-blue-400/20 blur-3xl" />

        <div className="relative mx-auto max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-cyan-200">
            <Sparkles size={16} />
            {t("Construisons ensemble")}
          </span>

          <h2 className="mt-6 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
            {t("Votre prochaine grande idée mérite de devenir réalité.")}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-blue-100 sm:text-lg">
            {t("Discutons de vos ambitions et découvrons comment la technologie peut vous aider à les concrétiser.")}
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-flex max-w-full items-center justify-center gap-3 rounded-xl bg-white px-6 py-4 text-sm font-bold text-blue-800 transition hover:-translate-y-1 hover:bg-cyan-50 sm:text-base"
          >
            {t("Démarrer une collaboration")}
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}