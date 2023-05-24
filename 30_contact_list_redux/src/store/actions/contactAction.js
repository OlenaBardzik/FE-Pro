export const ACTION_CONTACT_CREATE = 'contactCreate';
export const ACTION_CONTACT_REMOVE = 'contactRemove';
export const ACTION_CONTACT_EDIT = 'contactEdit';
export const ACTION_CONTACT_TO_EDIT = 'setContactToEdit';

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