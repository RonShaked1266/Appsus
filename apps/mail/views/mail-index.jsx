import { MailList } from "../cmps/mail-list.jsx";
import { mailService } from "../services/mail.service.js";
// import { utilService } from "../../../services/util.service.js";
import { MailCreate } from "../cmps/mail-create.jsx";
import { MailDetails } from "../cmps/mail-details.jsx";
import { MailInbox } from "../cmps/mail-inbox.jsx";
import { MailFilter } from "../cmps/mail-filter.jsx";

const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

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
		const { onToggleModal } = this
		const { mails, isModalOpened } = this.state
		// TODO: send an object to addMail function and change it in service, also change create
		// Immediatly Close modal!
		mailService.addMail({subject, to, body})
			.then(addedMail => this.setState(prevState => ({
				...prevState,
				mails: [addedMail, ...mails],
				isModalOpened: !isModalOpened
			}))) // Calling a callback function that calls set state currently doesn't change it's state immediatly - for example , () => onToggleModal
	}

	// onOpenMail = (id) => {
	// 	mailService.getMailById(id)
	// 		.then(mail => alert(`subject: ${mail.subject}\nto: ${mail.to}\nsentAt: ${utilService.getDayOfMonth(mail.sentAt) + ' ' + utilService.getMonthName(mail.sentAt)}\nbody: ${mail.body}`))
	// 		.catch(err => console.error('Error!', err))
	// }

	loadMails = () => {
		mailService.query(this.state.filterBy)
			.then(mails => this.setState({ mails }))
	}

	onSetFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadMails)
    }

	render() {
		const { onRemoveMail, onAddMail, onToggleModal, onSetFilter } = this
		{/*onOpenMail, */ }
		const { mails, isModalOpened } = this.state
		return <Router>
			<MailFilter onSetFilter={onSetFilter}/>
			<Switch>
				<Route path="/mail/:mailId" component={MailDetails} />
				<Route path="/mail" component={() => <MailInbox onAddMail={onAddMail} onToggleModal={onToggleModal} onRemoveMail={onRemoveMail} mails={mails} isModalOpened={isModalOpened}/>}/>
				{/* <section className="app main-layout">
					{isModalOpened && <MailCreate onAddMail={onAddMail} />}
					<button className="btn-add-mail" onClick={onToggleModal}>Create New Mail</button>
					{mails.length ? <MailList mails={mails} onRemoveMail={onRemoveMail} /> : <div>No Mails</div>}
					{/*onOpenMail={onOpenMail}*/}
				{/*</section> */}
			</Switch>
		</Router>
	}
}
