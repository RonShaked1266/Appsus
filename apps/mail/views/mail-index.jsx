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

	onRemoveMail = (id) => {
		mailService.removeMail(id)
		.then(mails => this.setState(prevState => ({
            ...prevState,
			mails
		})))
	}

	onAddMail = () => {
		const { mails } = this.state
		const subject = prompt('Enter Subject:')
		const to = prompt('Enter a mail:')
		const body = prompt('Enter Message:')
		mailService.addMail(undefined, subject, body, true, to)
		.then(addedMail => this.setState(prevState => ({
            ...prevState,
			mails: [addedMail, ...mails]
		})))
	}

	loadMails = () => {
		mailService.query()
			.then(mails => this.setState({ mails }))
	}

	render() {
		const { onRemoveMail, onAddMail} = this
		const { mails } = this.state
		return <section className="app main-layout">
			<button className="btn-add-mail" onClick={onAddMail}>Add Mail</button>
			{mails.length ? <MailList mails={mails} onRemoveMail={onRemoveMail}/> : <div>No Mails</div>}
		</section>
	}
}
