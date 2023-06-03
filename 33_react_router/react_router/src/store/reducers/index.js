import { combineReducers } from 'redux';
import userReducer from './user.reducer';
import albumReducer from './album.reducer';
import photoReducer from './photo.reducer';

export const rootReducer = combineReducers({
   user: userReducer,
   album: albumReducer,
   photo: photoReducer
});
