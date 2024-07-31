import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="info-section">
        <h2>Welcome to My Project</h2>
        <p>This project allows you to create professional resumes with ease.</p>
        <button className="create-resume-button">Create Resume</button>
      </div>
      <div className="image-section">
        <img src='https://d3kqdc25i4tl0t.cloudfront.net/articles/content/_964455_bloghero.gif' alt="Sample" /> 
      </div>
      <button className="help-icon">?</button>
    </div>
  );
};

export default Home;