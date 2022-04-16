import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Knowledge from "./components/Knowledge";

const Portfolio = () =>
{
    return(
        <div>
            <Intro/>
            <Projects/>
            <Experience/>
            <Knowledge/>
        </div>
    )
}

export default Portfolio;