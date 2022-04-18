import {Splide, SplideSlide} from '@splidejs/react-splide';
import Project from "./Project";

const Projects = () => {
    return (
        <div className={"fullpage projects gallery"} id={"projects"}>
            <Splide
                options={{
                    rewind: true,
                    type: 'loop',
                    perPage: 1,
                }}
            >
                <SplideSlide>
                    <Project path={"cryptogram.png"} title={"Cryptocurrency wallet prototype"}
                             text={"This is one of my academic projects, the prototype that you can see in the figure was created from the ground up starting with the domain analysis for our idea. We have worked as a group of 6, where I have taken the position of a manager assigning tasks, keeping track of deadlines and checking the quality of work of others. There were lots of interesting challenges creating the prototype itself, like learning how to create a RestAPI, but the biggest challenge was effective teamwork, in which I believe we have succeeded, having all of our group contributing a significant work and having only minor problems with code integration. "}
                             tech={["TYPESCRIPT", "REACT.JS", "HTML", "CSS", "EXPRESS.JS", "JAVASCRIPT"]}
                             github={"https://github.com/KuchtaVR6/CryptoGramProject"}
                    />
                </SplideSlide>

                <SplideSlide>
                    <Project path={"photocast.png"} title={"Fully functional weather app"}
                             text={"This is also one of my academic projects, where the goal was to create a fully functional weather application with one stakeholder in mind, we have chosen to create an application tailored for photographers. While developing this application I have learned about creating a very usable and minimalistic User Interface, along with working with APIs. Furthermore, I have gained experience working in a team, where I also became the manager of the project.  "}
                             tech={["REACT.JS", "HTML", "JAVASCRIPT", "CSS"]}
                             github={"https://github.com/KuchtaVR6/PhotoCa.st"}
                    />
                </SplideSlide>

                <SplideSlide>
                    <Project path={"port2.png"} title={"Portfolio website for an Architect"}
                             text={"Another professional website, that I have created is a portfolio website for an Architect. The design was a vital part of the whole experience as an Architect needs to exhibit their design language. The creation of this website involved using HTML, CSS and Javascript. Javascript is mainly used for the integrated gallery view of each project. Whilst I didn't come up with the design, I was tasked with translating sketches into code. Furthermore, Bootstrap was used to ensure that the website still looks stunning on a mobile device or a vertical screen."}
                             tech={["JAVASCRIPT", "CSS", "HTML", "BOOTSTRAP"]}
                             github={"https://github.com/KuchtaVR6/Portfolio-for-an-Architect"}
                             access={"https://aleksandrakuchta.co.uk/"}
                    />
                </SplideSlide>

                <SplideSlide>
                    <Project path={"port1.png"} title={"My previous portfolio website"}
                             text={"This website was created as a challenge to myself to create an eye-pleasing and portable website with limited time. I decided to make it purely using HTML and CSS, and for the portability, I have used Bootstrap CSS. The resulting product is an informative, simple and good looking portfolio, which I was quite happy with. Throughout this academic year, I have gained more confidence in using React, I have decided to remake my portfolio this time with a more interesting and responsive design in mind, whilst maintaining the readability of the older version."}
                             tech={["HTML", "CSS", "BOOTSTRAP"]}
                             github={"https://github.com/KuchtaVR6/porfolio2021"}
                             access={"view/index.html"}
                    />
                </SplideSlide>

                <SplideSlide>
                    <Project
                        path={"proj2.png"}
                        title={"A discord bot for colourful messages"}
                        text={"To further expand my knowledge in python and APIs, I developed a fully functional bot that creates embedded messages. Although the task might seem not that hard, I gave myself a requirement that the system must have professional-grade exception catching and an interface that will make it very easy to use by someone less fluent in command based interaction. This made it a much bigger project with extensive testing and a steep learning curve. Even though it was my third discord bot this one was the most challenging and I have learned a lot from writing it."}
                        tech={["PYTHON", "HTML"]}
                        github={"https://github.com/KuchtaVR6/EmbederBot"}
                        access={"https://discord.com/api/oauth2/authorize?client_id=819208892834644008&permissions=0&scope=bot"}
                    />
                </SplideSlide>


                <SplideSlide>
                    <Project
                        path={"proj1.png"}
                        title={"DIY AndroidAuto"}
                        text={"A project that I did during the first lockdown, was creating an AndroidAuto based infotainment system for my Dads car. This project gave me a chance to work with Linux, Python, RaspberryPi, 3D printing and design (in Blender), soldering, relays and electronics in general. It had all features of a full AndroidAuto experience including wake on Ignition, separate volume adjustment and a touchscreen. Because I was only using the most basic electronic components possible this allowed me to design and create electrical circuits. Furthermore, a lot of parts were 3D printed and I had to ensure that components that I created were shake and heat resistant so they can survive in a car environment."}
                        tech={["PYTHON", "LINUX", "3D DESIGN"]}
                    />
                </SplideSlide>

                <SplideSlide>
                    <Project
                        path={"tutor.png"}
                        title={"My private tutoring website"}
                        text={ "This website was designed with accessibility and interactivity in mind. I created the front-end using the React library to make the client-side dynamic and eye-pleasing. In addition to stunning animations, the website has a \"contact me\" button that automatically sends two emails. Implementing this functionality has given me confidence in setting up DNS records and email certifications. Furthermore, I have gained knowledge in Security Engineering by researching and patching potential exploits in the systems."}
                        tech={["REACT.JS", "HTML", "JAVASCRIPT", "CSS", "BOOTSTRAP"]}
                        access={"tutor.html"}
                        github={"https://github.com/KuchtaVR6/Portfolio"}
                    />
                </SplideSlide>

                <SplideSlide>
                    <Project
                        path={"port3.png"}
                        title={"My current portfolio website"}
                        text={"And finally, this website is my most recent project. Design-wise I wanted to keep the website minimalistic but stunning at the same time to show my skills, and I have kept accessibility in mind. I had created this project with plentiful react to experience and I created this website with a very high standard of code and with reusability in mind so that I don't have to rewrite this website in the future. Admittedly I will probably end up doing it anyway because I love coding and improving my websites. "}
                        tech={["REACT.JS", "HTML", "JAVASCRIPT", "CSS", "BOOTSTRAP"]}
                        github={"https://github.com/KuchtaVR6/Portfolio"}
                        access={"/"}
                    />
                </SplideSlide>

            </Splide>
        </div>
    )
}

export default Projects;