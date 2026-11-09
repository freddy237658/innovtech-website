import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Cookie,
  FileText,
  Scale,
  Building2,
} from "lucide-react";

const links = [
  {
    label: "Confidentialité",
    path: "/confidentialite",
    icon: ShieldCheck,
  },
  {
    label: "Cookies",
    path: "/cookies",
    icon: Cookie,
  },
  {
    label: "Conditions générales",
    path: "/conditions-generales",
    icon: FileText,
  },
  {
    label: "Mentions légales",
    path: "/mentions-legales",
    icon: Scale,
  },
];

interface Props {
  children: React.ReactNode;
  currentPath: string;
}

export default function LegalLayout({
  children,
  currentPath,
}: Props) {
  return (
    <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[260px_minmax(0,1fr)] lg:px-8">
      <aside className="h-fit rounded-2xl border border-slate-100 bg-white p-5 lg:sticky lg:top-28">
        <div className="mb-5 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
            <Building2 size={20} />
          </div>

          <div>
            <p className="font-bold text-[#071A3D]">INNOVTECH</p>
            <p className="text-xs text-slate-400">Informations légales</p>
          </div>
        </div>

        <nav className="space-y-2">
          {links.map((link) => {
            const Icon = link.icon;
            const active = currentPath === link.path;

            return (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition ${
                  active
                    ? "bg-blue-50 text-blue-700"
                    : "text-slate-500 hover:bg-slate-50 hover:text-blue-600"
                }`}
              >
                <Icon size={18} />
                {link.label}
              </Link>
            );
          })}
        </nav>
      </aside>

      <div className="min-w-0">{children}</div>
    </div>
  );
}