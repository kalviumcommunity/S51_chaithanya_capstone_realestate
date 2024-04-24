import React from 'react';
import "./Home.css";
import home1 from "../asserts/home1.jpg";
import Footer from "../components/Footer";
import home2 from "../asserts/home2.avif";
import home3 from "../asserts/home3.jpg";
import home4 from "../asserts/home4.avif";
import couple from "../asserts/couple.jpg"
import family from "../asserts/family.jpg"
import { Link } from 'react-router-dom';
 
const Navbar = () => {
  return (
    <div className="container">
      <div className="search-boxes">
        <select className="search-input">
          <option value="">Select Location</option>
          <option value="Adyar">Adyar</option>
          <option value="Alandur">Alandur</option>
          <option value="Alwarthirunagar">Alwarthirunagar</option>
          <option value="Alwarpet">Alwarpet</option>
          <option value="Ambattur">Ambattur</option>
          <option value="Anna Nagar">Anna Nagar</option>
          <option value="Arumbakkam">Arumbakkam</option>
          <option value="Ashok Nagar">Ashok Nagar</option>
          <option value="Besant Nagar">Besant Nagar</option>
          <option value="Chromepet">Chromepet</option>
          <option value="Egmore">Egmore</option>
          <option value="Gopalapuram">Gopalapuram</option>
          <option value="Guindy">Guindy</option>
          <option value="Kodambakkam">Kodambakkam</option>
          <option value="Kolathur">Kolathur</option>
          <option value="Korattur">Korattur</option>
          <option value="Kotturpuram">Kotturpuram</option>
          <option value="Koyambedu">Koyambedu</option>
          <option value="Madipakkam">Madipakkam</option>
          <option value="Maduravoyal">Maduravoyal</option>
          <option value="Medavakkam">Medavakkam</option>
          <option value="Mogappair">Mogappair</option>
          <option value="Mount Road">Mount Road</option>
          <option value="Mylapore">Mylapore</option>
          <option value="Nandanam">Nandanam</option>
          <option value="Nanganallur">Nanganallur</option>
          <option value="Neelangarai">Neelangarai</option>
          <option value="Nungambakkam">Nungambakkam</option>
          <option value="Pallavaram">Pallavaram</option>
          <option value="Pallikaranai">Pallikaranai</option>
          <option value="Perambur">Perambur</option>
          <option value="Perungalathur">Perungalathur</option>
          <option value="Perungudi">Perungudi</option>
          <option value="Poonamallee">Poonamallee</option>
          <option value="Porur">Porur</option>
          <option value="Purasawalkam">Purasawalkam</option>
          <option value="R.A. Puram">R.A. Puram</option>
          <option value="Royapettah">Royapettah</option>
          <option value="Saidapet">Saidapet</option>
          <option value="Saligramam">Saligramam</option>
          <option value="Santhome">Santhome</option>
          <option value="Shenoy Nagar">Shenoy Nagar</option>
          <option value="Sholinganallur">Sholinganallur</option>
          <option value="T. Nagar (Thyagaraya Nagar)">T. Nagar (Thyagaraya Nagar)</option>
          <option value="Tambaram">Tambaram</option>
          <option value="Teynampet">Teynampet</option>
          <option value="Tharamani">Tharamani</option>
          <option value="Thiruvanmiyur">Thiruvanmiyur</option>
          <option value="Tondiarpet">Tondiarpet</option>
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
      </div>
      <div className="search-heading">
  Most Searched Areas : <span>Omr</span> | <span>Tambaram</span> | <span>Mogappair</span> | <span>Pallikaranai</span>
  <br />
  Closer to IT corridors in Sholinganallur : <span>FirstCity</span> | <span>Cloud9</span> | <span>Flagship</span>
  <br />
  Ready to move in : <span>Crescendo</span> | <span>Supremus</span> | <span>Smart Town</span> | <span>Esquire</span>
</div>

      <div className='gridContainer'>
      <form>
      <div className="images-container">
          <div className="image-box">
            <div className="image-wrapper">
              <img src={home1} alt="Home 1" className="home-image" />
            </div>
          </div>
        </div>
        <div className="form-container">
          <div className="form-group">
            <label htmlFor="selectedImage">DreamHouseLinore</label>
            <p className="details">Best seller villa in Alwarpet<br/>2, 3 & 4 BHK Apts<br/>Starting from 71 Lakhs*<br/> under construction</p>
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
              <img src={home2} alt="Home 2" className="home-image" />
            </div>
          </div>
        </div>
        <div className="form-container">
          <div className="form-group">
            <label htmlFor="selectedImage">Dreamhouse Flagship</label>
            <p className="details">Best seller villa in Pallikaranai<br/>2, 3 BHK Apts<br/>Starting from 55 Lakhs*<br/> under construction</p>
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
              <img src={home3} alt="Home 3" className="home-image" />
            </div>
          </div>
        </div>
        <div className="form-container">
          <div className="form-group">
            <label htmlFor="selectedImage">Dreamhouse Zenith</label>
            <p className="details">Best seller villa in Medavakkam<br/>2 and 3 BHK Apts<br/>Starting from 86 Lakhs*<br/> under construction</p>
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
              <img src={home4} alt="Home 4" className="home-image" />
            </div>
          </div>
        </div>
        <div className="form-container">
          <div className="form-group">
            <label htmlFor="selectedImage">Dreamhouse Royale</label>
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
            <label htmlFor="selectedImage">Dreamhouse couple villa </label>
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
            <label htmlFor="selectedImage">Dreamhouse family villa </label>
            <p className="details">Best seller villa in ECR <br/>5 BHK Apts<br/>Starting from 87lakhs*<br/>New launch</p>
          </div>
          <div className="form-group">
            {/* Additional form groups */}
          </div>
          <button type="submit">View More</button>
        </div>
      </form>
      </div>
  
    
      <Footer />
    </div>
  );
};

export default Navbar;
