import { Link } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "./UserContext"
import { ThemeContext } from "./ThemeContext"


function Navbar(){

    const username=useContext(UserContext)

    const{theme,setTheme}=useContext(ThemeContext)

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
            <button onClick={()=>{setTheme(theme=="light"?"dark":"light")}}>{theme}</button>
        </nav>
    )
}

export default Navbar