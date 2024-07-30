import React, { useState } from 'react';
import "./Home.css";
import { useNavigate } from 'react-router-dom';
import linore from "../asserts/linore.webp";
import Footer from "../components/Footer";
import flagship3 from "../asserts/flagship3.jpeg"
import royale from "../asserts/royale.webp"
import m from "../asserts/m.webp"
import aria from "../asserts/aria.webp"
import home3 from "../asserts/home3.jpg";
import plus from "../asserts/plus.png"
import aspires from "../asserts/aspires.webp"
import south from "../asserts/south.webp"
import zenith from "../asserts/zenith.webp"
import uto from "../asserts/uto.webp"
import cloud from "../asserts/cloud.webp"
import Millenia from "../asserts/Millenia.webp"
import laurel from "../asserts/laurel.webp"
import elinore from "../asserts/elinor.jpg"
import s from "../asserts/s.webp"
import hola from "../asserts/hola.webp"
import mercury from "../asserts/mercury.webp"
import home4 from "../asserts/home4.avif";
import couple from "../asserts/couple.jpg"
import family from "../asserts/family.jpg"
import athens from "../asserts/athens.webp"
import first from "../asserts/first.jpg"
import { Link } from 'react-router-dom';
import Flagship from './Flagship';
import { BiFirstPage } from 'react-icons/bi';
import Crisp from './Crisp';
import share from "../asserts/share.png"
import Favorites from './Favorites';
import broad from "../asserts/broad.jpg"
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart, faCopy } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import AppContext from "../components/AppContext";
import Navbar from './Navbar';
import park from "../asserts/park.jpg"
import altezza from "../asserts/altezza.jpg"
import clubs from "../asserts/club.jpg"
import cloverr from "../asserts/cloverr.jpg"
import haridaa from "../asserts/haridaa.jpg"
import arcuss from "../asserts/arcuss.jpg"




