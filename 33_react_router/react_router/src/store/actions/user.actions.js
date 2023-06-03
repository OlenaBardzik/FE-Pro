import { AppApi } from '../../api/api'; 

export const SET_USER_LIST = 'GET_USER_LIST';
export const SET_USER = 'GET_USER';

export function fetchUsers () {
    return (dispatch) => {
        AppApi.getUsers()
            .then((userList) => {
                dispatch(setUsers(userList))  
            })
    }
}

export function fetchUser (userId) {
    return (dispatch) => {
        AppApi.getUser(userId)
            .then((user) => {
                dispatch(setUser(user))  
            })
    }
}

export function setUsers (users) {
    return { type: SET_USER_LIST, payload: users }
}

export function setUser (user) {
    return { type: SET_USER, payload: user }
}