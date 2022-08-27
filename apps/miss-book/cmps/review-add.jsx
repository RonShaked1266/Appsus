import { bookService } from "../services/book.service.js"
const { NavLink,  withRouter } = ReactRouterDOM
// const { Link } = ReactRouterDOM
export class _ReviewAdd extends React.Component {
    state = {
        book: null,
        review: {
            fullName: 'Books Reader',
            rate: '',
            date: Date.now(),
            text: ''
        }

    }

    componentDidMount() {
        console.log('from book edit', this.props);
        this.loadBook()
    }

    loadBook = () => {
        const { bookId } = this.props.match.params
        if (!bookId) return
        bookService.getById(bookId).then(book => this.setState({ book }))
    }
    
    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        this.setState((prevState) => ({
            book: { ...prevState.book, ...prevState.review, [field]: value }
        }))
    }

    onRemoveReview = () => {
        // const { book } = this.state.book
        
    }
    
    onSave = (ev) => {
        ev.preventDefault()
        const { bookId } = this.props.match.params
        console.log(bookId, this.state.review)
        // bookService.addReview()
        //     .then(() => {
        //         this.props.history.push('/book')
        //     })
    }

    render() {
        const { fullName, rate, date, text } = this.state.review
        return <section className="review-add">
            <form className="flex column align-center" onSubmit={this.onSave}>
                <label htmlFor="full-name">Full Name :</label>
                <input type="text" name="fullName"
                    value={fullName} id="full-name"
                    onChange={this.handleChange}
                />

                <label htmlFor="rate">Rate :</label>
                <input type="number" name="rate"
                    value={rate} id="rate"
                    min="1" max="5"
                    onChange={this.handleChange}
                />

                <label htmlFor="date">Read at :</label>
                <input type="date" name="date"
                    value={date} id="date"
                    onChange={this.handleChange}
                />

                <label htmlFor="text">Free text :</label>
                <textarea name="text"
                    value={text} id="text"
                    onChange={this.handleChange}
                ></textarea>

                <button>Save!</button>
            </form>


            <section className="reviews">
                <ul className="clean-list">Reviews :
                    <li className="flex space-between"><div>ff</div><button onClick={this.onRemoveReview}>✕</button ></li>
                </ul>
            </section>


        </section>
    }
}
export const ReviewAdd = withRouter(_ReviewAdd)
