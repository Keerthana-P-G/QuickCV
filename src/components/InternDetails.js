import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './InternDetails.css';

const InternDetails = () => {
  const [companyName, setCompanyName] = useState('');
  const [location, setLocation] = useState('');
  const [topic, setTopic] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [details, setDetails] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!companyName || !location || !topic || !fromDate || !toDate) {
      alert('All fields are required!');
      return;
    }

    if (editIndex !== null) {
      const updatedDetails = details.map((detail, index) =>
        index === editIndex ? { companyName, location, topic, fromDate, toDate } : detail
      );
      setDetails(updatedDetails);
      setEditIndex(null);
    } else {
      setDetails([...details, { companyName, location, topic, fromDate, toDate }]);
    }

    setCompanyName('');
    setLocation('');
    setTopic('');
    setFromDate('');
    setToDate('');
  };

  const handleEdit = (index) => {
    const detail = details[index];
    setCompanyName(detail.companyName);
    setLocation(detail.location);
    setTopic(detail.topic);
    setFromDate(detail.fromDate);
    setToDate(detail.toDate);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedDetails = details.filter((_, i) => i !== index);
    setDetails(updatedDetails);
  };

  return (
    <div className="intern-details-container">
      <h1 className='int-heading'>DETAILS OF INTERNSHIP</h1>
      <form onSubmit={handleSubmit} className="intern-form">
        <label>
          Company Name:
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            required
          />
        </label>
        <label>
          Location:
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </label>
        <label>
          Topic:
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            required
          />
        </label>
        <label>
          From:
          <input
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            required
          />
        </label>
        <label>
          To:
          <input
            type="date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            required
          />
        </label>
        <div className="button-container-i">
          <button type="submit" className="add-button">{editIndex !== null ? 'Update' : 'Add'}</button>
          <Link to="/project">
            <button type="button" className="next-button">Next</button>
          </Link>
        </div>
      </form>

      <div className="intern-detail-list">
        {details.length > 0 ? (
          details.map((detail, index) => (
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
    </div>
  );
};

export default InternDetails;