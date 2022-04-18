const NotFound = () => {
    return (
        <div className={"fullpage dark notfound"}>
            <div className={"container"}>
                <h1>Oops...</h1>
                This page doesn't exists<br/>
                <i>So many combinations of characters possible it's easy to get lost in them</i><br/><br/>

                <a href={"/"}>Go back to the home page</a>
            </div>
        </div>
    )
}

export default NotFound;