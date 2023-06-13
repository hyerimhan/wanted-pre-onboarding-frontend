import App from 'App'
import Home from 'pages/Home'
import NotFound from 'pages/NotFound'
import SignIn from 'pages/SignIn'
import SignUp from 'pages/SignUp'
import Todo from 'pages/Todo'
import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        path: '/',
        element: <Home />,
      },
      { path: '/signin', element: <SignIn /> },
      { path: '/signup', element: <SignUp /> },
      { path: '/todo', element: <Todo /> },
    ],
  },
])

export default router
