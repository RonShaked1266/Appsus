export class NoteEdit extends React.Component {
    state = {
    }

    render() {
        const { onRemoveNote, note } = this.props
        return <section className="note-edit">
            <button className="pin"><img src="assets/icons/pin.svg" /></button>
            <button onClick={() => onRemoveNote(note.id)}><img src="assets/icons/trash.png" /></button>
            <button><img src="assets/icons/img.svg" /></button>
            <button><img src="assets/icons/contact.svg" /></button>
            <button><img src="assets/icons/paint-board.svg" /></button>
            <button><img src="assets/icons/v.svg" /></button>
        </section>
    }
}