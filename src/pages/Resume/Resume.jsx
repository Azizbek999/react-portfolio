import Education from "./Education/Education"
import Experience from "./Experience/Experience"
import Skills from "./Skills/Skills"
import Knowladges from "./Knowlages/Knowladges"
import "./Resume.css"
import Footer from "../../components/Footer.tsx"

const Resume = () => {
    return (
        <div className="Resume">
            <div className="Resume-container"></div>
            <div className="resume-about-me">
                <div>
                    <h2>Resume</h2>
                    <div>
                        <div className="flex-conatiner-resume">
                            <Education />
                            <Experience />
                        </div>
                    </div>
                </div>
            </div>
            <div className="Skills-Knowladge-Container">
                <div className="flex-conatiner-resume">
                    <Skills className="item" />
                    <Knowladges className="item" />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Resume