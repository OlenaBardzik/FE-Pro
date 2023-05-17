import ContactListItem from "./ContactListItem";

export default function ContactList ({list, onContactRemove, onContactEdit}) {
   
    return (
        <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Phone</th>
                    <th>Action</th>
                </tr>
            </thead>
        <tbody id="tableBody">
            {list.map(contact => (
                <ContactListItem
                    key={contact.id}
                    contact={contact}
                    onContactRemove={onContactRemove}
                    onContactEdit={onContactEdit}
                />
            ))}
        </tbody>
    </table>
    )
}