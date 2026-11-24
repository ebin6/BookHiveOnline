import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import AllStudents from "./components/pages/AllStudents"
import AllBooks from "./components/pages/AllBooks"
import Home from "./components/pages/Home"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Register from "./components/pages/Register"
import BookDetail from "./components/pages/BookDetail"


function App(){
  return(
   <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/all-books" element={<AllBooks/>}/>
        <Route path="/all-students" element={<AllStudents/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/book/:id" element={<BookDetail/>}/>
      </Routes>
      <Footer/>
   </BrowserRouter>
  )
}

export default App