import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Education.css'; // Adjust the CSS file name accordingly

const Education = ({ onAddEducationDetail }) => {
  const [schoolName, setSchoolName] = useState('');
  const [schoolEducation, setSchoolEducation] = useState('');
  const [degree, setDegree] = useState('');
  const [collegeName, setCollegeName] = useState('');
  const [fieldOfStudy, setFieldOfStudy] = useState('');
  const [gpa, setGpa] = useState('');
  const [honors, setHonors] = useState('');
  const [graduationMonth, setGraduationMonth] = useState('');
  const [graduationYear, setGraduationYear] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!schoolName || !schoolEducation || !degree || !collegeName || !fieldOfStudy || !graduationMonth || !graduationYear) {
      alert('All fields are required!');
      return;
    }

    onAddEducationDetail({ 
      schoolName, 
      schoolEducation, 
      degree, 
      collegeName, 
      fieldOfStudy, 
      gpa, 
      honors, 
      graduationMonth, 
      graduationYear 
    });

    // Clear form fields after submission
    setSchoolName('');
    setSchoolEducation('');
    setDegree('');
    setCollegeName('');
    setFieldOfStudy('');
    setGpa('');
    setHonors('');
    setGraduationMonth('');
    setGraduationYear('');

    // Mark as submitted
    setSubmitted(true);
  };

  return (
    <div className="education-details-container">
    <h1>EDUCATION DETAILS</h1>
      <form onSubmit={handleSubmit} className="education-form">
        <label>
          School Name:
          <input
            type="text"
            value={schoolName}
            onChange={(e) => setSchoolName(e.target.value)}
            required
          />
        </label>
        <label>
          School Education:
          <input
            type="text"
            value={schoolEducation}
            onChange={(e) => setSchoolEducation(e.target.value)}
            required
          />
        </label>
        
        <label>
          College Name:
          <input
            type="text"
            value={collegeName}
            onChange={(e) => setCollegeName(e.target.value)}
            required
          />
        </label>
        <label>
          Degree:
          <select
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
            required
          >
            <option value="">Select Degree</option>
            <option value="High School">High School</option>
            <option value="Associate's Degree">Associate's Degree</option>
            <option value="Bachelor's Degree">Bachelor's Degree</option>
            <option value="Master's Degree">Master's Degree</option>
            <option value="Doctorate">Doctorate</option>
          </select>
        </label>
        <label>
          Field of Study:
          <input
            type="text"
            value={fieldOfStudy}
            onChange={(e) => setFieldOfStudy(e.target.value)}
            required
          />
        </label>
        <label>
          CGPA:
          <input
            type="text"
            value={gpa}
            onChange={(e) => setGpa(e.target.value)}
          />
        </label>
        <label>
          Honors/Awards:
          <input
            type="text"
            value={honors}
            onChange={(e) => setHonors(e.target.value)}
          />
        </label>
        <label>
          Graduation Date:
          <div className="graduation-date">
            <select
              value={graduationMonth}
              onChange={(e) => setGraduationMonth(e.target.value)}
              required
            >
              <option value="">Select Month</option>
              {Array.from({ length: 12 }, (_, i) => (
                <option key={i} value={i + 1}>
                  {new Date(0, i).toLocaleString('en', { month: 'long' })}
                </option>
              ))}
            </select>
            <select
              value={graduationYear}
              onChange={(e) => setGraduationYear(e.target.value)}
              required
            >
              <option value="">Select Year</option>
              {Array.from({ length: 10 }, (_, i) => (
                <option key={i} value={new Date().getFullYear() + i}>
                  {new Date().getFullYear() + i}
                </option>
              ))}
            </select>
          </div>
        </label>
        <div className="button-container-e">
          <button type="submit" className="add-button">Add</button>
          
          <Link to="/education-detail-list">
            <button type="button" className="view-list-button">View Education Details List</button>
          </Link>
          
        </div>
      </form>
    </div>
  );
};

export default Education;