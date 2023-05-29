import { ContactsApi } from '../../api/ContactsAPI'; 

export const ACTION_SET_CONTACT_LIST = 'setContactList';
export const ACTION_CONTACT_CREATE = 'contactCreate';
export const ACTION_CONTACT_REMOVE = 'contactRemove';
export const ACTION_CONTACT_EDIT = 'contactEdit';
export const ACTION_CONTACT_TO_EDIT = 'setContactToEdit';

export function fetchContacs () {
  return (dispatch) => {
    ContactsApi.getContactList()
      .then((newList) => {
        dispatch(setContactList(newList))
      })
  }
}

export function requestCreateContact (contact) {
  return (dispatch) => {
    ContactsApi.createContact(contact)
      .then((newContact) => {
        dispatch(contactCreate(newContact))
      })
  }
}

export function requestRemoveContact (id) {
  return (dispatch) => {
    ContactsApi.removeContact(id)
      .then((deletedContact) => {
        dispatch(contactRemove(deletedContact.id))
      })
  }
}

export function requestUpdateContact (id, changes) {
  return (dispatch) => {
    ContactsApi.updateContact(id, changes)
      .then((updatedContact) => {
        dispatch(contactEdit(updatedContact))
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