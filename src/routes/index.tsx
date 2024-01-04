import { createBrowserRouter, Navigate, RouteObject } from 'react-router-dom'

import { Layout } from '@/components/layout'
import { NotFound } from '@/components/NotFound'
import { Payment } from '@/feature/payment/components/Payment'

import { FormDemo } from '../pages/form-demo'
import { Home } from '../pages/home'
import { Introduce } from '../pages/introduce'
import { Dashboard, Discussion, List, Main, Post, Profile } from '../pages/main'
import {
  loader as PackageRouteDeferLoader,
  PackageLoaderDeferRoute,
} from '../pages/router-loader/PackageLoaderDeferRoute'
import {
  loader as PackageRouteLoader,
  PackageLoaderRoute,
} from '../pages/router-loader/PackageLoaderRoute'

const authRouters: RouteObject[] = [
  // { path: '/discussienes/*', element: <DiscussionsRoutes /> },
  { path: '', element: <Dashboard /> },
  { path: 'article', element: <Post /> },
  { path: 'profile', element: <Profile /> },
  { path: 'list/:listId', element: <List /> },
  { path: 'discussion', element: <Discussion /> },
  { path: '*', element: <Navigate to="." /> },
]

const mainRouters: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/main',
    element: <Main />,
    children: authRouters,
  },
  {
    path: '/introduce',
    element: <Introduce />,
  },
  {
    path: '/form-demo',
    element: <FormDemo />,
  },
  {
    path: '/loader-location/:packageId',
    element: <PackageLoaderRoute />,
    loader: PackageRouteLoader,
  },
  {
    path: '/loader-defer-location/:packageId',
    element: <PackageLoaderDeferRoute />,
    loader: PackageRouteDeferLoader,
  },
  { path: 'payment', element: <Payment amount={19.9} /> },
]

export const routers = createBrowserRouter(
  [
    // this is just for warp all page with header and footer: https://stackoverflow.com/questions/70833727/using-react-router-v6-i-need-a-navbar-to-permanently-be-there-but-cant-display
    {
      path: '/',
      element: <Layout />,
      // 404
      errorElement: <NotFound />,
      children: mainRouters,
    },
  ],
  {
    basename: process.env.PUBLIC_PATH,
  }
)
