import "./App.css";
import About from "./components/About";
import Certification from "./components/Certification";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import "./components/TopBar";
import Contact from "./components/Contact";
import Publications from "./components/Publications";
import Pro from "./components/Pro";

function App() {
  return (
    <div className="wrapper">
      <About />
      <Education />
      <Experience />
      <Skills />
      <Certification />
      <Projects />
      <Publications />
      <Contact />
    
      <Footer />
    </div>
  );
}

export default App;
