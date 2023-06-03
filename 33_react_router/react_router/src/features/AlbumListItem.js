import { NavLink } from 'react-router-dom';

export default function AlbumListItem ({album, onClickAlbum}) {

    return (
        <div onClick={onClickAlbum}>
            <NavLink to='/photos'>
                {album.title}
            </NavLink>
        </div>
    )
}