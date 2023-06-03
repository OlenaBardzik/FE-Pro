import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PhotoListItem from './PhotoListItem';
import { setAlbum } from '../store/actions/album.actions';
import { fetchPhotos } from '../store/actions/photo.actions';

export default function PhotoList () {
    const album = useSelector(state => state.album.album);
    const photos = useSelector(state => state.photo.photos);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPhotos(album.id))
      }, [])

    const onClickToAlbums = () => {
        dispatch(setAlbum(null))
    }

    return  (
        <>
        <button onClick={onClickToAlbums}>
            <NavLink to='/albums'>
                Back to albums
            </NavLink>
        </button>

        <div>Photos</div>
        {photos.map(photo => (
                    <PhotoListItem
                        key={photo.id}
                        photo={photo}
                    />
                ))}
        </>
    )
}