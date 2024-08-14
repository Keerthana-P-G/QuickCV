import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Project.css';

const Project = () => {
  const [projectName, setProjectName] = useState('');
  const [toolsUsed, setToolsUsed] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const [projectDetails, setProjectDetails] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editId, setEditId] = useState(null);
  const [editForm, setEditForm] = useState({
    projectName: '',
    toolsUsed: '',
    description: '',
  });

  useEffect(() => {
    // Fetch project details on component mount
    axios.get('https://quickcv-backend.onrender.com/project')
      .then(res => setProjectDetails(res.data))
      .catch(err => console.error('Error fetching project details:', err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!projectName || !toolsUsed || !description) {
      setError('All fields are required.');
      return;
    }

    setError('');

    const data = { projectName, toolsUsed, description };

    if (editIndex !== null) {
      axios.put(`https://quickcv-backend.onrender.com/project/${editId}`, data)
        .then(() => {
          const updatedDetails = projectDetails.map((detail, index) =>
            index === editIndex ? { ...data, _id: editId } : detail
          );
          setProjectDetails(updatedDetails);
          resetForm();
        })
        .catch(err => {
          console.error('Error updating project:', err);
          setError('Failed to update project. Please try again.');
        });
    } else {
      axios.post('https://quickcv-backend.onrender.com/project', data)
        .then(res => {
          setProjectDetails([...projectDetails, res.data]);
          resetForm();
        })
        .catch(err => {
          console.error('Error adding project:', err);
          setError('Failed to add project. Please try again.');
        });
    }
  };

  const handleEdit = (index) => {
    const detail = projectDetails[index];
    setEditForm(detail);
    setEditIndex(index);
    setEditId(detail._id);
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
      index === editIndex ? { ...editForm, _id: editId } : detail
    );
    axios.put(`https://quickcv-backend.onrender.com/project/${editId}`, editForm)
      .then(() => {
        setProjectDetails(updatedDetails);
        resetForm();
      })
      .catch(err => {
        console.error('Error updating project:', err);
        setError('Failed to update project. Please try again.');
      });
  };

  const handleDelete = (index, id) => {
    axios.delete(`https://quickcv-backend.onrender.com/project/${id}`)
      .then(() => {
        const updatedDetails = projectDetails.filter((_, i) => i !== index);
        setProjectDetails(updatedDetails);
      })
      .catch(err => {
        console.error('Error deleting project:', err);
        setError('Failed to delete project. Please try again.');
      });
  };

  const resetForm = () => {
    setProjectName('');
    setToolsUsed('');
    setDescription('');
    setEditIndex(null);
    setEditId(null);
    setEditForm({
      projectName: '',
      toolsUsed: '',
      description: '',
    });
  };

  return (
    <div className="procontainer">
      <div className='project-container'>
        <h1>PROJECT DETAILS</h1>
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
              <div key={detail._id} className="project-detail-item">
                <div className="detail-info">
                  <strong>Project Name:</strong> {detail.projectName}<br />
                  <strong>Tools Used:</strong> {detail.toolsUsed}<br />
                  <strong>Description:</strong> {detail.description}
                </div>
                <div className="detail-actions">
                  <button className="edit-button" onClick={() => handleEdit(index)}>Edit</button>
                  <button className="delete-button" onClick={() => handleDelete(index, detail._id)}>Delete</button>
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
