import "./Skills.css"
import SkillsItems from "./SkillsItems"


const Skills = () => {
    const skillsData = [
        { skill: "Front-End (React)", percentage: 90, color: "#FF6464" },
        { skill: "Back-End (Node.js)", percentage: 95, color: "#9272D4" },
        { skill: "Database Management (MongoDB)", percentage: 85, color: "#5185D4" },
        { skill: "DevOps (CI/CD)", percentage: 80, color: "#CA56F2" },
    ];

    return (
        <div className="Skills col-span-1">
            <h4 className="text-5xl dark:text-white font-medium mb-6">Working Skills</h4>
            {skillsData.map((skill, index) => (
                <SkillsItems key={index} {...skill} />
            ))}
        </div>
    );
}

export default Skills