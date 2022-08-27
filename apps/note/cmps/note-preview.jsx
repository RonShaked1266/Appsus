
// import { ColorPalette } from './color-palette.jsx'

export function NotePreview({ note, isPalette }) {
    function DynamicCmp(props) {
        // console.log(props)
        // console.log(props.note)
        // console.log(props.note.type)
        switch (props.note.type) {
            case 'note-txt':
                return <NoteTxt {...props} />
            case 'note-img':
                return <NoteImg {...props} />
            case 'note-video':
                return <NoteVideo {...props} />
            case 'note-todos':
                return <NoteTodos {...props} />
        }
    }
    return <article>
        {/* <h4>{note.id}</h4> */}
        <DynamicCmp
            note={note} />
        {/* { (isPalette && note.id) && <ColorPalette />} */}
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
function NoteVideo({ note }) {
    return <section>
        <h4>{note.info.title}</h4>
        <div className="video-play">
            <iframe src={note.info.url}></iframe>
        </div>
    </section>
}

export class NoteTodos extends React.Component {
    render() {
        const { note } = this.props
        console.log(note)
        return <section>
            <h4>{note.info.label}</h4>
            <ul>
                {
                    note.info.todos.map((todo, idx) =>
                        <li className="flex space-between note-todos" key={idx}>
                            <div>{todo.txt}
                                <br></br>Done at: {todo.doneAt}
                            </div>
                            {/* <button onClick={() => onRemoveTodo(todo)}>✖</button> */}
                        </li>)
                }
            </ul>
        </section>
    }
}
