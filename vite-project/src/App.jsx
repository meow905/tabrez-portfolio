import "./App.css";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return( <div className="app">
    <Navbar/>
    <Hero/>
    <Experience/>
    <Projects/>
    <Contact/>
  </div>
)
}

export default App;
