import { MailPreview } from "../cmps/mail-preview.jsx";

export function MailList({ mails, onRemoveMail, onOpenMail }) {
    return <section className="mail-list">
        <ul>
            {mails.map(mail => <li key={mail.id} className="mail-preview clean-list flex">
                <MailPreview mail={mail} onRemoveMail={onRemoveMail}/>
                {/*onOpenMail={onOpenMail} */}
            </li>)
            }
        </ul>
    </section>
}