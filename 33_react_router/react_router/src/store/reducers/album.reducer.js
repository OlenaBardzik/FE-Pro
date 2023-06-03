import {SET_ALBUM_LIST, SET_ALBUM} from '../actions/album.actions';

const initialState = {
    albums: [],
    album: null
 }

export default function albumReducer(state = initialState, { type, payload }) {
    switch (type) {
        case SET_ALBUM_LIST: return setAlbumList(state, payload);
        case SET_ALBUM: return setAlbum(state, payload);
        default: return state
     }
}

function setAlbumList(state, payload) {
    return {...state, albums: payload}
}

function setAlbum(state, payload) {
    return {...state, album: payload}
}