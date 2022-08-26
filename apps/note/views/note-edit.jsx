import { noteService } from "../services/note.service.js"
import { ColorPalette } from "../cmps/color-palette.jsx"

export class NoteEdit extends React.Component {
    state = {
        note: {
            txt: '',
            type: '',
            bgColor: '',
        },
        isBounce: false,
        isPalette: false
    }

    inputRef = React.createRef()

    componentDidMount() {
        this.loadNote()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.noteId !== this.props.match.params.noteId) {
            this.loadNote()
        }
    }

    loadNote = () => {
        const { noteId } = this.props.match.params
        noteService.getById(noteId)
            .then((note) => {
                if (!note) return this.onGoBack()
                this.setState({ note })
            })
    }

    onGoBack = () => {
        this.props.history.push('/note')
        // console.log(this.state)
    }

    onRemoveNote = (noteId) => {
        noteService.remove(noteId)
            .then(() => {
                console.log('Removed!')
                this.setState({ note: null, isBounce: true })
                this.onGoBack()
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

    onUpdateNote = (ev) => {
        ev.preventDefault()
        const { note, isBounce } = this.state

        // console.log(note)
        noteService.updateNote(note)
            .then((noteToUpdate) => {
                console.log('update!')
                this.setState({ note: noteToUpdate, isBounce: true })
                showSuccessMsg('note update')
                setTimeout(() => {
                    this.setState({ isBounce: false })
                }, 500)

            })
            .catch(err => {
                console.log('Problem!!', err)
                showErrorMsg('Cannot update note')
            })
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

    onSetColor = (color) => {
        this.setState((prevState) => ({
            note: {
                ...prevState.note,
                bgColor: color,
            },
            isPalette: false
        })
        , () => {
            noteService.updateNote(this.state.note)
            .then((noteToUpdate) => {
                console.log('update!') 
            })
        }
        )
    }

    onSetPalette = () => {
        this.setState({ isPalette: true })
    }

    DynamicCmp = () => {
        const { note } = this.state
        if (!note) return
        switch (note.type) {
            case 'note-txt':
                return <NoteTxt note={note} />
            case 'note-img':
                return <NoteImg note={note} />
            case 'note-video':
                return <NoteVideo note={note} />
            case 'note-todos':
                return <NoteTodos note={note} />
        }
    }

    render() {
        const { note, isPalette } = this.state
        const { txt } = this.state.note
        const { DynamicCmp, onRemoveNote, onSetPalette, handleChange, onUpdateNote, onGoBack, onSetColor, goImg } = this
        // console.log(this.state)
        return <section className="note-edit">
            < h1 > edit</h1 >
            <form className="flex space-between main-input" onSubmit={onUpdateNote}>
                <input
                    ref={this.inputRef}
                    type="text"
                    placeholder="What's on your mind.."
                    name="txt"
                    value={txt} id="txt"
                    onChange={handleChange}
                />
                <div className="btns-container">

                    <button><img src="assets/icons/add.svg" /></button>
                </div>
            </form>
            <div className={note.bgColor}>
                <div className="flex space-between note-preview">
                    <DynamicCmp note={note}/>
                    <div className="btns">
                        <button className="pin"><img src="assets/icons/pin.svg" /></button>
                        <button onClick={() => onRemoveNote(note.id)}><img src="assets/icons/trash.png" /></button>
                        <input
                            type="image"
                            name="img" id="img"
                            src={txt}
                            hidden />
                        <button htmlFor="img" onClick={goImg}><img src="assets/icons/img.svg" /></button>
                        {/* <button><img src="assets/icons/img.svg" /></button> */}
                        <button><img src="assets/icons/contact.svg" /></button>
                        {/* <button onClick={() => onSetColor(note)}><img src="assets/icons/paint-board.svg" /></button> */}
                        <button onClick={onSetPalette}><img src="assets/icons/paint-board.svg" /></button>
                        <button onClick={onGoBack}><img src="assets/icons/v.svg" /></button>
                        {isPalette && <ColorPalette onSetColor={onSetColor} />}
                    </div>
                </div>
            </div>
        </section >
    }
}

function NoteTxt({ note }) {
    return <section>
        <h4>{note.info.txt}</h4>
    </section>
}

function NoteImg({ note }) {
    return <section>
        <h4>{note.info.title}</h4>
        <img src={note.info.url} />
    </section>
}

function NoteVideo({ note }) {
    return <section>
        <h4>{note.info.title}</h4>
        <div className="video-play">
            <iframe src={note.info.url}></iframe>
        </div>
    </section>
}


export class NoteTodos extends React.Component {

    state = {
        todo: null

    }


    onRemoveTodo = (idx) => {
    noteService.removeTodo(idx)
        .then(() => {
            console.log('Removed!')
            this.setState({ todo: null })
        })
    }

    render() {
    const { note } = this.props
    return <section>
        <h4>{note.info.label}</h4>
        <ul>
            {
                note.info.todos.map((todo, idx) =>
                    <li className="flex space-between note-todos" key={todo.doneAt}>
                        <div>{todo.txt}
                            <br></br>Done at: {todo.doneAt}
                        </div>
                        <button onClick={() => onRemoveTodo(idx)}>✖</button>
                    </li>)
            }
        </ul>
    </section>
   }
}