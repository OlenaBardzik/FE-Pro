import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import ContactFormInput from "./ContactFormInput";
import { saveContact, setContactToEdit } from '../store/actions/contactAction'

export default function ContactForm () {
    const [formData, setFormData] = useState({});
    const contactToEdit = useSelector(state => state.contact.contactToEdit);
    const dispatch = useDispatch();

    useEffect(() => {
        setFormData(contactToEdit)
    }, [contactToEdit])

    const isContactValid = (contact) => {
        return contact.firstName?.trim().length > 0 &&
          contact.lastName?.trim().length > 0 &&
          contact.phone?.toString().length > 0
      }
    
    const showError = (error) => {
        alert(error)
    }

    const onSubmit = (event) => {
        event.preventDefault();

        const contact = {
            ... contactToEdit,
            firstName: formData.firstName,
            lastName: formData.lastName,
            phone: formData.phone
        }
        event.target.reset();
        if (!isContactValid(contact)) {
            showError("Data is not valid");
            return;
          }
      
          dispatch(saveContact(contact))
          dispatch(setContactToEdit({}))
    }

    return (
        <form onSubmit={onSubmit}>
            <ContactFormInput type="text" 
                        placeholder="First Name" 
                        value={formData.firstName} 
                        onChange={(event) => {setFormData({...formData, firstName: event.target.value})}}/>
            <ContactFormInput type="text" 
                        placeholder="Last Name" 
                        value={formData.lastName} 
                        onChange={(event) => {setFormData({...formData, lastName: event.target.value})}}/>
            <ContactFormInput type="text" 
                        placeholder="Phone" 
                        value={formData.phone} 
                        onChange={(event) => {setFormData({...formData, phone: event.target.value})}}/>
            <button type="submit">Save Contact</button>
        </form>
    )
}