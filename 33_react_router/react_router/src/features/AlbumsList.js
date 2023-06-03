import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import AlbumListItem from './AlbumListItem';
import { fetchAlbums, setAlbums, setAlbum } from '../store/actions/album.actions';
import { setUser } from '../store/actions/user.actions';

export default function AlbumList () {
    const user = useSelector(state => state.user.user);
    const albums = useSelector(state => state.album.albums);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(user);
        dispatch(fetchAlbums(user.id))
      }, [])

    const onClickToUsers = () => {
        dispatch(setAlbums([]))
        dispatch(setUser(null))
    }

    const onClickAlbum = (album) => {
        dispatch(setAlbum(album))
    }

    return  (
        <>
        <button onClick={onClickToUsers}>
            <NavLink to='/users'>
                Back to users
            </NavLink>
        </button>

        <div>Albums</div>
        {albums.map(album => (
                    <AlbumListItem
                        key={album.id}
                        album={album}
                        onClickAlbum={() => onClickAlbum(album)}
                    />
                ))}
        </>
    )
}