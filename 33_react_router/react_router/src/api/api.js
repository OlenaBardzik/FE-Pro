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

    static getUser (userId) {
        return AppApi.request(`users/${userId}`)
            .catch(() => {
                throw new Error ("Cann't get user");
            })
    }

    static getAllbums (userId) {
        return AppApi.request(`users/${userId}/albums`)
            .catch(() => {
                throw new Error ("Cann't get albums");
            })
    }

    static getAllbum (userId, albumId) {
        return AppApi.request(`users/${userId}/albums/${albumId}`)
            .catch(() => {
                throw new Error ("Cann't get album");
            })
    }

    static getPhotos (albumId) {
        return AppApi.request(`albums/${albumId}/photos`)
            .catch(() => {
                throw new Error ("Cann't get albums");
            })
    }
}