import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { PATHS } from './paths'
import ProtectedLayout from '@layouts/ProtectedLayout'
import * as Page from '@pages'

const routes = [
  {
    path: PATHS.LOGIN,
    element: <Page.Login />
  },
  {
    element: <ProtectedLayout />,
    children: [
      {
        path: PATHS.HOME,
        element: <Page.Home />,
        children: []
      },
      {
        path: PATHS.ADMIN,
        children: [
          {
            path: '',
            element: <Page.Admin />
          },
          {
            path: PATHS.ADD_SHOP,
            element: <Page.AddShop />
          }
        ]
      }
    ]
  },
  {
    path: PATHS.NOT_FOUND,
    element: <Page.NotFound />
  }
]

const router = createBrowserRouter(routes, {
  basename: import.meta.env.BASE_URL
})

export const Routes = () => <RouterProvider router={router} />
