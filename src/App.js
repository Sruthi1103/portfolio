import "./App.css";
import About from "./components/About";
import Certification from "./components/Certification";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import "./components/TopBar";

function App() {
  return (
    <div className="wrapper">
      <About />
      <Education />
      <Experience />
      <Skills />
      <Certification />
    </div>
  );
}

export default App;
