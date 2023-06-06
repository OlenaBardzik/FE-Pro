import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserListItem from './UserListItem';
import { fetchUsers, setUser } from '../store/actions/user.actions';
import { useNavigate, Outlet } from 'react-router-dom';

export default function UserList () {
    const users = useSelector(state => state.user.users);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchUsers())
      }, [])

    const onUserSelect = (user) => {
        navigate(`/users/${user.id}/albums`)
    }


    return  (<>
        <div>
            {users.map(user => (
                <UserListItem
                    key={user.id}
                    user={user}
                    onUserSelect={onUserSelect}
                />
            ))}
        </div>
        <Outlet />
    </>)
}