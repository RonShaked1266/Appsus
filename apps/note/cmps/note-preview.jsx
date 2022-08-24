
export class NotePreview extends React.Component {
    DynamicCmp = (props) => {
        // console.log(props)
        // console.log(props.note)
        // console.log(props.note.type)
        switch (props.note.type) {
            case 'note-txt':
                return <NoteTxt {...props} />
            case 'note-img':
                return <NoteImg {...props} />
            case 'note-todos':
                return <NoteTodos {...props} />
        }
    }

    render() {
        const { note } = this.props
        const { DynamicCmp } = this
        return <article>

            {/* {note.type === 'note-txt' && <h3>{note.info.txt}</h3>} */}
            {/* <h3>{note.id}</h3> */}
            <DynamicCmp
                note={note} />
        </article>
    }
}


function NoteTxt({ note }) {
    return <h3>{note.info.txt}</h3>
}
function NoteImg({ note }) {
    return <section>
        <h3>{note.info.title}</h3>
        <img src={note.info.url} />
    </section>
}
export class NoteTodos extends React.Component {
    render() {
        const { note } = this.props
        return <section>
            <h3>{note.info.label}</h3>
            <ul>
                {
                    note.info.todos.map(todo =>
                        <li className="flex space-between note-todos" key={todo.doneAt}>
                            <div>{todo.txt}
                                <br></br>Done at: {todo.doneAt}
                            </div>
                            <button>✖</button>
                        </li>)
                }
            </ul>
        </section>
    }
}
