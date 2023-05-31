import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacs, requestRemoveContact, setContactToEdit } from '../store/actions/contactAction'
import ContactListItem from "./ContactListItem";
import Loading from "./Loading";
import Error from "./Error";

export default function ContactList () {
    const list = useSelector(state => state.contact.list);
    const loading = useSelector(state => state.contact.loading);
    const error = useSelector(state => state.contact.error)
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

    return  (<>{
        loading 
            ? <Loading /> 
            : error && error.length > 0 
                ? <Error errorMessage={error} /> 
                : list.map(contact => (
                    <ContactListItem
                        key={contact.id}
                        contact={contact}
                        onContactRemove={onContactRemove}
                        onContactEdit={onContactEdit}
                    />
                ))
    }</>)
}