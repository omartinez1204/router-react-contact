import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ContactApp } from './ContactApp'
import { Login } from './pages/Login'
import { Error, Contacto, EditContact } from './components'
import { getAllContactsI, createNewContact, getContactoByID, updateContactoByID } from './controllers/contact'
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
        element: <Contacto />,
        loader: getContactoByID,
      },
      {
        path: 'contacts/:contactId/edit',
        loader:getContactoByID,
        element: <EditContact/>,
        action: updateContactoByID
      },
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
