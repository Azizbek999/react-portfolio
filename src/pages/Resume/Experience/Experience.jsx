import "./Experience.css"
// import EducationItem from "./EducationItem/EducationItem"
import EducationEntry from "../EducationEntry";

const Experience = () => {
    const educationData = [
        { dateRange: "2021-2023", degree: "Ph.D in Horriblensess", institution: "ABC University, Los Angeles, CA" },
        { dateRange: "2019 - Present", degree: "Sr. Software Tester", institution: "Google Inc." },
        { dateRange: "2021", degree: "Best Developer", institution: "University Of Melbourne, NA" },
    ];

    return (
        <div>
            <div className="flex items-center space-x-2 mb-4">
                <div className="text-6xl text-[#F95054]">
                    <svg className="svg-exp" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"></path></svg>
                </div>
                <h4 className="h4-experience text-5xl dark:text-white font-medium">Experience</h4>
            </div>
            <div className="education-entries">
                {educationData.map((entry, index) => (
                    <EducationEntry className="item-style-2" key={index} {...entry} />
                ))}
            </div>
        </div>

    )
}

export default Experience