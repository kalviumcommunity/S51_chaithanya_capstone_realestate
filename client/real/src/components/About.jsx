import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import "./About.css";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutContainer = document.querySelector('.about-container');
      if (!aboutContainer) return;

      const aboutPosition = aboutContainer.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (aboutPosition < windowHeight / 2) {
        setIsVisible(true);
      }
    };

    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`about-container ${isVisible ? 'fade-in' : ''}`}>
      <h1>Welcome to DreamHouse Real Estate</h1>
      <p>
        At DreamHouse Real Estate, we believe in making dreams come true. Whether you're searching for your dream home, selling a property, or seeking expert advice on real estate investments, we're here to guide you every step of the way.
      </p>
      <h2>Our Mission</h2>
      <p>
        Our mission is simple: to provide unparalleled service and deliver exceptional results for our clients. We understand that buying or selling a property can be one of life's most significant decisions, and we're dedicated to ensuring that your real estate journey is smooth, stress-free, and ultimately rewarding.
      </p>
      <h2>Expertise You Can Trust</h2>
      <p>
        Backed by a team of experienced and knowledgeable real estate professionals, DreamHouse Real Estate is committed to excellence in every aspect of our business. From understanding market trends to negotiating the best deals, we leverage our expertise to achieve the best outcomes for our clients.
      </p>
      <h2>Your Dream Home Awaits</h2>
      <p>
        Whether you're in search of a cozy apartment in the heart of the city, a luxurious villa by the beach, or a charming countryside retreat, we have the perfect property to suit your lifestyle and preferences. Explore our extensive listings and discover the home of your dreams today.
      </p>
      <h2>Why Choose DreamHouse Real Estate</h2>
      <ul>
        <li><strong>Personalized Service:</strong> We take the time to understand your unique needs and goals, tailoring our services to meet your requirements.</li>
        <li><strong>Transparency:</strong> We believe in open communication and transparency throughout the entire real estate process, ensuring you're always informed and empowered.</li>
        <li><strong>Integrity:</strong> Our commitment to honesty, integrity, and professionalism sets us apart in the real estate industry.</li>
        <li><strong>Results-Driven:</strong> We're dedicated to achieving the best results for our clients, whether it's securing the highest sale price or finding the perfect property.</li>
      </ul>
      <h2>Testimonials</h2>
      <div className="testimonials">
        <div className="testimonial">
          <p>"DreamHouse Real Estate helped us find our dream home! The team was incredibly supportive and professional throughout the entire process. Highly recommend!"</p>
          <p><strong>- Jane and John Doe</strong></p>
        </div>
        <div className="testimonial">
          <p>"Selling our house was a breeze thanks to DreamHouse. They handled everything with such expertise and got us a great price. Thank you!"</p>
          <p><strong>- Sarah and Mike Smith</strong></p>
        </div>
        <div className="testimonial">
          <p>"As first-time home buyers, we were pretty nervous, but the DreamHouse team made it so easy for us. They were always available to answer our questions and guide us through each step."</p>
          <p><strong>- Emma Brown</strong></p>
        </div>
      </div>
      <h2>Get in Touch</h2>
      <p>
        Ready to embark on your real estate journey with DreamHouse Real Estate? Contact us today to schedule a consultation and experience the difference of working with a trusted partner in real estate.  
        <strong>Email:dreamhouserealty@gamil.com</strong>
      </p>
      <p>
        To know more, <a href="https://youtu.be/ugK8HYpoDzE?si=aDreMyeMelninNvR" target="_blank" rel="noopener noreferrer">click here</a>.
      </p>
      <div className="para">
        <p>GET STARTED!! CLICK HERE TO JOIN THE CLUB, <Link to="/Club">CLICK HERE</Link></p>
      </div>
    </div>
  );
};

export default About;
