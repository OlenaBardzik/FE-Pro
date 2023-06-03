import { AppApi } from '../../api/api'; 

export const SET_ALBUM_LIST = 'SET_ALBUM_LIST';
export const SET_ALBUM = 'SET_ALBUM';

export function fetchAlbums (userId) {
    return (dispatch) => {
        AppApi.getAllbums(userId)
            .then((albums) => {
                dispatch(setAlbums(albums))  
            })
    }
}

export function fetchAlbum (userId, albumId) {
    return (dispatch) => {
        AppApi.getAllbum(userId, albumId)
            .then((album) => {
                dispatch(setAlbum(album))  
            })
    }
}

export function setAlbums (albums) {
    return { type: SET_ALBUM_LIST, payload: albums }
}

export function setAlbum (album) {
    return { type: SET_ALBUM, payload: album }
}