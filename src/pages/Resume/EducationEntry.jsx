import React from "react";
import "./EducationEntry.css"

const EducationEntry = ({ className, dateRange, degree, institution }) => {
    return (
        <div className={`education-entry ${className}`}>
            <span className="text-tiny">{dateRange}</span>
            <h3 className="text-xl">{degree}</h3>
            <p className="">{institution}</p>
        </div>
    );
};

export default EducationEntry;