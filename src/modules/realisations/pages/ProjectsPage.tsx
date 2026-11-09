import { useMemo, useState } from "react";
import { FolderOpen } from "lucide-react";

import ProjectsHero from "../components/ProjectsHero";
import ProjectCard from "../components/ProjectCard";
import ProjectFilters from "../components/ProjectFilters";
import ProjectCTA from "../components/ProjectCTA";
import ProjectSectionTitle from "../components/ProjectSectionTitle";

import { projects, projectCategories } from "../data/projectsData";
import { useTranslation } from "react-i18next";

export default function ProjectsPage() {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [search, setSearch] = useState("");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === "Tous" ||
        project.category === selectedCategory;

      const query = search.trim().toLowerCase();

      const matchesSearch =
        !query ||
        [
          project.name,
          t(project.tagline),
          t(project.description),
          t(project.category),
          ...project.technologies.map((technology) => t(technology)),
        ]
          .join(" ")
          .toLowerCase()
          .includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, search, t]);

  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <main className="min-w-0 overflow-x-clip bg-white">
      <ProjectsHero />

      {/* Introduction */}
      <section className="px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <ProjectSectionTitle
              eyebrow="Notre portfolio"
              title="Des solutions pensées pour des besoins réels."
              description="INNOVTECH développe et explore des solutions numériques dans plusieurs domaines : logiciels professionnels, plateformes SaaS, intelligence artificielle et applications métiers."
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-3xl bg-blue-50 p-6 sm:p-8">
              <p className="text-3xl font-bold text-blue-700">
                {projects.length.toString().padStart(2, "0")}
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {t("Projets présentés dans notre catalogue")}
              </p>
            </div>

            <div className="rounded-3xl bg-[#071A3D] p-6 sm:p-8">
              <p className="text-3xl font-bold text-cyan-300">360°</p>
              <p className="mt-2 text-sm leading-6 text-blue-100/70">
                {t("Une approche orientée solutions numériques")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projets mis en avant */}
      <section className="bg-slate-50 px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <ProjectSectionTitle
            eyebrow="À découvrir"
            title="Quelques projets à la une."
            description="Découvrez une sélection de produits et de projets qui illustrent les orientations technologiques d'INNOVTECH."
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredProjects.slice(0, 3).map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Catalogue complet */}
      <section
        id="catalogue-projets"
        className="scroll-mt-24 px-5 py-20 sm:px-8 lg:px-10 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <ProjectSectionTitle
            eyebrow="Catalogue"
            title="Explorez nos réalisations."
            description="Recherchez un projet ou sélectionnez une catégorie pour découvrir les solutions qui vous intéressent."
            centered
          />

          <ProjectFilters
            categories={projectCategories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            search={search}
            onSearchChange={setSearch}
            resultCount={filteredProjects.length}
          />

          {filteredProjects.length > 0 ? (
            <div className="grid min-w-0 grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-slate-300 px-5 py-16 text-center">
              <FolderOpen
                size={42}
                className="mx-auto text-slate-400"
              />

              <h3 className="mt-5 text-xl font-bold text-[#071A3D]">
                {t("Aucun projet trouvé")}
              </h3>

              <p className="mt-3 text-sm text-slate-500">
                {t("Essayez une autre recherche ou sélectionnez une autre catégorie.")}
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setSelectedCategory("Tous");
                }}
                className="mt-6 min-h-11 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
              >
                {t("Réinitialiser les filtres")}
              </button>
            </div>
          )}
        </div>
      </section>

      <ProjectCTA />
    </main>
  );
}