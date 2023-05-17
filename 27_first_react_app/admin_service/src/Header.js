export default function Header () {
    return (
        <header className="header">
            <h3 className="header-title">Overview</h3>
            <div className="header-content">
                <input type="text" placeholder="Search something..." className="header-search"/>
                <span class="material-symbols-outlined header-notes">edit_notifications</span>
                <button className="header-plan">Upgrade Plan</button>
            </div>
        </header>
    )
}