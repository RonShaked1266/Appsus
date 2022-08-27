import { LongTxt } from '../cmps/long-txt.jsx';
import { bookService } from "../services/book.service.js"
import { ReviewAdd } from '../cmps/review-add.jsx';

// const { Link } = ReactRouterDOM
export class BookDetails extends React.Component {
    state = {
        book: null
    }

    componentDidMount() {
        // setTimeout(() => {
        this.loadBook()
        // }, 2000)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.bookId !== this.props.match.params.bookId) {
            this.loadBook()
        }
    }

    loadBook = () => {
        const { bookId } = this.props.match.params
        bookService.getById(bookId)
            .then((book) => {
                if (!book) return this.onGoBack()
                this.setState({ book })
            })
    }

    onRemoveBook = () => {
        const { book } = this.state
        bookService.remove(book.id)
            .then(this.onGoBack)
    }

    onGoBack = () => {
        this.props.history.push('/book')
    }

    getPageCountText = () => {
        const { book } = this.state
        if (book.pageCount >= 500) return '- Long reding'
        else if (book.pageCount >= 200) return '- Decent Reading'
        else if (book.pageCount <= 100) return '- Light Reading'
        else return ''
    }

    currYear = 2022

    getPublishedDateText = () => {
        const { book } = this.state
        if (book.publishedDate <= this.currYear - 10) return '- Veteran Book'
        else if (book.publishedDate >= currYear - 1) return '- New!'
        else return ''
    }

    getPriceClass = () => {
        const { book } = this.state
        if (book.listPrice.amount >= 150) return 'red'
        else if (book.listPrice.amount <= 20) return 'green'
        else return ''
    }

    render() {
        const { book } = this.state
        if (!book) return <div>Loading...</div>
        return <section className="book-details">
            <h2>{book.title.toUpperCase()}</h2>
            <h3>{book.subtitle}</h3>
            <br></br><h4>Author: {book.authors}</h4>
            <br></br><h4>Published date: {book.publishedDate} {this.getPublishedDateText()}</h4>
            {/* <LongTxt text={book.description} /> */}
            <div className="img-container">
                <img src={`${book.thumbnail}`} />
            </div>
            <p>{book.description}</p>
            <br></br><h4>Categories: {book.categories}</h4>
            <br></br><h4>Language: {book.language}</h4>
            <br></br><h4>Page count: {book.pageCount} {this.getPageCountText()}</h4>
            <br></br><h4 className={this.getPriceClass()}>Price : {book.listPrice.amount} {book.listPrice.currencyCode}</h4>
            <br></br><button onClick={this.onGoBack}>Go Back!</button>
            <button onClick={this.onRemoveBook}>Remove Me!</button>
            <ReviewAdd />
        </section>
    }
}