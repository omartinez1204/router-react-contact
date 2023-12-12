import { getAllContacts, createOneContact } from '../fetch/contact'


const getAllContactsI = async()=>{
    const contacts = await getAllContacts()
    return { contacts }
}

const createNewContact = async()=>{
    const contact = await createOneContact()
    return { contact }
}

export {
    getAllContactsI,
    createNewContact,
}