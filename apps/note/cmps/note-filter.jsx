export class NoteFilter extends React.Component {
    render() {
        return <section className="note-filter">
            <div className="flex space-between main-input">
                <input
                    ref={this.inputRef}
                    type="text"
                    placeholder="What's on your mind.."
                />
                <div className="btns">

                <button>💬</button>
                <button><img src="assets/icons/text-stroke.png" /></button>
                </div>
            </div>


        </section>
    }
}