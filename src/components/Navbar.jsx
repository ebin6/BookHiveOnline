import { Link } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "./UserContext"
function Navbar(){

    const username=useContext(UserContext)

    return(
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/all-books">All Books</Link></li>
                <li><Link to="/all-students">All Students</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li>Login</li>
            </ul>
            <div>
                {username}
            </div>
        </nav>
    )
}

export default Navbar