class PhotosApi {
    static API = "https://jsonplaceholder.typicode.com/photos/"

    static getPhotoList(albumId) {
        return fetch(`${PhotosApi.API}?albumId=${albumId}`)
            .then((responce) => {
                if (responce.ok) {
                    return responce.json()
                }

                throw new Error ("Can not get photo list from server")
            })
    }
}