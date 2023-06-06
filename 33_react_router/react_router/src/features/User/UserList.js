import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserListItem from './UserListItem';
import { fetchUsers } from '../../store/actions/user.actions';
import { useNavigate, useParams, Outlet } from 'react-router-dom';

export default function UserList () {
    const users = useSelector(state => state.user.users);
    let { userId } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchUsers())
      }, [])

    const onUserSelect = (user) => {
        navigate(`/users/${user.id}/albums`)
    }


    return  (
        <div className='wrapper'>
            <div className='user-container'>
                <div className='user-title'>Users</div>
                <ul className='user-list'>
                    {users.map(user => (
                        <UserListItem
                            key={user.id}
                            user={user}
                            isActive={user.id == userId}
                            onUserSelect={onUserSelect}
                        />
                    ))}
                </ul>
            </div>
            <Outlet />
        </div>
    )
}