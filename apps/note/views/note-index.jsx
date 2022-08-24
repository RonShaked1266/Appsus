import { NoteFilter } from './../cmps/note-filter.jsx'
import { NoteList } from './../cmps/note-list.jsx'
import { noteService } from '../../../services/note-service.js'
import { showErrorMsg, showSuccessMsg } from '../../../services/event-bus.service.js'
export class NoteIndex extends React.Component {
    state = {
        txt: '',
        notes: [],
        filterBy: null,
        isBounce: false
    }

    componentDidMount() {
        this.loadNotes()
    }

    loadNotes = () => {
        noteService.query()
            .then((notes) => this.setState({ notes }))
    }
    // loadNotes = () => {
    //     noteService.query(this.state.filterBy)
    //         .then((notes) => this.setState({ notes }))
    // }

    DynamicCmp = (props) => {
        switch (props.type) {
            case 'note-txt':
                return <NoteTxt {...props} />
            case 'note-img':
                return <NoteImg {...props} />
        }
    }

    // onChangeVal = (idx, val) => {
    //     const notes = this.state.notes.map((note, currIdx) => (currIdx !== idx) ? note : val)
    //     this.setState({ notes })
    // }

    onRemoveNote = (noteId) => {
        noteService.remove(noteId)
            .then(() => {
                console.log('Removed!')
                const notes = this.state.notes.filter(note => note.id !== noteId)
                this.setState({ notes, isBounce: true })
                showSuccessMsg('note removed')
                setTimeout(()=>{
                    this.setState({ isBounce: false })
                }, 500)

            })
            .catch(err => {
                console.log('Problem!!', err)
                showErrorMsg('Cannot remove note')
            })
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.value
        this.setState({ [field]: value })
    }

    render() {
        const { txt, notes } = this.state
        const { onRemoveNote, handleChange } = this
        return (
            <section className="note-index main-layout">
                <div>note app</div>
                <NoteFilter />
                <section className="note-filter">
            <div className="flex space-between main-input">
                <input
                    ref={this.inputRef}
                    type="text"
                    placeholder="What's on your mind.."
                    name="txt"
                    id="txt" value={txt}
                    onChange={handleChange}
                />
                <div className="btns">
                <button>💬</button>
                <button><img src="assets/icons/text-stroke.png" /></button>
                </div>
            </div>


        </section>
                <NoteList notes={notes} txt={txt} onRemoveNote={onRemoveNote} />
            </section>
        )
    }
}
