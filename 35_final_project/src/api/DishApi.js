import { Api } from "./Api";

export class DishApi extends Api {

    static endpoint = "dishes";
    
    static getDishList() {
        return Api.request(DishApi.endpoint)
            .catch(() => {
                throw new Error ("Cann't get dish list from server");
            })
    }

    static createDish (dishData) {
        return Api.request(DishApi.endpoint, "POST", dishData)
            .catch(() => {
                throw new Error ("Cann't creat a dish on server");
            })   
    }

    static updateDish (dishId, changes) {
        return Api.request(`${DishApi.endpoint}/${dishId}`, "PUT", changes)
            .catch(() => {
                throw new Error ("Cann't update item");
            })    
    }

    static deleteDish (dishId) {
        return Api.request(`${DishApi.endpoint}/${dishId}`, "DELETE")
            .catch(() => {
                throw new Error ("Cann't delete a dish");
            })     
    }
}