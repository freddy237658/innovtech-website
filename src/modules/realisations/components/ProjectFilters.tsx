import { Search, SlidersHorizontal } from "lucide-react";
import { useTranslation } from "react-i18next";

interface Props {
  categories: readonly string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  search: string;
  onSearchChange: (value: string) => void;
  resultCount: number;
}

export default function ProjectFilters({
  categories,
  selectedCategory,
  onCategoryChange,
  search,
  onSearchChange,
  resultCount,
}: Props) {
  const { t } = useTranslation();

  return (
    <div className="mb-10">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full min-w-0 lg:max-w-sm">
          <Search
            size={19}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="search"
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder={t("Rechercher un projet...")}
            aria-label={t("Rechercher un projet")}
            className="h-12 w-full min-w-0 rounded-xl border border-slate-200 bg-white pl-12 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
          />
        </div>

        <p className="text-sm font-medium text-slate-500">
          <SlidersHorizontal size={16} className="mr-2 inline" />
          {t("projectCount", {
            count: resultCount,
            defaultValue: `${resultCount} projet${resultCount > 1 ? "s" : ""} trouvé${resultCount > 1 ? "s" : ""}`,
          })}
        </p>
      </div>

      <div className="mt-6 flex max-w-full flex-wrap gap-2">
        {categories.map((category) => {
          const active = selectedCategory === category;

          return (
            <button
              key={category}
              type="button"
              onClick={() => onCategoryChange(category)}
              aria-pressed={active}
              className={`max-w-full rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                active
                  ? "bg-[#0645C0] text-white shadow-lg shadow-blue-700/15"
                  : "border border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-700"
              }`}
            >
              {t(category)}
            </button>
          );
        })}
      </div>
    </div>
  );
}