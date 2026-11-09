import { ArrowRight, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function ProjectCTA() {
  const { t } = useTranslation();

  return (
    <section className="px-5 py-20 sm:px-8 lg:px-10">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#071A3D] via-[#0645C0] to-[#087BFA] px-6 py-14 sm:px-12 lg:px-16 lg:py-20">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border-[40px] border-white/5" />

        <div className="relative z-10 flex flex-col justify-between gap-10 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200">
              <Rocket size={18} />
              {t("Votre prochain projet")}
            </span>

            <h2 className="mt-5 break-words text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              {t("Et si votre idée devenait notre prochaine réalisation ?")}
            </h2>

            <p className="mt-5 text-base leading-8 text-blue-100/80">
              {t("Nous accompagnons les entreprises et les entrepreneurs dans la conception et le développement de leurs solutions numériques.")}
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex min-h-14 shrink-0 items-center justify-center gap-3 rounded-xl bg-white px-7 py-4 font-bold text-[#071A3D] transition hover:bg-cyan-50"
          >
            {t("Démarrer un projet")}
            <ArrowRight size={19} />
          </Link>
        </div>
      </div>
    </section>
  );
}