export class Api {

    static URL = " https://mock-api-5678.nw.r.appspot.com"

    static request (endpoint = this.endpoint, method = "GET", body) {
        return fetch(`${Api.URL}/${endpoint}`, {
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
}