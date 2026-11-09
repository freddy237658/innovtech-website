import {
  Monitor,
  Server,
  Smartphone,
  Database,
  Cloud,
  GitBranch,
  Network,
  ShieldCheck,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

export interface Expertise {
  id: string;
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  icon: LucideIcon;
  image: string;
  technologies: string[];
  capabilities: string[];
  benefits: string[];
  applications: string[];
}

export const expertises: Expertise[] = [
  {
    id: "01",
    slug: "frontend",
    number: "01",
    title: "Frontend Development",
    subtitle: "Des interfaces modernes et intuitives",
    description:
      "Nous concevons des interfaces web modernes, responsives et performantes, pensées pour offrir une expérience utilisateur de qualité.",
    fullDescription:
      "Le développement frontend constitue le point de rencontre entre la technologie et l'utilisateur. Nous concevons des interfaces structurées, accessibles et agréables à utiliser, tout en accordant une attention particulière aux performances et à l'adaptation sur tous les appareils.",
    icon: Monitor,
    image:
      "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=1200&q=85",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
    capabilities: [
      "Développement d'interfaces web",
      "Création de composants réutilisables",
      "Intégration de maquettes UI/UX",
      "Responsive Web Design",
      "Optimisation des performances frontend",
      "Gestion des interactions utilisateur",
    ],
    benefits: [
      "Interfaces adaptées aux différents écrans.",
      "Navigation intuitive et cohérente.",
      "Composants réutilisables et maintenables.",
      "Expérience utilisateur améliorée.",
    ],
    applications: [
      "Sites web professionnels",
      "Tableaux de bord",
      "Applications SaaS",
      "Portails numériques",
    ],
  },

  {
    id: "02",
    slug: "backend",
    number: "02",
    title: "Backend Development",
    subtitle: "Des architectures robustes et évolutives",
    description:
      "Nous concevons la logique métier, les systèmes d'authentification, les API et les architectures qui alimentent vos applications.",
    fullDescription:
      "Le backend représente le moteur de vos applications. Il gère les données, les règles métiers, les accès utilisateurs et les communications entre les différents composants d'un système. Nous privilégions des architectures organisées, sécurisées et conçues pour évoluer.",
    icon: Server,
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85",
    technologies: [
      "PHP",
      "Laravel",
      "Python",
      "Node.js",
      "REST API",
      "PostgreSQL",
      "Redis",
    ],
    capabilities: [
      "Conception d'architectures backend",
      "Développement d'API REST",
      "Authentification et autorisations",
      "Gestion de la logique métier",
      "Traitement et validation des données",
      "Optimisation des performances serveur",
    ],
    benefits: [
      "Une architecture mieux structurée.",
      "Une gestion cohérente des données.",
      "Des services évolutifs.",
      "Une meilleure séparation des responsabilités.",
    ],
    applications: [
      "Applications métiers",
      "Plateformes SaaS",
      "Systèmes de gestion",
      "Applications web et mobiles",
    ],
  },

  {
    id: "03",
    slug: "mobile-desktop",
    number: "03",
    title: "Mobile & Desktop Development",
    subtitle: "Des applications sur tous vos appareils",
    description:
      "Nous explorons le développement d'applications mobiles et desktop pour rendre vos services accessibles sur différents environnements.",
    fullDescription:
      "Les applications mobiles et desktop permettent de rapprocher les outils numériques de leurs utilisateurs. Nous travaillons sur des architectures capables de connecter les interfaces aux services backend, avec une attention particulière à l'expérience et à la compatibilité.",
    icon: Smartphone,
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=85",
    technologies: [
      "React",
      "React Native",
      "Cordova",
      "Electron",
      "TypeScript",
      "Laravel API",
    ],
    capabilities: [
      "Conception d'interfaces mobiles",
      "Développement d'applications Android",
      "Applications desktop multiplateformes",
      "Connexion aux API",
      "Synchronisation des données",
      "Adaptation aux différents appareils",
    ],
    benefits: [
      "Accessibilité sur plusieurs plateformes.",
      "Expérience adaptée aux utilisateurs.",
      "Connexion aux systèmes existants.",
      "Possibilités d'évolution multiplateforme.",
    ],
    applications: [
      "Applications Android",
      "Applications de gestion",
      "Logiciels desktop",
      "Applications connectées à des plateformes SaaS",
    ],
  },

  {
    id: "04",
    slug: "bases-de-donnees",
    number: "04",
    title: "Database Engineering",
    subtitle: "Structurer et valoriser vos données",
    description:
      "Nous concevons des structures de données cohérentes pour assurer le stockage, l'organisation et l'exploitation des informations.",
    fullDescription:
      "Les données sont au cœur des systèmes numériques. Nous accordons une attention particulière à la modélisation, à la cohérence, à la sécurité et aux performances des bases de données afin de construire des applications fiables.",
    icon: Database,
    image:
      "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=1200&q=85",
    technologies: [
      "PostgreSQL",
      "MySQL",
      "Redis",
      "SQL",
      "Prisma",
      "Database Design",
    ],
    capabilities: [
      "Modélisation des données",
      "Conception de schémas relationnels",
      "Optimisation des requêtes SQL",
      "Gestion des migrations",
      "Sauvegarde et restauration",
      "Organisation des données applicatives",
    ],
    benefits: [
      "Données mieux organisées.",
      "Réduction des incohérences.",
      "Requêtes plus efficaces.",
      "Meilleure évolutivité des systèmes.",
    ],
    applications: [
      "Systèmes de gestion",
      "Plateformes SaaS",
      "Applications transactionnelles",
      "Systèmes d'information",
    ],
  },

  {
    id: "05",
    slug: "cloud-infrastructure",
    number: "05",
    title: "Cloud & Infrastructure",
    subtitle: "Des environnements adaptés à vos applications",
    description:
      "Nous travaillons sur les environnements d'hébergement, les infrastructures et les ressources nécessaires au fonctionnement des applications.",
    fullDescription:
      "Une application doit pouvoir fonctionner dans un environnement fiable et adapté à ses besoins. Nous étudions les possibilités d'hébergement, de configuration et d'organisation des infrastructures afin de préparer des déploiements cohérents.",
    icon: Cloud,
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=85",
    technologies: [
      "Docker",
      "Linux",
      "Cloud Computing",
      "Nginx",
      "PostgreSQL",
      "Redis",
      "Virtualisation",
    ],
    capabilities: [
      "Préparation des environnements applicatifs",
      "Conteneurisation avec Docker",
      "Configuration des serveurs",
      "Organisation des ressources",
      "Gestion des environnements de développement",
      "Préparation à l'hébergement cloud",
    ],
    benefits: [
      "Environnements mieux organisés.",
      "Déploiements plus reproductibles.",
      "Meilleure maîtrise de l'infrastructure.",
      "Préparation à la montée en charge.",
    ],
    applications: [
      "Applications web",
      "Plateformes SaaS",
      "API et services backend",
      "Systèmes distribués",
    ],
  },

  {
    id: "06",
    slug: "devops",
    number: "06",
    title: "DevOps & Deployment",
    subtitle: "Améliorer le cycle de développement",
    description:
      "Nous mettons en place des pratiques et des outils qui facilitent le développement, les tests et le déploiement des applications.",
    fullDescription:
      "Les pratiques DevOps favorisent la collaboration entre le développement et les opérations. Elles permettent d'organiser les environnements, de fiabiliser les livraisons et d'automatiser certaines étapes du cycle de vie logiciel.",
    icon: GitBranch,
    image:
      "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=1200&q=85",
    technologies: [
      "Git",
      "GitHub",
      "Docker",
      "GitHub Actions",
      "Linux",
      "CI/CD",
      "Testing",
    ],
    capabilities: [
      "Gestion du code source",
      "Organisation des branches Git",
      "Préparation des pipelines CI/CD",
      "Automatisation des tests",
      "Gestion des environnements",
      "Préparation des déploiements",
    ],
    benefits: [
      "Processus de livraison mieux organisés.",
      "Réduction des opérations répétitives.",
      "Meilleure traçabilité des modifications.",
      "Cycles de développement plus fluides.",
    ],
    applications: [
      "Applications web",
      "API backend",
      "Applications SaaS",
      "Projets collaboratifs",
    ],
  },

  {
    id: "07",
    slug: "api-integration",
    number: "07",
    title: "API & System Integration",
    subtitle: "Connecter vos applications et services",
    description:
      "Nous concevons des interfaces de programmation et des mécanismes d'intégration pour faire communiquer différents systèmes.",
    fullDescription:
      "Les systèmes modernes doivent pouvoir échanger des informations. Les API et les intégrations permettent de connecter des applications, de synchroniser les données et de simplifier les échanges entre différents services.",
    icon: Network,
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85",
    technologies: [
      "REST API",
      "JSON",
      "Postman",
      "Laravel",
      "Node.js",
      "Webhooks",
      "OAuth 2.0",
    ],
    capabilities: [
      "Conception d'API REST",
      "Documentation des API",
      "Intégration de services externes",
      "Gestion des webhooks",
      "Synchronisation des données",
      "Authentification entre services",
    ],
    benefits: [
      "Meilleure communication entre systèmes.",
      "Réduction des saisies répétitives.",
      "Centralisation des échanges.",
      "Possibilités d'interconnexion.",
    ],
    applications: [
      "Paiements en ligne",
      "Applications mobiles",
      "Plateformes SaaS",
      "Systèmes de gestion intégrés",
    ],
  },

  {
    id: "08",
    slug: "cybersecurite",
    number: "08",
    title: "Cybersecurity",
    subtitle: "Intégrer la sécurité dans vos projets",
    description:
      "Nous intégrons des pratiques de sécurité applicative pour mieux protéger les applications, les accès et les données.",
    fullDescription:
      "La sécurité doit être prise en compte dès la conception d'une application. Nous accordons une attention particulière à la gestion des accès, à la validation des données, à la protection des informations et aux bonnes pratiques de développement sécurisé.",
    icon: ShieldCheck,
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=85",
    technologies: [
      "HTTPS",
      "OAuth 2.0",
      "Authentication",
      "Access Control",
      "OWASP",
      "Secure Coding",
    ],
    capabilities: [
      "Gestion des rôles et permissions",
      "Sécurisation des mécanismes d'authentification",
      "Validation des données entrantes",
      "Protection contre les vulnérabilités courantes",
      "Gestion des secrets applicatifs",
      "Bonnes pratiques de développement sécurisé",
    ],
    benefits: [
      "Meilleure protection des accès.",
      "Réduction des risques applicatifs.",
      "Gestion plus rigoureuse des permissions.",
      "Prise en compte de la sécurité dès la conception.",
    ],
    applications: [
      "Applications web",
      "API",
      "Plateformes SaaS",
      "Systèmes d'information",
    ],
  },
];