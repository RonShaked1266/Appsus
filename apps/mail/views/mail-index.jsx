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
		const { mails } = this.state
		mailService.removeMail(id)
			.then(removedMail => this.setState({ mails: mails.filter(mail => mail.id !== removedMail.id) }, () => this.loadMails()))
		// .then(removedMail => this.setState(prevState => ({
        //     ...prevState,
		// 	mails: mails.filter(mail => mail.id !== removedMail.id)
		// })))
		
	}

	onAddMail = () => {
		const { mails } = this.state
		mailService.removeMail()
		.then(addedMail => this.setState({ mails: [addedMail, ...mails] }))
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