const Home = () => {
  const navigate = useNavigate();

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue) {
      navigate(`/${selectedValue}`);
    }
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleShareClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddToFavorites = () => {
    // Add to favorites logic
  };

  const handleAddToCart = () => {
    // Add to cart logic
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Link copied to clipboard!');
  };

  const handleViewMore = () => {
    if (isUserAuthenticated()) {
      history.push('/Flagship');
    } else {
      history.push('/signin');
    }
  };

  return(

    <>
   
      <div>
        <Navbar/>
      <div className="container">
<div className='head'>
<h1>WELCOME TO DREAM HOUSE REALITY</h1>
</div>
        
        

        {/* <div className='post'>
          <h1>Post your property</h1>
          <Link to="/Post">
            <img src={plus} alt='post' />
          </Link>
        </div> */}
        <h1>BEST SELLERS </h1>
        <div className='gridContainer'>
          
            <form>
              <div className="images-container">
                <div className="image-box">
                  <div className="image-wrapper">
                    <img src={linore} alt="Home 1" className="home-image" />
                   
                  </div>
                </div>
              </div>
             
              <div className="form-container">
                <div className="form-group">
                  <label htmlFor="selectedImage">Casagrand Linore</label>
                  <p className="details">
                    Located in Kattupakkam, Chennai<br />
                    2, 3 & 4 BHK Apts<br />
                    Starting from 71 Lakhs*<br />
                    Under construction
                  </p>
                </div>
                <div className="form-group">
                  { /* Potential Conflict: Additional form groups */}
                </div>
                <div className="button-group">
                 
                  <Link to="/Linore">
                    <button type="button">View More</button>
                  </Link>
                </div>
              </div>
            </form>
            {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <h2>Share</h2>
            <div className="share-options">
              <a href={`https://wa.me/?text=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faWhatsapp} size="2x" className="fa-icon" />
              </a>
              <a href={`https://www.instagram.com/`} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="2x" className="fa-icon" />
              </a>
              <button onClick={handleCopyLink}>
                <FontAwesomeIcon icon={faCopy} size="2x" className="fa-icon" />
              </button>
            </div>
          </div>
        </div>
        )}
            <form>
        <div className="images-container">
          <div className="image-box">
            <div className="image-wrapper">
              <img src={flagship3} alt="flagship1" className="home-image" />
              <h2>Flagship</h2>
            </div>
          </div>
        </div>
        {/* <div className='share' onClick={handleShareClick}>
          <img src={share} alt="share" className='share' />
        </div> */}
        <div className="form-container">
          <div className="form-group">
            <label htmlFor="selectedImage">Casagrand Flagship</label>
            <p className="details">Best seller villa in Pallikaranai<br />2, 3 BHK Apts<br />Starting from 55 Lakhs*<br /> under construction</p>
          </div>
          <div className="form-group">
            {/* Additional form groups */}
          </div>
          <div className="button-group">
            {/* <button className="fav-btn" onClick={handleAddToFavorites}>
              <FontAwesomeIcon icon={faHeart} />
            </button>
            <button className="cart-btn" onClick={handleAddToCart}>
              <FontAwesomeIcon icon={faShoppingCart} />
            </button> */}
          <Link to="/Flagship">
            <button type="button" onClick={handleViewMore}>View More</button>
          </Link>
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
                <a href={`https://www.instagram.com/`} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} size="2x" className="fa-icon" />
                </a>
                <button onClick={handleCopyLink}>
                  <FontAwesomeIcon icon={faCopy} size="2x" className="fa-icon" />
                </button>
              </div>
            </div>
          </div>
        )}
      </form>
        <form>
          <div className="images-container">
            <div className="image-box">
              <div className="image-wrapper">
                <img src={m} alt="m" className="home-image" />
              </div>
            </div>
          </div>
          {/* <div className='share' onClick={handleShareClick}>
          <img src={share} alt="share" className='share' />
        </div> */}
          <div className="form-container">
            <div className="form-group">
              <label htmlFor="selectedImage">Casagrand Medora</label>
              <p className="details">Located in Korattur<br />2 and 3 BHK Apts<br />Rs. 1.16 Cr Onwards*<br /> under construction</p>
            </div>
            <div className="form-group">
              {/* Additional form groups */}
            </div>

            <div className="button-group">
              {/* <button className="fav-btn" onClick={handleAddToFavorites}>
                <i className="fas fa-heart"></i>
              </button>
              <button className="cart-btn" onClick={handleAddToCart}>
                <i className="fas fa-shopping-cart"></i>
              </button> */}
              <Link to="/Medora">
                <button type="button">View More</button>
              </Link>
            </div>
          </div>
        </form>
        <form>
          <div className="images-container">
            <div className="image-box">
              <div className="image-wrapper">
                <img src={royale} alt="Home 4" className="home-image" />
              </div>
            </div>
          </div>
          {/* <div className='share' onClick={handleShareClick}>
          <img src={share} alt="share" className='share' />
        </div> */}
          <div className="form-container">
            <div className="form-group">
              <label htmlFor="selectedImage">Casagrand Royale</label>
              <p className="details">Best seller in Shollinganallur<br />2,3 and 4 BHK Apts<br />Starting from 67 Lakhs*<br /> Ready to Occupy</p>
            </div>
            <div className="form-group">
              {/* Additional form groups */}
            </div>

            <div className="button-group">
              {/* <button className="fav-btn" onClick={handleAddToFavorites}>
                <i className="fas fa-heart"></i>
              </button>
              <button className="cart-btn" onClick={handleAddToCart}>
                <i className="fas fa-shopping-cart"></i>
              </button> */}
              <Link to="/Royale">
                <button type="button">View More</button>
              </Link>
            </div>
          </div>
        </form>
        <form>
          <div className="images-container">
            <div className="image-box">
              <div className="image-wrapper">
                <img src={hola} alt="couple" className="home-image" />
              </div>
            </div>
          </div>
          {/* <div className='share' onClick={handleShareClick}>
          <img src={share} alt="share" className='share' />
        </div> */}

          <div className="form-container">
            <div className="form-group">
              <label htmlFor="selectedImage">Casagrand Holachennai </label>
              <p className="details">Sholinganallur, Chennai<br />2,3,4&5 BHK Apartments<br />55 Lakhs Onwards**<br /> New Launch</p>
            </div>
            <div className="form-group">
              {/* Additional form groups */}
            </div>

            <div className="button-group">
              {/* <button className="fav-btn" onClick={handleAddToFavorites}>
                <i className="fas fa-heart"></i>
              </button>
              <button className="cart-btn" onClick={handleAddToCart}>
                <i className="fas fa-shopping-cart"></i>
              </button> */}
              <Link to="/Holachennai">
                <button type="button">View More</button>
              </Link>
            </div>
          </div>
        </form>
        <form>
          <div className="images-container">
            <div className="image-box">
              <div className="image-wrapper">
                <img src={family} alt="family" className="home-image" />
              </div>
            </div>
          </div>
          {/* <div className='share' onClick={handleShareClick}>
          <img src={share} alt="share" className='share' />
        </div> */}
          <div className="form-container">
            <div className="form-group">
              <label htmlFor="selectedImage">Casagrand Palm Springs</label>
              <p className="details">East Tambaram,Chennai <br />2,3BHK Apts<br />Starting from 51lakhs*<br />Under construction</p>
            </div>
            <div className="form-group">
              {/* Additional form groups */}
            </div>

            <div className="button-group">
              {/* <button className="fav-btn" onClick={handleAddToFavorites}>
                <i className="fas fa-heart"></i>
              </button>
              <button className="cart-btn" onClick={handleAddToCart}>
                <i className="fas fa-shopping-cart"></i>
              </button> */}
              <Link to="/Palm">
                <button type="button">View More</button>
              </Link>
            </div>
          </div>
        </form>
        <form>
          <div className="images-container">
            <div className="image-box">
              <div className="image-wrapper">
                <img src={s} alt="family" className="home-image" />
              </div>
            </div>
          </div>
          {/* <div className='share' onClick={handleShareClick}>
          <img src={share} alt="share" className='share' />
        </div> */}
          <div className="form-container">
            <div className="form-group">
              <label htmlFor="selectedImage">Casagrand Suncity</label>
              <p className="details">Vandalur-Chennai <br />2,3&4 BHK Apts<br />Starting from 48lakhs*<br />New launch and under construction</p>
            </div>
            <div className="form-group">
              {/* Additional form groups */}
            </div>

            <div className="button-group">
              {/* <button className="fav-btn" onClick={handleAddToFavorites}>
                <i className="fas fa-heart"></i>
              </button>
              <button className="cart-btn" onClick={handleAddToCart}>
                <i className="fas fa-shopping-cart"></i>
              </button> */}
              <Link to="/Suncity">
                <button type="button">View More</button>
              </Link>
            </div>
          </div>
        </form>
       
        </div>
    
        <h1>APPASWAMY REALESTATE</h1>

        <div className='gridContainer'>
          
        <form>
          <div className='images-container'>
            <div className='image-box'>
              <div className='image-wrapper'>
                <img src={park} alt="home 1" className='home-image' />
              </div>
            </div>
          </div>
        <div className='form-container'>
          <div className='form-group'>
            <label htmlFor="selectedImage"> Parkhouse Mews</label>
            <p className='details'>guindy,Chennai <br />
            3 & 4 BHK Apts<br/>
            3.01 Cr. Onwards*<br/>
            New launch and under construction</p>
          <div className='button-group'>
          <Link to="/Parkhouse">
            <button type='button'> View More</button>
          </Link>
          </div>
          </div>
        </div>
    
        </form>
      <form>
      <div className='images-container'>
            <div className='image-box'>
              <div className='image-wrapper'>
                <img src={broad} alt="home 1" className='home-image' />
              </div>
            </div>
          </div>
        <div className='form-container'>
          <div className='form-group'>
            <label htmlFor="selectedImage"> The Broadstone</label>
            <p className='details'>Ramapuram,Chennai <br />
            3 & 4 BHK Apts<br/>
            1.92 Cr. Onwards*<br/>
            New launch and under construction</p>
          <div className='button-group'>
          <Link to="/Broad">
            <button type='button'> View More</button>
            </Link>
          </div>
          </div>
        </div>
      </form>
      
      
      <form>
      <div className='images-container'>
            <div className='image-box'>
              <div className='image-wrapper'>
                <img src={park} alt="home 1" className='home-image' />
              </div>
            </div>
          </div>
        <div className='form-container'>
          <div className='form-group'>
            <label htmlFor="selectedImage"> Wingfield</label>
            <p className='details'>OMR,Chennai <br />
            3 & 4 BHK Apts<br/>
            1.96 Cr. Onwards*<br/>
            New launch and under construction</p>
          <div className='button-group'>
          <Link to="/Wing">
            <button type='button'> View More</button>
            </Link>
          </div>
          </div>
        </div>
      </form>
      
      <form>
      <div className='images-container'>
            <div className='image-box'>
              <div className='image-wrapper'>
                <img src={altezza} alt="home 1" className='home-image' />
              </div>
            </div>
          </div>
        <div className='form-container'>
          <div className='form-group'>
            <label htmlFor="selectedImage"> Altezza</label>
            <p className='details'>Kotivakkam,Chennai <br />
            2,2.4,3 & 4 BHK Apts<br/>
            1.42 Cr. Onwards*<br/>
          Handing over soon</p>
          <div className='button-group'>
        <Link to="/Alteza">
            <button type='button'> View More</button>
            </Link>
          </div>
          </div>
        </div>
      </form>
      <form>
      <div className='images-container'>
            <div className='image-box'>
              <div className='image-wrapper'>
                <img src={clubs} alt="home 1" className='home-image' />
              </div>
            </div>
          </div>
        <div className='form-container'>
          <div className='form-group'>
            <label htmlFor="selectedImage"> Club 1</label>
            <p className='details'>Boat club,Chennai <br />
            3BHK Apts<br/>
            12.4Cr. Onwards*<br/>
            Handing over soon</p>
          <div className='button-group'>
          <Link to="/Club">
            <button type='button'> View More</button>
            </Link>
          </div>
          </div>
        </div>
      </form>
      <form>
      <div className='images-container'>
            <div className='image-box'>
              <div className='image-wrapper'>
                <img src={cloverr} alt="home 1" className='home-image' />
              </div>
            </div>
          </div>
        <div className='form-container'>
          <div className='form-group'>
            <label htmlFor="selectedImage"> Clover by the river</label>
            <p className='details'>Kotturpuram,Chennai <br />
            2,3 & 4 BHK Apts<br/>
            2.28 Cr. Onwards*<br/>
            Ready to move</p>
          <div className='button-group'>
        <Link to="/Clover">
            <button type='button'> View More</button>
        </Link>
          </div>
          </div>
        </div>
      </form>
      <form>
      <div className='images-container'>
            <div className='image-box'>
              <div className='image-wrapper'>
                <img src={haridaa} alt="home 1" className='home-image' />
              </div>
            </div>
          </div>
        <div className='form-container'>
          <div className='form-group'>
            <label htmlFor="selectedImage"> Harida</label>
            <p className='details'>Mylapore,Chennai <br />
            2 & 3 BHK Apts<br/>
            2.44 Cr. Onwards*<br/>
          Handing over soon</p>
          <div className='button-group'>
        <Link to="/Harida">
            <button type='button'> View More</button>
        </Link>
          </div>
          </div>
        </div>
      </form>
      <form>
      <div className='images-container'>
            <div className='image-box'>
              <div className='image-wrapper'>
                <img src={arcuss} alt="home 1" className='home-image' />
              </div>
            </div>
          </div>
        <div className='form-container'>
          <div className='form-group'>
            <label htmlFor="selectedImage"> Arcus</label>
            <p className='details'>T.nagar,Chennai <br />
            3 & 4 BHK Apts<br/>
            3.76 Cr. Onwards*<br/>
          Handing over soon</p>
          <div className='button-group'>
        <Link to="/Arcus">
            <button type='button'> View More</button>
        </Link>
          </div>
          </div>
        </div>
      </form>
      <form>
      <div className='images-container'>
            <div className='image-box'>
              <div className='image-wrapper'>
                <img src={park} alt="home 1" className='home-image' />
              </div>
            </div>
          </div>
        <div className='form-container'>
          <div className='form-group'>
            <label htmlFor="selectedImage"> Navasuja</label>
            <p className='details'>RA puram ,Chennai <br />
            3 & 4 BHK Apts<br/>
            4.04 Cr. Onwards*<br/>
          Handing over soon</p>
          <div className='button-group'>
      <Link to="/Navasuja">
            <button type='button'> View More</button>
      </Link>
          </div>
          </div>
        </div>
      </form>


        </div>

      </div>
     
      {/* <h1>Chennai Properties</h1>
        <div className='gridContainer'>
          <form>
          <div className="images-container">
            <div className="image-box">
              <div className="image-wrapper">
                <img src={mercury} alt="family" className="home-image" />
              </div>
            </div>
          </div>
          
          <div className="form-container">
            <div className="form-group">
              <label htmlFor="selectedImage">Casagrand Mercury</label>
              <p className="details">Kilpauk,Chennai <br />2, 3 BHK and 4 BHK Floor Villas with Maid Room<br />Apts 91 Lakhs and Floor Villa 3.16 Cr Onwards*<br />New launch and under construction</p>
            </div>
            <div className="form-group">
            </div>

            <div className="button-group">
            
              <Link to="/Linore">
                <button type="button">View More</button>
              </Link>
            </div>
          </div>

          </form>

          <form>
          <div className="images-container">
            <div className="image-box">
              <div className="image-wrapper">
                <img src={mercury} alt="family" className="home-image" />
              </div>
            </div>
          </div>
        
          <div className="form-container">
            <div className="form-group">
              <label htmlFor="selectedImage">Casagrand Mercury</label>
              <p className="details">Kilpauk,Chennai <br />2, 3 BHK and 4 BHK Floor Villas with Maid Room<br />Apts 91 Lakhs and Floor Villa 3.16 Cr Onwards*<br />New launch and under construction</p>
            </div>
            <div className="form-group">
            </div>

            <div className="button-group">
             
              <Link to="/Linore">
                <button type="button">View More</button>
              </Link>
            </div>
          </div>
          </form> */}
    {/* </div > */}
        </div>
      <Crisp />
    

      <Footer />

    </>
  );
};


export default Home;
