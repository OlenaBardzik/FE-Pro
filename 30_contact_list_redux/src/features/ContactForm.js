import { useState, useEffect } from "react";
import ContactFormInput from "./ContactFormInput";

export default function ContactForm ({ onFormSubmit, contactEdit }) {
    const [formData, setFormData] = useState({});

    useEffect(() => {
        setFormData(contactEdit)
    }, [contactEdit])

    const onSubmit = (event) => {
        event.preventDefault();

        const contact = {
            ... contactEdit,
            firstName: formData.firstName,
            lastName: formData.lastName,
            phone: formData.phone
        }
        event.target.reset();
        onFormSubmit(contact);
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