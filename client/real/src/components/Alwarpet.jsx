import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import lakshmi from "../asserts/lakshmi.webp"
import palacio from "../asserts/palacio.webp"
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import share from "../asserts/share.png"

function Alwarpet() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState();
  const [number,setNumber]=useState()
const handlesubmit=(e)=>{
  e.preventDefault();
  axios
      .post('http://localhost:3000/api/enquire', {
        name: name,
        number: number
      })
      .then((response) => {
        console.log(response);
        alert("Submitted successfully")
      })
      .catch((error) => {
        console.error('Error submitting feedback:', error);
      });
}
  const handleShareClick = () => {
    setIsModalOpen(true);
  };

  const handleAddToFavorites = () => {
    console.log('Added to favorites');
  };

  const handleAddToCart = () => {
    console.log('Added to cart');
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Link copied to clipboard');
  };

  return (
    <>
    <div>
      <h1>BEST SELLERS IN ALWARPET</h1>
      <div className="horizontal-containers">
        <div className="gridContainer">
          <form>
            <div className="images-container">
              <div className="image-box">
                <div className="image-wrapper">
                  <img src={lakshmi} alt="Home 1" className="home-image" />
                  <div className='share' onClick={handleShareClick}>
                    <img src={share} alt="share" className='share' />
                  </div>
                </div>
              </div>
            </div>
            <div className="form-container">
              <div className="form-group">
                <label htmlFor="selectedImage">Casagrand lakshmi</label>
                <p className="details">
                  Located in Alwarpet, Chennai<br />
                  2 BHK Apartments<br />
                  Sold Out
                </p>
              </div>
              <div className="button-group">
                <button className="fav-btn" type="button" onClick={handleAddToFavorites}>
                  <i className="fas fa-heart"></i>
                </button>
                <button className="cart-btn" type="button" onClick={handleAddToCart}>
                  <i className="fas fa-shopping-cart"></i>
                </button>
                <Link to="/Lakshmi">
                  <button type="button">View More</button>
                </Link>
              </div>
            </div>
          </form>
        </div>

        <div className="gridContainer">
          <form>
            <div className="images-container">
              <div className="image-box">
                <div className="image-wrapper">
                  <img src={palacio} alt="Home 3" className="home-image" />
                  <div className='share' onClick={handleShareClick}>
                    <img src={share} alt="share" className='share' />
                  </div>
                </div>
              </div>
            </div>
            <div className="form-container">
              <div className="form-group">
                <label htmlFor="selectedImage">Casagrand Palacio</label>
                <p className="details">
                  Located in Alwarpet, Chennai<br />
                  Apartments<br />
                  Sold Out
                </p>
              </div>
              <div className="button-group">
                <button className="fav-btn" type="button" onClick={handleAddToFavorites}>
                  <i className="fas fa-heart"></i>
                </button>
                <button className="cart-btn" type="button" onClick={handleAddToCart}>
                  <i className="fas fa-shopping-cart"></i>
                </button>
                <Link to="/Palacio">
                  <button type="button">View More</button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <h2>Share</h2>
            <div className="share-options">
              <a href={`https://wa.me/?text=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faWhatsapp} size="2x" className="fa-icon" />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="2x" className="fa-icon" />
              </a>
              <button onClick={handleCopyLink}>
                <FontAwesomeIcon icon={faCopy} size="2x" className="fa-icon" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
}

export default Alwarpet;
