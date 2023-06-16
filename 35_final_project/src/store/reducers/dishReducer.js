import {
    ACTION_SET_DISH_LIST,
    ACTION_DISH_CREATE,
    ACTION_DISH_DELETE,
    ACTION_DISH_EDIT,
    ACTION_DISH_TO_EDIT,
    ACTION_SET_LOADING,
    ACTION_SHOW_ERROR,
} from '../actions/dishAction';

const initialState = {
    list: [],
    dishToEdit: {},
    loading: false,
    error: '',
 }

export default function dishReducer (state = initialState, { type, payload }) {
    switch (type) {
        case ACTION_SET_DISH_LIST: return setDishList(state, payload)
        case ACTION_DISH_CREATE: return createDish(state, payload)
        case ACTION_DISH_DELETE: return deleteDish(state, payload)
        case ACTION_DISH_EDIT: return editDish(state, payload)
        case ACTION_DISH_TO_EDIT: return setDishToEdit(state, payload)
        case ACTION_SET_LOADING: return setLoading(state, payload)
        case ACTION_SHOW_ERROR: return showError(state, payload)
        default: return state
    }
    
}

function setDishList (state, payload) {
    return { ...state, list: payload }
}

function createDish (state, payload) {
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
 
function deleteDish (state, payload) {
const newList = state.list.filter(dish => dish.id !== payload);

return { ...state, list: newList };
}

function editDish (state, payload) {
const newList = state.list.map(dishItem => dishItem.id === payload.id ? payload : dishItem);

return { ...state, list: newList };
}

function setDishToEdit (state, payload) {
return { ...state, dishToEdit: payload }
}

function setLoading (state, payload) {
return { ...state, loading: payload }
}

function showError (state, payload) {
return { ...state, error: payload }
}