import { Api } from "./Api";

export class OrderApi extends Api {

    static endpoint = "orders";
    
    static getOrderList() {
        return Api.request(OrderApi.endpoint)
            .catch(() => {
                throw new Error ("Cann't get order list from server");
            })
    }

    static createOrder (orderData) {
        return Api.request(OrderApi.endpoint, "POST", orderData)
            .catch(() => {
                throw new Error ("Cann't creat order on server");
            })   
    }

    static updateOrder (orderId, changes) {
        return Api.request(`${OrderApi.endpoint}/${orderId}`, "PUT", changes)
            .catch(() => {
                throw new Error ("Cann't update order");
            })    
    }

    static deleteOrder (orderId) {
        return Api.request(`${OrderApi.endpoint}/${orderId}`, "DELETE")
            .catch(() => {
                throw new Error ("Cann't delete order");
            })     
    }
}