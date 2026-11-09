export interface Article {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  author: string;
  authorRole: string;
  authorImage: string;
  date: string;
  readingTime: number;
  featured?: boolean;
  tags: string[];
  content: {
    type: "paragraph" | "heading" | "list" | "quote";
    text: string;
    items?: string[];
  }[];
}

export const articleCategories = [
  "Tous",
  "Technologie",
  "Développement web",
  "Intelligence artificielle",
  "Entrepreneuriat",
  "Innovation",
  "Tutoriels",
];

export const articles: Article[] = [
  {
    id: 1,
    slug: "intelligence-artificielle-transformation-entreprises",
    title: "Comment l'intelligence artificielle transforme les entreprises",
    excerpt:
      "Découvrez comment les technologies d'intelligence artificielle permettent aux entreprises d'automatiser leurs processus et de créer de nouvelles opportunités.",
    category: "Intelligence artificielle",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=85",
    author: "Équipe INNOVTECH",
    authorRole: "Innovation & Technologie",
    authorImage:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
    date: "2026-10-20",
    readingTime: 7,
    featured: true,
    tags: ["IA", "Automatisation", "Entreprise"],
    content: [
      {
        type: "paragraph",
        text: "L'intelligence artificielle transforme progressivement la manière dont les entreprises travaillent, prennent leurs décisions et interagissent avec leurs clients.",
      },
      {
        type: "heading",
        text: "Une nouvelle manière de travailler",
      },
      {
        type: "paragraph",
        text: "Les entreprises peuvent désormais exploiter des outils intelligents pour analyser leurs données, automatiser certaines tâches répétitives et améliorer leur productivité.",
      },
      {
        type: "heading",
        text: "Des applications concrètes",
      },
      {
        type: "list",
        text: "Voici quelques exemples d'utilisation :",
        items: [
          "Automatisation des tâches administratives.",
          "Analyse intelligente des données commerciales.",
          "Assistants conversationnels pour les clients.",
          "Aide à la prise de décision.",
          "Personnalisation des services.",
        ],
      },
      {
        type: "quote",
        text: "L'intelligence artificielle ne remplace pas la vision humaine : elle lui donne de nouveaux moyens de se concrétiser.",
      },
      {
        type: "heading",
        text: "Le potentiel pour les entreprises africaines",
      },
      {
        type: "paragraph",
        text: "Au Cameroun et dans le reste de l'Afrique, l'adoption progressive de ces technologies représente une opportunité pour les entreprises qui souhaitent moderniser leurs activités et développer de nouveaux services numériques.",
      },
    ],
  },

  {
    id: 2,
    slug: "creer-une-application-web-moderne",
    title: "Les étapes pour créer une application web moderne",
    excerpt:
      "De l'idée à la mise en production, découvrez les principales étapes nécessaires à la réalisation d'une application web professionnelle.",
    category: "Développement web",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=85",
    author: "Équipe INNOVTECH",
    authorRole: "Développement logiciel",
    authorImage:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
    date: "2026-10-15",
    readingTime: 6,
    tags: ["React", "Laravel", "Architecture"],
    content: [
      {
        type: "paragraph",
        text: "La création d'une application web moderne nécessite une préparation sérieuse. Il ne suffit pas de commencer à écrire du code : il faut comprendre le besoin, définir l'architecture et planifier les différentes fonctionnalités.",
      },
      {
        type: "heading",
        text: "1. Comprendre le besoin",
      },
      {
        type: "paragraph",
        text: "La première étape consiste à identifier le problème que l'application doit résoudre, ses utilisateurs et les fonctionnalités indispensables.",
      },
      {
        type: "heading",
        text: "2. Concevoir l'expérience utilisateur",
      },
      {
        type: "paragraph",
        text: "Les maquettes permettent de visualiser les différentes interfaces avant de commencer le développement. Elles facilitent également la validation des choix ergonomiques.",
      },
      {
        type: "heading",
        text: "3. Développer l'application",
      },
      {
        type: "list",
        text: "Une architecture moderne peut notamment comprendre :",
        items: [
          "React ou Next.js pour l'interface.",
          "Laravel pour le backend et les API.",
          "PostgreSQL ou MySQL pour la base de données.",
          "Git pour la gestion du code source.",
          "Docker pour faciliter l'environnement de développement.",
        ],
      },
      {
        type: "heading",
        text: "4. Tester et déployer",
      },
      {
        type: "paragraph",
        text: "Avant la mise en production, il faut vérifier les fonctionnalités, la sécurité, les performances et la compatibilité avec les différents appareils.",
      },
    ],
  },

  {
    id: 3,
    slug: "digitalisation-pme-africaines",
    title: "Pourquoi les PME africaines doivent accélérer leur digitalisation",
    excerpt:
      "La transformation numérique constitue un levier important pour améliorer la gestion, la productivité et la compétitivité des PME.",
    category: "Entrepreneuriat",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85",
    author: "Équipe INNOVTECH",
    authorRole: "Conseil & Digitalisation",
    authorImage:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
    date: "2026-10-10",
    readingTime: 5,
    tags: ["PME", "Afrique", "Digitalisation"],
    content: [
      {
        type: "paragraph",
        text: "La digitalisation offre aux petites et moyennes entreprises de nouvelles possibilités pour mieux organiser leurs activités et améliorer leurs relations avec leurs clients.",
      },
      {
        type: "heading",
        text: "Pourquoi digitaliser son entreprise ?",
      },
      {
        type: "list",
        text: "La transformation numérique peut contribuer à :",
        items: [
          "Réduire les tâches manuelles répétitives.",
          "Centraliser les informations de l'entreprise.",
          "Améliorer le suivi des clients.",
          "Faciliter la gestion financière.",
          "Accéder plus facilement aux données d'activité.",
        ],
      },
      {
        type: "heading",
        text: "Commencer progressivement",
      },
      {
        type: "paragraph",
        text: "Une entreprise n'a pas nécessairement besoin de transformer toutes ses activités en même temps. Elle peut commencer par identifier les tâches les plus contraignantes et choisir les outils adaptés à ses priorités.",
      },
    ],
  },

  {
    id: 4,
    slug: "comprendre-les-api-rest",
    title: "Comprendre les API REST et leur rôle dans les applications",
    excerpt:
      "Découvrez comment les API permettent à différentes applications et plateformes de communiquer entre elles.",
    category: "Tutoriels",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85",
    author: "Équipe INNOVTECH",
    authorRole: "Architecture logicielle",
    authorImage:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
    date: "2026-10-05",
    readingTime: 8,
    tags: ["API", "REST", "Backend"],
    content: [
      {
        type: "paragraph",
        text: "Une API REST permet à plusieurs applications de communiquer à travers des requêtes HTTP. Elle est particulièrement utilisée pour connecter une interface web à un serveur backend.",
      },
      {
        type: "heading",
        text: "Les principales méthodes HTTP",
      },
      {
        type: "list",
        text: "Les méthodes les plus courantes sont :",
        items: [
          "GET : récupérer des informations.",
          "POST : créer une ressource.",
          "PUT : remplacer une ressource.",
          "PATCH : modifier partiellement une ressource.",
          "DELETE : supprimer une ressource.",
        ],
      },
      {
        type: "heading",
        text: "Un exemple d'architecture",
      },
      {
        type: "paragraph",
        text: "Une application React peut envoyer une requête HTTP à une API Laravel. Le serveur traite la demande, interroge la base de données et retourne une réponse généralement au format JSON.",
      },
    ],
  },

  {
    id: 5,
    slug: "machine-learning-pour-debutants",
    title: "Machine Learning : comprendre les bases simplement",
    excerpt:
      "Une introduction aux concepts fondamentaux du Machine Learning et à ses principales applications.",
    category: "Intelligence artificielle",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=85",
    author: "Équipe INNOVTECH",
    authorRole: "Recherche & Développement",
    authorImage:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
    date: "2026-09-28",
    readingTime: 9,
    tags: ["Machine Learning", "Python", "IA"],
    content: [
      {
        type: "paragraph",
        text: "Le Machine Learning est un domaine de l'intelligence artificielle qui permet à un système informatique d'apprendre des modèles à partir de données.",
      },
      {
        type: "heading",
        text: "Les grandes catégories",
      },
      {
        type: "list",
        text: "On distingue notamment :",
        items: [
          "L'apprentissage supervisé.",
          "L'apprentissage non supervisé.",
          "L'apprentissage par renforcement.",
        ],
      },
      {
        type: "heading",
        text: "Pourquoi utiliser Python ?",
      },
      {
        type: "paragraph",
        text: "Python possède un écosystème riche pour travailler avec les données et développer des modèles de Machine Learning, notamment grâce à NumPy, Pandas et Scikit-learn.",
      },
    ],
  },

  {
    id: 6,
    slug: "importance-ui-ux-design",
    title: "L'importance du UI/UX Design dans un produit numérique",
    excerpt:
      "Une bonne interface ne se limite pas à son apparence. Elle doit également rendre l'utilisation du produit simple et intuitive.",
    category: "Innovation",
    image:
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=1200&q=85",
    author: "Équipe INNOVTECH",
    authorRole: "Design & Expérience utilisateur",
    authorImage:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
    date: "2026-09-20",
    readingTime: 4,
    tags: ["UI", "UX", "Design"],
    content: [
      {
        type: "paragraph",
        text: "Le UI/UX Design joue un rôle essentiel dans la réussite d'un produit numérique. Il permet de concevoir des interfaces à la fois esthétiques, compréhensibles et adaptées aux besoins des utilisateurs.",
      },
      {
        type: "heading",
        text: "UI et UX : quelle différence ?",
      },
      {
        type: "paragraph",
        text: "Le User Interface Design concerne notamment les éléments visuels de l'interface. Le User Experience Design s'intéresse davantage à l'expérience globale vécue par l'utilisateur.",
      },
      {
        type: "heading",
        text: "Les principes d'une bonne interface",
      },
      {
        type: "list",
        text: "Une interface efficace doit être :",
        items: [
          "Simple à comprendre.",
          "Cohérente dans ses composants.",
          "Accessible sur différents appareils.",
          "Rapide et agréable à utiliser.",
          "Adaptée aux besoins des utilisateurs.",
        ],
      },
    ],
  },
];

export const getArticleBySlug = (slug: string) =>
  articles.find((article) => article.slug === slug);

export const getFeaturedArticle = () =>
  articles.find((article) => article.featured);