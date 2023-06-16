import { TableApi } from "../../api/TableApi";


export const ACTION_SET_TABLE_LIST = 'setTableList';
export const ACTION_TABLE_CREATE = 'tableCreate';
export const ACTION_TABLE_DELETE = 'tableDelete';
export const ACTION_TABLE_EDIT = 'tableEdit';
export const ACTION_TABLE_TO_EDIT = 'setTableToEdit';
export const ACTION_SET_LOADING = 'setLoading';
export const ACTION_SHOW_ERROR = 'showError';

export function fetchTables () {
    return (dispatch) => {
      dispatch(showError(""));
      dispatch(setLoading(true));
      TableApi.getTableList()
        .then((newList) => {
          dispatch(setTableList(newList))  
        })
        .catch(() => {
          dispatch(showError("Cann't get table list"));
        })
        .finally(() => {
          dispatch(setLoading(false))
        })
    }
  }
  
  export function requestCreateTable (table) {
    return (dispatch) => {
      dispatch(showError(""));
      dispatch(setLoading(true))
      TableApi.createTable(table)
        .then((newTable) => {
          dispatch(tableCreate(newTable))
        })
        .catch(() => {
          dispatch(showError("Cann't create new table"));
        })
        .finally(() => {
          dispatch(setLoading(false))
        })
    }
  }
  
  export function requestDeleteTable (id) {
    return (dispatch) => {
      dispatch(showError(""));
      dispatch(setLoading(true))
      TableApi.deleteTable(id)
        .then(() => {
          dispatch(tableDelete(id))
        })
        .catch(() => {
          dispatch(showError("Cann't delete table"));
        })
        .finally(() => {
          dispatch(setLoading(false))
        })
    }
  }
  
  export function requestUpdateTable (id, changes) {
    return (dispatch) => {
      dispatch(showError(""));
      dispatch(setLoading(true));
      TableApi.updateTable(id, changes)
        .then((updatedTable) => {
          dispatch(tableEdit(updatedTable))
        })
        .catch(() => {
          dispatch(showError("Cann't update table"));
        })
        .finally(() => {
          dispatch(setLoading(false))
        })
    }
  }
  
  export function saveTable (table) {
    return (dispatch) => {
      if (table.id) {
        dispatch(requestUpdateTable(table.id, table))
      } else {
        dispatch(requestCreateTable(table))
      }
    }
  }
  
  export function setTableList (list) {
    return { type: ACTION_SET_TABLE_LIST, payload: list }
  } 
  
  export function tableCreate (table) {
    return { type: ACTION_TABLE_CREATE, payload: table }
  }
  
  export function tableDelete (id) {
    return { type: ACTION_TABLE_DELETE, payload: id }
  }
  
  export function tableEdit (table) {
    return { type: ACTION_TABLE_EDIT, payload: table }
  }
  
  export function setTableToEdit (table) {
      return { type: ACTION_TABLE_TO_EDIT, payload: table }
  }
  
  export function setLoading (isLoading) {
    return { type: ACTION_SET_LOADING, payload: isLoading }
  }
  
  export function showError (error) {
    return { type: ACTION_SHOW_ERROR, payload: error }
  }