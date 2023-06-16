import { fetchWaiters } from "./waiterAction";
import { fetchTables } from "./tableAction";
import { fetchDishes } from "./dishAction";
import { fetchOrders } from "./orderAction";

export function fetchDataForOrder () {
    return (dispatch) => {
        Promise.all([
            dispatch(fetchTables()),
            dispatch(fetchWaiters()),
            dispatch(fetchDishes()),
            dispatch(fetchOrders())
        ])
    }
}