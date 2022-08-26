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
        console.log(this.state.note)
        ev.preventDefault()
        this.inputRef.current.focus()
        this.inputRef.current.placeholder = "What's on your mind.."
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
        this.inputRef.current.placeholder = 'Enter image URL..'
        this.setState((prevState) => ({
            note: {
                ...prevState.note,
                type: 'note-img'
            }
        }))
    }
    goVideo = (ev) => {
        ev.preventDefault()
        this.inputRef.current.focus()
        this.inputRef.current.placeholder = 'Enter video URL..'
        this.setState((prevState) => ({
            note: {
                ...prevState.note,
                type: 'note-video'
            }
        }))
    }
    goTodos = (ev) => {
        ev.preventDefault()
        this.inputRef.current.focus()
        this.inputRef.current.placeholder = 'Enter comma separated list..'
        this.setState((prevState) => ({
            note: {
                ...prevState.note,
                type: 'note-todo'
            }
        }))
    }

    render() {
        const { note } = this.state
        const { txt, type } = this.state.note
        const { onAddNote } = this.props
        const { handleChange, goTxt, goImg, goVideo, goTodos } = this
        return <section className="note-add">
            <form className="flex space-between main-input" onSubmit={() => onAddNote(note)}>
                <input
                    ref={this.inputRef}
                    type="text"
                    placeholder="What's on your mind.."
                    name="txt"
                    value={txt} id="txt"
                    onChange={handleChange}
                />
                <div className="btns-container">

                    <button htmlFor="txt" onClick={goTxt}>💬</button>
                    {/* <button onClick={goTodos}><img src="assets/icons/list.svg" /></button> */}
                    <button onClick={goTodos}>💭</button>
                    <button onClick={goVideo}>▶</button>
                    <input
                        type="image"
                        name="img" id="img"
                        src={txt}
                        hidden />
                    <button htmlFor="img" onClick={goImg}><img src="assets/icons/img.svg" /></button>
                    {/* <button><i class="fa-regular fa-user"></i></button> */}
                    <button><img src="assets/icons/add.svg" /></button>
                </div>
            </form>


        </section >
    }
}

export const NoteAdd = withRouter(_NoteAdd)