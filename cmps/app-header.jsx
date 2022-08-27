const { Link, NavLink, withRouter } = ReactRouterDOM

export class AppHeader extends React.Component {

    state = {
        nav: {
            isNavOpen: false
        }
    }

    openMenu = () => {
        this.setState({isNavOpen: true})
    }
    closeMenu = () => {
        this.setState({isNavOpen: false})
    }


    render() {
        const { isNavOpen } = this.state
        const { openMenu, closeMenu } = this
        return <header className="full main-layout">
            <div className="app-header">
                <Link to="/">
                    <h1><span className="A">A</span><span className="p1">p</span><span className="p">p</span><span className="s">s</span><span className="u">u</span><span className="s">s</span></h1>
                </Link>
                    <button className="toggle-menu" onClick={openMenu}>
                        <svg style={{ height: `${20}px`, width: `${20}px` }}>
                            <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z">
                            </path>
                        </svg>
                    </button>
                    {isNavOpen &&<nav className="flex">
                        <NavLink onClick={closeMenu} exact to="/">Home</NavLink>
                        <NavLink onClick={closeMenu} to="/about">About</NavLink>
                        <NavLink onClick={closeMenu} to="/mail">Mail</NavLink>
                        <NavLink onClick={closeMenu} to="/note">Note</NavLink>
                </nav>}
            </div>
        </header>
    }
}
