import Technology from "./Technology";

const Project = ({path, title, text, tech}) => {
    let i = 0;
    return (
        <div className={"fullpage project dark"}>
                <div className={"row"}>
                    <div className={"col-md-7"}>
                        <img src={"projects/" + path} alt={title} className={"picture"}/>
                        <div className={"techContainer"}>
                            {tech.map((value) => {
                                i++;
                                return <Technology key={i} name={value}/>
                            })}
                        </div>
                    </div>

                    <div className={"col-md-5"}>
                        <h1>{title}</h1>
                        <p>
                            {text}
                        </p>
                    </div>
                </div>
        </div>
    )
}

export default Project;