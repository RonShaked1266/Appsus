import { noteService } from './../services/note.service.js'
export class NoteAdd extends React.Component {
    state = {
        txt: '',
        type: '',
    }

    onAddNote = (ev) => {
        const { txt } = this.state
        ev.preventDefault()
        noteService.addNote(txt)
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.value
        this.setState({ [field]: value })
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