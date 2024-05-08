import React from 'react';
import "./Home.css";
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
import  mercury from "../asserts/mercury.webp"
import home4 from "../asserts/home4.avif";
import couple from "../asserts/couple.jpg"
import family from "../asserts/family.jpg"
import athens from "../asserts/athens.webp"
import first from "../asserts/first.jpg"
import { Link } from 'react-router-dom';
import Flagship from './Flagship';
import { BiFirstPage } from 'react-icons/bi';
 
const Home = () => {
  return (
    <>
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
      <div className='but'>
        <button>search</button>
      </div>
      </div>
    
<div className='post'>
  <h1>Post your property</h1>
  <Link to="/Post">
    <img src={plus} alt='post' />
  </Link>
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
              <img src={flagship3} alt="flagship1" className="home-image" />
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
              <img src={royale} alt="Home 4" className="home-image" />
            </div>
          </div>
        </div>
        <div className="form-container">
          <div className="form-group">
            <label htmlFor="selectedImage">Casagrand Royale</label>
            <p className="details">Best seller villa in Shollinganallur<br/>2,3 and 4 BHK Apts<br/>Starting from 67 Lakhs*<br/> Nearing Completion, Ready to Occupy</p>
          </div>
          <div className="form-group">
            {/* Additional form groups */}
          </div>
        <Link to="/Royale">
          <button type="submit">View More</button>
          </Link>
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
        <div className="form-container">
          <div className="form-group">
            <label htmlFor="selectedImage">Casagrand Holachennai </label>
            <p className="details">Sholinganallur, Chennai<br/>2, 3 & 4 BHK Apartments, 5 BHK Floor Villas & 4 BHK Villas<br/>55 Lakhs Onwards**<br/> New Launch</p>
          </div>
          <div className="form-group">
            {/* Additional form groups */}
          </div>
        <Link to="/Holachennai">
          <button type="submit">View More</button>
          </Link>
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
            <label htmlFor="selectedImage">Casagrand Palm Springs</label>
            <p className="details">East Tambaram, Chennai <br/>2 , 3BHK Apts<br/>Starting from 51lakhs*<br/>Under construction</p>
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
              <img src={s} alt="family" className="home-image" />
            </div>
          </div>
        </div>
        <div className="form-container">
          <div className="form-group">
            <label htmlFor="selectedImage">Casagrand Suncity</label>
            <p className="details">Kelambakkam - Vandalur Main Road, Chennai <br/>2, 3 & 4 BHK Apts<br/>Starting from 48lakhs*<br/>New launch and under construction</p>
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
              <img src={mercury} alt="family" className="home-image" />
            </div>
          </div>
        </div>
        <div className="form-container">
          <div className="form-group">
            <label htmlFor="selectedImage">Casagrand Mercury</label>
            <p className="details">Kilpauk,Chennai <br/>2, 3 BHK and 4 BHK Floor Villas with Maid Room<br/>Apts 91 Lakhs and Floor Villa 3.16 Cr Onwards*<br/>New launch and under construction</p>
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
              <img src={laurel} alt="family" className="home-image" />
            </div>
          </div>
        </div>
        <div className="form-container">
          <div className="form-group">
            <label htmlFor="selectedImage">Casagrand Laurels</label>
            <p className="details">Navalur,Chennai <br/>5 BHK Floor Villa<br/>1.70 Cr onwards*<br/>under construction</p>
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
              <img src={cloud} alt="family" className="home-image" />
            </div>
          </div>
        </div>
        <div className="form-container">
          <div className="form-group">
            <label htmlFor="selectedImage">Casagrand Cloud9</label>
            <p className="details">Sholinganallur, OMR<br/>2, 3 & 4 BHK Apts | 4 BHK Floor Villa|2, 3 & 4 BHK Apts - 90 Lakhs <br/> 4 BHK Floor Villa - Rs. 2.34 Cr Onwards**<br/>under construction</p>
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
              <img src={cloud} alt="family" className="home-image" />
            </div>
          </div>
        </div>
        <div className="form-container">
          <div className="form-group">
            <label htmlFor="selectedImage">Casagrand Dior</label>
            <p className="details">Kilpauk, Chennai<br/>3 & 4 BHK Apts  <br/>Rs. 2.53 Cr Onwards*<br/>under construction</p>
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
              <img src={cloud} alt="family" className="home-image" />
            </div>
          </div>
        </div>
        <div className="form-container">
          <div className="form-group">
            <label htmlFor="selectedImage">Casagrand Majestica</label>
            <p className="details">Manapakkam<br/>3 & 4 BHK Apts  <br/>Rs. 1 Cr Onwards*<br/>under construction</p>
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
              <img src={elinore} alt="family" className="home-image" />
            </div>
          </div>
        </div>
        <div className="form-container">
          <div className="form-group">
            <label htmlFor="selectedImage">Casagrand Elinor</label>
            <p className="details">Navalur<br/>2 & 3 BHK Apts  <br/>Rs. 45 Lakhs Onwards*<br/>under construction</p>
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
              <img src={Millenia} alt="family" className="home-image" />
            </div>
          </div>
        </div>
        <div className="form-container">
          <div className="form-group">
            <label htmlFor="selectedImage">Casagrand Millenia</label>
            <p className="details">Mogappair<br/>3 BHK Apts  <br/>SOLD OUT<br/>Ready to occupy</p>
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
              <img src={uto} alt="family" className="home-image" />
            </div>
          </div>
        </div>
        <div className="form-container">
          <div className="form-group">
            <label htmlFor="selectedImage">Casagrand Utopia</label>
            <p className="details">Manapakkam<br/>2,3 & 4 BHK Apartments <br/>Rs.75 Lakhs onwards<br/>Nearing Completion, Ready to Occupy</p>
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
              <img src={uto} alt="family" className="home-image" />
            </div>
          </div>
        </div>
        <div className="form-container">
          <div className="form-group">
            <label htmlFor="selectedImage">Casagrand Tudor</label>
            <p className="details">Mogappair<br/>2 BHK Apartments <br/>Rs.80 Lakhs onwards*<br/>Nearing Completion, Ready to Occupy</p>
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
              <img src={zenith} alt="family" className="home-image" />
            </div>
          </div>
        </div>
        <div className="form-container">
          <div className="form-group">
            <label htmlFor="selectedImage">Casagrand Zenith</label>
            <p className="details">Medavakkam<br/>2 & 3 BHK Apartments <br/>Rs.86 Lakhs onwards<br/>Nearing Completion, Ready to Occupy, Under Construction</p>
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
              <img src={athens} alt="family" className="home-image" />
            </div>
          </div>
        </div>
        <div className="form-container">
          <div className="form-group">
            <label htmlFor="selectedImage">Casagrand Athens</label>
            <p className="details">Mogappair<br/>2 BHK Apartments <br/>Rs.68 Lakhs onwards<br/>Nearing Completion,Under Construction</p>
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
              <img src={first} alt="family" className="home-image" />
            </div>
          </div>
        </div>
        <div className="form-container">
          <div className="form-group">
            <label htmlFor="selectedImage">Casagrand FirstCity</label>
            <p className="details">Sholinganallur<br/>2 BHK Premium Apartments<br/>Rs.55 Lakhs onwards<br/>Nearing Completion,Under Construction</p>
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
              <img src={aria} alt="family" className="home-image" />
            </div>
          </div>
        </div>
        <div className="form-container">
          <div className="form-group">
            <label htmlFor="selectedImage">Casagrand Aria</label>
            <p className="details">Tambaram<br/>2 BHK Apartments<br/>Rs.43 Lakhs onwards<br/>Under Construction</p>
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
              <img src={south} alt="family" className="home-image" />
            </div>
          </div>
        </div>
        <div className="form-container">
          <div className="form-group">
            <label htmlFor="selectedImage">Casagrand Southbrooke</label>
            <p className="details">Kelambakkam<br/>2 BHK Apartments<br/>Rs.31 Lakhs onwards<br/>Nearing completion</p>
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
              <img src={aspires} alt="family" className="home-image" />
            </div>
          </div>
        </div>
        <div className="form-container">
          <div className="form-group">
            <label htmlFor="selectedImage">Casagrand Aspires</label>
            <p className="details">Navalur<br/>2 & 3 BHK Apartments<br/>Rs.39 Lakhs onwards<br/>Under construction</p>
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
    </>
  );
};


export default Home;
