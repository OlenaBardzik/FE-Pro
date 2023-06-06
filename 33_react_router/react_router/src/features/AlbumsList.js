import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet, useParams, useNavigate } from 'react-router-dom';
import AlbumListItem from './AlbumListItem';
import { fetchAlbums, setAlbums, setAlbum } from '../store/actions/album.actions';
import { setUser } from '../store/actions/user.actions';
import { setPhotos } from '../store/actions/photo.actions';

export default function AlbumList () {
    let { userId, albumId } = useParams();
    const albums = useSelector(state => state.album.albums);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(setPhotos([]));
        dispatch(setAlbums([]));
        dispatch(fetchAlbums(userId));
      }, [userId])

    const onClickAlbum = (album) => {
        navigate(`/users/${userId}/albums/${album.id}/photos`);
    }

    return  (
        <>
            <div>Albums</div>
            <div>
                {albums.map(album => (
                    <AlbumListItem
                        key={album.id}
                        album={album}
                        onClickAlbum={() => onClickAlbum(album)}
                    />
                ))}
            </div>
            <Outlet />
        </>
    )
}