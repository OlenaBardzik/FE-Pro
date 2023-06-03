import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserListItem from './UserListItem';
import { fetchUsers, setUser } from '../store/actions/user.actions';

export default function UserList () {
    const users = useSelector(state => state.user.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers())
      }, [])

    const onUserSelect = (user) => {
        dispatch(setUser(user))
    }


    return  (users.map(user => (
                    <UserListItem
                        key={user.id}
                        user={user}
                        onUserSelect={onUserSelect}
                    />
                )))
}