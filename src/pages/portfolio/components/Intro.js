import {Link} from "react-router-dom";

const Intro = () => {

    const greeting = () => {
        let hour = new Date().getHours();
        if (hour > 4 && hour < 12) {
            return "Good Morning!"
        } else if (hour < 18) {
            return "Good Afternoon!"
        } else {
            return "Good Evening!"
        }

    }

    return (
        <div className={"fullpage intro dark"}>
            <div className={"container-fluid"}>
                <div className={"row init"}>
                    <div className={"col-md-12 links"} data-aos={"zoom-in-down"} data-aos-duration={"1000"}>
                        <img src={"logo.svg"} alt={"logo saying Kuchta"} className={"logo"}/>
                        <a href={"#projects"}>Projects</a>
                        <a href={"#experience"}>Experience</a>
                        <a href={"#knowledge"}>Knowledge</a>
                        <Link to={"tutor"}>Tutoring</Link>
                        <div className={"contact"}>
                            <a href={"mailto: patrick@kuchta.uk"}>patrick@kuchta.uk</a>&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;
                            <a href={"tel:07467174589"}>07467174589</a><br/>
                        </div>
                    </div>
                </div>
                <div className={"row"}>
                    <div className={"col-md-8 textContainer"}>
                        <div className={"mainText"} data-aos={"fade-in"} data-aos-duration={"1000"}>
                            <div className={"big"}>
                                <span style={{color: "#ff0000"}}>{greeting()}</span><br/> I'm <b>Patryk Kuchta</b><br/> an aspiring<br/> <b>Software Engineer</b>.
                            </div>
                            <span data-aos={"fade-in"} data-aos-offset={"200"}><i>and yes, the greeting is synced to your time.</i></span>
                        </div>

                    </div>
                    <div className={"col-md-4 picContainer"}>
                        <img src={"me.png"} alt={"me"} className={"largePic"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro;