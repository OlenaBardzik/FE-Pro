import { NavLink } from 'react-router-dom';

export default function AlbumListItem ({album, onClickAlbum}) {

const onAlbumClick = () => {
    onClickAlbum();
}

    return (
        <div onClick={onAlbumClick}>
                {album.title}
        </div>
    )
}