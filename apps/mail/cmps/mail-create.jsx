export class MailCreate extends React.Component {

    state = {
        mail: {
            subject: '',
            to: '',
            body: ''
        }
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        this.setState(({ mail }) => ({
            mail: { ...mail, [field]: value }
        }))
    }

    render() {
        const { handleChange } = this
        console.log('props:', this.props)
        const { onAddMail } = this.props
        const { subject, to, body } = this.state.mail
        return <div className="modal-container">
            <form className="flex column align-center" onSubmit={() => onAddMail(subject, to, body)}>
                <label htmlFor="subject">Subject:</label>
                <input type="text" name="subject"
                    value={subject} id="subject"
                    onChange={handleChange}
                />
                <label htmlFor="to">To:</label>
                <input type="text" name="to"
                    value={to} id="to"
                    onChange={handleChange}
                />
                <label htmlFor="body">Enter Your Message Here:</label>
                <textarea type="text" name="body"
                    value={body} id="body"
                    onChange={handleChange}
                />
                <button>Send</button>
            </form>
        </div>
    }
}