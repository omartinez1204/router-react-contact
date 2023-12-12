import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ContactApp } from './ContactApp'
import { Login } from './pages/Login'
import { Error, Contacto } from './components'
import { getAllContactsI, createNewContact } from './controllers/contact'
import './css/style.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <ContactApp />,
    loader: getAllContactsI,
    errorElement: <Error />,
    action: createNewContact,
    children: [
      {
        path: 'contacts/:contactId',
        element: <Contacto />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />,
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
