import { createBrowserRouter } from 'react-router-dom'

import MainLayout from '../layouts/MainLayout'
import Home from '../modules/home/Home'
import ComingSoon from './ComingSoon'
import NotFound from './NotFound'
import { CommunityPage } from "../modules/communaute";
import { ContactPage } from "../modules/contact";

import {
  ResourcesPage,
  ArticleDetailPage,
} from "../modules/ressources";

import {
  ProjectsPage,
  ProjectDetailPage,
} from "../modules/realisations";


import {
  InnovationPage,
  InnovationDetailPage,
} from "../modules/innovation";

import {
  ExpertisesPage,
  ExpertiseDetailPage,
} from "../modules/expertises";

import {
  ServicesPage,
  ServiceDetailPage,
} from "../modules/services";

import {
  AboutPage,
  MissionVisionPage,
  ValuesPage,
  ApproachPage,
} from '../modules/entreprise'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'entreprise',
        element: <AboutPage />,
      },
      {
        path: 'entreprise/a-propos',
        element: <AboutPage />,
      },
      {
        path: 'entreprise/mission-vision',
        element: <MissionVisionPage />,
      },
      {
        path: 'entreprise/valeurs',
        element: <ValuesPage />,
      },
      {
        path: 'entreprise/notre-approche',
        element: <ApproachPage />,
      },
      {
        path: 'services',
        element: <ServicesPage />,
      },
      {
        path: 'services/:slug',
        element: <ServiceDetailPage />,
      },
      {
        path: 'expertises',
        element: <ExpertisesPage />,
      },
      {
        path: 'expertises/:slug',
        element: <ExpertiseDetailPage />,
      },
      {
        path: 'innovation',
        element: <InnovationPage />,
      },
      {
        path: 'innovation/:slug',
        element: <InnovationDetailPage />,
      },
      {
        path: 'realisations',
        element: <ProjectsPage />,
      },
      {
        path: 'realisations/:slug',
        element: <ProjectDetailPage />,
      },
      {
        path: 'ressources',
        element: <ResourcesPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
      {
        path: 'faq',
        element: <ComingSoon />,
      },
      {
        path: 'confidentialite',
        element: <ComingSoon />,
      },
      {
        path: 'conditions-generales',
        element: <ComingSoon />,
      },
      {
        path: 'mentions-legales',
        element: <ComingSoon />,
      },
      {
        path: 'communaute',
        element: <CommunityPage />,
      },
      {
        path: '*',
        element: <NotFound />,
      },

      {
        path: 'ressources/:slug',
        element: <ArticleDetailPage />,
      },
    ],
  },
])