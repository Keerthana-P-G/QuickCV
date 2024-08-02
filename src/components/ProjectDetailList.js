import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectDetailList.css'; // Import CSS file

const ProjectDetailList = ({ projectDetails, onAddAnother }) => {
  return (
    <div className="project-bg">
      <div className='project-detail-list-container'>
        <h1>PROJECT DETAIL LIST</h1>
        <div className="details-container-pro">
          {projectDetails.map((detail, index) => (
            <div key={index} className="project-detail">
              <strong>Project Name:</strong> {detail.projectName}<br />
              <strong>Tools Used:</strong> {detail.toolsUsed}<br />
              <strong>Description:</strong> {detail.description}
            </div>
          ))}
        </div>
        <div className="button-container">
          <Link to="/project">
            <button className="add-another-button">Add Another Project Detail</button>
          </Link>
          <Link to="/skills-and-interests">
            <button className="next-button">Next</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailList;
