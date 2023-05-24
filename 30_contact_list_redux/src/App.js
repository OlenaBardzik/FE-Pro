import ContactForm from "./features/ContactForm";
import ContactTable from "./features/ContactTable";
import { useDispatch, useSelector } from 'react-redux';
import { contactCreate, contactRemove, contactEdit, setContactToEdit } from './store/actions/contactAction';

function App() {
  const list = useSelector(state => state.contact.list);
  const contactToEdit = useSelector(state => state.contact.contactToEdit);
  const dispatch = useDispatch();

  const onFormSubmit = (contact) => {
    if (!isContactValid(contact)) {
      showError("Data is not valid");
      return;
    }

    if (contact.id) {
      dispatch(contactEdit(contact))
      dispatch(setContactToEdit({}))
    } else {
      dispatch(contactCreate(contact))
    }
  }

  const onContactRemove = (id) => {
    dispatch(contactRemove(id))
  }

  const onContactEdit = (contact) => {
    dispatch(setContactToEdit(contact))
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
        contactEdit={contactToEdit}
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
