import { AppApi } from '../../api/api'; 

export const SET_ALBUM_LIST = 'SET_ALBUM_LIST';

export function fetchAlbums (userId) {
    return (dispatch) => {
        AppApi.getAllbums(userId)
            .then((albums) => {
                dispatch(setAlbums(albums))  
            })
    }
}

export function setAlbums (albums) {
    return { type: SET_ALBUM_LIST, payload: albums }
}
