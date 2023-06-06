import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import PhotoListItem from './PhotoListItem';
import { fetchPhotos } from '../store/actions/photo.actions';

export default function PhotoList () {
    let { albumId } = useParams();
    const album = useSelector(state => state.album.album);
    const photos = useSelector(state => state.photo.photos);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPhotos(albumId))
      }, [albumId])

    return  (
        <>
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