import {primaryList} from './data';
import {
   ACTION_CONTACT_CREATE,
   ACTION_CONTACT_REMOVE,
   ACTION_CONTACT_EDIT,
   ACTION_CONTACT_TO_EDIT
} from '../actions/contactAction';

const initialState = {
   list: primaryList,
   contactToEdit: {}
}

export default function contactReducer(state = initialState, { type, payload }) {
   switch (type) {
     case ACTION_CONTACT_CREATE: return creatContact(state, payload)
     case ACTION_CONTACT_REMOVE: return removeContact(state, payload)
     case ACTION_CONTACT_EDIT: return editContact(state, payload)
     case ACTION_CONTACT_TO_EDIT: return setContactToEdit(state, payload)
     default: return state
   }
 }

function creatContact (state, payload) {
   return {
      ...state,
      list: [
         ...state.list,
         {
            ...payload,
            id: Math.random()
         },
      ],
      }
}

function removeContact (state, payload) {
   const newList = state.list.filter(contact => contact.id !== payload);
 
   return { ...state, list: newList };
}

function editContact (state, payload) {
   const newList = state.list.map(contactItem => contactItem.id === payload.id ? payload : contactItem);

   return { ...state, list: newList };
}

function setContactToEdit (state, payload) {
   return { ...state, contactToEdit: payload }
}