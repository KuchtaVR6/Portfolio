const Job = ({industry, company, startDate, title, city, country, endDate}) => {
    return (
        <div className={"light job"}>
            <span style={{fontSize: "1.3em"}}>
                <b>{title + " "}</b>at<br/>
                <b>{company + " "}</b>in<br/>
            </span>
            <b>{city}, {country}.</b>
            <div style={{textAlign: "right"}}><i>{industry}</i></div>
            <hr/>
            {endDate ? startDate + " - " + endDate : "Since " + startDate}

        </div>
    )
}

export default Job;