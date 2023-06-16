import { combineReducers } from 'redux';
import waiterReducer from './waiterReducer';
import tableReducer from './tableReducer';
import dishReducer from './dishReducer';
import orderReducer from './orderReducer';

export const rootReducer = combineReducers({
   waiter: waiterReducer,
   table: tableReducer,
   dish: dishReducer,
   order: orderReducer,
});