import { NoteAdd } from '../cmps/note-add.jsx'
import { NoteList } from './../cmps/note-list.jsx'
import { NoteFilter } from '../cmps/note-filter.jsx'
import { noteService } from './../services/note.service.js'
import { showErrorMsg, showSuccessMsg } from '../../../services/event-bus.service.js'

export class NoteIndex extends React.Component {
    state = {
        notes: [],
        isBounce: false,
        isPalette: false,
        filterBy: null,
    }

    componentDidMount() {
        this.loadNotes()
    }

    loadNotes = () => {
        noteService.query()
            .then((notes) => this.setState({ notes }))
    }

    onRemoveTodo = (todo) => {
        noteService.removeTodo(todo)
        .then(() => {

            console.log('Removed!')
        })

    }

    onSetPalette = (noteId) => {
        // const note = this.state.notes.find(note => note.id === noteId)  
        noteService.getById(noteId)   
            .then((note) => {
                console.log(noteId)
                this.setState({ isPalette: true })
            })      
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
        if (note.txt !== '') {
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
            })}
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, () => {
            this.loadNotes()
        })
    }

    render() {
        const { notes, isPalette } = this.state
        const { onRemoveNote, onAddNote, onSetPalette, onSetFilter } = this
        return (
            <section className="note-index">
                {/* <div>note app</div> */}
                <NoteFilter onSetFilter={onSetFilter} />
                <NoteAdd onAddNote={onAddNote}/>
                <NoteList notes={notes} onRemoveNote={onRemoveNote} onSetPalette={onSetPalette} isPalette={isPalette}/>
            </section>
        )
    }
}

