import { NoteAdd } from '../cmps/note-add.jsx'
import { NoteList } from './../cmps/note-list.jsx'
import { noteService } from './../services/note.service.js'
// import { noteService } from '../../../services/note-service.js'
import { showErrorMsg, showSuccessMsg } from '../../../services/event-bus.service.js'
export class NoteIndex extends React.Component {
    state = {        
        notes: [],
        isBounce: false
    }

    componentDidMount() {
        this.loadNotes()
    }

    loadNotes = () => {
        noteService.query()
            .then((notes) => this.setState({ notes }))
    }

    onRemoveNote = (noteId) => {
        noteService.remove(noteId)
            .then(() => {
                console.log('Removed!')
                const notes = this.state.notes.filter(note => note.id !== noteId)
                this.setState({ notes, isBounce: true })
                showSuccessMsg('note removed')
                setTimeout(() => {
                    this.setState({ isBounce: false })
                }, 500)

            })
            .catch(err => {
                console.log('Problem!!', err)
                showErrorMsg('Cannot remove note')
            })
    }

    render() {
        const { notes } = this.state
        const { onRemoveNote, handleChange } = this
        return (
            <section className="note-index main-layout">
                <div>note app</div>
                <NoteAdd />
                <NoteList notes={notes} onRemoveNote={onRemoveNote} />
            </section>
        )
    }
}

