import { MailList } from "../cmps/mail-list.jsx";
import { mailService } from "../services/mail.service.js";

export class MailIndex extends React.Component {

    state = {
        mails: [],
        filterBy: null,
        sortBy: null
    }

    componentDidMount() {
        this.loadMails()
    }

    loadMails = () => {
        mailService.query()
            .then(mails => this.setState({ mails }))
    }

    render() {
        const { mails } = this.state
        return <section className="app main-layout">
            <MailList mails={mails}/>
        </section>
    }
}
