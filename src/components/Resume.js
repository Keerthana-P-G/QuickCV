import React from 'react';
import './Resume.css'; // Add your CSS here

const Resume = ({ personalDetails, educationDetails, internshipDetails, projectDetails, skillsData }) => {
  return (
    <div className="container">
      <h1>Resume</h1>
      
      {/* Personal Details */}
      <div className="section">
        <div className="section-title">Personal Details</div>
        <div className="details">
          <strong>Name:</strong> {personalDetails.firstName} {personalDetails.lastName}
        </div>
        <div className="details">
          <strong>Email:</strong> {personalDetails.email}
        </div>
        <div className="details">
          <strong>Phone:</strong> {personalDetails.phone}
        </div>
        <div className="details">
          <strong>Github:</strong> {personalDetails.github}
        </div>
        <div className="details">
          <strong>LinkedIn:</strong> {personalDetails.linkedin}
        </div>
      </div>
      
      {/* Education */}
      <div className="section">
        <div className="section-title">Education</div>
        {educationDetails.map((edu, index) => (
          <div key={index} className="list-item">
            {edu.degree}, {edu.institution}, {edu.year}
          </div>
        ))}
      </div>
      
      {/* Internships */}
      <div className="section">
        <div className="section-title">Internships</div>
        {internshipDetails.map((internship, index) => (
          <div key={index} className="list-item">
            {internship.title} - {internship.company}, {internship.year}
          </div>
        ))}
      </div>
      
      {/* Projects */}
      <div className="section">
        <div className="section-title">Projects</div>
        {projectDetails.map((project, index) => (
          <div key={index} className="list-item">
            <strong>Project Name:</strong> {project.projectName}<br />
            <strong>Tools Used:</strong> {project.toolsUsed}<br />
            <strong>Description:</strong> {project.description}
          </div>
        ))}
      </div>
      
      {/* Skills */}
      <div className="section">
        <div className="section-title">Skills</div>
        {skillsData.skills.map((skill, index) => (
          <div key={index} className="list-item">{skill}</div>
        ))}
      </div>
      
      {/* Interests */}
      <div className="section">
        <div className="section-title">Interests</div>
        {skillsData.interests.map((interest, index) => (
          <div key={index} className="list-item">{interest}</div>
        ))}
      </div>
      
      {/* Download Button */}
      <a href="#" className="button">Download Resume</a>
    </div>
  );
};

export default Resume;
