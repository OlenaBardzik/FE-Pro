import MenuItem from "./MenuItem";

export default function Menu () {
    const menuItems = [{
        icon: 'dashboard',
        title: 'Dashboard' 
    }, {
        icon: 'lab_profile',
        title: 'Report' 
    }, {
        icon: 'settings',
        title: 'Settings' 
    }];

    return (
        <aside className="menu">
            <ul className="menu-list">
                <MenuItem>{menuItems[0]}</MenuItem>
                <MenuItem>{menuItems[1]}</MenuItem>
                <MenuItem>{menuItems[2]}</MenuItem>
            </ul>
        </aside>
    )
}