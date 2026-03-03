import { FaArrowDown } from "react-icons/fa6";
import "./styles/App.css";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";

function App() {
    return (
        <>
            <section className="main-section">
                <h1>Edward Nguyen</h1>
                <span className="sub">Software Developer</span>
                <div className="down-arrow-icon-wrapper">
                    <FaArrowDown className="down-arrow-icon" />
                </div>
            </section>
            <Projects />
            <Skills />
            <Contact />
        </>
    );
}

export default App;
