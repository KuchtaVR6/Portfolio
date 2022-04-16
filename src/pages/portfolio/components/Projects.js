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
                    lazyLoad: 'nearby'
                }}
            >
                <SplideSlide>
                    <Project path={"port1.png"} title={"My previous portfolio website"}
                             text={"This website was created with a clear and elegant design in mind. This meant reducing flamboyant animations and effects to the minimum as that would make it harder the convey the message. To create this website I have used HTML, CSS and Bootstrap. The absence of javascript is to ensure maximum optimisation and compatibility. Furthermore, this will mean that this website will be very responsive no matter what device is being used. Use of Bootstrap only adds to the compatibility argument."}
                             tech={["HTML","CSS","BOOTSTRAP"]}/>
                </SplideSlide>

                <SplideSlide>
                    <Project
                        tech={["HTML","CSS","BOOTSTRAP"]}/>
                </SplideSlide>

                <SplideSlide>
                    <Project
                        tech={["HTML","CSS","BOOTSTRAP"]}/>
                </SplideSlide>

                <SplideSlide>
                    <Project
                        tech={["HTML","CSS","BOOTSTRAP"]}/>
                </SplideSlide>

            </Splide>


        </div>
    )
}

export default Projects;