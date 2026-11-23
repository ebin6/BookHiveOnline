function BookCard(props){
    return(
        <div>
            <img src={props.image} style={{width:"200px",height:"250px"}}/>
            <h3>{props.book_name}</h3>
            <p>Rs {props.price}</p>
            <p>{props.author}</p>
        </div>
    )
}

export default BookCard