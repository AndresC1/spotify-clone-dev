import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home/home'
import { RouterProvider, createBrowserRouter, } from 'react-router-dom'
import 'tailwindcss/tailwind.css'
import MainLayout from './components/layouts/mainLayout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
