import {
  GraduationCap,
  Code2,
  Rocket,
  Lightbulb,
  Users,
  BriefcaseBusiness,
  Handshake,
  Globe,
  type LucideIcon,
} from "lucide-react";

export interface CommunityPillar {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

export interface CommunityAudience {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
}

export interface CommunityOpportunity {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  type: string;
}

export const communityPillars: CommunityPillar[] = [
  {
    id: "01",
    number: "01",
    title: "Apprendre",
    description:
      "Découvrir les nouvelles technologies, partager des connaissances et progresser grâce aux échanges avec d'autres passionnés du numérique.",
    icon: GraduationCap,
    color: "blue",
  },
  {
    id: "02",
    number: "02",
    title: "Collaborer",
    description:
      "Créer des relations professionnelles, participer à des projets collectifs et mettre les compétences de chacun au service d'idées communes.",
    icon: Handshake,
    color: "cyan",
  },
  {
    id: "03",
    number: "03",
    title: "Innover",
    description:
      "Proposer des idées, expérimenter de nouvelles approches et participer à la création de solutions technologiques utiles.",
    icon: Lightbulb,
    color: "purple",
  },
  {
    id: "04",
    number: "04",
    title: "Grandir",
    description:
      "Développer son expérience, valoriser ses compétences et découvrir de nouvelles perspectives dans l'univers technologique.",
    icon: Rocket,
    color: "orange",
  },
];

export const communityAudiences: CommunityAudience[] = [
  {
    id: "developers",
    title: "Développeurs",
    description:
      "Échangez avec d'autres développeurs, partagez vos réalisations et explorez de nouvelles opportunités de collaboration.",
    icon: Code2,
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "students",
    title: "Étudiants",
    description:
      "Développez vos compétences, découvrez les métiers du numérique et rapprochez-vous du monde professionnel.",
    icon: GraduationCap,
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "entrepreneurs",
    title: "Entrepreneurs",
    description:
      "Échangez autour de vos idées, trouvez des compétences complémentaires et explorez les possibilités du numérique.",
    icon: BriefcaseBusiness,
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "startups",
    title: "Startups & entreprises",
    description:
      "Rencontrez des profils technologiques et identifiez des possibilités de partenariat ou de développement.",
    icon: Globe,
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85",
  },
];

export const communityOpportunities: CommunityOpportunity[] = [
  {
    id: "collaboration",
    title: "Projets collaboratifs",
    description:
      "Participer à la conception de projets numériques avec d'autres profils complémentaires.",
    icon: Users,
    type: "Collaboration",
  },
  {
    id: "ideas",
    title: "Proposition d'idées",
    description:
      "Soumettre une idée de produit, de logiciel ou de service numérique à explorer.",
    icon: Lightbulb,
    type: "Innovation",
  },
  {
    id: "partnership",
    title: "Partenariats",
    description:
      "Construire des relations avec des organisations, entreprises et acteurs technologiques.",
    icon: Handshake,
    type: "Partenariat",
  },
  {
    id: "career",
    title: "Opportunités professionnelles",
    description:
      "Se rapprocher d'INNOVTECH pour de potentielles opportunités de stage, de collaboration ou d'emploi.",
    icon: BriefcaseBusiness,
    type: "Carrière",
  },
];