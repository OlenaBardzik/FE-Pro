export default function UserListItem ({user, isActive, onUserSelect}) {

    const onUserClick = () => {
        onUserSelect(user);
    }

    return (
        <li style={{color: isActive ? 'blue' : '' }} 
            onClick={onUserClick}>
                {user.username}
        </li>
    )
}