import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  ArrowRight,
  CheckCircle2,
  LoaderCircle,
  Send,
} from "lucide-react";

const communitySchema = z.object({
  fullName: z
    .string()
    .min(2, "Veuillez saisir votre nom complet.")
    .max(120, "Le nom est trop long."),

  email: z
    .string()
    .email("Veuillez saisir une adresse e-mail valide."),

  profile: z.enum([
    "developer",
    "student",
    "entrepreneur",
    "company",
    "other",
  ]),

  requestType: z.enum([
    "idea",
    "collaboration",
    "partnership",
    "career",
    "other",
  ]),

  subject: z
    .string()
    .min(3, "Veuillez préciser le sujet.")
    .max(150, "Le sujet est trop long."),

  message: z
    .string()
    .min(20, "Votre message doit contenir au moins 20 caractères.")
    .max(3000, "Votre message est trop long."),

  website: z.string().max(200).optional(),

  consent: z.boolean().refine((value) => value, {
    message: "Veuillez accepter le traitement de vos informations.",
  }),
});

type CommunityFormValues = z.infer<typeof communitySchema>;

export default function CommunityIdeaForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CommunityFormValues>({
    resolver: zodResolver(communitySchema),
    defaultValues: {
      profile: "developer",
      requestType: "idea",
      consent: false,
    },
  });

  const onSubmit = async (data: CommunityFormValues) => {
    // Intégration API Laravel à effectuer dans une prochaine étape.
    // Pour le moment, aucune donnée n'est envoyée vers un serveur.
    console.log("Community submission (demo):", {
      ...data,
      website: undefined,
    });

    await new Promise((resolve) => setTimeout(resolve, 700));

    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="rounded-3xl border border-green-200 bg-green-50 p-8 text-center sm:p-12">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-700">
          <CheckCircle2 size={32} />
        </div>

        <h3 className="mt-6 text-2xl font-bold text-[#071A3D]">
          Merci pour votre intérêt !
        </h3>

        <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-slate-600">
          Votre formulaire de démonstration a été traité localement. Le
          système ne l'a pas encore transmis à INNOVTECH.
        </p>

        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-xl bg-[#0645C0] px-6 py-3 font-bold text-white transition hover:bg-blue-700"
        >
          Envoyer une autre proposition
          <ArrowRight size={17} />
        </button>
      </div>
    );
  }

  const inputClass =
    "mt-2 h-12 w-full min-w-0 rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10";

  const labelClass = "text-sm font-semibold text-[#071A3D]";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="min-w-0">
          <label className={labelClass} htmlFor="community-name">
            Nom complet *
          </label>

          <input
            id="community-name"
            {...register("fullName")}
            placeholder="Votre nom complet"
            autoComplete="name"
            className={inputClass}
          />

          {errors.fullName && (
            <p className="mt-2 text-xs text-red-600">
              {errors.fullName.message}
            </p>
          )}
        </div>

        <div className="min-w-0">
          <label className={labelClass} htmlFor="community-email">
            Adresse e-mail *
          </label>

          <input
            id="community-email"
            type="email"
            {...register("email")}
            placeholder="exemple@email.com"
            autoComplete="email"
            className={inputClass}
          />

          {errors.email && (
            <p className="mt-2 text-xs text-red-600">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="min-w-0">
          <label className={labelClass} htmlFor="community-profile">
            Votre profil *
          </label>

          <select
            id="community-profile"
            {...register("profile")}
            className={inputClass}
          >
            <option value="developer">Développeur / Ingénieur</option>
            <option value="student">Étudiant</option>
            <option value="entrepreneur">Entrepreneur</option>
            <option value="company">Entreprise / Organisation</option>
            <option value="other">Autre</option>
          </select>

          {errors.profile && (
            <p className="mt-2 text-xs text-red-600">
              {errors.profile.message}
            </p>
          )}
        </div>

        <div className="min-w-0">
          <label className={labelClass} htmlFor="community-request">
            Type de demande *
          </label>

          <select
            id="community-request"
            {...register("requestType")}
            className={inputClass}
          >
            <option value="idea">Proposer une idée</option>
            <option value="collaboration">Projet collaboratif</option>
            <option value="partnership">Partenariat</option>
            <option value="career">Opportunité professionnelle</option>
            <option value="other">Autre demande</option>
          </select>

          {errors.requestType && (
            <p className="mt-2 text-xs text-red-600">
              {errors.requestType.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="community-subject">
          Sujet *
        </label>

        <input
          id="community-subject"
          {...register("subject")}
          placeholder="Ex. : Proposition d'une plateforme numérique..."
          className={inputClass}
        />

        {errors.subject && (
          <p className="mt-2 text-xs text-red-600">
            {errors.subject.message}
          </p>
        )}
      </div>

      <div>
        <label className={labelClass} htmlFor="community-message">
          Présentez votre idée ou votre demande *
        </label>

        <textarea
          id="community-message"
          {...register("message")}
          rows={6}
          placeholder="Décrivez votre idée, votre projet, vos compétences ou le type de collaboration souhaité..."
          className="mt-2 w-full min-w-0 resize-y rounded-xl border border-slate-200 bg-white px-4 py-4 text-sm leading-7 text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
        />

        {errors.message && (
          <p className="mt-2 text-xs text-red-600">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Champ anti-spam honeypot */}
      <div
        aria-hidden="true"
        className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden"
      >
        <label htmlFor="community-website">Ne pas remplir ce champ</label>
        <input
          id="community-website"
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
        />
      </div>

      <div>
        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            {...register("consent")}
            className="mt-1 h-4 w-4 shrink-0 accent-blue-600"
          />

          <span className="text-sm leading-6 text-slate-500">
            J'accepte que mes informations soient utilisées par INNOVTECH
            pour traiter ma demande, conformément à la politique de
            confidentialité.
          </span>
        </label>

        {errors.consent && (
          <p className="mt-2 text-xs text-red-600">
            {errors.consent.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-xl bg-[#0645C0] px-6 py-4 font-bold text-white shadow-lg shadow-blue-700/15 transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {isSubmitting ? (
          <>
            <LoaderCircle size={19} className="animate-spin" />
            Traitement...
          </>
        ) : (
          <>
            <Send size={18} />
            Envoyer ma proposition
          </>
        )}
      </button>

      <p className="text-xs leading-6 text-slate-400">
        * Champs obligatoires. Ce formulaire est actuellement en mode
        démonstration : aucune transmission serveur n'est encore configurée.
      </p>
    </form>
  );
}