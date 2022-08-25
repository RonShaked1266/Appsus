import { NotePreview } from './note-preview.jsx'

export function NoteList({ notes, onRemoveNote }) {
    return <section className="note-list">
        <ul>
            {
                notes.map(note =>
                <li className="flex space-between note-preview" key={note.id}>
                    <NotePreview note={note} />
                    <div className="btns">
                    <button className="pin"><img src="assets/icons/pin.svg" /></button>
                    <button onClick={()=>onRemoveNote(note.id)}><img src="assets/icons/trash.png" /></button>
                    <button><img src="assets/icons/img.svg"/></button>
                    <button><img src="assets/icons/contact.svg" /></button>
                    <input type="color" className="fill-style" id="fill-style" hidden/>
                    <button htmlFor="fill-style"><img src="assets/icons/paint-board.svg" /></button>
                    <button><img src="assets/icons/v.svg" /></button>         
                    </div>
                </li>)
            }
        </ul>
    </section>
}