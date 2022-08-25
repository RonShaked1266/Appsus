import { NoteAdd } from '../cmps/note-add.jsx'
import { NoteList } from './../cmps/note-list.jsx'
import { noteService } from './../services/note.service.js'
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
    onAddNote = (note) => {
        console.log(note)
        noteService.addNote(note)
            .then((newNote) => {
                console.log('add!')
                const notes = [newNote, ...this.state.notes]
                this.setState({ notes, isBounce: true })
                showSuccessMsg('note add')
                setTimeout(() => {
                    this.setState({ isBounce: false })
                }, 500)

            })
            .catch(err => {
                console.log('Problem!!', err)
                showErrorMsg('Cannot add note')
            })
    }

    render() {
        const { notes } = this.state
        const { onRemoveNote, onAddNote } = this
        return (
            <section className="note-index main-layout">
                <div>note app</div>
                <NoteAdd onAddNote={onAddNote}/>
                <NoteList notes={notes} onRemoveNote={onRemoveNote} />
            </section>
        )
    }
}

