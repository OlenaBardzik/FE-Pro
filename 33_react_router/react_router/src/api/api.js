export class AppApi {
    static API = "https://jsonplaceholder.typicode.com"

    static request (endpoint = "", method = "GET", body) {
        return fetch(`${AppApi.API}/${endpoint}`, {
            method,
            body: body ? JSON.stringify(body) : undefined,
            headers: {
                "Content-type": "application/json",
            }
        })
        .then((responce) => {
            if (responce.ok) {
                return responce.json();
            }

            throw new Error ("Cann't execute server request");
        })
    }

    static getUsers () {
        return AppApi.request("users")
            .catch(() => {
                throw new Error ("Cann't get users");
            })
    }

    static getAllbums (userId) {
        return AppApi.request(`albums/?userId=${userId}`)
            .catch(() => {
                throw new Error ("Cann't get albums");
            })
    }

    static getPhotos (albumId) {
        return AppApi.request(`photos/?albumId=${albumId}`)
            .catch(() => {
                throw new Error ("Cann't get albums");
            })
    }
}