// export function NotePreview({ note }) {
//     return <article>
//         <h3>preview</h3>

//     </article>
// }
export class NotePreview extends React.Component {
    render() {
        const { note } = this.props
        return <article>
            <h3>preview</h3>
            {/* <DynamicCmp 
            type={cmp.type}/> */}
        </article>
    }
}