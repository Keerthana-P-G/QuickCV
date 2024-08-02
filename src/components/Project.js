import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Project.css';  

const Project = ({ onAddProjectDetail }) => {
  const [projectName, setProjectName] = useState('');
  const [toolsUsed, setToolsUsed] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate that all fields are filled
    if (!projectName || !toolsUsed || !description) {
      setError('All fields are required.');
      return;
    }
    
    // Clear error if validation passes
    setError('');

    const newProjectDetail = {
      projectName,
      toolsUsed,
      description,
    };

    onAddProjectDetail(newProjectDetail); // Pass the new project detail to the parent component

    // Clear form fields after submission
    setProjectName('');
    setToolsUsed('');
    setDescription('');

    // Mark as submitted
    setSubmitted(true);
  };

  return (
    <div className="procontainer">
      <div className='project-container'>
      <h1>PROJECT DETAILS</h1>
      <p>Please provide details about your projects here.</p>
      {error && <p className="error-message">{error}</p>}
      <form className="project-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="project-name">Project Name:</label>
          <input 
            type="text" 
            id="project-name" 
            name="project-name" 
            value={projectName} 
            onChange={(e) => setProjectName(e.target.value)} 
          />
        </div>
        <div className="form-group">
          <label htmlFor="tools-used">Tools Used:</label>
          <input 
            type="text" 
            id="tools-used" 
            name="tools-used" 
            value={toolsUsed} 
            onChange={(e) => setToolsUsed(e.target.value)} 
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea className='project-textarea' 
            id="description" 
            name="description" 
            rows="7" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="button-container">
          <button type="submit" className="submit">Add Project</button>
            <Link to="/project-detail-list">
              <button type="button" className="view-list-button">View Project Details List</button>
            </Link>
          
        </div>
      </form>
    </div>
    </div>
  );
};

export default Project;
