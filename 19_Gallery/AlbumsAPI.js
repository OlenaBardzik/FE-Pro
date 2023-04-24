class AlbumsApi {
    static API = "https://jsonplaceholder.typicode.com/albums/"

    static getAlbumList() {
        return fetch(AlbumsApi.API)
            .then((responce) => {
                if (responce.ok) {
                    return responce.json()
                }

                throw new Error ("Can not get alboum list from server")
            })
    }
}