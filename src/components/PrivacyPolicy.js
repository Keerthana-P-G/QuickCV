import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-container">
      <h1 className="privacy-heading">Privacy Policy</h1>
      <p className="privacy-intro">
        Welcome to QuickCV! Your privacy is important to us. This Privacy Policy explains how we handle your data while using our resume builder app.
      </p>
      <section className="privacy-section">
        <h2 className="privacy-subheading">No Personal Data Collection</h2>
        <p className="privacy-text">
          QuickCV does not require you to log in or sign up. We do not collect any personal information from you. All data you enter to create a resume is processed locally on your device.
        </p>
      </section>
      <section className="privacy-section">
        <h2 className="privacy-subheading">No Data Sharing</h2>
        <p className="privacy-text">
          Once you create a resume using QuickCV, no data will be shared or stored on our servers. Your resume and the data within it remain entirely within your control.
        </p>
      </section>
      <section className="privacy-section">
        <h2 className="privacy-subheading">Local Data Processing</h2>
        <p className="privacy-text">
          All data processing is done on your device. QuickCV does not store or transfer any data over the internet. Your information remains private and secure.
        </p>
      </section>
      <section className="privacy-section">
        <h2 className="privacy-subheading">No Third-Party Services</h2>
        <p className="privacy-text">
          QuickCV does not integrate with any third-party services. We do not use tracking cookies, analytics, or any other third-party tools that could compromise your privacy.
        </p>
      </section>
      
    </div>
  );
};

export default PrivacyPolicy;