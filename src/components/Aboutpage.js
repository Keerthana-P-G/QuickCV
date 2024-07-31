import React from 'react';
import './AboutPage.css'; // Import the CSS file

const AboutPage = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-heading">About</h1>
        <p className="about-paragraph">
          Welcome to QuickCV, your ultimate resource for crafting professional and standout resumes. Our mission is to empower job seekers with the tools and guidance needed to create resumes that not only capture attention but also highlight their unique skills and experiences.
        </p>
        <h2 className="about-heading">Our Mission</h2>
        <p className="about-paragraph">
          At QuickCV, we are dedicated to simplifying the resume-building process. Our goal is to provide a user-friendly platform that helps individuals of all backgrounds create polished and effective resumes. We believe that a well-crafted resume is the key to unlocking career opportunities and achieving professional success.
        </p>
        <h2 className="about-heading">Explore Our Services</h2>
        <p className="about-paragraph">
          Discover a range of customizable templates designed to meet various industry standards. Whether you’re a recent graduate, a seasoned professional, or someone looking to switch careers, QuickCV offers tools and resources tailored to your needs. From resume creation to tips on optimizing your content, we are here to support you every step of the way.
        </p>
        <h2 className="about-heading">Contact Us</h2>
        <p className="about-paragraph">
          Have questions or need assistance? Our team is here to help. Feel free to reach out with any inquiries or feedback. We are committed to making your resume-building experience smooth and successful.
        </p>
        <p className="about-bold">Achieve Your Career Goals with QuickCV!</p>
      </div>
    </div>
  );
};

export default AboutPage;
