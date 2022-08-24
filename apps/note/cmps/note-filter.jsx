export class NoteFilter extends React.Component {
    render() {
        return <section className="note-filter">
            <input
                    ref={this.inputRef}
                    type="text"
                    placeholder="What's on your mind.."                     
                />
            <input
                    type="image"
                    placeholder="Enter image URL.."                     
                />
            
        </section>
    }
}