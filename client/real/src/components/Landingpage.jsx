    import React from 'react';
    import { Link } from 'react-router-dom';
    import linore from "../asserts/linore.webp"
    import flagship from '../asserts/flagship.webp';
    import m from "../asserts/m.webp"

   
function LandingPage() {
    return (
      <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
        {/* Navbar */}
        <nav style={styles.navbar}>
          <div style={styles.navBrand}>DREAM HOUSE REALITY</div>
          <div style={styles.navLinks}>
            <Link to="/Signin"><button style={styles.navButton}>Sign In</button></Link>
            <Link to="/Signup"><button style={{ ...styles.navButton, backgroundColor: '#ff6b6b' }}>Sign Up</button></Link>
          </div>
        </nav>
  
        {/* Hero Section */}
        <header style={{ ...styles.heroSection, position: 'relative' }}>
          <iframe
            title="Background Video"
            src="https://www.youtube.com/embed/bo71JU8vkGg?autoplay=1&controls=0&loop=1&mute=1"
            frameBorder="0"
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              top: 0,
              left: 0,
            }}
          ></iframe>
          <div style={styles.heroContent}>
            <h1 style={styles.heroTitle}>Welcome to Your Dream Home</h1>
            <p style={styles.heroSubtitle}>Discover the best properties at unbeatable prices.</p>
          </div>
        </header>
  
        {/* Features Section */}
        <section style={styles.featuresSection}>
          <div style={styles.feature}>
            <h2 style={styles.featureTitle}>Wide Range of Properties</h2>
            <p style={styles.featureDescription}>Explore a variety of properties in different locations.</p>
          </div>
          <div style={styles.feature}>
            <h2 style={styles.featureTitle}>Trusted Agents</h2>
            <p style={styles.featureDescription}>Connect with experienced and trustworthy real estate agents.</p>
          </div>
          <div style={styles.feature}>
            <h2 style={styles.featureTitle}>Easy Mortgage Calculator</h2>
            <p style={styles.featureDescription}>Calculate your mortgage with our easy-to-use calculator.</p>
          </div>
          <div style={styles.feature}>
            <h2 style={styles.featureTitle}>Customer Reviews</h2>
            <p style={styles.featureDescription}>Read reviews from our satisfied customers.</p>
          </div>
        </section>
  
        {/* Featured Properties Section */}
       
        {/* Testimonials Section */}
       
  
        {/* Newsletter Section */}
        {/* You can add your newsletter section here */}
  
        {/* Call to Action Section */}
       
      </div>
    );
  }
  
  const styles = {
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 20px',
      backgroundColor: '#333',
      color: 'white',
    },
    navBrand: {
      fontSize: '1.5em',
    },
    navLinks: {
      display: 'flex',
    },
    navButton: {
      backgroundColor: '#666',
      color: 'white',
      border: 'none',
      padding: '10px 20px',
      marginLeft: '10px',
      cursor: 'pointer',
      borderRadius: '5px',
      transition: 'background-color 0.3s',
    },
    heroSection: {
      position: 'relative',
      color: 'white',
      padding: '100px 20px',
    },
    heroContent: {
      maxWidth: '600px',
      margin: '0 auto',
    },
    heroTitle: {
      fontSize: '3em',
      marginBottom: '20px',
    },
    heroSubtitle: {
      fontSize: '1.5em',
      marginBottom: '40px',
    },
    searchBar: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '20px',
    },
    searchInput: {
      padding: '10px',
      fontSize: '1em',
      border: 'none',
      borderRadius: '5px 0 0 5px',
      width: '70%',
    },
    searchButton: {
      padding: '10px 20px',
      fontSize: '1em',
      border: 'none',
      borderRadius: '0 5px 5px 0',
      backgroundColor: '#ff6b6b',
      color: 'white',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    featuresSection: {
      display: 'flex',
      justifyContent: 'space-around',
      padding: '50px 20px',
      backgroundColor: '#f9f9f9',
    },
    feature: {
      maxWidth: '300px',
      marginBottom: '30px',
    },
    featureTitle: {
      fontSize: '1.5em',
      marginBottom: '10px',
    },
    featureDescription: {
      fontSize: '1.2em',
      color: '#666',
    },
    featuredProperties: {
      padding: '50px 20px',
      backgroundColor: '#fff',
    },
    sectionTitle: {
      fontSize: '2em',
      marginBottom: '20px',
    },
    properties: {
      display: 'flex',
      justifyContent: 'space-around',
    },
    property: {
      maxWidth: '300px',
      textAlign: 'left',
      marginBottom: '30px',
    },
    propertyImage: {
      width: '80%',
      borderRadius: '5px',
    },
    propertyTitle: {
      fontSize: '1.5em',
      margin: '10px 0',
    },
    propertyPrice: {
      fontSize: '1.2em',
      color: '#666',
      marginLeft:'90px',
    },
    testimonials: {
      padding: '50px 20px',
      backgroundColor: '#f9f9f9',
    },
    testimonial: {
      maxWidth: '600px',
      margin: '0 auto 20px',
      textAlign: 'center',
    },
    testimonialText: {
      fontSize: '1.2em',
      fontStyle: 'italic',
      color: '#333',
    },
    testimonialAuthor: {
      fontSize: '1.2em',
      color: '#666',
    },
    newsletter: {
      padding: '50px 20px',
      backgroundColor: '#fff',
    },
    newsletterText: {
      fontSize: '1.2em',
      marginBottom: '20px',
    },
    newsletterSignup: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '20px',
    },
    newsletterInput: {
      padding: '10px',
      fontSize: '1em',
      border: '1px solid #ccc',
      borderRadius: '5px 0 0 5px',
      width: '70%',
    },
    newsletterButton: {
      padding: '10px 20px',
      fontSize: '1em',
      border: 'none',
      borderRadius: '0 5px 5px 0',
      backgroundColor: '#ff6b6b',
      color: 'white',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    ctaSection: {
      backgroundColor: '#333',
      color: 'white',
      padding: '50px 20px',
    },
    ctaTitle: {
      fontSize: '2em',
      marginBottom: '20px',
    },
    ctaButton: {
      backgroundColor: '#ff6b6b',
      color: 'white',
      border: 'none',
      padding: '15px 30px',
      fontSize: '1.2em',
      cursor: 'pointer',
      borderRadius: '5px',
      transition: 'background-color 0.3s',
    },
  };
  
  export default LandingPage;