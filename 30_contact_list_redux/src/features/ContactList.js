import ContactListItem from "./ContactListItem";

export default function ContactList ({list, onContactRemove, onContactEdit}) {
    if (!list.length) return null;

    return list.map(contact => (
        <ContactListItem
            key={contact.id}
            contact={contact}
            onContactRemove={onContactRemove}
            onContactEdit={onContactEdit}
        />
    ))
}