import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Mail,
  Send,
} from "lucide-react";

import ContactFormSteps from "./ContactFormSteps";
import { collaborationTypes } from "../data/contactData";
import { useLocation } from "react-router-dom";

type RequestType = "project" | "partnership" | "career" | "other";

interface FormData {
  requestType: RequestType;
  fullName: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
  solutionType: string;
  budget: string;
  deadline: string;
  collaboration: string;
  profile: string;
  portfolio: string;
  consent: boolean;
  website: string;
}

const initialData: FormData = {
  requestType: "project",
  fullName: "",
  email: "",
  phone: "",
  company: "",
  subject: "",
  message: "",
  solutionType: "",
  budget: "",
  deadline: "",
  collaboration: "",
  profile: "",
  portfolio: "",
  consent: false,
  website: "",
};

function getInitialRequestType(state: unknown): RequestType {
  if (
    typeof state === "object" &&
    state !== null &&
    "requestType" in state &&
    (state.requestType === "project" ||
      state.requestType === "partnership" ||
      state.requestType === "career" ||
      state.requestType === "other")
  ) {
    return state.requestType;
  }

  return "project";
}

const inputClass =
  "w-full min-w-0 rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10";

const labelClass = "mb-2 block text-sm font-semibold text-[#071A3D]";

export default function ContactForm() {
  const location = useLocation();
  const [currentStep, setCurrentStep] = useState(1);
  const [form, setForm] = useState<FormData>(() => ({
    ...initialData,
    requestType: getInitialRequestType(location.state),
  }));
  const [errors, setErrors] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [mailtoHref, setMailtoHref] = useState("");

  const updateField = <K extends keyof FormData>(
    field: K,
    value: FormData[K]
  ) => {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  const validateStep = () => {
    const newErrors: string[] = [];

    if (currentStep === 1) {
      if (!form.requestType) newErrors.push("Choisissez un type de demande.");
      if (!form.fullName.trim()) newErrors.push("Votre nom est obligatoire.");
      if (!form.email.trim()) newErrors.push("Votre email est obligatoire.");
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
        newErrors.push("Votre adresse email n'est pas valide.");
      }
    }

    if (currentStep === 2) {
      if (!form.subject.trim()) {
        newErrors.push("Veuillez renseigner le sujet.");
      }

      if (form.message.trim().length < 20) {
        newErrors.push("Votre message doit contenir au moins 20 caractères.");
      }

      if (form.requestType === "project" && !form.solutionType) {
        newErrors.push("Sélectionnez le type de solution souhaitée.");
      }

      if (form.requestType === "partnership" && !form.collaboration) {
        newErrors.push("Précisez le type de partenariat.");
      }

      if (form.requestType === "career" && !form.profile.trim()) {
        newErrors.push("Précisez votre profil professionnel.");
      }
    }

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const nextStep = () => {
    if (validateStep()) {
      setCurrentStep((step) => Math.min(step + 1, 3));
      setErrors([]);
    }
  };

  const previousStep = () => {
    setCurrentStep((step) => Math.max(step - 1, 1));
    setErrors([]);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.consent) {
      setErrors(["Vous devez accepter le traitement de votre demande."]);
      return;
    }

    if (!validateStep()) return;

    setErrors([]);

    const requestLabel =
      collaborationTypes.find((item) => item.id === form.requestType)?.title ??
      "Autre demande";
    const body = [
      `Type de demande : ${requestLabel}`,
      `Nom : ${form.fullName.trim()}`,
      `E-mail : ${form.email.trim()}`,
      `Téléphone : ${form.phone.trim() || "Non précisé"}`,
      `Organisation : ${form.company.trim() || "Non précisée"}`,
      `Sujet : ${form.subject.trim()}`,
      `Solution : ${form.solutionType || "Non précisée"}`,
      `Budget : ${form.budget || "Non précisé"}`,
      `Délai : ${form.deadline || "Non précisé"}`,
      `Collaboration : ${form.collaboration || "Non précisée"}`,
      `Profil : ${form.profile.trim() || "Non précisé"}`,
      `Portfolio : ${form.portfolio.trim() || "Non précisé"}`,
      "",
      form.message.trim(),
    ].join("\n");
    const params = new URLSearchParams({
      subject: form.subject.trim(),
      body,
    });

    setMailtoHref(`mailto:contact@innovtech.com?${params.toString()}`);
    setSubmitted(true);
  };

  const resetForm = () => {
    setForm(initialData);
    setCurrentStep(1);
    setSubmitted(false);
    setErrors([]);
    setMailtoHref("");
  };

  if (submitted) {
    return (
      <div className="rounded-3xl border border-green-100 bg-white px-5 py-14 text-center shadow-xl shadow-blue-900/5 sm:px-10">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
          <Mail size={34} />
        </div>

        <h3 className="mt-6 text-2xl font-bold text-[#071A3D]">
          Votre demande est prête à être envoyée.
        </h3>

        <p className="mx-auto mt-4 max-w-lg leading-7 text-slate-500">
          Votre application de messagerie s’ouvrira avec le message prérempli.
          Vérifiez-le puis envoyez-le pour transmettre votre demande.
        </p>

        <a
          href={mailtoHref}
          className="mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700"
        >
          <Mail size={18} />
          Ouvrir mon application de messagerie
        </a>

        <button
          type="button"
          onClick={resetForm}
          className="mt-8 rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700"
        >
          Envoyer une autre demande
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-slate-100 bg-white p-5 shadow-xl shadow-blue-900/5 sm:p-8 lg:p-10"
    >
      <div className="mb-8">
        <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
          Parlons ensemble
        </span>

        <h2 className="mt-3 text-2xl font-bold text-[#071A3D] sm:text-3xl">
          Présentez-nous votre demande.
        </h2>

        <p className="mt-3 text-sm leading-7 text-slate-500">
          Quelques informations suffisent pour nous aider à mieux comprendre
          votre besoin.
        </p>
      </div>

      <ContactFormSteps currentStep={currentStep} />

      {errors.length > 0 && (
        <div
          role="alert"
          className="mb-6 rounded-xl border border-red-100 bg-red-50 p-4"
        >
          {errors.map((error) => (
            <p key={error} className="text-sm leading-6 text-red-600">
              • {error}
            </p>
          ))}
        </div>
      )}

      {/* Champ invisible anti-spam : une vraie protection serveur reste nécessaire. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[9999px] h-px w-px overflow-hidden"
      >
        <label htmlFor="contact-website">Ne pas remplir ce champ</label>
        <input
          id="contact-website"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={(event) => updateField("website", event.target.value)}
        />
      </div>

      {/* ÉTAPE 1 */}
      {currentStep === 1 && (
        <div className="space-y-7">
          <div>
            <label className={labelClass}>Quel est votre besoin ?</label>

            <div className="grid gap-3 sm:grid-cols-2">
              {collaborationTypes.map((item) => {
                const Icon = item.icon;
                const selected = form.requestType === item.id;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() =>
                      updateField("requestType", item.id as RequestType)
                    }
                    className={`rounded-2xl border p-4 text-left transition ${
                      selected
                        ? "border-blue-500 bg-blue-50 ring-2 ring-blue-500/10"
                        : "border-slate-200 hover:border-blue-200"
                    }`}
                  >
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                        selected
                          ? "bg-blue-600 text-white"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      <Icon size={20} />
                    </div>

                    <h3 className="mt-4 font-bold text-[#071A3D]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs leading-6 text-slate-500">
                      {item.description}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className={labelClass} htmlFor="fullName">
                Nom complet *
              </label>

              <input
                id="fullName"
                className={inputClass}
                placeholder="Votre nom"
                value={form.fullName}
                onChange={(event) =>
                  updateField("fullName", event.target.value)
                }
              />
            </div>

            <div>
              <label className={labelClass} htmlFor="email">
                Adresse email *
              </label>

              <input
                id="email"
                type="email"
                className={inputClass}
                placeholder="exemple@email.com"
                value={form.email}
                onChange={(event) =>
                  updateField("email", event.target.value)
                }
              />
            </div>

            <div>
              <label className={labelClass} htmlFor="phone">
                Téléphone
              </label>

              <input
                id="phone"
                type="tel"
                className={inputClass}
                placeholder="+237 ..."
                value={form.phone}
                onChange={(event) =>
                  updateField("phone", event.target.value)
                }
              />
            </div>

            <div>
              <label className={labelClass} htmlFor="company">
                Organisation / Entreprise
              </label>

              <input
                id="company"
                className={inputClass}
                placeholder="Nom de votre organisation"
                value={form.company}
                onChange={(event) =>
                  updateField("company", event.target.value)
                }
              />
            </div>
          </div>
        </div>
      )}

      {/* ÉTAPE 2 */}
      {currentStep === 2 && (
        <div className="space-y-6">
          <div>
            <label className={labelClass} htmlFor="subject">
              Sujet de votre demande *
            </label>

            <input
              id="subject"
              className={inputClass}
              placeholder="Ex. Développement d'une plateforme SaaS"
              value={form.subject}
              onChange={(event) =>
                updateField("subject", event.target.value)
              }
            />
          </div>

          {form.requestType === "project" && (
            <>
              <div>
                <label className={labelClass} htmlFor="solutionType">
                  Type de solution souhaitée *
                </label>

                <select
                  id="solutionType"
                  className={inputClass}
                  value={form.solutionType}
                  onChange={(event) =>
                    updateField("solutionType", event.target.value)
                  }
                >
                  <option value="">Sélectionnez une solution</option>
                  <option value="Logiciel sur mesure">
                    Logiciel sur mesure
                  </option>
                  <option value="Plateforme SaaS">Plateforme SaaS</option>
                  <option value="Site web">Site web</option>
                  <option value="Application web">Application web</option>
                  <option value="Application mobile">
                    Application mobile
                  </option>
                  <option value="Application desktop">
                    Application desktop
                  </option>
                  <option value="Digitalisation">
                    Digitalisation d'entreprise
                  </option>
                  <option value="Conseil informatique">
                    Conseil informatique
                  </option>
                  <option value="Autre">Autre</option>
                </select>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className={labelClass} htmlFor="budget">
                    Budget indicatif
                  </label>

                  <select
                    id="budget"
                    className={inputClass}
                    value={form.budget}
                    onChange={(event) =>
                      updateField("budget", event.target.value)
                    }
                  >
                    <option value="">Non défini</option>
                    <option value="Moins de 100 000 FCFA">
                      Moins de 100 000 FCFA
                    </option>
                    <option value="100 000 à 500 000 FCFA">
                      100 000 à 500 000 FCFA
                    </option>
                    <option value="500 000 à 1 000 000 FCFA">
                      500 000 à 1 000 000 FCFA
                    </option>
                    <option value="1 000 000 à 5 000 000 FCFA">
                      1 000 000 à 5 000 000 FCFA
                    </option>
                    <option value="Plus de 5 000 000 FCFA">
                      Plus de 5 000 000 FCFA
                    </option>
                    <option value="À discuter">À discuter</option>
                  </select>
                </div>

                <div>
                  <label className={labelClass} htmlFor="deadline">
                    Délai souhaité
                  </label>

                  <select
                    id="deadline"
                    className={inputClass}
                    value={form.deadline}
                    onChange={(event) =>
                      updateField("deadline", event.target.value)
                    }
                  >
                    <option value="">À définir</option>
                    <option value="Urgent">Urgent</option>
                    <option value="1 mois">Dans un mois</option>
                    <option value="2 à 3 mois">Dans 2 à 3 mois</option>
                    <option value="Plus de 3 mois">Plus de 3 mois</option>
                  </select>
                </div>
              </div>
            </>
          )}

          {form.requestType === "partnership" && (
            <div>
              <label className={labelClass} htmlFor="collaboration">
                Type de partenariat *
              </label>

              <select
                id="collaboration"
                className={inputClass}
                value={form.collaboration}
                onChange={(event) =>
                  updateField("collaboration", event.target.value)
                }
              >
                <option value="">Choisissez une option</option>
                <option value="Partenariat technologique">
                  Partenariat technologique
                </option>
                <option value="Partenariat commercial">
                  Partenariat commercial
                </option>
                <option value="Partenariat stratégique">
                  Partenariat stratégique
                </option>
                <option value="Collaboration startup">
                  Collaboration avec une startup
                </option>
                <option value="Autre">Autre</option>
              </select>
            </div>
          )}

          {form.requestType === "career" && (
            <div className="space-y-5">
              <div>
                <label className={labelClass} htmlFor="profile">
                  Votre profil professionnel *
                </label>

                <input
                  id="profile"
                  className={inputClass}
                  placeholder="Ex. Développeur Full-stack"
                  value={form.profile}
                  onChange={(event) =>
                    updateField("profile", event.target.value)
                  }
                />
              </div>

              <div>
                <label className={labelClass} htmlFor="portfolio">
                  Lien vers votre CV ou portfolio
                </label>

                <input
                  id="portfolio"
                  type="url"
                  className={inputClass}
                  placeholder="https://..."
                  value={form.portfolio}
                  onChange={(event) =>
                    updateField("portfolio", event.target.value)
                  }
                />
              </div>
            </div>
          )}

          <div>
            <label className={labelClass} htmlFor="message">
              Présentez votre demande *
            </label>

            <textarea
              id="message"
              rows={6}
              className={`${inputClass} resize-y`}
              placeholder="Expliquez-nous votre besoin, votre idée ou votre proposition..."
              value={form.message}
              onChange={(event) =>
                updateField("message", event.target.value)
              }
            />

            <p className="mt-2 text-right text-xs text-slate-400">
              {form.message.length} caractères
            </p>
          </div>
        </div>
      )}

      {/* ÉTAPE 3 */}
      {currentStep === 3 && (
        <div className="space-y-6">
          <div className="rounded-2xl bg-slate-50 p-5 sm:p-6">
            <h3 className="font-bold text-[#071A3D]">
              Récapitulatif de votre demande
            </h3>

            <div className="mt-5 space-y-4 text-sm">
              <div>
                <span className="text-slate-400">Type de demande</span>
                <p className="mt-1 font-semibold text-slate-700">
                  {collaborationTypes.find(
                    (item) => item.id === form.requestType
                  )?.title}
                </p>
              </div>

              <div>
                <span className="text-slate-400">Nom</span>
                <p className="mt-1 font-semibold text-slate-700">
                  {form.fullName}
                </p>
              </div>

              <div>
                <span className="text-slate-400">Email</span>
                <p className="mt-1 break-all font-semibold text-slate-700">
                  {form.email}
                </p>
              </div>

              <div>
                <span className="text-slate-400">Sujet</span>
                <p className="mt-1 font-semibold text-slate-700">
                  {form.subject}
                </p>
              </div>

              <div>
                <span className="text-slate-400">Message</span>
                <p className="mt-1 whitespace-pre-wrap leading-7 text-slate-600">
                  {form.message}
                </p>
              </div>
            </div>
          </div>

          <label className="flex cursor-pointer items-start gap-3">
            <input
              type="checkbox"
              checked={form.consent}
              onChange={(event) =>
                updateField("consent", event.target.checked)
              }
              className="mt-1 h-4 w-4 shrink-0 accent-blue-600"
            />

            <span className="text-sm leading-7 text-slate-500">
              J'accepte que les informations renseignées soient utilisées
              pour traiter ma demande, conformément à la politique de
              confidentialité d'INNOVTECH.
            </span>
          </label>
        </div>
      )}

      <div className="mt-9 flex flex-col-reverse justify-between gap-3 border-t border-slate-100 pt-7 sm:flex-row">
        {currentStep > 1 ? (
          <button
            type="button"
            onClick={previousStep}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-6 py-4 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
          >
            <ArrowLeft size={17} />
            Retour
          </button>
        ) : (
          <span />
        )}

        {currentStep < 3 ? (
          <button
            type="button"
            onClick={nextStep}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-4 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Continuer
            <ArrowRight size={17} />
          </button>
        ) : (
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-4 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            Confirmer ma demande
            <Send size={17} />
          </button>
        )}
      </div>

      <p className="mt-5 text-center text-xs leading-6 text-slate-400">
        Aucune donnée n’est envoyée automatiquement : votre application de
        messagerie vous permettra de vérifier et d’envoyer la demande.
      </p>
    </form>
  );
}