import { AppApi } from '../../api/api'; 

export const SET_USER_LIST = 'GET_USER_LIST';

export function fetchUsers () {
    return (dispatch) => {
        AppApi.getUsers()
            .then((userList) => {
                dispatch(setUsers(userList))  
            })
    }
}

export function setUsers (users) {
    return { type: SET_USER_LIST, payload: users }
}