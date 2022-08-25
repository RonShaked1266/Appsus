import { NotePreview } from './note-preview.jsx'
import { ColorPalette } from './color-palette.jsx'
// import { NoteEdit } from './note-edit.jsx'

export function NoteList({ notes, onRemoveNote, onSetPalette, isPalette }) {

    return <section className="note-list">
        <ul>
            {
                notes.map(note =>
                    <li key={note.id}>
                        <div className="flex space-between note-preview">
                            <NotePreview note={note} isPalette={isPalette} />
                            <div className="btns">
                                <button className="pin"><img src="assets/icons/pin.svg" /></button>
                                <button onClick={() => onRemoveNote(note.id)}><img src="assets/icons/trash.png" /></button>
                                <button><img src="assets/icons/img.svg" /></button>
                                <button><img src="assets/icons/contact.svg" /></button>
                                <button onClick={() => onSetPalette(note.id)}><img src="assets/icons/paint-board.svg" /></button>
                                <button><img src="assets/icons/v.svg" /></button>
                                { isPalette && <ColorPalette />}
                                {/* <NoteEdit note={note} onRemoveNote={onRemoveNote} onSetPalette={onSetPalette}/> */}

                            </div>
                        </div>
                    </li>)
            }
        </ul>
    </section>
}