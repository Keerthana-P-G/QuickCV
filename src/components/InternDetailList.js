import React from 'react';
import { Link } from 'react-router-dom';
import './InternDetailList.css'; // Import CSS file

const InternDetailList = ({ internDetails, onAddAnother, onEdit, onDelete }) => {
  return (
    <div className="intern-detail-list-container">
      <h1>Internship Details List</h1>
      <ul>
        {internDetails.map((detail, index) => (
          <li key={index} className="intern-detail-item">
            <div className="detail-info">
              <strong>Company Name:</strong> {detail.companyName}<br />
              <strong>Location:</strong> {detail.location}<br />
              <strong>Topic:</strong> {detail.topic}<br />
              <strong>From:</strong> {detail.fromDate}<br />
              <strong>To:</strong> {detail.toDate}
            </div>
            <div className="detail-actions">
              <button className="edit-button" onClick={() => onEdit(index)}>Edit</button>
              <button className="delete-button" onClick={() => onDelete(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="button-container">
        <Link to="/intern-details" onClick={onAddAnother}>
          <button className="add-another-button">Add Another Intern Detail</button>
        </Link>
        <Link to="/project">
          <button className="next-button">Next</button>
        </Link>
      </div>
    </div>
  );
};

export default InternDetailList;
