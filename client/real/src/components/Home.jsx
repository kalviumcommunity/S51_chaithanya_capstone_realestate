import React from 'react';
import "./Home.css";
import linore from "../asserts/linore.webp";
import Footer from "../components/Footer";
import flagship from "../asserts/flagship.webp";
import m from "../asserts/m.webp"
import home3 from "../asserts/home3.jpg";
import home4 from "../asserts/home4.avif";
import couple from "../asserts/couple.jpg"
import family from "../asserts/family.jpg"
import { Link } from 'react-router-dom';
import Flagship from './Flagship';
 
const Home = () => {
  return (
    <div className="container">
      <div className="search-boxes">
        <select className="search-input">
          <option value="">Select Location</option>
          <option value="Adyar">Adyar</option>
          <option value="Alwarpet">Alwarpet</option>
          <option value="Ambattur">Ambattur</option>
          <option value="Anna Nagar">Anna Nagar</option>
          <option value="Besant Nagar">Besant Nagar</option>
          <option value="Guindy">Guindy</option>
          <option value="Kodambakkam">Kodambakkam</option>
          <option value="Injambakkam">Injambakkam</option>
          <option value="Koyambedu">Koyambedu</option>
          <option value="Madipakkam">Madipakkam</option>
          <option value="Maduravoyal">Maduravoyal</option>
          <option value="Medavakkam">Medavakkam</option>
          <option value="Mount Road">Mount Road</option>
          <option value="Mogappair">Mogappair</option>
          <option value="Mylapore">Mylapore</option>
          <option value="Nandanam">Nandanam</option>
          <option value="Nanganallur">Nanganallur</option>
          <option value="Neelangarai">Neelangarai</option>
          <option value="Nungambakkam">Nungambakkam</option>
          <option value="Pallikaranai">Pallikaranai</option>
          <option value="Perambur">Perambur</option>
          <option value="Perungalathur">Perungalathur</option>
          <option value="Perungudi">Perungudi</option>
          <option value="Porur">Porur</option>
          <option value="Purasawalkam">Purasawalkam</option>
          <option value="Santhome">Santhome</option>
          <option value="Shenoy Nagar">Shenoy Nagar</option>
          <option value="Sholinganallur">Sholinganallur</option>
          <option value="ECR">ECR</option>
          <option value="Tambaram">Tambaram</option>
          <option value="Teynampet">Teynampet</option>
          <option value="Triplicane">Triplicane</option>
          <option value="Velachery">Velachery</option>
        </select>
        <div className="input-wrapper">
          <select className='search-input'>
            <option value="project type">project type</option>
            <option value="apartment">apartment</option>
            <option value="villa">villa</option>
            <option value="plot">plot</option>
          </select>
        </div>
        <div className="input-wrapper">
          <select className='search-input'>
            <option value="">project status</option>
            <option value="">under construction</option>
            <option value="">New launch</option>
            <option value="">Ready to occupy</option>
            <option value="">completed projects</option>
          </select>
        </div>
        <div className="input-wrapper">
          <select className='search-input'>
            <option value="">Type</option>
            <option value="">1 BHK</option>
            <option value="">2 BHK</option>
            <option value="">3 BHK</option>
            <option value="">4 BHK</option>    
          </select>
        </div>
      <div className='types'>
        <select className='search-input'>
          <option value=""> HOUSE TYPE</option>
        <option value="">TENANT</option>
        <option value="">BUY</option>
        <option value="">LEASE</option>
        </select>
      </div>
      <div className='but'>
        <button>search</button>
      </div>
      </div>
      <div className="search-heading">
  Most Searched Areas : <span>Omr</span> | <span>Tambaram</span> | <span>Mogappair</span> | <span>Pallikaranai</span>
  <br />
  Closer to IT corridors in Sholinganallur : <span>FirstCity</span> | <span>Cloud9</span> | <span>Flagship</span>
  <br />
  Ready to move in : <span>Crescendo</span> | <span>Supremus</span> | <span>Smart Town</span> | <span>Esquire</span>
</div>
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
            <p className="details">Located in Kattupakkam, Chennai<br/>2, 3 & 4 BHK Apts<br/>Starting from 71 Lakhs*<br/> under construction</p>
          </div>
          <div className="form-group">
            {/* Additional form groups */}
          </div>
        <Link  to="/Linore">
          <button type="button">View More</button>
        </Link>
        </div>
      </form>

      <form>
      <div className="images-container">
          <div className="image-box">
            <div className="image-wrapper">
              <img src={Flagship} alt="flagship1" className="home-image" />
            </div>
          </div>
        </div>
        <div className="form-container">
          <div className="form-group">
            <label htmlFor="selectedImage">Casagrand Flagship</label>
            <p className="details">Best seller villa in Pallikaranai<br/>2, 3 BHK Apts<br/>Starting from 55 Lakhs*<br/> under construction</p>
          </div>
          <div className="form-group">
            {/* Additional form groups */}
          </div>
        <Link to ="/Flagship">
          <button type="submit">View More</button>
          </Link>
        </div>
      </form>
      <form>
      <div className="images-container">
          <div className="image-box">
            <div className="image-wrapper">
              <img src={m} alt="m" className="home-image" />
            </div>
          </div>
        </div>
        <div className="form-container">
          <div className="form-group">
            <label htmlFor="selectedImage">Casagrand Medora</label>
            <p className="details">Located in Korattur<br/>2 and 3 BHK Apts<br/>Rs. 1.16 Cr Onwards*<br/> under construction</p>
          </div>
          <div className="form-group">
            {/* Additional form groups */}
          </div>
        <Link to ="/Medora">
          <button type="submit">View More</button>
          </Link>
        </div>
      </form>
      <form>
      <div className="images-container">
          <div className="image-box">
            <div className="image-wrapper">
              <img src={home4} alt="Home 4" className="home-image" />
            </div>
          </div>
        </div>
        <div className="form-container">
          <div className="form-group">
            <label htmlFor="selectedImage">Royale</label>
            <p className="details">Best seller villa in Shollinganallur<br/>2,3 and 4 BHK Apts<br/>Starting from 67 Lakhs*<br/> under construction</p>
          </div>
          <div className="form-group">
            {/* Additional form groups */}
          </div>
          <button type="submit">View More</button>
        </div>
      </form>
      <form>
      <div className="images-container">
          <div className="image-box">
            <div className="image-wrapper">
              <img src={couple} alt="couple" className="home-image" />
            </div>
          </div>
        </div>
        <div className="form-container">
          <div className="form-group">
            <label htmlFor="selectedImage">couple villa </label>
            <p className="details">Best seller villa in velacherry <br/>3 and 4 BHK Apts<br/>Starting from 1.2CR*<br/> ready to occupy</p>
          </div>
          <div className="form-group">
            {/* Additional form groups */}
          </div>
          <button type="submit">View More</button>
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
        <div className="form-container">
          <div className="form-group">
            <label htmlFor="selectedImage">family villa </label>
            <p className="details">Best seller villa in ECR <br/>5 BHK Apts<br/>Starting from 87lakhs*<br/>New launch</p>
          </div>
          <div className="form-group">
            {/* Additional form groups */}
          </div>
          <button type="submit">View More</button>
        </div>
      </form>
      <h1>NEW LAUNCH</h1>
    
    </div>
  
      <Footer />
    </div>
  );
};

export default Home;
