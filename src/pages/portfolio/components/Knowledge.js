import Job from "./Job";
import Certificate from "./Certificate";
import Skill from "./Technology";

const Knowledge = () => {
    return (
        <div className={"fullpage gallery knowledge"} id={"knowledge"}>
            <div className={"row"}>
                <div className={"col-md-4 edu"}>
                    <h1>Education:</h1>
                    <Job
                        title={"Computer Science"}
                        company={"Queen Mary University"}
                        city={"London"}
                        country={"United Kingdom"}
                        startDate={"September 2022"}
                    />
                    <Job
                        title={"Advanced IT, Maths and Physics"}
                        company={"Zamoyski High School"}
                        city={"Warsaw"}
                        country={"Poland"}
                        startDate={"September 2017"}
                        endDate={"June 2020"}
                    />
                    <br/>
                    <br/>
                    <h1>Certificates:</h1>
                    <Certificate title={"English IELTS Academic C1"} year={"2020"}
                                 extra={"Listening: 9.0, Reading: 8.0, Writing: 6.5, Speaking: 7.0 Overall: 7.5"}
                                 />
                    <Certificate title={"Project Management Fundamentals"} year={"2019"}
                                 extra={"Issued by Project Management Institute"}
                                 />
                    <Certificate title={"Project Management Principles"} year={"2019"}
                                 extra={"Issued by Project Management Institute"}
                    />
                    <br/>
                    <br/>
                    <br/>
                </div>
                <div className={"col-md-4"}>
                    <h2>Programming Languages</h2>
                    <Skill name={"Java"} score={95} />
                    <Skill name={"Python"} score={90} />
                    <Skill name={"JavaScript"} score={85} />
                    <Skill name={"Typescript"} score={80} />
                    <Skill name={"C++"} score={60} />
                    <Skill name={"PHP"} score={30} />
                    <h2>Human Languages</h2>
                    <Skill name={"English"} score={80} customScore={"Fluent"}/>
                    <Skill name={"Polish"} score={100} customScore={"Native"}/>
                    <Skill name={"German"} score={65} customScore={"Intermediate"}/>
                </div>
                <div className={"col-md-4"}>
                    <h2>Other Skills</h2>
                    <Skill name={"HTML"} score={100} />
                    <Skill name={"CSS"} score={100} />
                    <Skill name={"SQL"} score={95} />
                    <Skill name={"React.js"} score={90} />
                    <Skill name={"Bootstrap"} score={70} />
                    <Skill name={"Photo-editing"} score={65} />
                    <Skill name={"Express.js"} score={60} />
                    <Skill name={"Linux"} score={55} />
                    <Skill name={"3D Design"} score={50} />
                </div>
            </div>
        </div>
    )
}

export default Knowledge;