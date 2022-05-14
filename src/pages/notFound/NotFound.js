const NotFound = () => {
    return (
        <div className={"fullpage dark notfound"}>
            <div className={"container"}>
                <h1>Oops...</h1>
                This page doesn't exists<br/>
                <br/>
                <a href={"/"}>Go back to the home page</a>
            </div>
        </div>
    )
}

export default NotFound;