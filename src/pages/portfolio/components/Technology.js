import ProgressBar from "./ProgressBar";

const Technology = ({name, score, customScore}) => {
    if (score) {
        return (
            <div id={name.toLowerCase()} className={"technology"} data-aos={"fade-in"}>
                {name}
                <ProgressBar percentage={score} customScore={customScore}/>
            </div>
        )
    }
    return (
        <a href={"#"+name.toLowerCase()} className={"technology"} data-aos={"fade-in"}>
            {name}
        </a>
    )
}

export default Technology;