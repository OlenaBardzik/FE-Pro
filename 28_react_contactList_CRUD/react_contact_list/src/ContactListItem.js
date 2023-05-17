export default function ContactListItem ({contact, onContactRemove, onContactEdit}) {
    const onDeleteBtnClick = () => {
        onContactRemove(contact.id)
    }

    const onEditBtnClick = () => {
        onContactEdit(contact)
    }

    return (
        <tr>
            <td>{contact.firstName}</td>
            <td>{contact.lastName}</td>
            <td>{contact.phone}</td>
            <td>
                <button onClick={onEditBtnClick}>Edit</button>
                <button onClick={onDeleteBtnClick}>Delete</button>
            </td>
        </tr>
    )
}