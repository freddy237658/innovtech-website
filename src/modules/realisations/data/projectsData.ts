import {
  GraduationCap,
  Network,
  BrainCircuit,
  Utensils,
  Globe,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

export type ProjectStatus =
  | "available"
  | "development"
  | "prototype"
  | "planning";

export type ProjectCategory =
  | "SaaS"
  | "Intelligence artificielle"
  | "Éducation"
  | "Application web"
  | "Application mobile"
  | "Business";

export interface Project {
  id: string;
  slug: string;
  number: string;
  name: string;
  tagline: string;
  description: string;
  fullDescription: string;
  category: ProjectCategory;
  status: ProjectStatus;
  statusLabel: string;
  icon: LucideIcon;
  image: string;
  logo?: string;
  technologies: string[];
  features: string[];
  benefits: string[];
  targetAudience: string[];
  website?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "01",
    slug: "innovconnect",
    number: "01",
    name: "InnovConnect",
    tagline: "Connecter les talents technologiques au monde.",
    description:
      "Une plateforme professionnelle destinée aux développeurs, ingénieurs, startups et entreprises de l'écosystème technologique.",
    fullDescription:
      "InnovConnect est un projet de plateforme numérique qui ambitionne de faciliter les rencontres professionnelles dans l'univers de la technologie. Elle permettra aux développeurs, ingénieurs, entrepreneurs, startups et organisations de présenter leurs compétences, de découvrir des opportunités et de collaborer sur des projets.",
    category: "SaaS",
    status: "development",
    statusLabel: "En développement",
    icon: Network,
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85",
    technologies: [
      "React",
      "TypeScript",
      "Laravel",
      "PostgreSQL",
      "Docker",
    ],
    features: [
      "Profils professionnels et portfolios",
      "Profils d'entreprises et de startups",
      "Recherche de développeurs et ingénieurs",
      "Découverte d'opportunités professionnelles",
      "Mise en relation et collaboration",
      "Outils intelligents d'assistance à la rédaction",
    ],
    benefits: [
      "Valoriser les compétences technologiques.",
      "Faciliter les collaborations professionnelles.",
      "Rapprocher les talents des entreprises.",
    ],
    targetAudience: [
      "Développeurs et ingénieurs",
      "Startups",
      "Entreprises technologiques",
      "Entrepreneurs",
      "Recruteurs",
    ],
    featured: true,
  },
  {
    id: "02",
    slug: "innovllm",
    number: "02",
    name: "InnovLLM",
    tagline: "Explorer une nouvelle génération d'intelligence artificielle.",
    description:
      "Un projet de recherche et développement consacré aux modèles de langage et aux assistants intelligents.",
    fullDescription:
      "InnovLLM est un projet de recherche et développement porté par INNOVTECH autour des grands modèles de langage. Son ambition est d'explorer les architectures des modèles linguistiques, les techniques d'entraînement, les méthodes d'adaptation et les applications de l'IA générative. Le projet vise progressivement la création d'un écosystème d'outils intelligents.",
    category: "Intelligence artificielle",
    status: "development",
    statusLabel: "En développement",
    icon: BrainCircuit,
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=85",
    technologies: [
      "Python",
      "PyTorch",
      "Transformers",
      "Hugging Face",
      "LLM",
    ],
    features: [
      "Exploration des modèles de langage",
      "Expérimentation de modèles open source",
      "Étude des techniques de fine-tuning",
      "Recherche augmentée par génération (RAG)",
      "Expérimentation d'assistants conversationnels",
    ],
    benefits: [
      "Développer une expertise dans les modèles de langage.",
      "Explorer les possibilités de l'IA générative.",
      "Créer progressivement des outils intelligents.",
    ],
    targetAudience: [
      "Développeurs",
      "Chercheurs",
      "Entreprises",
      "Passionnés d'intelligence artificielle",
    ],
    featured: true,
  },
  {
    id: "03",
    slug: "fred-school",
    number: "03",
    name: "Fred School",
    tagline: "Moderniser la gestion des établissements scolaires.",
    description:
      "Une plateforme de gestion scolaire destinée aux établissements d'enseignement, avec une architecture SaaS multi-écoles.",
    fullDescription:
      "Fred School est une solution de gestion scolaire conçue pour accompagner les établissements dans la digitalisation de leurs activités. La plateforme ambitionne de centraliser les inscriptions, les élèves, les enseignants, les évaluations, les bulletins, les emplois du temps, les paiements et la communication avec les parents. Son architecture cible le fonctionnement multi-établissements.",
    category: "Éducation",
    status: "development",
    statusLabel: "En développement",
    icon: GraduationCap,
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85",
    technologies: [
      "Laravel",
      "React",
      "TypeScript",
      "PostgreSQL",
      "REST API",
    ],
    features: [
      "Gestion des établissements et années scolaires",
      "Gestion des élèves et des enseignants",
      "Évaluations, notes et bulletins",
      "Gestion des frais et paiements",
      "Emplois du temps et suivi des absences",
      "Espaces dédiés aux parents et enseignants",
    ],
    benefits: [
      "Centraliser les informations scolaires.",
      "Simplifier les tâches administratives.",
      "Améliorer le suivi pédagogique.",
      "Faciliter la communication entre les acteurs scolaires.",
    ],
    targetAudience: [
      "Écoles primaires",
      "Collèges",
      "Lycées",
      "Groupes scolaires",
      "Établissements privés",
    ],
    featured: true,
  },
  {
    id: "04",
    slug: "djelica",
    number: "04",
    name: "Djelica",
    tagline: "Une expérience numérique pour la restauration.",
    description:
      "Un projet de plateforme de commande et de gestion destiné aux restaurants et à leurs clients.",
    fullDescription:
      "Djelica est un projet numérique orienté vers le secteur de la restauration. Il vise à faciliter la présentation des menus, la découverte des établissements et les parcours de commande. Son architecture est pensée autour d'une application web, d'une API et d'une solution desktop.",
    category: "Business",
    status: "development",
    statusLabel: "En développement",
    icon: Utensils,
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85",
    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Redis",
    ],
    features: [
      "Présentation des restaurants",
      "Consultation des menus",
      "Parcours de commande",
      "Gestion des établissements",
      "Architecture API",
      "Interface web et desktop",
    ],
    benefits: [
      "Améliorer la visibilité numérique des restaurants.",
      "Faciliter la gestion des commandes.",
      "Moderniser l'expérience client.",
    ],
    targetAudience: [
      "Restaurants",
      "Établissements de restauration",
      "Clients",
      "Gestionnaires de restaurants",
    ],
    featured: true,
  },
  {
    id: "05",
    slug: "innovtech-web",
    number: "05",
    name: "INNOVTECH Website",
    tagline: "La vitrine numérique de notre vision technologique.",
    description:
      "Le site institutionnel d'INNOVTECH, conçu pour présenter ses services, ses expertises, ses innovations et ses réalisations.",
    fullDescription:
      "Le site officiel d'INNOVTECH est une plateforme institutionnelle bilingue qui présente l'entreprise, ses domaines d'intervention, ses produits, ses projets et ses opportunités de collaboration. Il constitue le point central de communication de la marque.",
    category: "Application web",
    status: "development",
    statusLabel: "En développement",
    icon: Globe,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Vite",
    ],
    features: [
      "Présentation institutionnelle",
      "Catalogue de services",
      "Présentation des produits",
      "Contenus bilingues",
      "Formulaires de contact",
      "Design responsive",
    ],
    benefits: [
      "Renforcer la présence numérique de l'entreprise.",
      "Présenter les expertises et réalisations.",
      "Faciliter les demandes de collaboration.",
    ],
    targetAudience: [
      "Entreprises",
      "Partenaires",
      "Clients",
      "Investisseurs",
      "Communauté technologique",
    ],
    featured: true,
  },
  {
    id: "06",
    slug: "solutions-mobiles",
    number: "06",
    name: "Solutions mobiles",
    tagline: "Étendre les expériences numériques au mobile.",
    description:
      "Un domaine de conception d'applications mobiles répondant à des besoins métiers et à des usages quotidiens.",
    fullDescription:
      "Cette catégorie regroupe les pistes et projets de développement d'applications mobiles explorés par INNOVTECH. Elle couvre la conception d'interfaces mobiles, l'intégration d'API et l'étude des solutions multiplateformes.",
    category: "Application mobile",
    status: "planning",
    statusLabel: "En préparation",
    icon: Smartphone,
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9?auto=format&fit=crop&w=1200&q=85",
    technologies: [
      "React",
      "TypeScript",
      "Cordova",
      "REST API",
    ],
    features: [
      "Interfaces adaptées aux smartphones",
      "Intégration de services web",
      "Expériences multiplateformes",
      "Fonctionnalités mobiles",
    ],
    benefits: [
      "Rendre les services numériques plus accessibles.",
      "Accompagner les usages mobiles.",
      "Étendre les plateformes web aux smartphones.",
    ],
    targetAudience: [
      "Entreprises",
      "Organisations",
      "Entrepreneurs",
      "Utilisateurs mobiles",
    ],
    featured: false,
  },
];

export const projectCategories = [
  "Tous",
  "SaaS",
  "Intelligence artificielle",
  "Éducation",
  "Application web",
  "Application mobile",
  "Business",
] as const;