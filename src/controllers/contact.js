import { getAllContacts, createOneContact, getContactById, updateContactById, deleteContactById  } from '../fetch/contact'

import { redirect } from 'react-router-dom'

//Todo: 
const getAllContactsI = async({ request })=>{
    const url = new URL(request.url)
    const q = url.searchParams.get('q')
    const contacts = await getAllContacts(q);
    return { contacts, q };
}

//Todo:
const getContactoByID = async( { params } )=>{
    const contact = await getContactById( params.contactId )
    return { contact }
}

const updateContactoByID = async( { request, params } )=>{

    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    await updateContactById(params.contactId, updates);
    
    return redirect(`/contacts/${params.contactId}`);

}

const createNewContact = async()=>{
    const contact = await createOneContact()
    return redirect(`contacts/${contact.id}/edit`)
}

const deleteOneContact = async({ params })=>{
    await deleteContactById( params.iduser )
    return redirect('/')
}


export {
    getAllContactsI,
    createNewContact,
    getContactoByID,
    updateContactoByID,
    deleteOneContact
}