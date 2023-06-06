export default function AlbumListItem ({album, isActive, onClickAlbum}) {

const onAlbumClick = () => {
    onClickAlbum();
}

    return (
        <li style={{color: isActive ? 'blue' : '' }} 
            onClick={onAlbumClick}>
                {album.title}
        </li>
    )
}