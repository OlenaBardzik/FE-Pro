import { DishApi } from "../../api/DishApi";


export const ACTION_SET_DISH_LIST = 'setDishList';
export const ACTION_DISH_CREATE = 'dishCreate';
export const ACTION_DISH_DELETE = 'dishDelete';
export const ACTION_DISH_EDIT = 'dishEdit';
export const ACTION_DISH_TO_EDIT = 'setDishToEdit';
export const ACTION_SET_LOADING = 'setLoading';
export const ACTION_SHOW_ERROR = 'showError';

export function fetchDishes () {
    return (dispatch) => {
      dispatch(showError(""));
      dispatch(setLoading(true));
      DishApi.getDishList()
        .then((newList) => {
          dispatch(setDishList(newList))  
        })
        .catch(() => {
          dispatch(showError("Cann't get dish list"));
        })
        .finally(() => {
          dispatch(setLoading(false))
        })
    }
  }
  
  export function requestCreateDish (dish) {
    return (dispatch) => {
      dispatch(showError(""));
      dispatch(setLoading(true))
      DishApi.createDish(dish)
        .then((newDish) => {
          dispatch(dishCreate(newDish))
        })
        .catch(() => {
          dispatch(showError("Cann't create new dish"));
        })
        .finally(() => {
          dispatch(setLoading(false))
        })
    }
  }
  
  export function requestDeleteDish (id) {
    return (dispatch) => {
      dispatch(showError(""));
      dispatch(setLoading(true))
      DishApi.deleteDish(id)
        .then(() => {
          dispatch(dishDelete(id))
        })
        .catch(() => {
          dispatch(showError("Cann't delete dish"));
        })
        .finally(() => {
          dispatch(setLoading(false))
        })
    }
  }
  
  export function requestUpdateDish (id, changes) {
    return (dispatch) => {
      dispatch(showError(""));
      dispatch(setLoading(true));
      DishApi.updateDish(id, changes)
        .then((updatedDish) => {
          dispatch(dishEdit(updatedDish))
        })
        .catch(() => {
          dispatch(showError("Cann't update dish"));
        })
        .finally(() => {
          dispatch(setLoading(false))
        })
    }
  }
  
  export function saveDish (dish) {
    return (dispatch) => {
      if (dish.id) {
        dispatch(requestUpdateDish(dish.id, dish))
      } else {
        dispatch(requestCreateDish(dish))
      }
    }
  }
  
  export function setDishList (list) {
    return { type: ACTION_SET_DISH_LIST, payload: list }
  } 
  
  export function dishCreate (dish) {
    return { type: ACTION_DISH_CREATE, payload: dish }
  }
  
  export function dishDelete (id) {
    return { type: ACTION_DISH_DELETE, payload: id }
  }
  
  export function dishEdit (dish) {
    return { type: ACTION_DISH_EDIT, payload: dish }
  }
  
  export function setDishToEdit (dish) {
      return { type: ACTION_DISH_TO_EDIT, payload: dish }
  }
  
  export function setLoading (isLoading) {
    return { type: ACTION_SET_LOADING, payload: isLoading }
  }
  
  export function showError (error) {
    return { type: ACTION_SHOW_ERROR, payload: error }
  }