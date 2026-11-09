export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

export const faqCategories = [
  "Toutes",
  "INNOVTECH",
  "Services",
  "Projets",
  "Technologies",
  "Collaboration",
  "Confidentialité",
];

export const faqData: FAQItem[] = [
  {
    id: 1,
    category: "INNOVTECH",
    question: "Qu'est-ce qu'INNOVTECH ?",
    answer:
      "INNOVTECH est une entreprise technologique qui développe des solutions numériques, des logiciels sur mesure, des plateformes SaaS et accompagne les organisations dans leur transformation numérique.",
  },
  {
    id: 2,
    category: "INNOVTECH",
    question: "Où se trouve INNOVTECH ?",
    answer:
      "INNOVTECH est basée au Cameroun et ambitionne d'accompagner des clients au Cameroun, en Afrique et à l'international.",
  },
  {
    id: 3,
    category: "Services",
    question: "Quels services propose INNOVTECH ?",
    answer:
      "Nos domaines d'intervention comprennent le développement logiciel, les plateformes SaaS, les sites web, les applications mobiles et desktop, la digitalisation, le conseil informatique et le design UI/UX.",
  },
  {
    id: 4,
    category: "Services",
    question: "Développez-vous des logiciels sur mesure ?",
    answer:
      "Oui. Nous pouvons concevoir des solutions adaptées aux besoins fonctionnels et techniques d'une entreprise, d'une organisation ou d'un entrepreneur.",
  },
  {
    id: 5,
    category: "Projets",
    question: "Comment présenter mon projet à INNOVTECH ?",
    answer:
      "Vous pouvez utiliser notre formulaire de contact et sélectionner la catégorie Projet informatique. Décrivez votre besoin, vos objectifs et vos contraintes.",
  },
  {
    id: 6,
    category: "Projets",
    question: "Comment obtenir un devis ?",
    answer:
      "Présentez votre projet à travers notre formulaire de demande. Les informations communiquées permettront d'étudier votre besoin avant de définir les prochaines étapes.",
  },
  {
    id: 7,
    category: "Technologies",
    question: "Quelles technologies utilisez-vous ?",
    answer:
      "Selon les besoins du projet, notre environnement technologique peut inclure React, Next.js, Laravel, PHP, Python, JavaScript, TypeScript, PostgreSQL, MySQL, Docker et différentes technologies cloud.",
  },
  {
    id: 8,
    category: "Technologies",
    question: "INNOVTECH travaille-t-elle sur l'intelligence artificielle ?",
    answer:
      "L'intelligence artificielle fait partie de nos axes d'exploration et de développement. Les fonctionnalités et produits concernés doivent être présentés selon leur niveau réel de maturité.",
  },
  {
    id: 9,
    category: "Collaboration",
    question: "Puis-je proposer un partenariat ?",
    answer:
      "Oui. Les entreprises, startups, organisations et professionnels peuvent nous soumettre leurs propositions de partenariat à travers la page Contact.",
  },
  {
    id: 10,
    category: "Collaboration",
    question: "Puis-je rejoindre INNOVTECH ?",
    answer:
      "Vous pouvez nous transmettre une candidature spontanée en présentant votre profil, vos compétences et un lien vers votre portfolio ou CV.",
  },
  {
    id: 11,
    category: "Confidentialité",
    question: "Comment mes informations personnelles sont-elles utilisées ?",
    answer:
      "Les informations communiquées à INNOVTECH doivent être utilisées uniquement pour les finalités indiquées lors de leur collecte, selon la politique de confidentialité applicable.",
  },
  {
    id: 12,
    category: "Confidentialité",
    question: "Comment demander la suppression de mes données ?",
    answer:
      "Vous pourrez adresser une demande à INNOVTECH par le moyen de contact indiqué dans la politique de confidentialité. Les modalités et délais applicables devront être précisés dans cette politique.",
  },
];