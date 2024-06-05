import "./Education.css"
import EducationEntry from "../EducationEntry";

const Education = () => {
    const educationData = [
        { dateRange: "2021-2024", degree: "Bachelor's in UoPeople", institution: "University of the People" },
        { dateRange: "2022", degree: "Google IT Support Certificate", institution: "Google Inc." },
        { dateRange: "2023", degree: "3 IT Courses in Sophia", institution: "Sophia Learning" },
    ];

    return (
        <div>
            <div className="flex items-center space-x-2 mb-4">
                <div className="text-6xl text-[#F95054]">
                    <svg
                        className="svg-edu"
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path fill="none" d="M0 0h24v24H0V0z"></path>
                        <path d="M20 7h-4V5l-2-2h-4L8 5v2H4c-1.1 0-2 .9-2 2v5c0 .75.4 1.38 1 1.73V19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-3.28c.59-.35 1-.99 1-1.72V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zM4 9h16v5h-5v-3H9v3H4V9zm9 6h-2v-2h2v2zm6 4H5v-3h4v1h6v-1h4v3z"></path>
                    </svg>
                </div>
                <h4 className="h4-education text-5xl dark:text-white font-medium">Education</h4>
            </div>
            <div className="education-entries">
                {educationData.map((entry, index) => (
                    <EducationEntry className="item-style-1" key={index} {...entry} />
                ))}
            </div>




        </div>

    )
}

export default Education