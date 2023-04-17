import React from 'react';
import MaterialIcon from 'material-icons-react'
import './index.scss';

const Feature = ({ darkReverse, icon_name, heading, content, image }) => {
  return (
    <div className={darkReverse ? "feature-item-dark-reverse" : "feature-item"}>
      <div className="feature-description">
        <div className="feature-heading">
          <div className="feature-icon"><MaterialIcon icon={icon_name} size={36} /></div>
          <p>{heading}</p>
        </div>
        <div className="feature-content">
          {content}
        </div>
      </div>
      <div className="feature-image-container">
        <img src={image} className="feature-image" />
      </div>
    </div>
  );
}

export default Feature;
