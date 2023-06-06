import { ContactsApi } from '../../api/ContactsAPI';

export const ACTION_SET_CONTACT_LIST = 'setContactList';
export const ACTION_CONTACT_CREATE = 'contactCreate';
export const ACTION_CONTACT_REMOVE = 'contactRemove';
export const ACTION_CONTACT_EDIT = 'contactEdit';
export const ACTION_CONTACT_TO_EDIT = 'setContactToEdit';
export const ACTION_SET_LOADING = 'setLoading';
export const ACTION_SHOW_ERROR = 'showError';

export function fetchContacs () {
  return (dispatch) => {
    dispatch(showError(""));
    dispatch(setLoading(true));
    ContactsApi.getContactList()
      .then((newList) => {
        dispatch(setContactList(newList))  
      })
      .catch(() => {
        dispatch(showError("Cann't get contact list"));
      })
      .finally(() => {
        dispatch(setLoading(false))
      })
  }
}

export function requestCreateContact (contact) {
  return (dispatch) => {
    dispatch(showError(""));
    dispatch(setLoading(true))
    ContactsApi.createContact(contact)
      .then((newContact) => {
        dispatch(contactCreate(newContact))
      })
      .catch(() => {
        dispatch(showError("Cann't create new contact"));
      })
      .finally(() => {
        dispatch(setLoading(false))
      })
  }
}

export function requestRemoveContact (id) {
  return (dispatch) => {
    dispatch(showError(""));
    dispatch(setLoading(true))
    ContactsApi.removeContact(id)
      .then((deletedContact) => {
        dispatch(contactRemove(deletedContact.id))
      })
      .catch(() => {
        dispatch(showError("Cann't delete contact"));
      })
      .finally(() => {
        dispatch(setLoading(false))
      })
  }
}

export function requestUpdateContact (id, changes) {
  return (dispatch) => {
    dispatch(showError(""));
    dispatch(setLoading(true));
    ContactsApi.updateContact(id, changes)
      .then((updatedContact) => {
        dispatch(contactEdit(updatedContact))
      })
      .catch(() => {
        dispatch(showError("Cann't update contact"));
      })
      .finally(() => {
        dispatch(setLoading(false))
      })
  }
}

export function saveContact (contact) {
  return (dispatch) => {
    if (contact.id) {
      dispatch(requestUpdateContact(contact.id, contact))
    } else {
      dispatch(requestCreateContact(contact))
    }
  }
}

export function setContactList (list) {
  return { type: ACTION_SET_CONTACT_LIST, payload: list }
} 

export function contactCreate (contact) {
  return { type: ACTION_CONTACT_CREATE, payload: contact }
}

export function contactRemove (id) {
  return { type: ACTION_CONTACT_REMOVE, payload: id }
}

export function contactEdit (contact) {
  return { type: ACTION_CONTACT_EDIT, payload: contact }
}

export function setContactToEdit (contact) {
    return { type: ACTION_CONTACT_TO_EDIT, payload: contact }
}

export function setLoading (isLoading) {
  return { type: ACTION_SET_LOADING, payload: isLoading }
}

export function showError (error) {
  return { type: ACTION_SHOW_ERROR, payload: error }
}
