export function MailPreview({ mail }) {

    function getReadClass(mail) {
        return !mail.isRead? 'unread': ''
    }

    return <div className="flex align-center">
        <div className={`mail-subject ${getReadClass(mail)}`}>{mail.subject}</div>
        <div className={"mail-body"}>{mail.body}</div>
        <div className={`mail-sentAt ${getReadClass(mail)}`}>{mail.sentAt}</div>
        <div className={`mail-to ${getReadClass(mail)}`}>{mail.to}</div>
    </div>
}