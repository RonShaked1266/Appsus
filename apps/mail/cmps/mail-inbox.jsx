// export class MailInbox extends React.Component {
import { MailCreate } from "../cmps/mail-create.jsx";
import { MailList } from "../cmps/mail-list.jsx";
export function MailInbox({ onAddMail, onToggleModal, onRemoveMail, mails, isModalOpened }) {
    // state = {

    // }

    // render() {
    // console.log('props:', props)
    // const { onAddMail, onToggleModal, onRemoveMail, mails, isModalOpened } = this.props
    // console.log('onAddMail:', onAddMail)
    // console.log('onToggleModal:', onToggleModal)
    // console.log('onRemoveMail:', onRemoveMail)
    // console.log('mails:', mails)
    // console.log('isModalOpened:', isModalOpened)
    return <section className="app main-layout">
        {isModalOpened && <MailCreate onAddMail={onAddMail} />}
        <button className="btn-add-mail" onClick={onToggleModal}>Create New Mail</button>
        {mails.length ? <MailList mails={mails} onRemoveMail={onRemoveMail} /> : <div>No Mails</div>}
        {/*onOpenMail={onOpenMail}*/}
    </section>
    // }
}