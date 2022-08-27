export class MailFilter extends React.Component {

    state = {
        filterBy: {
            status: 'inbox',
            txt: '',
            isRead: null,
            isStared: null,
            lables: []
        }
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        this.setState((prevState) => ({
            filterBy: {
                ...prevState.filterBy,
                [field]: value
            }
        }), () => {
            this.props.onSetFilter(this.state.filterBy)
        })
    }

    onFilter = (ev) => {
        ev.preventDefault()
        this.props.onSetFilter(this.state.filterBy)
    }

    render() {
        const { status, txt, isRead, isStared, lables } = this.state.filterBy
        return <section className="mail-filter main-layout">
            <form onSubmit={this.onFilter}>
                {/* <label htmlFor="by-txt">Search:</label> */}
                <input
                    ref={this.inputRef}
                    type="search"
                    placeholder="Search In Mail"
                    id="by-txt"
                    name="txt"
                    value={txt}
                    onChange={this.handleChange}
                />
                {/* <button>Filter</button> */}
            </form>
        </section>
    }
}