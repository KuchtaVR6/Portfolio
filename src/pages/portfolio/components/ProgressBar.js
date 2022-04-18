import {useEffect, useRef, useState} from "react";

const ProgressBar = ({percentage,customScore}) => {
    const ref = useRef();
    const onScreen = useOnScreen(ref);

    const [current,setCurrent] = useState(0)

    useEffect(()=>{
        if(onScreen && current==0)
        {
            let counter = 0;
            setInterval(() => {
                if(counter<percentage*2)
                {
                    counter += (percentage/100);
                    setCurrent(counter)
                }
                else{
                    if(counter>percentage*2)
                    {
                        setCurrent(percentage*2)
                    }
                    clearInterval();
                }
            },25)
        }
    },[onScreen])

    return (
        <div className={"pBContainer"}  ref={ref}>
            <div className={"progressBar"}>
                <div className={"inner"} style={{width : `${current/2}%`}}></div>
            </div>
            <div className={"below"} style={{width : customScore? "100%" : `${current/2}%`, textAlign: "right"}}>{customScore? customScore : Math.ceil(current/2)+"%"}</div>
        </div>

    )
}

function useOnScreen(ref, rootMargin = "0px") {
    // State and setter for storing whether element is visible
    const [isIntersecting, setIntersecting] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Update our state when observer callback fires
                setIntersecting(entry.isIntersecting);
            },
            {
                rootMargin,
            }
        );
        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => {
            try{
                observer.unobserve(ref.current);
            }
            catch (e) {
                window.location = "";
            }
        };
    }, []); // Empty array ensures that effect is only run on mount and unmount
    return isIntersecting;
}

export default ProgressBar;