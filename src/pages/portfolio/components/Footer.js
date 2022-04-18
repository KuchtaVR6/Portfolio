import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className={"dark footer"}>
            <Link to={"tutor"} data-aos={"zoom-in"}>Looking for an amazing tutor?</Link><br/>
            Copyright &copy; Patryk Kuchta 2022
        </footer>
    )
}

export default Footer;