import { Link } from "react-router-dom"

function Navbar(){
    return(
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/all-books">All Books</Link></li>
                <li><Link to="/all-students">All Students</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li>Login</li>
            </ul>
        </nav>
    )
}

export default Navbar