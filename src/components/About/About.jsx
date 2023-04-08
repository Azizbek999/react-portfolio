import "./About.css"
import Links from "./Links.tsx"
import Info from "./Info.tsx"

const About = () => {

    return (
        <div className="About">
            <div>
                <img src="myPhoto.jpg" alt="" />
                <div className="top">
                    <h1>Azizbek Zairov</h1>
                    <h3>Fullstack Developer</h3>
                </div>
                <Links />
            </div>
            <div>
                <Info />
            </div>
            <a href=""></a>
        </div>
    )
}

export default About