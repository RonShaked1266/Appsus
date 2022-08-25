
export function NotePreview({ note }) {
    function DynamicCmp(props) {
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
        return <article>
            {/* {note.type === 'note-txt' && <h4>{note.info.txt}</h4>} */}
            {/* <h4>{note.id}</h4> */}
            <DynamicCmp
                note={note} />
        </article>
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
export class NoteTodos extends React.Component {
    render() {
        const { note } = this.props
        return <section>
            <h4>{note.info.label}</h4>
            <ul>
                {
                    note.info.todos.map(todo =>
                        <li className="flex space-between note-todos" key={todo.doneAt}>
                            <div>{todo.txt}
                                <br></br>Done at: {todo.doneAt}
                            </div>
                            <button onClick={() => onRemoveTodo(todo)}>✖</button>
                        </li>)
                }
            </ul>
        </section>
    }
}
