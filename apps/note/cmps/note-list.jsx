import { NotePreview } from './note-preview.jsx'

export function NoteList() {
    return <section className="note-list">
        <ul>
            {
                <li className="note-preview">
                    <NotePreview />
                    <button>✖</button>
                </li>
            }
        </ul>
    </section>
}