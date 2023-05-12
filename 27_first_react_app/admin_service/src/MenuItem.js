export default function MenuItem ({children}) {
    return (
        <li className="menu-list-item">
            <span class="material-symbols-outlined">{children.icon}</span>
            <span>{children.title}</span>
        </li>
    )
}