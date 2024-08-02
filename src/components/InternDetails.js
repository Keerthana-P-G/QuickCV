import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './InternDetails.css'; 

const InternDetails = ({ onAddInternDetail }) => {
  const [companyName, setCompanyName] = useState('');
  const [location, setLocation] = useState('');
  const [topic, setTopic] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!companyName || !location || !topic || !fromDate || !toDate) {
      alert('All fields are required!');
      return;
    }

    onAddInternDetail({ companyName, location, topic, fromDate, toDate });

    // Clear form fields after submission
    setCompanyName('');
    setLocation('');
    setTopic('');
    setFromDate('');
    setToDate('');

    // Mark as submitted
    setSubmitted(true);
  };

  return (
    <div className="intern-details-container">
      <h1>DETAILS OF INTERNSHIP</h1>
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
          <button type="submit" className="add-button">Add</button>
          
            <Link to="/intern-detail-list">
              <button type="button" className="view-list-button">View Intern Details List</button>
            </Link>
          
        </div>
      </form>
    </div>
  );
};

export default InternDetails;