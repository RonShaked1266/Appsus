import { AppHeader } from "./cmps/app-header.jsx"
import { About } from "./views/about.jsx"
import { Home } from "./views/home.jsx"
import { MailIndex } from "./apps/mail/views/mail-index.jsx"
import { BookApp } from "./apps/miss-book/pages/book-app.jsx"

import { NoteEdit } from "./apps/note/views/note-edit.jsx"
import { NoteIndex } from "./apps/note/views/note-index.jsx"

const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

export function App() {
    return <Router>
        <section className="app main-layout">
            <AppHeader />
            <Switch>
                <Route path="/mail" component={MailIndex} />
                <Route path="/note/edit/:noteId" component={NoteEdit} />
                <Route path="/note" component={NoteIndex} />
                <Route path="/book" component={BookApp} />
                {/* <Route path="/about" component={About} /> */}
                <Route path="/" component={Home} />
            </Switch>
        </section>
    </Router>
}
