import {Splide, SplideSlide} from "@splidejs/react-splide";
import Job from "./Job";
import {useState} from "react";

const Experience = () => {

    const [pages, setPages] = useState(Math.floor(window.innerWidth / 700) + 1)

    const resize = () => {
        let calc = Math.floor(window.innerWidth / 700) + 1;
        if (pages !== calc) {
            setPages(calc);
        }
    }

    window.addEventListener('resize', resize);

    return (
        <div className={"fullpage experience dark gallery"} id={"experience"}>
            <p data-aos={"fade-right"}>
                <br/>
                I am only 20 years old, but I have already worked in 4 different companies. This of course gave me
                a lot of insight into how companies work, both those big and startups. My early jobs centred around
                hospitality and retail, which gave me knowledge about problems that could be solved using IT in those
                areas. Lately, I'm mostly involved in positions about teaching and supporting students, which are
                stimulating my skills that are important in IT workplaces, for example, the ability to explain concepts
                to a 'non-IT' crowd, and leading a team.
            </p>
            <Splide
                options={{
                    rewind: true,
                    perPage: pages
                }}
            >
                <SplideSlide>
                    <Job
                        industry={"Education"}
                        title={"Laboratory Demonstrator"}
                        company={"Queen Mary University"}
                        city={"London"}
                        country={"United Kingdom"}
                        startDate={"September 2021"}
                    />
                </SplideSlide>

                <SplideSlide>
                    <Job
                        industry={"Education"}
                        title={"Tutor"}
                        company={"FireTechCamp"}
                        city={"London"}
                        country={"United Kingdom"}
                        startDate={"January 2022"}
                    />
                </SplideSlide>

                <SplideSlide>
                    <Job
                        industry={"Education"}
                        title={"Tutor"}
                        company={"MyTutor"}
                        city={"London"}
                        country={"United Kingdom"}
                        startDate={"December 2021"}
                    />
                </SplideSlide>

                <SplideSlide>
                    <Job
                        industry={"Education"}
                        title={"Coding Tutor"}
                        company={"Kodland"}
                        city={"London"}
                        country={"United Kingdom"}
                        startDate={"May"}
                        endDate={"August 2021"}
                    />
                </SplideSlide>

                <SplideSlide>
                    <Job
                        industry={"Retail"}
                        title={"Customer Assistant"}
                        company={"Morrisons"}
                        city={"London"}
                        country={"United Kingdom"}
                        startDate={"September 2020"}
                    />
                </SplideSlide>

                <SplideSlide>
                    <Job
                        industry={"Hospitality"}
                        title={"Bartender"}
                        company={"Delaware North"}
                        city={"London"}
                        country={"United Kingdom"}
                        startDate={"December 2021"}
                    />
                </SplideSlide>

                <SplideSlide>
                    <Job
                        industry={"Hospitality"}
                        title={"Customer Assistant"}
                        company={"McDonald's"}
                        city={"Warsaw"}
                        country={"Poland"}
                        startDate={"July"}
                        endDate={"August 2018"}
                    />
                </SplideSlide>

            </Splide>
        </div>
    )
}

export default Experience;