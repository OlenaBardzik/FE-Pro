export class ContactsApi {
    static API = "https://62054479161670001741b708.mockapi.io/api/contacts"

    static request (url = "", method = "GET", body) {
        return fetch(`${ContactsApi.API}/${url}`, {
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

    static getContactList() {
        return ContactsApi.request()
            .catch(() => {
                throw new Error ("Cann't get contact list from server");
            })
    }

    static createContact (contactData) {
        return ContactsApi.request("", "POST", contactData)
            .catch(() => {
                throw new Error ("Cann't creat contact on server");
            })   
    }

    static updateContact (contactid, changes) {
        return ContactsApi.request(contactid, "PUT", changes)
            .catch(() => {
                throw new Error ("Cann't update item");
            })    
    }

    static removeContact (contactid) {
        return ContactsApi.request(contactid, "DELETE")
            .catch(() => {
                throw new Error ("Cann't delete contact");
            })     
    }
}