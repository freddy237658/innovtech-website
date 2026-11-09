import { Search } from "lucide-react";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function FAQSearch({ value, onChange }: Props) {
  return (
    <div className="relative mx-auto max-w-2xl">
      <Search
        size={21}
        className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
      />

      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Rechercher une question..."
        aria-label="Rechercher dans la FAQ"
        className="w-full rounded-2xl border border-slate-200 bg-white py-5 pl-14 pr-5 text-sm text-slate-700 shadow-lg shadow-blue-900/5 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
      />
    </div>
  );
}