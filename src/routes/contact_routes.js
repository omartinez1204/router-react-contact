import { createBrowserRouter } from "react-router-dom";
import { ContactApp } from "../ContactApp";
import { Contacto, EditContact, Error } from "../components";
import { createNewContact, deleteOneContact, getAllContactsI, getContactoByID, updateContactoByID } from "../controllers/contact";
import { Login } from "../pages/Login";

const router = createBrowserRouter([
    {
      path: '/',
      element: <ContactApp />,
      loader: getAllContactsI,
      errorElement: < Error />,
      action: createNewContact,
      children: [
        {
          path: 'contacts/:contactId',
          element: <Contacto />,
          loader: getContactoByID,
        },
        {
          path: 'contacts/:contactId/edit',
          loader: getContactoByID,
          element: <EditContact />,
          action: updateContactoByID
        },
        {
          path: 'contacts/:iduser/destroy',
          action: deleteOneContact,
        }
      ]
    },
    {
      path: '/login',
      element: <Login />,
    },
  ])

  export default router