import {
  BrainCircuit,
  Bot,
  Camera,
  Cpu,
  FlaskConical,
  Network,
  Sparkles,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export type InnovationStatus =
  | "available"
  | "development"
  | "prototype"
  | "exploration";

export interface Innovation {
  id: string;
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  icon: LucideIcon;
  image: string;
  status: InnovationStatus;
  statusLabel: string;
  technologies: string[];
  applications: string[];
  objectives: string[];
}

export const innovations: Innovation[] = [
  {
    id: "01",
    slug: "intelligence-artificielle",
    number: "01",
    title: "Intelligence artificielle",
    subtitle: "Des systèmes plus intelligents",
    description:
      "Explorer le potentiel de l'intelligence artificielle pour concevoir des solutions capables d'analyser, d'apprendre et d'assister les utilisateurs.",
    fullDescription:
      "INNOVTECH explore les possibilités offertes par l'intelligence artificielle pour améliorer les produits numériques, automatiser certaines opérations et faciliter la prise de décision. Notre démarche consiste à identifier des cas d'usage concrets et à expérimenter des solutions adaptées aux besoins des entreprises.",
    icon: BrainCircuit,
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=85",
    status: "exploration",
    statusLabel: "En exploration",
    technologies: ["Python", "PyTorch", "TensorFlow", "Scikit-learn"],
    applications: [
      "Analyse intelligente de données",
      "Automatisation de tâches",
      "Aide à la décision",
      "Assistants intelligents",
    ],
    objectives: [
      "Identifier des cas d'utilisation pertinents.",
      "Expérimenter différents modèles d'intelligence artificielle.",
      "Développer progressivement des solutions adaptées aux entreprises.",
    ],
  },
  {
    id: "02",
    slug: "machine-learning",
    number: "02",
    title: "Machine Learning",
    subtitle: "Apprendre à partir des données",
    description:
      "Étudier et expérimenter des modèles capables d'identifier des tendances et de produire des prédictions à partir de données.",
    fullDescription:
      "Le Machine Learning permet de construire des systèmes qui apprennent à partir de données. INNOVTECH s'intéresse notamment à la préparation des données, à l'entraînement des modèles, à leur évaluation et à leurs possibilités d'intégration dans des applications métiers.",
    icon: Workflow,
    image:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1200&q=85",
    status: "exploration",
    statusLabel: "En exploration",
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    applications: [
      "Analyse prédictive",
      "Détection d'anomalies",
      "Classification de données",
      "Segmentation et recommandations",
    ],
    objectives: [
      "Comprendre et préparer les jeux de données.",
      "Entraîner et évaluer des modèles.",
      "Étudier leur intégration dans des applications concrètes.",
    ],
  },
  {
    id: "03",
    slug: "ia-generative-llm",
    number: "03",
    title: "IA générative & LLM",
    subtitle: "Créer de nouvelles expériences numériques",
    description:
      "Explorer les modèles de langage et les technologies génératives pour créer des assistants et des outils de productivité.",
    fullDescription:
      "INNOVTECH explore les modèles de langage de grande taille (LLM), les architectures de génération de contenu et les systèmes de recherche augmentée par génération. L'objectif est de concevoir des outils capables d'assister les utilisateurs dans leurs tâches quotidiennes.",
    icon: Sparkles,
    image:
      "https://images.unsplash.com/photo-1676299081847-824916de030a?auto=format&fit=crop&w=1200&q=85",
    status: "development",
    statusLabel: "En développement",
    technologies: [
      "Python",
      "LLM",
      "Transformers",
      "Hugging Face",
      "RAG",
    ],
    applications: [
      "Assistants conversationnels",
      "Génération de textes",
      "Recherche intelligente de documents",
      "Automatisation de tâches rédactionnelles",
    ],
    objectives: [
      "Expérimenter différentes architectures de modèles.",
      "Étudier les méthodes d'adaptation et d'évaluation des LLM.",
      "Développer progressivement l'écosystème InnovLLM.",
    ],
  },
  {
    id: "04",
    slug: "computer-vision",
    number: "04",
    title: "Computer Vision",
    subtitle: "Donner une capacité de perception aux machines",
    description:
      "Explorer les technologies permettant aux systèmes informatiques d'analyser et d'interpréter des images et des vidéos.",
    fullDescription:
      "La vision par ordinateur permet d'extraire des informations à partir de contenus visuels. INNOVTECH étudie les possibilités de cette technologie dans des domaines tels que la reconnaissance d'objets, l'analyse d'images et l'automatisation de contrôles visuels.",
    icon: Camera,
    image:
      "https://images.unsplash.com/photo-1535378620166-273708d44e4c?auto=format&fit=crop&w=1200&q=85",
    status: "exploration",
    statusLabel: "En exploration",
    technologies: ["Python", "OpenCV", "PyTorch", "YOLO"],
    applications: [
      "Détection d'objets",
      "Analyse d'images",
      "Reconnaissance de formes",
      "Inspection visuelle automatisée",
    ],
    objectives: [
      "Étudier les modèles de vision artificielle.",
      "Réaliser des expérimentations sur des images et vidéos.",
      "Identifier des applications utiles aux entreprises.",
    ],
  },
  {
    id: "05",
    slug: "internet-of-things",
    number: "05",
    title: "Internet of Things",
    subtitle: "Connecter le monde physique au numérique",
    description:
      "Étudier les systèmes connectés qui collectent, transmettent et exploitent des données issues d'appareils physiques.",
    fullDescription:
      "L'Internet des objets ouvre la voie à de nouvelles possibilités dans la collecte et l'exploitation des données. INNOVTECH explore les architectures connectées, les capteurs et les systèmes de communication qui peuvent être intégrés dans des solutions numériques.",
    icon: Network,
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85",
    status: "exploration",
    statusLabel: "En exploration",
    technologies: ["Python", "MQTT", "ESP32", "Arduino", "Node.js"],
    applications: [
      "Surveillance à distance",
      "Collecte de données environnementales",
      "Équipements connectés",
      "Automatisation de systèmes",
    ],
    objectives: [
      "Explorer les plateformes matérielles connectées.",
      "Étudier les protocoles de communication.",
      "Imaginer des prototypes adaptés aux besoins locaux.",
    ],
  },
  {
    id: "06",
    slug: "laboratoire-technologique",
    number: "06",
    title: "Laboratoire technologique",
    subtitle: "Expérimenter avant de construire",
    description:
      "Un espace de veille, de prototypage et d'expérimentation pour évaluer les technologies émergentes.",
    fullDescription:
      "Le laboratoire technologique constitue un espace d'exploration des outils, frameworks et architectures émergentes. Il permet de réaliser des prototypes, de tester des approches techniques et d'évaluer leur pertinence avant une éventuelle intégration dans les produits INNOVTECH.",
    icon: FlaskConical,
    image:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1200&q=85",
    status: "development",
    statusLabel: "En développement",
    technologies: ["Python", "Docker", "Git", "Linux", "Cloud"],
    applications: [
      "Prototypage rapide",
      "Tests de nouvelles technologies",
      "Preuves de concept",
      "Veille technologique",
    ],
    objectives: [
      "Mettre en place un environnement d'expérimentation.",
      "Documenter les résultats des tests.",
      "Transformer les prototypes pertinents en projets concrets.",
    ],
  },
  {
    id: "07",
    slug: "recherche-developpement",
    number: "07",
    title: "Recherche & Développement",
    subtitle: "Préparer les technologies de demain",
    description:
      "Investir dans l'exploration technique et la création de nouvelles approches pour répondre aux défis numériques.",
    fullDescription:
      "La recherche et le développement accompagnent la stratégie technologique d'INNOVTECH. Cette démarche consiste à analyser les besoins, étudier les nouvelles technologies, expérimenter des approches et développer progressivement des solutions innovantes.",
    icon: Cpu,
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=85",
    status: "development",
    statusLabel: "En développement",
    technologies: ["Python", "TypeScript", "Docker", "Cloud", "Git"],
    applications: [
      "Études de faisabilité",
      "Prototypes technologiques",
      "Optimisation de solutions",
      "Conception de nouveaux produits",
    ],
    objectives: [
      "Identifier les défis technologiques à résoudre.",
      "Conduire des expérimentations documentées.",
      "Faire évoluer les idées prometteuses vers des produits.",
    ],
  },
  {
    id: "08",
    slug: "prototypes-experimentations",
    number: "08",
    title: "Prototypes & expérimentations",
    subtitle: "Transformer les idées en expériences concrètes",
    description:
      "Créer des démonstrateurs et des preuves de concept pour valider des idées avant leur industrialisation.",
    fullDescription:
      "Les prototypes permettent de tester rapidement une idée, de mesurer sa faisabilité et d'identifier les améliorations nécessaires. INNOVTECH utilise cette approche pour explorer de nouvelles fonctionnalités et évaluer des concepts de produits.",
    icon: Bot,
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=85",
    status: "prototype",
    statusLabel: "Prototypage",
    technologies: ["Python", "React", "Laravel", "Docker", "APIs"],
    applications: [
      "Démonstrateurs interactifs",
      "Preuves de concept",
      "Tests utilisateurs",
      "Validation d'architectures",
    ],
    objectives: [
      "Concrétiser rapidement des idées.",
      "Tester les hypothèses techniques.",
      "Valider les concepts avant leur développement complet.",
    ],
  },
];