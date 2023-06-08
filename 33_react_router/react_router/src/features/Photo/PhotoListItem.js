export default function PhotoListItem ({photo}) {

    return (
        <img src={photo.url} className="photo-list-item"/>
    )
}