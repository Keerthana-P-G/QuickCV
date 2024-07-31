import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './Exp.css';

function Exp() {
  const [showStudentQuestion, setShowStudentQuestion] = useState(false);
  const [showEducationOptions, setShowEducationOptions] = useState(false);

  const handleNoExperienceClick = () => {
    setShowStudentQuestion(true);
  };

  const handleYesStudentClick = () => {
    setShowEducationOptions(true);
  };

  return (
    <div className="Exp">
      <header className="Exp-header">
        <h1>How long have you been working?</h1>
        <p>We'll find the best templates for your experience level.</p>
        <div className="buttons-container">
          <button onClick={handleNoExperienceClick}>No Experience</button>
          <button>Less Than 3 Years</button>
          <button>3-5 Years</button>
          <button>5-10 Years</button>
          <button>10+ Years</button>
        </div>
        {showStudentQuestion && (
          <div className="student-question">
            <h2>Are you a student?</h2>
            <div className="buttons-container">
              <button onClick={handleYesStudentClick}>Yes</button>
              <button>No</button>
            </div>
          </div>
        )}
        {showEducationOptions && (
          <div className="education-options">
            <h2>Select the option that best describes your education level.</h2>
            <p>Your education background can help us guide you through relevant sections for your resume.</p>
            <div className="buttons-container-exp">
              <Link to="/personal-detail-form">
                <button className='B-exp'>Secondary School</button>
              </Link>
              <Link to="/personal-detail-form">
                <button className='B-exp'>Vocational Certificate or Diploma</button>
              </Link>
              <Link to="/personal-detail-form">
                <button className='B-exp'> Apprenticeship or Internship Training</button>
              </Link>
              <Link to="/personal-detail-form">
                <button className='B-exp'>Associates</button>
              </Link>
              <Link to="/personal-detail-form">
                <button className='B-exp'>Bachelors</button>
              </Link>
              <Link to="/personal-detail-form">
                <button className='B-exp'>Masters</button>
              </Link>
              <Link to="/personal-detail-form">
                <button className='B-exp'>Doctorate or Ph.D.</button>
              </Link>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default Exp;
