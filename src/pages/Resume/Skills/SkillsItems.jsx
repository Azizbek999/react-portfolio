const SkillsItems = ({ skill, percentage, color }) => {
    const strokeDasharray = `${percentage * 0.99}px, 100px`;
    const strokeDashoffset = 0;
    const transition = "stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s";

    return (
        <div className="skills-item mb-7">
            <div className="flex justify-between py-1">
                <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">{skill}</span>
                <span className="text-base font-semibold text-gray-lite dark:text-[#A6A6A6]">{percentage}%</span>
            </div>
            <svg className="rc-progress-line" viewBox="0 0 100 1" preserveAspectRatio="none">
                <path className="rc-progress-line-trail" d="M 0.5,0.5 L 99.5,0.5" strokeLinecap="round" stroke="#D9D9D9" strokeWidth="1" fillOpacity="0"></path>
                <path
                    className="rc-progress-line-path"
                    d="M 0.5,0.5 L 99.5,0.5"
                    strokeLinecap="round"
                    stroke={color}
                    strokeWidth="1"
                    fillOpacity="0"
                    style={{ strokeDasharray, strokeDashoffset, transition }}
                />
            </svg>
        </div>
    );
};


export default SkillsItems