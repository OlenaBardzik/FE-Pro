class TodoApi {
    static API = "https://6426f471556bad2a5b5c3695.mockapi.io/todos";

    static getList() {
        return fetch(TodoApi.API)
            .then((responce) => {
                if (responce.ok) {
                    return responce.json()
                }

                throw new Error ("Cann't get todos list")
            })
    }

    static create(todo) {
        return fetch(TodoApi.API, {
            method: "POST",
            body: JSON.stringify(todo),
            headers: {
                "Content-type": "application/json",
            }
        })
        .then((responce) => {
            if (responce.ok) {
                return responce.json()
            }

            throw new Error ("Cann't create todo")
        })
    }

    static delete(todoId) {
        return fetch(`${TodoApi.API}/${todoId}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json",
            }
        })
        .then((responce) => {
            if (responce.ok) {
                return responce.json();
            }
            throw new Error ("Cann't delete item");
        })
    }

    static update(id, updatedProperty) {
        return fetch(`${TodoApi.API}/${id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(updatedProperty)
        })
        .then((responce) => {
            if (responce.ok) {
                return responce.json();
            }
            throw new Error ("Cann't update item");
        })
    }
}