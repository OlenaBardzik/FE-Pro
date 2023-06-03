import {SET_USER_LIST, SET_USER} from '../actions/user.actions';

const initialState = {
    users: [],
    user: null
 }

export default function userReducer(state = initialState, { type, payload }) {
    switch (type) {
        case SET_USER_LIST: return setUserList(state, payload);
        case SET_USER: return setUser(state, payload);
        default: return state
     }
}

function setUserList(state, payload) {
    return {...state, users: payload}
}

function setUser(state, payload) {
    return {...state, user: payload}
}