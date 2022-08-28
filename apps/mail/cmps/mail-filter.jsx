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

    componentDidMount() {
        this.props.onSetFilter(this.state.filterBy)
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
        return <section className="mail-filter">
            <form className="flex space-between main-input" onSubmit={this.onFilter}>
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
                <div className="btn-container">
                    <button><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>
                {/* <button>Filter</button> */}
            </form>
        </section>
    }
}