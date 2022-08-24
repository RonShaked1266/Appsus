const { Link, NavLink, withRouter } = ReactRouterDOM
export function AppHeader() {

    return <header className="full main-layout">
        <div className="app-header">
        <Link to="/">
            <h3>Appsus</h3>
        </Link>
        <nav>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/mail">Mail</NavLink>
            <NavLink to="/note">Note</NavLink>
        </nav>
        </div>
    </header>
}