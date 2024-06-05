const EducationItem = ({ yearRange, degree, institution, backgroundColor }) => (
    <div
        className="education-item py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2"
        style={{ backgroundColor }}
    >
        <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">
            {yearRange}
        </span>
        <h3 className="text-xl dark:text-white">{degree}</h3>
        <p className="dark:text-[#b7b7b7]">{institution}</p>
    </div>
);

export default EducationItem;