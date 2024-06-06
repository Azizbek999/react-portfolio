import Footer from "../../components/Footer.tsx"
import "./Works.css"
import { useState } from "react";

// Dummy data for the objects
const objects = [
    {
        id: 1,
        title: 'Chul urina',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: '/myPhoto.jpg', // Update with the actual path
        details: {
            project: 'Website',
            client: 'Envato',
            languages: 'Photoshop, Figma',
            preview: 'www.envato.com',
        }
    },
    {
        id: 2,
        title: 'Chul urina',
        
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: '/myPhoto.jpg', // Update with the actual path
        details: {
            project: 'Website',
            client: 'Envato',
            languages: 'Photoshop, Figma',
            preview: 'www.envato.com',
        }
    },
    // Add more objects as needed
];

const Works = () => {
    const [selectedObject, setSelectedObject] = useState(null);

    const handleObjectClick = (object) => {
        setSelectedObject(object);
    };

    const handleCloseModal = () => {
        setSelectedObject(null);
    };

    // const worksData = [
    //     { Project: "2021-2024", Client: "Bachelor's in UoPeople", Langages: "University of the People", Preview: "University of the People", Type: "University of the People", photo: "" },
    //     { Project: "2021-2024", Client: "Bachelor's in UoPeople", Langages: "University of the People", Preview: "University of the People", Type: "University of the People", photo: "" },
    //     { Project: "2021-2024", Client: "Bachelor's in UoPeople", Langages: "University of the People", Preview: "University of the People", Type: "University of the People", photo: "" },
    //     { Project: "2021-2024", Client: "Bachelor's in UoPeople", Langages: "University of the People", Preview: "University of the People", Type: "University of the People", photo: "" },
    //     { Project: "2021-2024", Client: "Bachelor's in UoPeople", Langages: "University of the People", Preview: "University of the People", Type: "University of the People", photo: "" },
    // ];


    return (
        <div className="Contact">
            <div className="Contact-container">
                <div className="Contact-me">
                    <h2>Contact</h2>
                </div>
                <div class="grid-container">
                    {objects.map((object) => (
                        <div className="portfolio-item" key={object.id} onClick={() => handleObjectClick(object)}>
                            <div className="image-container">
                                <img
                                    src={object.image}
                                    alt={object.title}
                                    width="300"
                                    height="300"
                                    className="portfolio-image"
                                />
                            </div>
                            <span className="category-text">
                                {object.details.project}
                            </span>
                            <h2 className="project-title">
                                {object.title}
                            </h2>
                        </div>
                        // <div className="object-card" key={object.id} onClick={() => handleObjectClick(object)}>
                        //     <img src={object.image} alt={object.title} />
                        //     <h3>{object.title}</h3>
                        // </div>
                    ))}
                </div>

                {selectedObject && <div className="overlay" onClick={handleCloseModal}></div>}
                {selectedObject && (
                    <div className="modal">
                        <div className="modal-inner">
                            <div className="modal-scroll">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 16 16"
                                    className="modal-close-icon"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                    onClick={handleCloseModal}
                                >
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"></path>
                                </svg>
                                <h2 className="modal-title">{selectedObject.title}</h2>
                                <div className="modal-grid">
                                    <div className="modal-details">
                                        <p className="modal-text">
                                            <svg
                                                stroke="currentColor"
                                                fill="none"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="modal-icon"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                                <polyline points="14 2 14 8 20 8"></polyline>
                                                <line x1="12" y1="18" x2="12" y2="12"></line>
                                                <line x1="9" y1="15" x2="15" y2="15"></line>
                                            </svg>
                                            Project :&nbsp; <span className="modal-bold">{selectedObject.details.project}</span>
                                        </p>
                                        <p className="modal-text">
                                            <svg
                                                stroke="currentColor"
                                                fill="none"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="modal-icon"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <polyline points="16 18 22 12 16 6"></polyline>
                                                <polyline points="8 6 2 12 8 18"></polyline>
                                            </svg>
                                            Languages :&nbsp;<span className="modal-bold">{selectedObject.details.languages}</span>
                                        </p>
                                    </div>
                                    <div className="modal-details">
                                        <p className="modal-text">
                                            <svg
                                                stroke="currentColor"
                                                fill="none"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="modal-icon"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                                <circle cx="12" cy="7" r="4"></circle>
                                            </svg>
                                            Client :&nbsp;<span className="modal-bold">{selectedObject.details.client}</span>
                                        </p>
                                        <p className="modal-text">
                                            <svg
                                                stroke="currentColor"
                                                fill="none"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="modal-icon"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                <polyline points="15 3 21 3 21 9"></polyline>
                                                <line x1="10" y1="14" x2="21" y2="3"></line>
                                            </svg>
                                            Preview :&nbsp;
                                            <span className="modal-link">
                                                <a href={`https://${selectedObject.details.preview}`} target="_blank" rel="noopener noreferrer">{selectedObject.details.preview}</a>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <p className="modal-description">
                                    {selectedObject.description}
                                </p>
                                <img
                                    alt="blog details"
                                    src={selectedObject.image} // Update with the actual path
                                    className="modal-image"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                )}

            </div>
            <Footer />
        </div>
    )
}

export default Works