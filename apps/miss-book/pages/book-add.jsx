import { bookService } from "../services/book.service.js"

export class BookAdd extends React.Component {

    state = {
        search: '',
        options: []
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.value
        this.setState({ [field]: value })
    }

    onAddBook = (book) => {
        bookService.addGoogleBook(book)
    }

    onSearch = (ev) => {
        const { search, options } = this.state
        ev.preventDefault()
        bookService.getOptions(search)
            .then(res => {
                this.setState({ options: res.slice(0, 5) })
            })
    }

    render() {
        const { search, options } = this.state
        const { onSearch, handleChange } = this
        return <section className="book-add">
            <form className="flex column align-center" onSubmit={onSearch}>
                <input type="text" name="search"
                    value={search} id="search"
                    onChange={handleChange}
                />
                <button htmlFor="search">Search</button>
            </form>

            <ul>
                {
                    options.map(option => <li className="options">
                        {option.volumeInfo.title}
                        <button onClick={() => this.onAddBook(option)}>+</button>
                    </li>)
                }
            </ul>


        </section >
    }
}