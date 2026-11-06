import { createBrowserRouter } from 'react-router-dom'

import MainLayout from '../layouts/MainLayout'
import Home from '../modules/home/Home'
import ComingSoon from './ComingSoon'
import NotFound from './NotFound'

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
        element: <ComingSoon />,
      },
      {
        path: 'entreprise/mission-vision',
        element: <ComingSoon />,
      },
      {
        path: 'services',
        element: <ComingSoon />,
      },
      {
        path: 'services/:service',
        element: <ComingSoon />,
      },
      {
        path: 'expertises',
        element: <ComingSoon />,
      },
      {
        path: 'innovation',
        element: <ComingSoon />,
      },
      {
        path: 'realisations',
        element: <ComingSoon />,
      },
      {
        path: 'communaute',
        element: <ComingSoon />,
      },
      {
        path: 'ressources',
        element: <ComingSoon />,
      },
      {
        path: 'contact',
        element: <ComingSoon />,
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
        path: '*',
        element: <NotFound />,
      },
    ],
  },
])