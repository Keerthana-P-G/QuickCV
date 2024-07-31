import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, message } = formData;
    const subject = 'Contact Form Message'; // You can customize the subject
    const body = `\nMessage/Queries:\n${message}`;
    
    // Encode the subject and body
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);

    // Gmail compose URL
    const gmailComposeURL = `https://mail.google.com/mail/?view=cm&fs=1&to=keerthui1503@gmail.com&su=${encodedSubject}&body=${encodedBody}`;

    // Open Gmail in a new tab
    window.open(gmailComposeURL, '_blank');

    // Clear the form fields
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <p className="contact-subtitle">GOT A QUESTION?</p>
        <h1>Contact QuickCV</h1>
        <p className="contact-description">
          We’re here to help and answer any question you might have. We look forward to hearing from you. 😊
        </p>
      </div>
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>First Name*</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Last Name*</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email*</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Message*</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className='button-con'>Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
