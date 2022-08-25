import { noteService } from './../services/note.service.js'
const { withRouter } = ReactRouterDOM
export class _NoteAdd extends React.Component {
    state = {
        note: {
            txt: '',
            type: '',
        }
    }

    inputRef = React.createRef()

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.value
        this.setState((prevState) => ({
            note: {
                ...prevState.note,
                [field]: value
            }
        }))
    }

    goTxt = (ev) => {
        ev.preventDefault()
        this.inputRef.current.focus()
        this.setState((prevState) => ({
            note: {
                ...prevState.note,
                type: 'note-txt'
            }
        }))
    }
    goImg = (ev) => {
        ev.preventDefault()
        this.inputRef.current.focus()
        this.setState((prevState) => ({
            note: {
                ...prevState.note,
                type: 'note-img'
            }
        }))
    }

    render() {
        const { note } = this.state
        const { txt, type } = this.state.note
        const { onAddNote } = this.props
        const { handleChange, goTxt, goImg } = this
        return <section className="note-add">
            <form className="flex space-between main-input">
                {/* onSubmit={onAddNote} */}
                <input
                    ref={this.inputRef}
                    type="text"
                    placeholder="What's on your mind.."
                    name="txt"
                    value={txt} id="txt"
                    onChange={handleChange}
                />
                <div className="btns">

                    <button htmlFor="txt" onClick={goTxt}>💬</button>
                    <input
                        type="image"
                        name="img" id="img"
                        src={txt}
                        hidden />
                    <button htmlFor="img" onClick={goImg}>🔲</button>
                    <button onClick={() => onAddNote(note)} >✔</button>
            </div>
        </form>


        </section >
    }
}

export const NoteAdd = withRouter(_NoteAdd)