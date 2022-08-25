import { utilService } from "../../../services/util.service.js"
import { mailService } from "../services/mail.service.js"

export class MailDetails extends React.Component {
    state = {
        mail: null
    }

    componentDidMount() {
        this.loadMail()
    }

    loadMail = () => {
        const { mailId } = this.props.match.params
        mailService.getMailById(mailId)
            .then((mail) => {
                if (!mail) return this.onGoBack()
                this.setState({ mail })
                // this.setState(prevState => ({
                //     ...prevState,
                //     mail: mail
                // }))
            })
    }

    onGoBack = () => {
        this.props.history.push('/mail')
    }

    render() {
        const { mail } = this.state
        if (!mail) return <div>Loading...</div>
        return <section className="mail-details">
            <button onClick={this.onGoBack}>Go Back</button>
            <h1>{mail.subject}</h1>
            <div>{mail.to}</div>
            <div>{`${utilService.getDayOfMonth(mail.sentAt) + ' ' + utilService.getMonthName(mail.sentAt)}`}</div>
            <p>{mail.body}</p>
        </section>
    }
}