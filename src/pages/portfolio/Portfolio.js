import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Knowledge from "./components/Knowledge";
import Footer from "./components/Footer";
import {useState} from "react";
import '../../index.css';

const Portfolio = () => {
    const [width, setWidth] = useState(1920);

    window.addEventListener('resize', () => {
        setWidth(window.innerWidth)
    });

    return (
        <div>
            <Intro/>
            <Projects/>
            <Experience width={width}/>
            <Knowledge/>
            <Footer/>
        </div>
    )
}

export default Portfolio;