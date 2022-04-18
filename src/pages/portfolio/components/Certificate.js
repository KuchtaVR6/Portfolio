const Certificate = ({title,year,extra}) => {
    return(
        <div className={"light job"} data-aos={"fade-right"}>
                        <span style={{fontSize: "1.3em"}}>
                            <b className={"text-red-800"}>{title}</b>
                            <div style={{textAlign: "right"}}><b>{year}</b></div>
                        </span>
            {extra? <hr/> : ""}
            {extra}
        </div>
    )
}

export default Certificate;