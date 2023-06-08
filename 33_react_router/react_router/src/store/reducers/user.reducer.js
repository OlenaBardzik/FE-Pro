import {SET_USER_LIST} from '../actions/user.actions';

const initialState = {
    users: []
 }

export default function userReducer(state = initialState, { type, payload }) {
    switch (type) {
        case SET_USER_LIST: return setUserList(state, payload);
        default: return state
     }
}

function setUserList(state, payload) {
    return {...state, users: payload}
}