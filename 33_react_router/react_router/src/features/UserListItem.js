import { NavLink } from 'react-router-dom';

export default function UserListItem ({user, onUserSelect}) {

    const onUserClick = () => {
        onUserSelect(user);
    }

    return (
        <li onClick={onUserClick}>
                {user.username}
        </li>
    )
}