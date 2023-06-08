import { AppApi } from '../../api/api'; 

export const SET_PHOTO_LIST = 'SET_PHOTO_LIST';

export function fetchPhotos (albumId) {
    return (dispatch) => {
        AppApi.getPhotos(albumId)
            .then((albums) => {
                dispatch(setPhotos(albums))  
            })
    }
}

export function setPhotos (photos) {
    return { type: SET_PHOTO_LIST, payload: photos }
}
