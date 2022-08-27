import { utilService } from "../../../services/util.service.js"
const { Link } = ReactRouterDOM

export function MailPreview({ mail, onRemoveMail, onOpenMail }) {

    function getReadClass(mail) {
        return !mail.isRead ? 'unread' : ''
    }

    function getBodyTxtClass(mail) {
        return mail.body.length >= 30? 'long-body': ''
    }

    console.log('mail.sentAt:', mail.sentAt)
    console.log('typeof mail.sentAt:', typeof mail.sentAt)
    return <Link to={`/mail/${mail.id}`}>
        <div className="mail-preview-div flex">
            {/* onClick={() => onOpenMail(mail.id)} */}
            <div className={`mail-from ${getReadClass(mail)}`}>{mail.from}</div>
            <div className={`mail-subject ${getReadClass(mail)}`}>{mail.subject}</div>
            <div className={`mail-body ${getBodyTxtClass(mail)}`}>{mail.body}</div>
            {/*React Doesn't like dates objects when the component did mount! (first time) */}
            {/* <div className={`mail-sentAt ${getReadClass(mail)}`}>{mail.sentAt + ''}</div>  */}
            <div className={`mail-sentAt ${getReadClass(mail)}`}>{utilService.getDayOfMonth(mail.sentAt) + ' ' + utilService.getMonthName(mail.sentAt)}</div>
            <div className="remove-mail-container">
                <button className="remove-mail" onClick={() => onRemoveMail(mail.id)}><img src="../../../assets/icons/trash.png" />
                </button>
            </div>
        </div>
    </Link>
}