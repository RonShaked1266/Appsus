import { MailPreview } from "../cmps/mail-preview.jsx";

export function MailList({ mails }) {
    return <section className="mail-list">
        <ul>
            {mails.map(mail => <li key={mail.id} className="mail-preview clean-list flex">
                <MailPreview mail={mail} />
            </li>)}
        </ul>
    </section>
}