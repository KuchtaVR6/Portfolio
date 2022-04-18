import Technology from "./Technology";
import {FaGithubSquare} from "react-icons/fa";
import {BiLinkExternal} from "react-icons/bi";

const Project = ({path, title, text, tech, github, access}) => {
    let i = 0;
    return (
        <div className={"fullpage project dark"}>
                <div className={"row"}>
                    <div className={"col-md-7"}>
                        <img src={"projects/" + path} alt={title} className={"picture"} data-aos={"fade-in"}/>
                        <h2 data-aos={"fade-right"}>Technologies Used:</h2>
                        <div className={"techContainer"}>
                            {tech.map((value) => {
                                i++;
                                return <Technology key={i} name={value}/>
                            })}
                        </div>
                    </div>

                    <div className={"col-md-5"}>
                        <h1 data-aos={"fade-left"}>{title}</h1>
                        <p data-aos={"fade-left"}>
                            {text}
                        </p>
                        {github? <a href={github} data-aos={"fade-left"}><FaGithubSquare size={75}></FaGithubSquare></a>:""}
                        {access? <a href={access} data-aos={"fade-left"}><BiLinkExternal size={75}></BiLinkExternal></a>:""}
                    </div>
                </div>
        </div>
    )
}

export default Project;