import { NotePreview } from './note-preview.jsx'

export function NoteList() {
    return <section className="note-list">
        <ul>
            {
                <li className="note-preview">
                    <NotePreview />
                    <button>✖</button>
                    <button>🎬</button>
                    <button>📌</button>
                    <button><img src="assets/icons/paint-board.png"/></button>
                    <button><img src="assets/icons/trash.png"/></button>
                </li>
            }
        </ul>
    </section>
}