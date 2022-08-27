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
        return <section className="mail-details main-layout">
            <div className="main-details-div-container">
                <div className="btn-go-back-container">
                    <button onClick={this.onGoBack}>
                        <i class="fa fa-arrow-left" aria-hidden="true"></i>
                    </button>
                </div>
                <h1 className="mail-subject">{mail.subject}</h1>
                <div>{mail.from}</div>
                <div>{`${utilService.getDayOfMonth(mail.sentAt) + ' ' + utilService.getMonthName(mail.sentAt)}`}</div>
                <p>{mail.body}</p>
            </div>
        </section>
    }
}