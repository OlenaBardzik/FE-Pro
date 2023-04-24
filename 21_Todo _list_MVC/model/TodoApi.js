class TodoApi {
    static API = "https://6426f471556bad2a5b5c3695.mockapi.io/todos/";

    static request(url = '', method = 'GET', body) {
        return fetch(TodoApi.API + url, {
            method,
            body: body ? JSON.stringify(body) : undefined,
            headers: {
              'Content-type': 'application/json',
            }
          })
          .then((res) => {
            if (res.ok) {
              return res.json()
            }
    
            throw new Error('Con not execute server request.');
          })
      }

    static getList() {
        return TodoApi.request()
            .catch(() => {
                throw new Error ("Cann't get todos")
            })
    }

    static create(todo) {
        return TodoApi.request("", "POST", todo)
            .catch(() => {
                throw new Error ("Cann't create todo")
            })
       
    }

    static delete(todoId) {
        return TodoApi.request(todoId, "DELETE")
            .catch(() => {
                throw new Error ("Cann't delete item")
            })
    }

    static update(id, updatedProperty) {
        return TodoApi.request(id, "PUT", updatedProperty)
            .catch(() => {
                throw new Error ("Cann't update item")
            })
    }
}