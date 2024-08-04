import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link
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
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    // Check if all required fields are filled
    const isValid = schoolName && schoolEducation && degree && collegeName && fieldOfStudy && graduationMonth && graduationYear;
    setIsFormValid(isValid);
  }, [schoolName, schoolEducation, degree, collegeName, fieldOfStudy, graduationMonth, graduationYear]);

  const handleGpaChange = (e) => {
    const value = e.target.value;
    // Allow only numbers with up to one decimal place and no more than 10
    if (/^\d*\.?\d{0,1}$/.test(value) && (value === '' || parseFloat(value) <= 10)) {
      setGpa(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid) {
      alert('All fields are required!');
      return;
    }

    // Validate CGPA
    const gpaValue = parseFloat(gpa);
    if (gpa && (isNaN(gpaValue) || gpaValue < 0 || gpaValue > 10)) {
      alert('CGPA must be a number between 0 and 10.');
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
      <div className="spacer"></div> {/* Spacer to move heading down */}
      <h1 className='edu-header'>EDUCATION DETAILS</h1>
      {/* <p>Provide your education details below.</p> */}
      <div className="education-details-page">
        <form onSubmit={handleSubmit} className="education-form">
          <div className="form-column">
            <label className="form-label">
              School Name:
              <input
                type="text"
                value={schoolName}
                onChange={(e) => setSchoolName(e.target.value)}
                required
              />
            </label>
            <label className="form-label">
              College Name:
              <input
                type="text"
                value={collegeName}
                onChange={(e) => setCollegeName(e.target.value)}
                required
              />
            </label>
            <label className="form-label">
              Field of Study:
              <input
                type="text"
                value={fieldOfStudy}
                onChange={(e) => setFieldOfStudy(e.target.value)}
                required
              />
            </label>
            <label className="form-label">
              CGPA:
              <input
                type="text"
                value={gpa}
                onChange={handleGpaChange}
                placeholder="0.0"
              />
            </label>
          </div>
          <div className="form-column">
          <label className="form-label">
              School Education:
              <input
                type="text"
                value={schoolEducation}
                onChange={(e) => setSchoolEducation(e.target.value)}
                required
              />
            </label>
            <label className="form-label">
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
           
            <label className="form-label">
              Honors/Awards:
              <input
                type="text"
                value={honors}
                onChange={(e) => setHonors(e.target.value)}
              />
            </label>
            <label className="form-label">
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
          </div>
          <div className="button-container-e">
            <Link to="/intern">
              <button type="submit" className="add-button" disabled={!isFormValid}>
                Add
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>

  );
};

export default Education;