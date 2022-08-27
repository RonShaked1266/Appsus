const { NavLink, withRouter } = ReactRouterDOM
import { UserMsg } from './user-msg.jsx'
function _AppHeader(props) {

    return <header className="full main-layout">
        <div className="app-header">
            <h3 onClick={() => {
                props.history.push("/")
            }}>BookAreUs!</h3>

            <nav>
                <NavLink exact to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/book" activeClassName="my-active">Our Books!</NavLink>
            </nav>
        </div>
            {/* <UserMsg /> */}
    </header>
}

export const AppHeader = withRouter(_AppHeader)