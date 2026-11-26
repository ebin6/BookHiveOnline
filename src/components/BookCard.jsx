import { Link } from "react-router-dom"

function BookCard(props){
    return(
        <div className="card light">
            <h3>{props.book_name}</h3>
            <p>Rs {props.price}</p>
            <p>{props.author}</p>
            <Link to={`/book/${props.id}`}>View Detail</Link>
        </div>
    )
}

export default BookCard