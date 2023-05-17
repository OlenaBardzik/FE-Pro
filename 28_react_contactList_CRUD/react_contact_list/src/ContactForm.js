import { useState, useEffect } from "react";

export default function ContactForm ({ onFormSubmit, contactEdit }) {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: ""
    });

    useEffect(() => {
        setFormData(contactEdit)
    }, [contactEdit])

    function onSubmit (event) {
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
            <input type="text" 
                   id="nameInput" 
                   placeholder="First Name" 
                   value={formData.firstName} 
                   onChange={(event) => {setFormData({...formData, firstName: event.target.value})}}/>
            <input type="text" 
                   id="lastnameInput" 
                   placeholder="Last Name" 
                   value={formData.lastName} 
                   onChange={(event) => {setFormData({...formData, lastName: event.target.value})}}/>
            <input type="text" 
                   id="phoneInput" 
                   placeholder="Phone" 
                   value={formData.phone} 
                   onChange={(event) => {setFormData({...formData, phone: event.target.value})}}/>
            <button type="submit">Save Contact</button>
        </form>
    )
}