import { WaiterApi } from "../../api/WaiterApi";


export const ACTION_SET_WAITER_LIST = 'setWaiterList';
export const ACTION_WAITER_CREATE = 'waiterCreate';
export const ACTION_WAITER_DELETE = 'waiterDelete';
export const ACTION_WAITER_EDIT = 'waiterEdit';
export const ACTION_WAITER_TO_EDIT = 'setWaiterToEdit';
export const ACTION_SET_LOADING = 'setLoading';
export const ACTION_SHOW_ERROR = 'showError';

export function fetchWaiters () {
    return (dispatch) => {
      dispatch(showError(""));
      dispatch(setLoading(true));
      WaiterApi.getWaiterList()
        .then((newList) => {
          dispatch(setWaiterList(newList))  
        })
        .catch(() => {
          dispatch(showError("Cann't get waiter list"));
        })
        .finally(() => {
          dispatch(setLoading(false))
        })
    }
  }
  
  export function requestCreateWaiter (waiter) {
    return (dispatch) => {
      dispatch(showError(""));
      dispatch(setLoading(true))
      WaiterApi.createWaiter(waiter)
        .then((newWaiter) => {
          dispatch(waiterCreate(newWaiter))
        })
        .catch(() => {
          dispatch(showError("Cann't create new waiter"));
        })
        .finally(() => {
          dispatch(setLoading(false))
        })
    }
  }
  
  export function requestDeleteWaiter (id) {
    return (dispatch) => {
      dispatch(showError(""));
      dispatch(setLoading(true))
      WaiterApi.deleteWaiter(id)
        .then(() => {
          dispatch(waiterDelete(id))
        })
        .catch(() => {
          dispatch(showError("Cann't delete waiter"));
        })
        .finally(() => {
          dispatch(setLoading(false))
        })
    }
  }
  
  export function requestUpdateWaiter (id, changes) {
    return (dispatch) => {
      dispatch(showError(""));
      dispatch(setLoading(true));
      WaiterApi.updateWaiter(id, changes)
        .then((updatedWaiter) => {
          dispatch(waiterEdit(updatedWaiter))
        })
        .catch(() => {
          dispatch(showError("Cann't update waiter"));
        })
        .finally(() => {
          dispatch(setLoading(false))
        })
    }
  }
  
  export function saveWaiter (waiter) {
    return (dispatch) => {
      if (waiter.id) {
        dispatch(requestUpdateWaiter(waiter.id, waiter))
      } else {
        dispatch(requestCreateWaiter(waiter))
      }
    }
  }
  
  export function setWaiterList (list) {
    return { type: ACTION_SET_WAITER_LIST, payload: list }
  } 
  
  export function waiterCreate (waiter) {
    return { type: ACTION_WAITER_CREATE, payload: waiter }
  }
  
  export function waiterDelete (id) {
    return { type: ACTION_WAITER_DELETE, payload: id }
  }
  
  export function waiterEdit (waiter) {
    return { type: ACTION_WAITER_EDIT, payload: waiter }
  }
  
  export function setWaiterToEdit (waiter) {
      return { type: ACTION_WAITER_TO_EDIT, payload: waiter }
  }
  
  export function setLoading (isLoading) {
    return { type: ACTION_SET_LOADING, payload: isLoading }
  }
  
  export function showError (error) {
    return { type: ACTION_SHOW_ERROR, payload: error }
  }