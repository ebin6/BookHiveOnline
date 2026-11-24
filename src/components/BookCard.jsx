function BookCard(props){
    return(
        <div>
            <h3>{props.book_name}</h3>
            <p>Rs {props.price}</p>
            <p>{props.author}</p>
        </div>
    )
}

export default BookCard