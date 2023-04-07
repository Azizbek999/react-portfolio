import { useState } from "react";
import {
    Link,
} from "react-router-dom";
import "./Menu.css"


const Menu = () => {
    const [activeLink, setActiveLink] = useState('Home');

    return (
        <div className='navbar'>
            <Link className={activeLink === 'Home' ? 'navbar-link active' : 'navbar-link'} onClick={(e) => setActiveLink("Home")} to={"/"}>Home</Link>
            <Link className={activeLink === 'Resume' ? 'navbar-link active' : 'navbar-link'} onClick={(e) => setActiveLink("Resume")} to={"/Resume"}>Resume</Link>
            <Link className={activeLink === 'Works' ? 'navbar-link active' : 'navbar-link'} onClick={(e) => setActiveLink("Works")} to={"/Works"}>Works</Link>
            <Link className={activeLink === 'Contact' ? 'navbar-link active' : 'navbar-link'} onClick={(e) => setActiveLink("Contact")} to={"/Contact"}>Contact</Link>
        </div>
    )
}

export default Menu