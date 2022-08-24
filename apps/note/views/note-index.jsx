import { NoteFilter } from './../cmps/note-filter.jsx'
import { NoteList } from './../cmps/note-list.jsx'
import { noteService } from '../../../services/note-service.js'
export class NoteIndex extends React.Component {
    state = {
        notes: [],
        filterBy: null, 
    }

    // componentDidMount() {
    //     this.loadNotes()
    // }

    // loadNotes = () => {
    //     noteService.query(this.state.filterBy)
    //         .then((notes) => this.setState({ notes }))
    // }
    
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
