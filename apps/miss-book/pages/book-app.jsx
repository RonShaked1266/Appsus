import { BookFilter } from '../cmps/book-filter.jsx';
import { BookList } from '../cmps/book-list.jsx'
import { bookService } from './../services/book.service.js';
const { Link } = ReactRouterDOM
export class BookApp extends React.Component {

    state = {
        books: [],
        filterBy: null,
    }

    componentDidMount() {
        this.loadBooks()
    }

    loadBooks = () => {
        bookService.query(this.state.filterBy)
            .then((books) => this.setState({ books }))
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, () => {
            this.loadBooks()
        })
    }

    // onSelectBook = (bookId) => {
    //     bookService.getById(bookId)
    //         .then(book => this.setState({ selectedBook: book }))
    // }

    // onRemoveBook = (bookId) => {
    //     console.log('bookId from remove book', bookId);
    //     bookService.remove(bookId)
    //         .then(() => {
    //             const books = this.state.books.filter(book => book.id !== bookId)
    //             this.setState({ books, selectedbook: null })
    //         })
    // }

    render() {
        const { books } = this.state
        return (
            <section className="book-app">
                 <Link to="/book/add"><button>Add book</button></Link>
                <BookFilter onSetFilter={this.onSetFilter} />
                <BookList books={books} />
            </section>
        )
    }
}