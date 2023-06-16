import { Api } from "./Api";

export class TableApi extends Api {

    static endpoint = "tables";
    
    static getTableList() {
        return Api.request(TableApi.endpoint)
            .catch(() => {
                throw new Error ("Cann't get table list from server");
            })
    }

    static createTable (tableData) {
        return Api.request(TableApi.endpoint, "POST", tableData)
            .catch(() => {
                throw new Error ("Cann't creat table on server");
            })   
    }

    static updateTable (tableId, changes) {
        return Api.request(`${TableApi.endpoint}/${tableId}`, "PUT", changes)
            .catch(() => {
                throw new Error ("Cann't update table");
            })    
    }

    static deleteTable (tableId) {
        return Api.request(`${TableApi.endpoint}/${tableId}`, "DELETE")
            .catch(() => {
                throw new Error ("Cann't delete table");
            })     
    }
}