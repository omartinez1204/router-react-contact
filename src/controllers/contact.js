import { getAllContacts } from '../fetch/contact'


const getAllContactsI = async()=>{
    const contacts = await getAllContacts()
    return { contacts }
}


export {
    getAllContactsI,
}