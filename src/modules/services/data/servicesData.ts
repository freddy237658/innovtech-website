import {
  Code2,
  Cloud,
  Globe,
  Smartphone,
  Workflow,
  Headphones,
  Palette,
  Lightbulb,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  description: string;
  fullDescription: string;
  icon: LucideIcon;
  image: string;
  color: string;
  features: string[];
  benefits: string[];
  technologies: string[];
  idealFor: string[];
}

export const services: Service[] = [
  {
    id: "01",
    slug: "developpement-logiciel",
    number: "01",
    title: "Développement logiciel",
    shortTitle: "Logiciels sur mesure",
    description:
      "Des logiciels personnalisés conçus pour répondre précisément aux besoins et aux processus de votre organisation.",
    fullDescription:
      "Nous concevons et développons des applications logicielles adaptées à vos activités. De l'analyse des besoins à la livraison, nous construisons des solutions fiables, évolutives et pensées pour simplifier votre travail.",
    icon: Code2,
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=85",
    color: "blue",
    features: [
      "Logiciels de gestion d'entreprise",
      "Applications métiers personnalisées",
      "Systèmes de gestion de données",
      "Automatisation des tâches",
      "Développement d'API",
      "Maintenance et évolution logicielle",
    ],
    benefits: [
      "Des outils adaptés à vos processus.",
      "Une meilleure organisation des activités.",
      "Une réduction des tâches répétitives.",
      "Des solutions évolutives.",
    ],
    technologies: [
      "Laravel",
      "PHP",
      "React",
      "TypeScript",
      "Python",
      "PostgreSQL",
      "MySQL",
    ],
    idealFor: [
      "Entreprises",
      "Institutions",
      "Startups",
      "Entrepreneurs",
    ],
  },

  {
    id: "02",
    slug: "solutions-saas",
    number: "02",
    title: "Solutions SaaS",
    shortTitle: "Plateformes SaaS",
    description:
      "Des plateformes accessibles en ligne pour moderniser vos services et développer de nouveaux produits numériques.",
    fullDescription:
      "Nous imaginons et développons des plateformes Software as a Service permettant aux organisations de proposer des services numériques accessibles depuis Internet. Nos solutions sont pensées pour évoluer avec les utilisateurs et les besoins du marché.",
    icon: Cloud,
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=85",
    color: "cyan",
    features: [
      "Architecture SaaS multi-utilisateur",
      "Gestion des abonnements",
      "Gestion des rôles et permissions",
      "Tableaux de bord personnalisés",
      "Gestion des organisations",
      "API et intégrations",
    ],
    benefits: [
      "Accessibilité depuis Internet.",
      "Centralisation des données.",
      "Possibilité de faire évoluer le produit.",
      "Modèle économique basé sur les abonnements.",
    ],
    technologies: [
      "Laravel",
      "React",
      "Next.js",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Cloud",
    ],
    idealFor: [
      "Startups",
      "Entrepreneurs",
      "Éditeurs de logiciels",
      "Entreprises innovantes",
    ],
  },

  {
    id: "03",
    slug: "developpement-web",
    number: "03",
    title: "Développement web",
    shortTitle: "Sites et applications web",
    description:
      "Des sites Internet et applications web modernes pour renforcer votre présence numérique.",
    fullDescription:
      "Nous créons des sites web professionnels, des plateformes interactives et des applications web performantes. Chaque projet est conçu pour offrir une expérience utilisateur fluide, un affichage responsive et une architecture technique adaptée.",
    icon: Globe,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85",
    color: "blue",
    features: [
      "Sites vitrines professionnels",
      "Sites e-commerce",
      "Applications web",
      "Portails et plateformes web",
      "Intégration d'API",
      "Optimisation SEO technique",
    ],
    benefits: [
      "Une présence professionnelle sur Internet.",
      "Une meilleure visibilité.",
      "Une expérience utilisateur moderne.",
      "Une accessibilité sur tous les appareils.",
    ],
    technologies: [
      "React",
      "Next.js",
      "Laravel",
      "PHP",
      "Tailwind CSS",
      "JavaScript",
      "TypeScript",
    ],
    idealFor: [
      "Entreprises",
      "Commerçants",
      "Associations",
      "Entrepreneurs",
    ],
  },

  {
    id: "04",
    slug: "applications",
    number: "04",
    title: "Applications mobiles et desktop",
    shortTitle: "Applications mobiles & desktop",
    description:
      "Des applications conçues pour accompagner vos utilisateurs sur smartphones, tablettes et ordinateurs.",
    fullDescription:
      "Nous développons des applications adaptées à différents environnements : Android, iOS et ordinateurs. Nous privilégions les interfaces intuitives, la fluidité et la cohérence de l'expérience utilisateur.",
    icon: Smartphone,
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=85",
    color: "cyan",
    features: [
      "Applications Android",
      "Applications iOS",
      "Applications desktop Windows",
      "Applications multiplateformes",
      "Connexion aux API",
      "Synchronisation des données",
    ],
    benefits: [
      "Une expérience adaptée aux appareils.",
      "Une meilleure proximité avec les utilisateurs.",
      "Des outils accessibles en mobilité.",
      "Des possibilités d'intégration avec vos systèmes.",
    ],
    technologies: [
      "React",
      "React Native",
      "Cordova",
      "Electron",
      "Laravel",
      "TypeScript",
    ],
    idealFor: [
      "Entreprises",
      "Startups",
      "Services commerciaux",
      "Organisations",
    ],
  },

  {
    id: "05",
    slug: "digitalisation",
    number: "05",
    title: "Digitalisation et automatisation",
    shortTitle: "Digitalisation",
    description:
      "Transformez vos processus manuels en systèmes numériques plus efficaces et mieux organisés.",
    fullDescription:
      "Nous accompagnons les organisations dans la transformation de leurs processus métiers. Notre objectif est de remplacer certaines opérations manuelles par des outils numériques qui améliorent la productivité et facilitent la gestion quotidienne.",
    icon: Workflow,
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=85",
    color: "blue",
    features: [
      "Analyse des processus métiers",
      "Dématérialisation des documents",
      "Automatisation des opérations",
      "Gestion numérique des dossiers",
      "Tableaux de bord décisionnels",
      "Intégration de systèmes existants",
    ],
    benefits: [
      "Gain de temps.",
      "Réduction des erreurs manuelles.",
      "Meilleure traçabilité.",
      "Amélioration de la productivité.",
    ],
    technologies: [
      "Laravel",
      "Python",
      "React",
      "API REST",
      "PostgreSQL",
      "Automatisation",
    ],
    idealFor: [
      "PME",
      "Grandes entreprises",
      "Établissements",
      "Administrations",
    ],
  },

  {
    id: "06",
    slug: "services-informatiques",
    number: "06",
    title: "Services informatiques",
    shortTitle: "Services informatiques",
    description:
      "Un accompagnement technique pour assurer le bon fonctionnement de votre environnement informatique.",
    fullDescription:
      "Nous proposons des prestations d'assistance, de conseil et d'accompagnement informatique. Nous aidons les organisations à mieux gérer leurs outils technologiques et à identifier les solutions adaptées à leurs besoins.",
    icon: Headphones,
    image:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1200&q=85",
    color: "cyan",
    features: [
      "Assistance informatique",
      "Maintenance logicielle",
      "Conseil technologique",
      "Installation et configuration",
      "Accompagnement technique",
      "Diagnostic informatique",
    ],
    benefits: [
      "Un meilleur suivi informatique.",
      "Une réduction des interruptions.",
      "Un environnement mieux organisé.",
      "Un accompagnement technique.",
    ],
    technologies: [
      "Windows",
      "Linux",
      "Docker",
      "Réseaux",
      "Cloud",
      "Bases de données",
    ],
    idealFor: [
      "PME",
      "Entreprises",
      "Établissements",
      "Organisations",
    ],
  },

  {
    id: "07",
    slug: "design-ui-ux",
    number: "07",
    title: "Design UI/UX",
    shortTitle: "Design UI/UX",
    description:
      "Des interfaces élégantes, intuitives et pensées pour offrir une expérience utilisateur de qualité.",
    fullDescription:
      "Nous concevons des interfaces numériques qui associent esthétique, simplicité et ergonomie. Notre démarche consiste à comprendre les utilisateurs, organiser les parcours et créer des expériences cohérentes.",
    icon: Palette,
    image:
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=1200&q=85",
    color: "blue",
    features: [
      "Recherche UX",
      "Architecture de l'information",
      "Wireframes",
      "Maquettes UI",
      "Prototypes interactifs",
      "Design responsive",
    ],
    benefits: [
      "Une navigation plus intuitive.",
      "Une meilleure cohérence visuelle.",
      "Une expérience utilisateur améliorée.",
      "Des interfaces adaptées aux mobiles.",
    ],
    technologies: [
      "Figma",
      "Canva",
      "React",
      "Tailwind CSS",
      "Prototypage",
      "Design systems",
    ],
    idealFor: [
      "Startups",
      "Entreprises",
      "Éditeurs SaaS",
      "Équipes produit",
    ],
  },

  {
    id: "08",
    slug: "conseil-technologique",
    number: "08",
    title: "Conseil technologique",
    shortTitle: "Conseil technologique",
    description:
      "Faites les bons choix technologiques pour construire des projets numériques cohérents et durables.",
    fullDescription:
      "Nous aidons les entreprises et les porteurs de projets à analyser leurs besoins, définir une stratégie technologique et choisir les outils adaptés à leurs objectifs.",
    icon: Lightbulb,
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=85",
    color: "cyan",
    features: [
      "Étude de faisabilité",
      "Conseil en architecture logicielle",
      "Choix des technologies",
      "Audit technique",
      "Accompagnement de projets",
      "Stratégie de transformation digitale",
    ],
    benefits: [
      "Des décisions technologiques éclairées.",
      "Une meilleure maîtrise des risques.",
      "Une architecture adaptée aux objectifs.",
      "Une vision claire du projet.",
    ],
    technologies: [
      "Architecture logicielle",
      "Cloud",
      "DevOps",
      "Laravel",
      "React",
      "Python",
    ],
    idealFor: [
      "Entrepreneurs",
      "Startups",
      "PME",
      "Organisations",
    ],
  },
];