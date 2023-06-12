import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home/home'
import { RouterProvider, createBrowserRouter, } from 'react-router-dom'
import 'tailwindcss/tailwind.css'
import MainLayout from './components/layouts/mainLayout'
import Search from './pages/Search/search'
import Library from './pages/library/Library'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/search',
        element: <Search/>
      },
      {
        path: '/library',
        element: <Library/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
