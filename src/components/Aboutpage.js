import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './AboutPage.css'; 
import logo from './logo.jpg'; // Import your image

const AboutPage = () => {
  return (
    <div className='container'>
      {/* <h1 className="about-h1">About us</h1> */}
      <section className='carousel-section'>
        <Carousel showArrows={true} infiniteLoop={true} autoPlay={true} interval={3000} stopOnHover={true}>
          <div className="slide-content">
            <div className="slide-image">
              <img src={logo} alt="CV Builder" />
            </div>
            <div className="slide-text">
              <h2>Our Mission</h2>
              <p>At QuickCV, we are dedicated to helping individuals craft professional and compelling CVs that make a strong impression. Our platform provides a user-friendly interface and a range of templates to make building your CV simple and effective.</p>
            </div>
          </div>
          <div className="slide-content">
            <div className="slide-image">
              <img src="https://media.istockphoto.com/id/1149054436/photo/business-man-review-his-resume-application-on-desk-laptop-computer-job-seeker.jpg?s=612x612&w=0&k=20&c=2M_xMNkuEZkg8-zy9dzP16VX8tHRbmghJtE3g6zPR5g=" alt="Professional Growth" />
            </div>
            <div className="slide-text">
              <h2>Why Choose Us?</h2>
              <ul>
                <li>Easy-to-use tools for creating a polished CV</li>
                <li>Professional templates designed to stand out</li>
                <li>Guidance and tips to enhance your CV's impact</li>
                <li>Ongoing support to help you succeed in your job search</li>
              </ul>
            </div>
          </div>
          <div className="slide-content">
            <div className="slide-image">
              <img src="https://media.gettyimages.com/id/1203940958/photo/recruitment-job-application-contract-and-business-employment-concept-hand-giving-the-resume.jpg?s=612x612&w=gi&k=20&c=5YUka0d92HguLnW98a2oxkEyjhMg5gQdqy0wPApyQkM=" alt="Career Success" />
            </div>
            <div className="slide-text">
              <h2>Get Started</h2>
              <p>Join thousands of satisfied users who have transformed their job applications with our CV builder. Create your professional CV today and take the first step towards career success!</p>
            </div>
          </div>
        </Carousel>
        <p className="about-bold">Achieve Your Career Goals with QuickCV!</p>
      </section>
    </div>
  );
}

export default AboutPage;