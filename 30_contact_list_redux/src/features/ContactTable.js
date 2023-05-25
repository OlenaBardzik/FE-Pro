import ContactList from "./ContactList";

export default function ContactTable ({list, onContactRemove, onContactEdit}) {
   
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
                <ContactList list={list} 
                    onContactRemove={onContactRemove} 
                    onContactEdit={onContactEdit}/>
            </tbody>
        </table>
    )
}