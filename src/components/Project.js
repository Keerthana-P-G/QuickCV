import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Project.css';

const Project = () => {
  const [projectName, setProjectName] = useState('');
  const [toolsUsed, setToolsUsed] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [projectDetails, setProjectDetails] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editForm, setEditForm] = useState({
    projectName: '',
    toolsUsed: '',
    description: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate that all fields are filled
    if (!projectName || !toolsUsed || !description) {
      setError('All fields are required.');
      return;
    }
    
    // Clear error if validation passes
    setError('');

    if (editIndex !== null) {
      // Update existing project
      const updatedDetails = projectDetails.map((detail, index) =>
        index === editIndex ? { projectName, toolsUsed, description } : detail
      );
      setProjectDetails(updatedDetails);
      setEditIndex(null);
    } else {
      // Add new project
      const newProjectDetail = {
        projectName,
        toolsUsed,
        description,
      };
      setProjectDetails([...projectDetails, newProjectDetail]);
    }

    // Clear form fields after submission
    setProjectName('');
    setToolsUsed('');
    setDescription('');

    // Mark as submitted
    setSubmitted(true);
  };

  const handleEdit = (index) => {
    const detail = projectDetails[index];
    setEditForm(detail);
    setEditIndex(index);
    setProjectName(detail.projectName);
    setToolsUsed(detail.toolsUsed);
    setDescription(detail.description);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditForm({
      ...editForm,
      [name]: value,
    });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const updatedDetails = projectDetails.map((detail, index) =>
      index === editIndex ? editForm : detail
    );
    setProjectDetails(updatedDetails);
    setEditIndex(null);
    setEditForm({
      projectName: '',
      toolsUsed: '',
      description: '',
    });

    // Clear form fields after submission
    setProjectName('');
    setToolsUsed('');
    setDescription('');
  };

  const handleDelete = (index) => {
    const updatedDetails = projectDetails.filter((_, i) => i !== index);
    setProjectDetails(updatedDetails);
  };

  return (
    <div className="procontainer">
      <div className='project-container'>
        <h1 >PROJECT DETAILS</h1>
        <p>Please provide details about your projects here.</p>
        {error && <p className="error-message">{error}</p>}
        <form className="project-form" onSubmit={editIndex !== null ? handleEditSubmit : handleSubmit}>
          <div className="form-group">
            <label htmlFor="project-name">Project Name:</label>
            <input 
              type="text" 
              id="project-name" 
              name="projectName" 
              value={editIndex !== null ? editForm.projectName : projectName} 
              onChange={(e) => editIndex !== null ? handleEditChange(e) : setProjectName(e.target.value)} 
            />
          </div>
          <div className="form-group">
            <label htmlFor="tools-used">Tools Used:</label>
            <input 
              type="text" 
              id="tools-used" 
              name="toolsUsed" 
              value={editIndex !== null ? editForm.toolsUsed : toolsUsed} 
              onChange={(e) => editIndex !== null ? handleEditChange(e) : setToolsUsed(e.target.value)} 
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea className='project-textarea' 
              id="description" 
              name="description" 
              rows="7" 
              value={editIndex !== null ? editForm.description : description} 
              onChange={(e) => editIndex !== null ? handleEditChange(e) : setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="button-container">
            <button type="submit" className="submit">{editIndex !== null ? 'Save Changes' : 'Add Project'}</button>
            <Link to="/skills-and-interests">
              <button type="button" className="view-list-button">Next</button>
            </Link>
          </div>
        </form>

        <div className="project-details-grid">
          {projectDetails.length > 0 ? (
            projectDetails.map((detail, index) => (
              <div key={index} className="project-detail-item">
                <div className="detail-info">
                  <strong>Project Name:</strong> {detail.projectName}<br />
                  <strong>Tools Used:</strong> {detail.toolsUsed}<br />
                  <strong>Description:</strong> {detail.description}
                </div>
                <div className="detail-actions">
                  <button className="edit-button" onClick={() => handleEdit(index)}>Edit</button>
                  <button className="delete-button" onClick={() => handleDelete(index)}>Delete</button>
                </div>
              </div>
            ))
          ) : (
            <p>No project details available. Please add some details.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
