import { useEffect, useState } from "react";
import { Cookie, Settings2, X } from "lucide-react";

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

const STORAGE_KEY = "innovtech_cookie_preferences";

const defaultPreferences: CookiePreferences = {
  essential: true,
  analytics: false,
  marketing: false,
};

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  const [preferences, setPreferences] =
    useState<CookiePreferences>(defaultPreferences);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (!saved) {
      setVisible(true);
      return;
    }

    try {
      const parsed = JSON.parse(saved);

      setPreferences({
        essential: true,
        analytics: parsed.analytics === true,
        marketing: parsed.marketing === true,
      });
    } catch {
      localStorage.removeItem(STORAGE_KEY);
      setVisible(true);
    }
  }, []);

  const savePreferences = (value: CookiePreferences) => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        ...value,
        updatedAt: new Date().toISOString(),
      })
    );

    setPreferences(value);
    setVisible(false);
    setSettingsOpen(false);
  };

  const acceptAll = () => {
    savePreferences({
      essential: true,
      analytics: true,
      marketing: true,
    });
  };

  const rejectOptional = () => {
    savePreferences(defaultPreferences);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[100] p-3 sm:p-5">
      <div className="relative mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-white p-5 shadow-2xl shadow-slate-900/20 sm:p-7">
        <button
          onClick={rejectOptional}
          aria-label="Fermer le panneau des cookies"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition hover:bg-slate-200"
        >
          <X size={17} />
        </button>

        <div className="flex items-start gap-4 pr-8">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
            <Cookie size={23} />
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#071A3D]">
              Votre confidentialité compte.
            </h2>

            <p className="mt-2 text-sm leading-7 text-slate-500">
              Nous utilisons des mécanismes techniques nécessaires au
              fonctionnement du site. Avec votre accord, des préférences
              facultatives pourront également être utilisées pour les
              statistiques et le marketing.
            </p>
          </div>
        </div>

        {settingsOpen && (
          <div className="mt-6 space-y-4 rounded-2xl bg-slate-50 p-5">
            <label className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-bold text-[#071A3D]">
                  Cookies essentiels
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Nécessaires au fonctionnement du site.
                </p>
              </div>

              <input
                type="checkbox"
                checked
                disabled
                className="h-4 w-4 accent-blue-600"
              />
            </label>

            <label className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-bold text-[#071A3D]">
                  Statistiques
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Mesure de fréquentation et amélioration du site.
                </p>
              </div>

              <input
                type="checkbox"
                checked={preferences.analytics}
                onChange={(event) =>
                  setPreferences((previous) => ({
                    ...previous,
                    analytics: event.target.checked,
                  }))
                }
                className="h-4 w-4 accent-blue-600"
              />
            </label>

            <label className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-bold text-[#071A3D]">
                  Marketing
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Mesure et personnalisation des communications.
                </p>
              </div>

              <input
                type="checkbox"
                checked={preferences.marketing}
                onChange={(event) =>
                  setPreferences((previous) => ({
                    ...previous,
                    marketing: event.target.checked,
                  }))
                }
                className="h-4 w-4 accent-blue-600"
              />
            </label>
          </div>
        )}

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
          <button
            onClick={() => setSettingsOpen(!settingsOpen)}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
          >
            <Settings2 size={17} />
            {settingsOpen ? "Masquer les options" : "Personnaliser"}
          </button>

          {settingsOpen ? (
            <button
              onClick={() => savePreferences(preferences)}
              className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Enregistrer mes choix
            </button>
          ) : (
            <>
              <button
                onClick={rejectOptional}
                className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
              >
                Refuser les facultatifs
              </button>

              <button
                onClick={acceptAll}
                className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Tout accepter
              </button>
            </>
          )}
        </div>

        <p className="mt-4 text-xs leading-6 text-slate-400">
          Consultez notre{" "}
          <a
            href="/confidentialite"
            className="font-semibold text-blue-600 hover:underline"
          >
            politique de confidentialité
          </a>{" "}
          et notre{" "}
          <a
            href="/cookies"
            className="font-semibold text-blue-600 hover:underline"
          >
            politique relative aux cookies
          </a>.
        </p>
      </div>
    </div>
  );
}