import { Search, SlidersHorizontal } from "lucide-react";
import { articleCategories } from "../data/articlesData";

interface Props {
  search: string;
  setSearch: (value: string) => void;
  category: string;
  setCategory: (value: string) => void;
}

export default function ResourcesFilters({
  search,
  setSearch,
  category,
  setCategory,
}: Props) {
  return (
    <div className="space-y-6">
      <div className="relative max-w-xl">
        <Search
          size={20}
          className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Rechercher un article, un sujet..."
          aria-label="Rechercher un article"
          className="w-full rounded-2xl border border-slate-200 bg-white py-4 pl-14 pr-5 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
        />
      </div>

      <div>
        <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-[#071A3D]">
          <SlidersHorizontal size={17} />
          Explorer par catégorie
        </div>

        <div className="flex gap-2 overflow-x-auto pb-3">
          {articleCategories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`shrink-0 rounded-full px-5 py-3 text-sm font-semibold transition ${
                category === item
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                  : "border border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-600"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}