import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './InternDetails.css';

const InternDetails = () => {
  const [companyName, setCompanyName] = useState('');
  const [location, setLocation] = useState('');
  const [topic, setTopic] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [details, setDetails] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    // Fetch details on component mount
    axios.get('https://quickcv-backend.onrender.com/intern')
      .then(res => setDetails(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!companyName || !location || !topic || !fromDate || !toDate) {
      alert('All fields are required!');
      return;
    }

    const data = { companyName, location, topic, fromDate, toDate };

    if (editIndex !== null) {
      // Update existing detail
      axios.put(`https://quickcv-backend.onrender.com/intern/${editId}`, data)
        .then(() => {
          const updatedDetails = details.map((detail, index) =>
            index === editIndex ? { ...data, _id: editId } : detail
          );
          setDetails(updatedDetails);
          setEditIndex(null);
          setEditId(null);
        })
        .catch(err => console.error(err));
    } else {
      // Add new detail
      axios.post('https://quickcv-backend.onrender.com/intern', data)
        .then(res => {
          setDetails([...details, res.data]);
        })
        .catch(err => console.error(err));
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
    setEditId(detail._id);
  };

  const handleDelete = (index, id) => {
    axios.delete(`https://quickcv-backend.onrender.com/intern/${id}`)
      .then(() => {
        const updatedDetails = details.filter((_, i) => i !== index);
        setDetails(updatedDetails);
      })
      .catch(err => console.error(err));
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
            <div key={detail._id} className="intern-detail-item">
              <div className="detail-info">
                <strong>Company Name:</strong> {detail.companyName}<br />
                <strong>Location:</strong> {detail.location}<br />
                <strong>Topic:</strong> {detail.topic}<br />
                <strong>From:</strong> {detail.fromDate}<br />
                <strong>To:</strong> {detail.toDate}
              </div>
              <div className="detail-actions">
                <button className="edit-button" onClick={() => handleEdit(index)}>Edit</button>
                <button className="delete-button" onClick={() => handleDelete(index, detail._id)}>Delete</button>
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
