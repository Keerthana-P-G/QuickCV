import React, { useState, useEffect } from 'react';
import './PersonalDetailsForm.css';

function PersonalDetailsForm() {
  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    github: '',
    linkedin: ''
  };

  const [personalDetails, setPersonalDetails] = useState(initialState);
  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);

  useEffect(() => {
    const { firstName, lastName, email, phone, github, linkedin } = personalDetails;
    setIsSubmitEnabled(firstName && lastName && email && phone && github && linkedin);
  }, [personalDetails]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalDetails({
      ...personalDetails,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Personal Details Submitted!\n' + JSON.stringify(personalDetails, null, 2));
  };

  return (
    <div className="personal-details-container">
      <div className="personal-details-page">
        <h1>Personal Details</h1>
        <p>Provide your personal details below.</p>
        <form onSubmit={handleSubmit} className="personal-form">
          <div className="form-column">
            <label className="form-label">
              First Name:
              <input
                type="text"
                name="firstName"
                value={personalDetails.firstName}
                onChange={handleChange}
                required
              />
            </label>
            <label className="form-label">
              Last Name:
              <input
                type="text"
                name="lastName"
                value={personalDetails.lastName}
                onChange={handleChange}
                required
              />
            </label>
            <label className="form-label">
              Email:
              <input
                type="email"
                name="email"
                value={personalDetails.email}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="form-column">
            <label className="form-label">
              Phone:
              <input
                type="tel"
                name="phone"
                value={personalDetails.phone}
                onChange={handleChange}
                required
              />
            </label>
            <label className="form-label">
              GitHub Link:
              <input
                type="url"
                name="github"
                value={personalDetails.github}
                onChange={handleChange}
                required
              />
            </label>
            <label className="form-label">
              LinkedIn Link:
              <input
                type="url"
                name="linkedin"
                value={personalDetails.linkedin}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="button-group">
            <button type="submit" disabled={!isSubmitEnabled}>Submit Your Details</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PersonalDetailsForm;