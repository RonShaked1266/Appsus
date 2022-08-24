import { NotePreview } from './note-preview.jsx'

export function NoteList({ notes, onRemoveNote }) {
    return <section className="note-list">
        <ul>
            {
                notes.map(note =>
                <li className="note-preview" key={note.id}>
                    <NotePreview note={note}/>
                    <button>✖</button>
                    <button>🎬</button>
                    <button>📌</button>
                    <button><img src="assets/icons/paint-board.png" /></button>
                    <button onClick={()=>onRemoveNote(note.id)}><img src="assets/icons/trash.png" /></button>
                </li>)
            }
        </ul>
    </section>
}