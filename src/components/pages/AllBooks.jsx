import BookCard from "../BookCard";
import { useState,useEffect } from "react";
import axios from "axios";

function AllBooks(){

const [books,setBooks] = useState([])

const fetchBooks=async()=>{
    const response=await axios.get("http://127.0.0.1:8000/api/books/")
    setBooks(response.data)
  
}

useEffect(()=>{
    fetchBooks()
},[])


    return(
        <div>
            <h1>All Books</h1>
            <section style={{display:"flex",gap:"50px",flexWrap:"wrap",padding:"60px"}}>
                {
                    books.map((book)=>(
                        <BookCard key={book.id} book_name={book.title}
                         price={book.price} author={book.author} id={book.id}/>
                    ))
                }
            </section>
        </div>

    )
}

export default AllBooks