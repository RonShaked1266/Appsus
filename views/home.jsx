const { NavLink} = ReactRouterDOM
export function Home() {

    return <section className="home">
        {/* <h1>Welcome to home page!</h1> */}

        <div className="home-links">
        <NavLink className="book-link" exact to="/book"><i class="fa-solid fa-book"></i></NavLink>
        <NavLink className="mail-link" exact to="/mail"><img src="assets/icons/mail.webp" /></NavLink>
        <NavLink className="note-link" exact to="/note"><img src="assets/icons/note.png" /></NavLink>
        </div>
    </section>
}