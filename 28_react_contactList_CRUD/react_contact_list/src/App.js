import { useState } from 'react';
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";

const primaryList = [{
  id: '1',
  firstName: 'Talylor',
  lastName: 'Smith',
  phone: 123456789
}, {
  id: '2',
  firstName: 'Barbara',
  lastName: 'Adams',
  phone: 987654321
}, {
  id: '3',
  firstName: 'Tony',
  lastName: 'Paulson',
  phone: 132465879
}, {
  id: '4',
  firstName: 'Dee',
  lastName: 'Townsend',
  phone: 543219876
}]

function App() {
  const [list, setList] = useState(primaryList);
  const [contactEdit, setContactEdit] = useState({});

  function onFormSubmit (contact) {
    if (!isContactValid(contact)) {
      showError("Data is not valid");
      return;
    }

    if (contact.id) {
      const newList = list
        .map(contactItem => contactItem.id === contact.id ? contact : contactItem);

      setList(newList)
    } else {
      const contactFromServer = {
        ... contact,
        id: Math.random()
      }

      setList([... list, contactFromServer]);
    } 
    setContactEdit({});
  }

  function onContactRemove (id) {
    const newList = list.filter(contact => contact.id !== id);

    setList(newList);
  }

  function onContactEdit (contact) {
    setContactEdit(contact)
  }

  function isContactValid(contact) {
    return contact.firstName?.trim().length > 0 &&
      contact.lastName?.trim().length > 0 &&
      contact.phone?.toString().length > 0
  }

  function showError(error) {
    alert(error)
  }

  return (
    <div className="App">
      <ContactForm 
        onFormSubmit={onFormSubmit}
        contactEdit={contactEdit}
      />
      <ContactList 
        list={list}
        onContactRemove={onContactRemove}
        onContactEdit={onContactEdit}
      />
    </div>
  );
}

export default App;
