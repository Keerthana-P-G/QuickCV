import React, { useState } from 'react';
import './Skills.css'; // Import CSS file

const Skills = () => {
  const [skills, setSkills] = useState(['', '', '', '', '', '']);
  const [interests, setInterests] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState('');

  const handleChange = (e, type, index) => {
    const { value } = e.target;
    if (type === 'skills') {
      const updatedSkills = [...skills];
      updatedSkills[index] = value;
      setSkills(updatedSkills);
    } else {
      const updatedInterests = [...interests];
      updatedInterests[index] = value;
      setInterests(updatedInterests);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate that mandatory fields are filled
    if (skills.slice(0, 3).some(skill => !skill) || interests.slice(0, 3).some(interest => !interest)) {
      setError('The first three fields in both Skills and Interests are mandatory.');
      return;
    }

    setError('');
    // Handle form submission logic here

    // Reset the fields to empty strings
    setSkills(['', '', '', '', '', '']);
    setInterests(['', '', '', '', '', '']);
  };

  const handleDownloadResume = () => {
    // Implement resume download logic here
    alert('Downloaded successfully.');
  };

  return (
    <div className='skillint'>
      <div className="skills-interest-container">
        <h1>Skills and Interests</h1>
        {error && <p className="error-message">{error}</p>}
        <form className="skills-interest-form" onSubmit={handleSubmit}>
          <div className="grid-container">
            <div className="skills-grid">
              <h2>Skills</h2>
              {skills.map((skill, index) => (
                <div key={index} className="form-group">
                  <label htmlFor={`skill-${index}`}>{`Skill ${index + 1}`}</label>
                  <input
                    type="text"
                    id={`skill-${index}`}
                    value={skill}
                    onChange={(e) => handleChange(e, 'skills', index)}
                  />
                </div>
              ))}
            </div>
            <div className="interests-grid">
              <h2>Interests</h2>
              {interests.map((interest, index) => (
                <div key={index} className="form-group">
                  <label htmlFor={`interest-${index}`}>{`Interest ${index + 1}`}</label>
                  <input
                    type="text"
                    id={`interest-${index}`}
                    value={interest}
                    onChange={(e) => handleChange(e, 'interests', index)}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="button-container-SI">
            <button type="submit" className="submit-button-SI">Submit</button>
            <button
              type="button"
              className="download-button-SI"
              onClick={handleDownloadResume}
            >
              Download Resume
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Skills;
