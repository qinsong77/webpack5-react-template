import { createBrowserRouter, Navigate, RouteObject } from 'react-router-dom'

import { Layout } from '@/components/Layout'
import { ErrorPage } from '@/pages/error-page'
import { Home } from '@/pages/home'
import { Introduce } from '@/pages/introduce'
import { Dashboard, Discussion, List, Post, Profile } from '@/pages/main'
import { Main } from '@/pages/main/Main'

const authRouters: RouteObject[] = [
  // { path: '/discussienes/*', element: <DiscussionsRoutes /> },
  { path: 'article', element: <Post /> },
  { path: 'profile', element: <Profile /> },
  { path: 'list/:listId', element: <List /> },
  { path: 'discussion', element: <Discussion /> },
  { path: '', element: <Dashboard /> },
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
]

export const routers = createBrowserRouter([
  // this is just for warp all page with header and footer: https://stackoverflow.com/questions/70833727/using-react-router-v6-i-need-a-navbar-to-permanently-be-there-but-cant-display
  {
    path: '/',
    element: <Layout />,
    // 404
    errorElement: <ErrorPage />,
    children: mainRouters,
  },
])
