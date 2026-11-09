import { useState } from "react";
import { ArrowRight, CheckCircle2, Mail, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("");

    setLoading(true);

    // Démonstration uniquement : aucune donnée n'est envoyée.
    await new Promise((resolve) => setTimeout(resolve, 700));

    setMessage(
      "La newsletter sera bientôt disponible. Votre adresse n'a pas été enregistrée."
    );

    setEmail("");
    setLoading(false);
  };

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#071A3D] px-6 py-14 text-center sm:px-12 sm:py-20"
      >
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-2xl">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-cyan-300">
            <Mail size={25} />
          </div>

          <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300">
            <Sparkles size={15} />
            Newsletter INNOVTECH
          </span>

          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Restez connecté à l'innovation.
          </h2>

          <p className="mt-5 leading-8 text-blue-100/70">
            Recevez nos prochains articles, tutoriels et actualités
            technologiques directement dans votre boîte mail.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-9 flex max-w-xl flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Votre adresse email"
              aria-label="Votre adresse email"
              className="min-w-0 flex-1 rounded-xl border border-white/10 bg-white/10 px-5 py-4 text-white outline-none placeholder:text-blue-100/40 focus:border-cyan-300"
            />

            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-6 py-4 font-semibold text-white transition hover:bg-blue-400 disabled:opacity-60"
            >
              {loading ? "Patientez..." : "S'inscrire"}
              {!loading && <ArrowRight size={17} />}
            </button>
          </form>

          {message && (
            <p
              role="status"
              className="mt-5 flex items-center justify-center gap-2 text-sm text-cyan-200"
            >
              <CheckCircle2 size={17} />
              {message}
            </p>
          )}

          <p className="mt-5 text-xs text-blue-100/40">
            Inscription non encore connectée au serveur.
          </p>
        </div>
      </motion.div>
    </section>
  );
}