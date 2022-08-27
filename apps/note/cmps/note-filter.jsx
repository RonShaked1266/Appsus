export class NoteFilter extends React.Component {

    state = {
        filterBy: {
            name: '',
            type: '',

        },
    }

    inputRef = React.createRef()

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.value
        this.setState((prevState) => ({
            filterBy: {
                ...prevState.filterBy,
                [field]: value
            }
        }), () => {
            this.props.onSetFilter(this.state.filterBy)
        })
    }

    goSearch = () => {
        this.inputRef.current.focus()
    }

    onFilter = (ev) => {
        ev.preventDefault()
        this.props.onSetFilter(this.state.filterBy)
    }

    render() {
        const { name, type } = this.state.filterBy
        const {handleChange, onFilter } = this
        // console.log(type)
        return <section className="note-filter">
            <form className="flex space-between main-input" onSubmit={onFilter}>
                <input
                    ref={this.inputRef}
                    type="text"
                    placeholder="Search.."
                    id="by-type"
                    name="type"
                    value={type}
                    onChange={handleChange}
                />
                <div className="btns-container">
                    {/* <button><img src="assets/icons/add.svg" /></button> */}
                    <button><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>
            </form>

            {/* <button className="search-btn" onClick={this.goSearch}>Go Search!</button> */}
        </section>
    }
}