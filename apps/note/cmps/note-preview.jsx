
export class NotePreview extends React.Component {
    // DynamicCmp = (props) => {
    //     switch (props.type) {
    //         case 'note-txt':
    //             return <NoteTxt {...props} />
    //         case 'note-img':
    //             return <NoteImg {...props} />
    //     }
    // }

    render() {
        const { note } = this.props
        return <article>
            <h3>{note.id}</h3>
            {/* <DynamicCmp 
            type={cmp.type}/> */}
        </article>
    }
}