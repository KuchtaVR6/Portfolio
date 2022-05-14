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
                        <div className={"oneRow"}>
                            <img src={"portfolio/logo.svg"} alt={"logo saying Kuchta"} className={"logo"}/>
                            <a href={"#projects"}>Projects</a>
                            <a href={"#experience"}>Experience</a>
                            <a href={"#knowledge"}>Knowledge</a>
                            <a href={"tutor.html"}>Tutoring</a>
                        </div>
                        <div className={"contact"}>
                            <a href={"mailto: patrick@kuchta.uk"}>patrick@kuchta.uk</a>&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;
                            <a href={"tel:07467174589"}>07467174589</a><br/>
                        </div>
                    </div>
                </div>
                <div className={"mainContent"}>
                    <div className={"textContainer"}>
                        <div className={"mainText"} data-aos={"fade-in"} data-aos-duration={"1000"}>
                            <div className={"big"}>
                                <span style={{color: "#ff0000"}}>{greeting()}</span><br/> I'm <b>Patryk
                                Kuchta</b><br/> an aspiring<br/> <b>Software Engineer</b>.
                            </div>
                            <span data-aos={"fade-in"} data-aos-offset={"200"}><i>and yes, the greeting is synced to your time.</i></span>
                        </div>

                    </div>
                    <div className={"picContainer"}>
                            <img src={"portfolio/me.png"} alt={"me"} className={"largePic"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro;