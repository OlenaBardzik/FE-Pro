import { createSelector } from 'reselect';

export const selectWaiterList = state => state.waiter.list;
export const selectWaiterToEdit = state => state.waiter.waiterToEdit;
export const selectWaiterLoading = state => state.waiter.loading;
export const selectWaiterError = state => state.waiter.error;

export const selectTableList = state => state.table.list;
export const selectTableToEdit = state => state.table.tableToEdit;
export const selectTableLoading = state => state.table.loading;
export const selectTableError = state => state.table.error;

export const selectDishList = state => state.dish.list;
export const selectDishToEdit = state => state.dish.dishToEdit;
export const selectDishLoading = state => state.dish.loading;
export const selectDishError = state => state.dish.error;

export const selectOrderList = state => state.order.list;
export const selectOrderToEdit = state => state.order.orderToEdit;
export const selectOrderLoading = state => state.order.loading;
export const selectOrderError = state => state.order.error;
export const selectOrderListExtended = createSelector(
    selectTableList,
    selectWaiterList,
    selectDishList,
    selectOrderList,
    (tableList, waiterList, disheList, orderList) => {
        return orderList.map(order => {
            const table = tableList.find(tableItem => tableItem.id === order.tableId);
            const waiter = waiterList.find(waiterItem => waiterItem.id === order.waiterId);
            const dishes = order.dishes.map(orderDish => {
                const dish = disheList.find(dishItem => dishItem.id === orderDish.dishId);
                return {...orderDish, dish}
            })
            return {...order, table, waiter, dishes}
        })
    }
);
