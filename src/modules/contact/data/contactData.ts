import {
  Mail,
  MapPin,
  Phone,
  BriefcaseBusiness,
  Handshake,
  Code2,
  Lightbulb,
} from "lucide-react";

export const contactInformation = [
  {
    icon: Mail,
    title: "Adresse email",
    value: "contact@innovtech.com",
    description: "Pour vos demandes et renseignements.",
    href: "mailto:contact@innovtech.com",
  },
  {
    icon: Phone,
    title: "Téléphone",
    value: "À compléter",
    description: "Contactez directement notre équipe.",
    href: undefined,
  },
  {
    icon: MapPin,
    title: "Localisation",
    value: "Cameroun",
    description: "Nous accompagnons également des clients à distance.",
    href: undefined,
  },
];

export const collaborationTypes = [
  {
    id: "project",
    icon: Code2,
    title: "Projet informatique",
    description:
      "Vous souhaitez développer un logiciel, une plateforme SaaS, un site web ou une application.",
    label: "Présenter un projet",
  },
  {
    id: "partnership",
    icon: Handshake,
    title: "Partenariat",
    description:
      "Vous représentez une entreprise, une startup ou une organisation et souhaitez collaborer.",
    label: "Proposer un partenariat",
  },
  {
    id: "career",
    icon: BriefcaseBusiness,
    title: "Carrière",
    description:
      "Vous souhaitez rejoindre INNOVTECH ou proposer vos compétences.",
    label: "Envoyer une candidature",
  },
  {
    id: "other",
    icon: Lightbulb,
    title: "Autre demande",
    description:
      "Vous avez une question, une idée ou une proposition à nous soumettre.",
    label: "Nous contacter",
  },
];

export const contactFAQs = [
  {
    question: "Comment demander un devis à INNOVTECH ?",
    answer:
      "Utilisez notre formulaire de contact et sélectionnez Projet informatique. Décrivez votre besoin afin que notre équipe puisse étudier votre demande.",
  },
  {
    question: "INNOVTECH travaille-t-elle uniquement au Cameroun ?",
    answer:
      "Non. INNOVTECH souhaite accompagner des clients au Cameroun, en Afrique et à l'international. Les collaborations à distance sont également possibles.",
  },
  {
    question: "Puis-je proposer un partenariat technologique ?",
    answer:
      "Oui. Sélectionnez Partenariat dans notre formulaire et présentez votre organisation ainsi que votre proposition de collaboration.",
  },
  {
    question: "Puis-je envoyer une candidature spontanée ?",
    answer:
      "Oui. Vous pouvez nous présenter votre parcours, vos compétences et le type de collaboration que vous recherchez.",
  },
  {
    question: "Quels types de projets pouvez-vous développer ?",
    answer:
      "Nous intervenons notamment dans le développement de logiciels sur mesure, plateformes SaaS, applications web et mobiles, digitalisation et solutions technologiques.",
  },
];