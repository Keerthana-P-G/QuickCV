import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './InternDetailList.css'; // Import CSS file

const InternDetailList = () => {
  const [internDetails, setInternDetails] = useState([]);

  const handleDelete = (index) => {
    const updatedDetails = internDetails.filter((_, i) => i !== index);
    setInternDetails(updatedDetails);
  };

  const handleEdit = (index) => {
    // Logic to handle editing an intern detail
    // You can implement the logic here to edit the detail
  };

  return (
    <div className="intdet-bcg">
      <div className="intern-detail-list-container">
        <h1>Internship Details List</h1>
        <div className="intern-detail-list">
          {internDetails.length > 0 ? (
            internDetails.map((detail, index) => (
              <div key={index} className="intern-detail-item">
                <div className="detail-info">
                  <strong>Company Name:</strong> {detail.companyName}<br />
                  <strong>Location:</strong> {detail.location}<br />
                  <strong>Topic:</strong> {detail.topic}<br />
                  <strong>From:</strong> {detail.fromDate}<br />
                  <strong>To:</strong> {detail.toDate}
                </div>
                <div className="detail-actions">
                  <button className="edit-button" onClick={() => handleEdit(index)}>Edit</button>
                  <button className="delete-button" onClick={() => handleDelete(index)}>Delete</button>
                </div>
              </div>
            ))
          ) : (
            <p>No internship details available. Please add some details.</p>
          )}
        </div>
        <div className="button-container-indet">
          <Link to="/intern-details">
            <button className="add-another-button">Add Another Intern Detail</button>
          </Link>
          <Link to="/project">
            <button className="next-button">Next</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InternDetailList;
