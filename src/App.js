import Course from "./components/Course";
import Contact from "./components/Contact";
import Home from "./components/Home";
import About from "./components/About";
import {Link,Routes,Route} from "react-router-dom"; 
import "./App.css"
function App() {
  return (
    <div className="app">
      <div className="title">
        <h1>LearnAce</h1>
      </div>
      <nav>
        <ul>
          <li><Link to='/'><h3>Home</h3></Link></li>
          <li><Link to="/about" ><h3>About</h3></Link></li>
          <li><Link to="/course"><h3>Course</h3></Link></li>
          <li><Link to="/contact"><h3>Contact</h3></Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/course" element={<Course />}>
      </Routes>
    </div>
  );
}

export default App;
