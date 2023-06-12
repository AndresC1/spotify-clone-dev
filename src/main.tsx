import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/home'
import { RouterProvider, createBrowserRouter, } from 'react-router-dom'
import 'tailwindcss/tailwind.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
