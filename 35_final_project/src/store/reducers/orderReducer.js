import {
    ACTION_SET_ORDER_LIST,
    ACTION_ORDER_CREATE,
    ACTION_ORDER_DELETE,
    ACTION_ORDER_EDIT,
    ACTION_ORDER_TO_EDIT,
    ACTION_SET_LOADING,
    ACTION_SHOW_ERROR,
} from '../actions/orderAction';

const initialState = {
    list: [],
    orderToEdit: {},
    loading: false,
    error: '',
 }

export default function orderReducer (state = initialState, { type, payload }) {
    switch (type) {
        case ACTION_SET_ORDER_LIST: return setOrderList(state, payload)
        case ACTION_ORDER_CREATE: return createOrder(state, payload)
        case ACTION_ORDER_DELETE: return deleteOrder(state, payload)
        case ACTION_ORDER_EDIT: return editOrder(state, payload)
        case ACTION_ORDER_TO_EDIT: return setOrderToEdit(state, payload)
        case ACTION_SET_LOADING: return setLoading(state, payload)
        case ACTION_SHOW_ERROR: return showError(state, payload)
        default: return state
    }
    
}

function setOrderList (state, payload) {
    return { ...state, list: payload }
}

function createOrder (state, payload) {
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
 
function deleteOrder (state, payload) {
const newList = state.list.filter(order => order.id !== payload);

return { ...state, list: newList };
}

function editOrder (state, payload) {
const newList = state.list.map(orderItem => orderItem.id === payload.id ? payload : orderItem);

return { ...state, list: newList };
}

function setOrderToEdit (state, payload) {
return { ...state, orderToEdit: payload }
}

function setLoading (state, payload) {
return { ...state, loading: payload }
}

function showError (state, payload) {
return { ...state, error: payload }
}