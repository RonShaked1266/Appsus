import { NoteFilter } from './apps/note/cmps/note-filter.jsx'
import { NoteList } from './apps/note/cmps/note-list.jsx'
export class NoteIndex extends React.Component {
    render() {
        return (
            <section className="note-index main-layout">
                <div>note app</div>
                <NoteFilter />
                <NoteList />
            </section>
        )
    }
}
