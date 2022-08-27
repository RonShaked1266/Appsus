const { Link } = ReactRouterDOM

export function BookPreview({ book }) {

    return <Link to={"/book/" + book.id}>
        <article className="book-preview" >
            <h3>{book.title.toUpperCase()}</h3>
            <br></br><h3>Price : {book.listPrice.amount} {book.listPrice.currencyCode}</h3>
            <div className="img-container">
                <img src={`${book.thumbnail}`} />
            </div>
        </article>
    </Link >
}