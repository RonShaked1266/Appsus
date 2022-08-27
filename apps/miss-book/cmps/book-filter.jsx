export class BookFilter extends React.Component {

    state = {
        filterBy: {
            name: '',
            price: '',

        },
    }

    inputRef = React.createRef()

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

    goSearch = () => {
        this.inputRef.current.focus()
    }

    onFilter = (ev) => {
        ev.preventDefault()
        this.props.onSetFilter(this.state.filterBy)
    }

    render() {
        const { name, price } = this.state.filterBy
        return <section className="book-filter">
            <form onSubmit={this.onFilter}>
                <label htmlFor="by-name">Name :</label>
                <input
                    ref={this.inputRef}
                    type="text"
                    placeholder="by name.."
                    id="by-name"
                    name="name"
                    value={name}
                    onChange={this.handleChange}
                />


                <label htmlFor="by-price">Price :</label>
                <input
                    type="number"
                    placeholder="by min speed.."
                    id="by-price"
                    name="price"
                    value={price}
                    onChange={this.handleChange}
                />

                <button>Filter!</button>

            </form>

            <button className="search-btn" onClick={this.goSearch}>Go Search!</button>
        </section>
    }
}