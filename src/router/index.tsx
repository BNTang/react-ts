import React, { lazy } from 'react'
import { Navigate } from 'react-router-dom'
import { RouteObject } from 'react-router-dom'

const Login = lazy(() => import('@/views/login'))
const Main = lazy(() => import('@/views/main'))
const NotFound = lazy(() => import('@/views/404'))
const Newest = lazy(() => import('@/views/main/newest'))
const Hot = lazy(() => import('@/views/main/hot'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/login" />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/main',
    element: <Main />,
    children: [
      {
        path: '/main/newest',
        element: <Newest />
      },
      {
        path: '/main/hot',
        element: <Hot />
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
]

export default routes
