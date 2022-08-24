import { noteService } from './../services/note.service.js'
const { withRouter } = ReactRouterDOM
export class _NoteAdd extends React.Component {
    state = {
        note: {
            txt: '',
            type: '',
        }
    }

    // componentDidMount() {
    //     this.loadNote()
    // }

    // componentDidUpdate() {
    //     console.log(this.props.match.params)
    //     this.loadNote()
    // }

    // loadNote = () => {
    //     const { noteId } = this.props.match.params
    //     if (!noteId) return
    //     noteService.getById(noteId).then(note => this.setState({ note }))
    // }

    onAddNote = (ev) => {
        const { txt } = this.state.note
        console.log(txt)
        ev.preventDefault()
        noteService.addNote(txt)
    }
   

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.value
        // console.log(value)
        this.setState((prevState) => ({
            note: {
                ...prevState.note,
                [field]: value
            }
        }))
    }

    render() {
        const { txt, type } = this.state
        const { handleChange, onAddNote } = this
        return <section className="note-add">
            <form className="flex space-between main-input" onSubmit={onAddNote}>
                <input
                    // ref={this.inputRef}
                    type="text"
                    placeholder="What's on your mind.."
                    name="txt"
                    value={txt} id="txt"
                    onChange={handleChange}
                />
                <div className="btns">

                    <button htmlFor="txt">💬</button>
                    <button><img src="assets/icons/text-stroke.png" /></button>
                </div>
            </form>


        </section>
    }
}

export const NoteAdd = withRouter(_NoteAdd)