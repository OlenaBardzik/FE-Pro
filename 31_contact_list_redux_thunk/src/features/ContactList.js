import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacs, requestRemoveContact, setContactToEdit } from '../store/actions/contactAction'
import ContactListItem from "./ContactListItem";

export default function ContactList () {
    const list = useSelector(state => state.contact.list);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacs())
      }, [])

    const onContactRemove = (id) => {
        dispatch(requestRemoveContact(id))
    }

    const onContactEdit = (contact) => {
        dispatch(setContactToEdit(contact))
    }

    return list.map(contact => (
        <ContactListItem
            key={contact.id}
            contact={contact}
            onContactRemove={onContactRemove}
            onContactEdit={onContactEdit}
        />
    ))
}