import React from 'react';
import {Link } from 'react-router-dom'; 
import './Home.css';

const Home = () => {
  return (
    <div className="home-body">
    <div className="home-container">
      <div className="info-section">
        <h2>Welcome to My Project</h2>
        <p>This project allows you to create professional resumes with ease.</p>
        <Link to="/exp"><button className="create-resume-button">Create Resume</button></Link>
      </div>
      <div className="image-section">
        <img src="https://cdnl.iconscout.com/lottie/premium/thumb/cv-analysis-5671197-4729713.gif" alt="Sample" />
      </div>
      <Link to="/contact">
      <button className="help-icon">?</button></Link>
    </div>
    </div>
  );
};

export default Home;