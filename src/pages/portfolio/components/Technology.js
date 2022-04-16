const Technology = ({name, score}) => {
    if (score) {
        return (
            <>
            </>
        )
    }
    return (
        <a href={"#"+name.toLowerCase()} className={"technology"} data-aos={"fade-in"}>
            {name}
        </a>
    )
}

export default Technology;