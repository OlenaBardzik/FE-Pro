import { useState } from 'react';
import ContactForm from "./ContactForm";
import ContactTable from "./ContactTable";
import { primaryList } from './data';


function App() {
  const [list, setList] = useState(primaryList);
  const [contactEdit, setContactEdit] = useState({});

  const onFormSubmit = (contact) => {
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

  const onContactRemove = (id) => {
    const newList = list.filter(contact => contact.id !== id);

    setList(newList);
  }

  const onContactEdit = (contact) => {
    setContactEdit(contact)
  }

  const isContactValid = (contact) => {
    return contact.firstName?.trim().length > 0 &&
      contact.lastName?.trim().length > 0 &&
      contact.phone?.toString().length > 0
  }

  const showError = (error) => {
    alert(error)
  }

  return (
    <div className="App">
      <ContactForm 
        onFormSubmit={onFormSubmit}
        contactEdit={contactEdit}
      />
      <ContactTable 
        list={list}
        onContactRemove={onContactRemove}
        onContactEdit={onContactEdit}
      />
    </div>
  );
}

export default App;
