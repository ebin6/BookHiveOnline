import BookCard from "../BookCard";

function AllBooks(){

const books = [
  {
    id: 1,
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Adventure",
    price: 299,
    rating: 4.5,
    image: "https://covers.openlibrary.org/b/isbn/9780062315007-L.jpg"
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self-Help",
    price: 399,
    rating: 4.8,
    image: "https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg"
  },
  {
    id: 3,
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    genre: "Finance",
    price: 350,
    rating: 4.6,
    image: "https://covers.openlibrary.org/b/isbn/9781612680194-L.jpg"
  },
  {
    id: 4,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic Fiction",
    price: 250,
    rating: 4.2,
    image: "https://covers.openlibrary.org/b/isbn/9780743273565-L.jpg"
  },
  {
    id: 5,
    title: "Ikigai",
    author: "Hector Garcia and Francesc Miralles",
    genre: "Self-Help",
    price: 280,
    rating: 4.4,
    image: "https://covers.openlibrary.org/b/isbn/9780143130727-L.jpg"
  },
  {
    id: 6,
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    genre: "Fantasy",
    price: 450,
    rating: 4.9,
    image: "https://covers.openlibrary.org/b/isbn/9780590353427-L.jpg"
  },
  {
    id: 7,
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    genre: "Personal Development",
    price: 320,
    rating: 4.3,
    image: "https://covers.openlibrary.org/b/isbn/9781585424337-L.jpg"
  },
  {
    id: 8,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    genre: "Finance",
    price: 375,
    rating: 4.7,
    image: "https://covers.openlibrary.org/b/isbn/9780857197689-L.jpg"
  }
];



    return(
        <div>
            <h1>All Books</h1>
            <section style={{display:"flex",gap:"50px",flexWrap:"wrap",padding:"60px"}}>
                {
                    books.map((book)=>(
                        <BookCard key={book.id} book_name={book.title}
                        image={book.image} price={book.price} author={book.author}/>
                    ))
                }
            </section>
        </div>

    )
}

export default AllBooks