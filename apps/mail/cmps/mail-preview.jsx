import { utilService } from "../../../services/util.service.js"

export function MailPreview({ mail, onRemoveMail }) {

    function getReadClass(mail) {
        return !mail.isRead ? 'unread' : ''
    }

    console.log('mail.sentAt:', mail.sentAt)
    console.log('typeof mail.sentAt:', typeof mail.sentAt)
    return <div className="mail-preview-div flex align-center">
        <div className={`mail-subject ${getReadClass(mail)}`}>{mail.subject}</div>
        <div className={"mail-body"}>{mail.body}</div>
        {/*React Doesn't like dates objects when the component did mount! (first time) */}
        {/* <div className={`mail-sentAt ${getReadClass(mail)}`}>{mail.sentAt + ''}</div>  */}
        <div className={`mail-sentAt ${getReadClass(mail)}`}>{utilService.getDayOfMonth(mail.sentAt) + ' ' + utilService.getMonthName(mail.sentAt)}</div> 
        <div className={`mail-to ${getReadClass(mail)}`}>{mail.to}</div>
        <button className="remove-mail" onClick={() => onRemoveMail(mail.id)}><img src="../../../assets/icons/trash.png" /></button>
    </div>
}