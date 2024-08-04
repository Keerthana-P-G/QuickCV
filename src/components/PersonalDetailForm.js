import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './PersonalDetailForm.css';

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
  const [errors, setErrors] = useState({});
  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);

  useEffect(() => {
    const { firstName, lastName, email, phone, github, linkedin } = personalDetails;
    setIsSubmitEnabled(firstName && lastName && email && phone && github && linkedin && !Object.values(errors).some(error => error));
  }, [personalDetails, errors]);

  const validateField = (name, value) => {
    switch (name) {
      case 'email':
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Invalid email address';
      case 'phone':
        return /^\d{10}$/.test(value) ? '' : 'Invalid phone number';
      case 'github':
        return /^https:\/\/github\.com\/[a-zA-Z0-9-]+$/.test(value) ? '' : 'Invalid GitHub URL';
      case 'linkedin':
        return /^https:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9-]+$/.test(value) ? '' : 'Invalid LinkedIn URL';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalDetails({
      ...personalDetails,
      [name]: value
    });
    setErrors({
      ...errors,
      [name]: validateField(name, value)
    });
  };

  return (
    <div className="personal-details-container">
      <div className="personal-details-page">
        <h1>PERSONAL DETAILS</h1>
        {/* <p>Provide your personal details below.</p> */}
        <form onSubmit={(e) => e.preventDefault()} className="personal-form">
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
              {errors.email && <span className="error-message">{errors.email}</span>}
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
              {errors.phone && <span className="error-message">{errors.phone}</span>}
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
              {errors.github && <span className="error-message">{errors.github}</span>}
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
              {errors.linkedin && <span className="error-message">{errors.linkedin}</span>}
            </label>
          </div>
          <div className="button-group">
            <button className="bbb" type="submit" disabled={!isSubmitEnabled}>
              <Link
                to={isSubmitEnabled ? "/education" : "#"}
                className={isSubmitEnabled ? '' : 'disabled-link'}
                onClick={(e) => {
                  if (!isSubmitEnabled) {
                    e.preventDefault();
                  }
                }}
              >
                Go to Education Page
              </Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PersonalDetailsForm;