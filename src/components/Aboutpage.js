import React from 'react';
// import book from './bookc.jpg';

 const array = [
    {}
 ]
const AboutPage = () => {
    return (
        <div className="auth-section" style={{ backgroundImage:  ('image.png'), backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '10px', width: '60%', textAlign: 'center' }}>
                <h1>About </h1>
                <p style={{ fontSize: '20px' }}>
                Welcome to QuickCV, your ultimate resource for crafting professional and standout resumes. Our mission is to empower job seekers with the tools and guidance needed to create resumes that not only capture attention but also highlight their unique skills and experiences.                </p>

                <h2>Our Mission</h2>
                <p style={{ fontSize: '20px' }}>
                At QuickCV, we are dedicated to simplifying the resume-building process. Our goal is to provide a user-friendly platform that helps individuals of all backgrounds create polished and effective resumes. We believe that a well-crafted resume is the key to unlocking career opportunities and achieving professional success.                </p>

                <h2>Explore Our Services</h2>
                <p style={{ fontSize: '20px' }}>
                Discover a range of customizable templates designed to meet various industry standards. Whether you’re a recent graduate, a seasoned professional, or someone looking to switch careers, QuickCV offers tools and resources tailored to your needs. From resume creation to tips on optimizing your content, we are here to support you every step of the way.
</p>

                <h2>Contact Us</h2>
                <p style={{ fontSize: '20px' }}>
                Have questions or need assistance? Our team is here to help. Feel free to reach out with any inquiries or feedback. We are committed to making your resume-building experience smooth and successful.
</p>

                <p style={{ fontSize: '22px', fontWeight: 'bold' }}> Achieve Your Career Goals with QuickCV!

</p>
            </div>
        </div>
    );
};

export default AboutPage;