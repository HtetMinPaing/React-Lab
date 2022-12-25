import {Link,Route,Routes} from "react-router-dom"
import Contact from "./Contact"
import Home from "./Home"
import About from "./About"

function Application (){
    return(
        <div>
            <nav>
                <Link to="/" className="nav-item">Home</Link>
                <Link to="/contact" className="nav-item">Contact</Link>
                <Link to="/about" className="nav-item">About</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
                <Route path="/about" element={<About/>}></Route>
            </Routes>
        </div>
    )
}

export default Application