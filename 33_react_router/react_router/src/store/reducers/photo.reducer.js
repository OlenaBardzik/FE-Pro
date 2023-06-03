import {SET_PHOTO_LIST} from '../actions/photo.actions';

const initialState = {
    photos: []
 }

export default function albumReducer(state = initialState, { type, payload }) {
    switch (type) {
        case SET_PHOTO_LIST: return setPhotoList(state, payload);
        default: return state
     }
}

function setPhotoList(state, payload) {
    return {...state, photos: payload}
}