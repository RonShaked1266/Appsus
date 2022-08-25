import { MailList } from "../cmps/mail-list.jsx";
import { mailService } from "../services/mail.service.js";
import { utilService } from "../../../services/util.service.js";
import { MailCreate } from "../cmps/mail-create.jsx";

export class MailIndex extends React.Component {

	state = {
		mails: [],
		filterBy: null,
		sortBy: null,
		isModalOpened: false
	}

	componentDidMount() {
		this.loadMails()
	}

	onRemoveMail = (id) => {
		// event.preventDefault()
		event.stopPropagation()
		// event.stopImmediatePropagation()
		console.log('event:', event)
		// event.nativeEvent.stopImmediatePropagation()
		mailService.removeMail(id)
			.then(mails => this.setState(prevState => ({
				...prevState,
				mails
			})))
	}

	onToggleModal = () => {
		const { isModalOpened } = this
		this.setState((prevState => ({
			...prevState,
			isModalOpened: !isModalOpened
		})))
	}

	onAddMail = (subject, to, body) => {
		event.preventDefault()
		// const { onToggleModal } = this
		const { mails, isModalOpened } = this.state
		// TODO: send an object to addMail function and change it in service, also change create
		// Immediatly Close modal!
		mailService.addMail(undefined, subject, body, true, to)
			.then(addedMail => this.setState(prevState => ({
				...prevState,
				mails: [addedMail, ...mails],
				isModalOpened: !isModalOpened
			}))) // Calling a callback function that calls set state currently doesn't change it's state immediatly - for example , () => onToggleModal
	}

	onOpenMail = (id) => {
		mailService.getMailById(id)
			.then(mail => alert(`subject: ${mail.subject}\nto: ${mail.to}\nsentAt: ${utilService.getDayOfMonth(mail.sentAt) + ' ' + utilService.getMonthName(mail.sentAt)}\nbody: ${mail.body}`))
			.catch(err => console.error('Error!', err))
	}

	loadMails = () => {
		mailService.query()
			.then(mails => this.setState({ mails }))
	}

	render() {
		const { onRemoveMail, onAddMail, onOpenMail, onToggleModal } = this
		const { mails, isModalOpened } = this.state
		return <section className="app main-layout">
			{isModalOpened && <MailCreate onAddMail={onAddMail}/>}
			<button className="btn-add-mail" onClick={onToggleModal}>Create New Mail</button>
			{mails.length ? <MailList mails={mails} onRemoveMail={onRemoveMail} onOpenMail={onOpenMail} /> : <div>No Mails</div>}
		</section>
	}
}
