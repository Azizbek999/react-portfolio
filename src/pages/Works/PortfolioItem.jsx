import React from 'react';

const PortfolioItem = ({ object, onClick }) => {
  return (
    <div className="portfolio-item" onClick={() => onClick(object)}>
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
  );
};

export default PortfolioItem;