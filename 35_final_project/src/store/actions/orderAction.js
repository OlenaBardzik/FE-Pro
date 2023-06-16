import { OrderApi } from "../../api/OrderApi";


export const ACTION_SET_ORDER_LIST = 'setOrderList';
export const ACTION_ORDER_CREATE = 'orderCreate';
export const ACTION_ORDER_DELETE = 'orderDelete';
export const ACTION_ORDER_EDIT = 'orderEdit';
export const ACTION_ORDER_TO_EDIT = 'setOrderToEdit';
export const ACTION_SET_LOADING = 'setLoading';
export const ACTION_SHOW_ERROR = 'showError';

export function fetchOrders () {
    return (dispatch) => {
      dispatch(showError(""));
      dispatch(setLoading(true));
      OrderApi.getOrderList()
        .then((newList) => {
          dispatch(setOrderList(newList))  
        })
        .catch(() => {
          dispatch(showError("Cann't get order list"));
        })
        .finally(() => {
          dispatch(setLoading(false))
        })
    }
  }
  
  export function requestCreateOrder (order) {
    return (dispatch) => {
      dispatch(showError(""));
      dispatch(setLoading(true))
      OrderApi.createOrder({...order, id: Date.now()})
        .then((newOrder) => {
          dispatch(orderCreate(newOrder))
        })
        .catch(() => {
          dispatch(showError("Cann't create new order"));
        })
        .finally(() => {
          dispatch(setLoading(false))
        })
    }
  }
  
  export function requestDeleteOrder (id) {
    return (dispatch) => {
      dispatch(showError(""));
      dispatch(setLoading(true))
      OrderApi.deleteOrder(id)
        .then(() => {
          dispatch(orderDelete(id))
        })
        .catch(() => {
          dispatch(showError("Cann't delete order"));
        })
        .finally(() => {
          dispatch(setLoading(false))
        })
    }
  }
  
  export function requestUpdateOrder (id, changes) {
    return (dispatch) => {
      dispatch(showError(""));
      dispatch(setLoading(true));
      OrderApi.updateOrder(id, changes)
        .then((updatedOrder) => {
          dispatch(orderEdit(updatedOrder))
        })
        .catch(() => {
          dispatch(showError("Cann't update order"));
        })
        .finally(() => {
          dispatch(setLoading(false))
        })
    }
  }
  
  export function saveOrder (order) {
    return (dispatch) => {
      if (order.id) {
        dispatch(requestUpdateOrder(order.id, order))
      } else {
        dispatch(requestCreateOrder(order))
      }
    }
  }
  
  export function setOrderList (list) {
    return { type: ACTION_SET_ORDER_LIST, payload: list }
  } 
  
  export function orderCreate (order) {
    return { type: ACTION_ORDER_CREATE, payload: order }
  }
  
  export function orderDelete (id) {
    return { type: ACTION_ORDER_DELETE, payload: id }
  }
  
  export function orderEdit (order) {
    return { type: ACTION_ORDER_EDIT, payload: order }
  }
  
  export function setOrderToEdit (order) {
      return { type: ACTION_ORDER_TO_EDIT, payload: order }
  }
  
  export function setLoading (isLoading) {
    return { type: ACTION_SET_LOADING, payload: isLoading }
  }
  
  export function showError (error) {
    return { type: ACTION_SHOW_ERROR, payload: error }
  }