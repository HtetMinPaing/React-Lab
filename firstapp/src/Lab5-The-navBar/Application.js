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

/*
CSS file
nav{
  display: flex;
  justify-content: center;
  background-color: #e0e0e0;
  gap: 2.5rem;
  padding: 1rem 2rem;
}

.nav-item{
  color: rgb(182, 190, 197);
  text-decoration: none;
}

.nav-item:hover{
  color: rgb(23, 24, 24);
}

h1{
   margin: 0 10rem;
}
*/