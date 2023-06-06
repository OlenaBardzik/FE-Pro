import {SET_ALBUM_LIST} from '../actions/album.actions';

const initialState = {
    albums: []
 }

export default function albumReducer(state = initialState, { type, payload }) {
    switch (type) {
        case SET_ALBUM_LIST: return setAlbumList(state, payload);
        default: return state
     }
}

function setAlbumList(state, payload) {
    return {...state, albums: payload}
}
