export class StudentsGroupApi {
    static API = "https://6391adecac688bbe4c4f165a.mockapi.io/api/students"

    static request (url = "", method = "GET", body) {
        return fetch(`${StudentsGroupApi.API}/${url}`, {
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

    static getStudentsList() {
        return StudentsGroupApi.request()
            .catch(() => {
                throw new Error ("Cann't get students list from server");
            })
    }

    static create (student) {
        return StudentsGroupApi.request("", "POST", student)
            .catch(() => {
                throw new Error ("Cann't creat student on server");
            })   
    }

    static update (studentId, changes) {
        return StudentsGroupApi.request(studentId, "PUT", changes)
            .catch(() => {
                throw new Error ("Cann't update item");
            })    
    }

    static delete (studentId) {
        return StudentsGroupApi.request(studentId, "DELETE")
            .catch(() => {
                throw new Error ("Cann't delete student");
            })     
    }
}