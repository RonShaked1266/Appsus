import { NotePreview } from './note-preview.jsx'

export function NoteList({ notes, onRemoveNote }) {
    return <section className="note-list">
        <ul>
            {
                notes.map(note =>
                <li className="flex space-between note-preview" key={note.id}>
                    <NotePreview note={note} />
                    <div className="btns">
                    <button>📌</button>
                    <button>✉</button>
                    <button><img src="assets/icons/text-stroke.png" /></button>
                    {/* <input type="color" name="color" id="color" hidden/> */}
                    <button htmlFor="color"><img src="assets/icons/paint-board.png" /></button>
                    <button onClick={()=>onRemoveNote(note.id)}><img src="assets/icons/trash.png" /></button>
                    </div>
                </li>)
            }
        </ul>
    </section>
}