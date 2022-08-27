export const NoteType = {
    NoteTxt,
    NoteImg,
    NoteVideo,
}

function NoteTxt({ note }) {
    return <section>
        <h4>{note.info.txt}</h4>
    </section>
}
function NoteImg({ note }) {
    return <section>
        <h4>{note.info.title}</h4>
        <img src={note.info.url} />
    </section>
}
function NoteVideo({ note }) {
    return <section>
        <h4>{note.info.title}</h4>
        <div className="video-play">
            <iframe src={note.info.url}></iframe>
        </div>
    </section>
}