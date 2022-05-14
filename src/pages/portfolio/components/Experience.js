import {Splide, SplideSlide} from "@splidejs/react-splide";
import Job from "./Job";
import {useEffect, useState} from "react";

const Experience = ({width}) => {

    const [pages, setPages] = useState(Math.floor(width / 900) + 1)

    useEffect(()=>{
        setPages(Math.floor(width / 700) + 1)
    },[width])

    return (
        <div className={"fullpage experience dark gallery"} id={"experience"}>
            <p data-aos={"fade-right"}>
                <br/>
                    <b>My work experience</b> started when I was 16 years old, starting with hospitality and retail-based
                    positions. Although they are not the most relevant to my career path, I still believe there I had
                    learned plenty from them in regards to depending on each other, reliability and teamwork. Since last
                    year I have been moving more toward the education industry. I have experience working as a tutor in
                    a significant number of companies. Furthermore, I'm working as a Laboratory Demonstrator for Queen
                    Mary University in London. This position involves assisting, teaching and marking students, which is
                    a great opportunity to broaden my IT knowledge and improve my interpersonal skills.
            </p>
            <Splide
                options={{
                    rewind: true,
                    perPage: pages,
                    focus: 'center',
                    start: 0
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