import React, { useState, useRef } from 'react';
import "./Flagship.css";
import { Link } from 'react-router-dom';
import flag from "../asserts/flag.webp";
import f1 from "../asserts/f1.webp";
import f2 from "../asserts/f2.jpg";
import f3 from "../asserts/f3.webp";
import f4 from "../asserts/f4.webp";
import f5 from "../asserts/f5.webp";
import project from "../asserts/project.webp";

function Flagship() {
  const galleryRef = useRef(null);
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
  return (
    <div>
      <div className="linore-container">
        <img src={flag} alt="flagship" className="villa-image" />
      
        {/* <div class="fav"> */}
      {/* <Link to="/Favorites">
      <button type="button">ADD TO FAV</button>
      </Link>
      <Link to="/Cart">
      <button type="button">ADD TO CART</button>
      </Link> */}
    {/* </div> */}
  

        <div className="salient-features">
          <h2>Features</h2> 
          <h3>Casagrand flagship</h3>
          <div className="features">
            <ul>
              <li>Starting from 55 lakhs</li>
              <li>Spacious 2, 3 BHK apartments</li>
              <li>Located in Pallikarnai, Chennai</li>
            </ul>
          </div>
        </div>
      
      
        <div className="enquire-now">
          <h2>Enquire Now</h2>
          <form onSubmit={handlesubmit}>
            <div className="input-group">
              <label htmlFor="name">Name:</label><br />
              <input type="text" onChange={(e)=>{setName(e.target.value)}} id="name" name="name" />
            </div>
            <div className="input-group">
              <label htmlFor="phone">Phone Number:</label><br />
              <input type="text" onChange={(e)=>{setNumber(e.target.value)}} id="phone" name="phone" />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <div classname="construction-range">
      <label for="construction">Construction Range:</label>
      <input type="range" id="construction" name="construction" min="0" max="100" value="55"></input>
      <span id="construction-value">55%</span>
    </div>
      <div className='highlights'>
        <h1>FLAGSHIP HIGHLIGHTS</h1>
        <h2>SALIENT FEATURES</h2>
        <div className='p'>
          <ul>
            <li>Elegantly crafted 887 Apartments and 54 Villas on 17.58 acres</li>
            <li>Thoughtfully designed 2,3 & 4 BHK Tudor Styled apartments with S+5 structure</li>
            <li>Beautifully designed 3 & 4 BHK Villas with G+2 & G+1 Structure</li>
            <li>The community has 42% open space with 69,000 sqft of colossal podiums</li>
            <li>Offers 110+ world-class amenities for a superior lifestyle</li>
            <li>An elaborate clubhouse of 34,000 sq.ft with luxurious amenities like Spa, Sauna, Jacuzzi & Salon</li>
            <li>100% Vaastu compliant homes with zero dead space</li>
            <li>Surrounded by prominent IT & ITEES Companies, schools, colleges & hospitals</li>
          </ul>
          <div className='more'>
            <div className='superior'>
              <Link to="/Superior1">
                <button>SUPERIOR HOMES</button>

              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="amenities">
        <h1>Amenities</h1>
        <div className="amenities-list-container">
          <div className="amenities-list">
            <h2>ENTERTAINMENT AND FEATURES</h2>
            <ul>
              <li>Entrance plaza with drop-off zone</li>
              <li>Entry water feature</li>
              <li>Feature median planting</li>
              <li>Leisure landscape court</li>
              <li>Yoga & meditation zone</li>
              <li>Water refill station for community & pets</li>
              <li>Feature stepped seating</li>
              <li>Geometric seating</li>
              <li>Reflexology walkway with seating area</li>
              <li>Outdoor workstations with Wi-Fi</li>
              <li>Reading nook</li>
              <li>Seating nooks along pathways</li>
              <li>Multi-purpose lawn for social gatherings & events</li>
            </ul>
          <Link to ="/Aminitiesf">
            <button type='onclick'>ALL AMINITIES</button>
          </Link>
          </div>
        </div>
      </div>
      <div className='walkthrough'>
        <h1>WALKTHROUGH</h1>
        <div className="video-container">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/3WJT-m4_XyA" title="Walkthrough 1" frameborder="0" allowfullscreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/m3Y8aVwZtU4" title="Walkthrough 2" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>
      <h1>CONFIGURATION</h1>
      <div className='configuration'>
        <div className='configuration-box'>
          <p>Market Price : ₹13500 / Sqft</p>
        </div>
        <div className='configuration-box'>
          <p>Casagrand Price : ₹5299 / Sqft</p>
        </div>
        <div className='configuration-box'>
          <p>Offer Price : ₹4999 / Sqft</p>
        </div>
      </div>
      <div class="apartment-table-container">
        <h2>Phase 1</h2>
        <table class="apartment-table">
          <thead>
            <tr>
              <th>BHK</th>
              <th>UNIT TYPE</th>
              <th>BUILT-UP AREA</th>
              <th>PRICE PER SQ. FT.</th>
              <th>PRICE RANGE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2 BHK</td>
              <td>Affordable</td>
              <td>959 Sqft</td>
              <td>Rs 4999 / Sqft</td>
              <td>Rs 47.94 Lakhs onwards</td>
            </tr>
            <tr>
              <td>2 BHK</td>
              <td>Superior</td>
              <td>1113 Sqft - 1262 Sqft</td>
              <td>Rs 4999 / Sqft</td>
              <td>Rs 55.63 Lakhs onwards</td>
            </tr>
            <tr>
              <td>3 BHK</td>
              <td>Superior</td>
              <td>1574 Sqft - 1684 Sqft</td>
              <td>Rs 4999 / Sqft</td>
              <td>Rs 78.68 Lakhs onwards</td>
            </tr>
            <tr>
              <td>3 BHK</td>
              <td>Pinnacle</td>
              <td>1914 Sqft - 1989 Sqft</td>
              <td>Rs 5399 / Sqft</td>
              <td>Rs 1.03 Cr onwards</td>
            </tr>
            <tr>
              <td>4 BHK</td>
              <td>Pinnacle</td>
              <td>2349 Sqft - 2354 Sqft</td>
              <td>Rs 5399 / Sqft</td>
              <td>Rs 1.26 Cr onwards</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="apartment-table-container">
        <h2>Phase 2</h2>
        <table class="apartment-table">
          <thead>
            <tr>
              <th>BHK</th>
              <th>UNIT TYPE</th>
              <th>BUILT-UP AREA</th>
              <th>PRICE PER SQ. FT.</th>
              <th>PRICE RANGE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2 BHK</td>
              <td>Superior</td>
              <td>1289 Sqft</td>
              <td>Rs 5399 / Sqft</td>
              <td>Rs 69.59 Lakhs Onwards</td>
            </tr>
            <tr>
              <td>3 BHK</td>
              <td>Superior</td>
              <td>1574 Sqft - 1689 Sqft</td>
              <td>Rs 5399 / Sqft</td>
              <td>Rs 84.98 Lakhs Onwards</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='copy'>
        <p>&copy; *Price mention is basic cost. Other charges excluded</p>
      </div>
      <div className='project-overview'>
        <h1>Experience awe in an amazing community!</h1>
        <div className='overview-container'>
          <img src={project} alt='project' className='overview-image'/>
          <div className='overview-details'>
            <p>Casagrand Flagship – A proud creation of Casagrand, Flagship is the largest residential community at Pallikaranai. This is one of the most important projects and is a definitive statement in luxury living in a well-integrated community. The project weaves all the joys of
community living with the finest nuances of luxury beautifully.
Designed impeccably with stunning aesthetics, these Tudor-styled homes impart an aura of elegance to the whole township. It’s a perfect blend of old-world charm and modern refinement. It’s real classy, very English and sophisticated. Flagship is the perfect new-age symbol of modern living in a happy, thriving community.</p>
            <p>Elegantly crafted 887 Apartments and 54 Villas on 17.58 acres</p>
            <p>Rera No: TN/29/BUILDING/0531/2022</p>
            <p><a href='http://www.rera.tn.gov.in' target='_blank' rel='nooper noreferrer'>www.rera.tn.gov.in</a></p>
          </div>
        </div>
      </div>
      <div className='location'>
        <h1>LOCATION ADVANTAGE</h1>
        <h3>Distance from Railway Station & Bus Stand</h3>
        <div className='location-details'>
          <ul>
            <li>Pallikaranai Bus Stand – 9Mins</li>
            <li>Kamakshi Hospital Bus Stand – 15Mins</li>
            <li>Balaji Dental College Bus Stand – 15mins</li>
            <li>Velachery Railway Station- 20mins</li>
            <li>Perungudi Railway Station- 25mins</li>
            <li>Taramani Railway Station- 25mins</li>
            <li>Adambakkam Railway Station- 20mins</li>
          </ul>
          <div className='but'>
            <Link to ="/Flagadvantages">
              <button type='button'>MORE ADVANTAGES</button>
            </Link>
          </div>
        </div>
      </div>
      <div className='galleries'>
        <h2>Image Gallery</h2>
        <div className='gallery-container'>
          <div className='gallery' ref={galleryRef}>
            <img src={f1} alt='Gallery 1' className='gallery-image'></img>
            <img src={f2} alt='Gallery 2' className='gallery-image'></img>
            <img src={f3} alt='Gallery 3' className='gallery-image'></img>
            <img src={f4} alt='Gallery 4' className='gallery-image'></img>
            <img src={f5} alt='Gallery 5' className='gallery-image'></img>
          </div>
        </div>
      </div>
    <h1>KNOW YOUR COMMUNITY</h1>
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.2139700030316!2d80.2084076!3d12.9196031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267b2727b3aaf%3A0x591c0a6c2f019a74!2sAdayar%2C%20Chennai%2C%20Tamil%20Nadu%20600020%2C%20India!5e0!3m2!1sen!2sus!4v1686853715091!5m2!1sen!2sus"
        width="100%"
        height="200%"
        style={{ border: 'none' }}
        allowFullScreen=""
        loading="lazy"
        title="Google Map"
    ></iframe>
    </div>
  );
}

export default Flagship;
