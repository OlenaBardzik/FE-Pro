import {
    ACTION_SET_WAITER_LIST,
    ACTION_WAITER_CREATE,
    ACTION_WAITER_DELETE,
    ACTION_WAITER_EDIT,
    ACTION_SET_LOADING,
    ACTION_SHOW_ERROR,
    ACTION_WAITER_TO_EDIT,
} from '../actions/waiterAction';

const initialState = {
    list: [],
    waiterToEdit: {},
    loading: false,
    error: '',
 }

export default function waiterReducer (state = initialState, { type, payload }) {
    switch (type) {
        case ACTION_SET_WAITER_LIST: return setWaiterList(state, payload)
        case ACTION_WAITER_CREATE: return createWaiter(state, payload)
        case ACTION_WAITER_DELETE: return deleteWaiter(state, payload)
        case ACTION_WAITER_EDIT: return editWaiter(state, payload)
        case ACTION_WAITER_TO_EDIT: return setWaiterToEdit(state, payload)
        case ACTION_SET_LOADING: return setLoading(state, payload)
        case ACTION_SHOW_ERROR: return showError(state, payload)
        default: return state
    }
    
}

function setWaiterList (state, payload) {
    return { ...state, list: payload }
}

function createWaiter (state, payload) {
    return {
       ...state,
       list: [
          ...state.list,
          {
             ...payload,
          },
       ]
       }
}
 
function deleteWaiter (state, payload) {
const newList = state.list.filter(waiter => waiter.id !== payload);

return { ...state, list: newList };
}

function editWaiter (state, payload) {
const newList = state.list.map(waiterItem => waiterItem.id === payload.id ? payload : waiterItem);

return { ...state, list: newList };
}

function setWaiterToEdit (state, payload) {
return { ...state, waiterToEdit: payload }
}

function setLoading (state, payload) {
return { ...state, loading: payload }
}

function showError (state, payload) {
return { ...state, error: payload }
}