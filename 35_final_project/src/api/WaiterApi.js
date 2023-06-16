import { Api } from "./Api";

export class WaiterApi extends Api {

    static endpoint = "waiters";
    
    static getWaiterList() {
        return Api.request(WaiterApi.endpoint)
            .catch(() => {
                throw new Error ("Cann't get waiter list from server");
            })
    }

    static createWaiter (waiterData) {
        return Api.request(WaiterApi.endpoint, "POST", waiterData)
            .catch(() => {
                throw new Error ("Cann't creat waiter on server");
            })   
    }

    static updateWaiter (waiterId, changes) {
        return Api.request(`${WaiterApi.endpoint}/${waiterId}`, "PUT", changes)
            .catch(() => {
                throw new Error ("Cann't update item");
            })    
    }

    static deleteWaiter (waiterId) {
        return Api.request(`${WaiterApi.endpoint}/${waiterId}`, "DELETE")
            .catch(() => {
                throw new Error ("Cann't delete waiter");
            })     
    }
}