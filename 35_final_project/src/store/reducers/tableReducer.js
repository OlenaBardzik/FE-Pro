import {
    ACTION_SET_TABLE_LIST,
    ACTION_TABLE_CREATE,
    ACTION_TABLE_DELETE,
    ACTION_TABLE_EDIT,
    ACTION_TABLE_TO_EDIT,
    ACTION_SET_LOADING,
    ACTION_SHOW_ERROR,
} from '../actions/tableAction';

const initialState = {
    list: [],
    tableToEdit: {},
    loading: false,
    error: '',
 }

export default function tableReducer (state = initialState, { type, payload }) {
    switch (type) {
        case ACTION_SET_TABLE_LIST: return setTableList(state, payload)
        case ACTION_TABLE_CREATE: return createTable(state, payload)
        case ACTION_TABLE_DELETE: return deleteTable(state, payload)
        case ACTION_TABLE_EDIT: return editTable(state, payload)
        case ACTION_TABLE_TO_EDIT: return setTableToEdit(state, payload)
        case ACTION_SET_LOADING: return setLoading(state, payload)
        case ACTION_SHOW_ERROR: return showError(state, payload)
        default: return state
    }
    
}

function setTableList (state, payload) {
    return { ...state, list: payload }
}

function createTable (state, payload) {
    return {
       ...state,
       list: [
          ...state.list,
          {
             ...payload,
          },
       ]
       }
}
 
function deleteTable (state, payload) {
const newList = state.list.filter(table => table.id !== payload);

return { ...state, list: newList };
}

function editTable (state, payload) {
const newList = state.list.map(tableItem => tableItem.id === payload.id ? payload : tableItem);

return { ...state, list: newList };
}

function setTableToEdit (state, payload) {
return { ...state, tableToEdit: payload }
}

function setLoading (state, payload) {
return { ...state, loading: payload }
}

function showError (state, payload) {
return { ...state, error: payload }
}