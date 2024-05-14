import React from 'react'
import { Link } from 'react-router-dom';
import royale from "../asserts/royale.webp"
import "./Royale.css"

function Royale() {
    return (
        <>
            <div className="royale-container">
                {/* Villa Image */}
                <img src={royale} alt="rolaye" className="villa-image" /> {/* Use the flagship1 image */}
                <div className="salient-features">
                    <h2>Features</h2>
                    <h3>Casagrand Royale</h3>
                    <div className="features">
                        <ul>
                            <li>Rs.67 Lakhs onwards*</li>
                            <li>2, 3 and 4 BHK apartments</li>
                            <li>Located in Sholinganallur, OMR</li>
                        </ul>
                    </div>
                </div>
                <div className="enquire-now">
                    <h2>Enquire Now</h2>
                    <form>
                        <div className="input-group">
                            <label htmlFor="name">Name:</label><br />
                            <input type="text" id="name" name="name" />
                        </div>
                        <div className="input-group">
                            <label htmlFor="phone">Phone Number:</label><br />
                            <input type="text" id="phone" name="phone" />
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
            <div classname="construction-range">
      <label for="construction">Construction Range:</label>
      <input type="range" id="construction" name="construction" min="0" max="100" value="97"></input>
      <span id="construction-value">97%</span>
    </div>
            <div className='highlights'>
                <h1>ROYALE HIGHLIGHTS</h1>
                <h2>SALIENT FEATURES</h2>
            <div className='p'>
                <ul>
                    <li>507 Premium apartments spread across a sprawling 7.2 acres with 63% open space</li>
                    <li>1, 2, 3 & 4 BHK apartments ranging from 927 sft. to 2055 sft</li>
                    <li>Basement + Stilt + 7 design structure</li>
                    <li>Exclusive first kids-friendly features specifically designed to suit the overall development of the children</li>
                    <li>Contemporary new-age architecture designed with optimum space utilization</li>
                    <li>54 Top class amenities with kids friendly features</li>
                    <li>Located in ELCOT Avenue at Sholinganallur</li>
                    <li>Close to Thoraipakkam, Perungudi, Navalur & Siruseri</li>
                    <li>15 Mins from Adyar at 1/3 the price</li>
                    <li>Close to IT Corridors in Sholinganallur</li>
                </ul>
            <div className='more'>
                <div className='superior'>
                <Link to="/Superior3">
                <button>SUPERIOR HOMES</button>
              </Link>
                </div>
            </div>
            </div>

            </div>
        <div className='aminities'>
        <h1>Aminities</h1>
        <div className='amenities-list-container'>
            <div className='amenities-list'>
            <h2>FEATURES</h2>
            <ul>
                <li>gym</li>
                <li>creache</li>
                <li>Spa</li>
                <li>Sauna</li>
                <li>play lawn</li>
                <li>Chalkboard Wall</li>
                <li>Trampoline</li>
                <li>Beach Volleyball</li>
                <li>Jogging Track</li>
                <li>Maids And Drivers Room</li>
            </ul>
            <Link to ="/Aminitiesr">
            <button type='onclick'>ALL AMINITIES</button>
          </Link>
            </div>
        </div>
      </div>
      <div className='walkthrough'>
    <h1>WALKTHROUGH</h1>
    <div className="video-container">
        <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/S_l91QEAptw"
            title="Walkthrough 1"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        ></iframe>
        <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Qvwo8GDtznM"
            title="Walkthrough 2"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        ></iframe>
        <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/IpIyGb84KTE"
            title="Walkthrough 3"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        ></iframe>
    </div>


      </div>
    <h1>CONFIGURATION</h1>
    <div className='configuration'>
        <div className='configuration-box'>
            <p>Market Price : ₹6500/Sqft* </p>
        </div>
        <div className="configuration-box">
            <p>Casagrand Price : ₹6099/Sqft</p>

        </div>
    </div>
    <div className='apartment'>
      <h1>Apartment Configurations</h1>
      <p>*Price mentioned is the Basic cost which is Exclusive of other charges.</p>
      <table className="apartment-table">
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
            <td>Regular</td>
            <td>1138 Sqft</td>
            <td>Rs.6099/Sqft</td>
            <td>Sold Out</td>
          </tr>
          <tr>
            <td>3 BHK</td>
            <td>Regular</td>
            <td>1478 Sqft</td>
            <td>Rs.6099/Sqft</td>
            <td>Sold Out</td>
          </tr>
          <tr>
            <td>4 BHK</td>
            <td>Regular</td>
            <td>2055 Sqft</td>
            <td>Rs.6099/Sqft</td>
            <td>Sold Out</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className='copy'>
        <p>&copy; *Price mention is basic cost. Other charges excluded</p>
      </div>

      {/* Project Overview Section */}
      <div className="project-overview">
        <h1>Experience awe in an amazing community!</h1>
        <div className="overview-container">
          <img src={royale} alt="home1" className="overview-image" />
          <div className="overview-details">
            <p>Casagrand Royale, is where life, in all its glory, can be experienced. Stunning homes, designed for comfort, with a wholesome lifestyle, Royale is the perfect stage for an extraordinary life. All this without having to pay an exorbitant price</p>
            <p> RERA Registration Number: TN/29/Building/175/2019 Approval Authority</p>
            <p><a href="http://www.rera.tn.gov.in" target="_blank" rel="noopener noreferrer">www.rera.tn.gov.in</a></p>
          </div>
        </div>
      </div>
    
      <div className='location'>
        <h1>LOCATION ADVANTAGE</h1>
        <h3> TRANSPORTATION</h3>
        <div className='location-details'>
          <ul>
            <li>Sholinganallur Bus Stop – 850 m</li>
            <li>Dollar Bus Stop – 1.4 km</li>
            <li>Perungudi – 9.3 km</li>
            <li>Sholinganallur – 1.7 km</li>
            <li>Velammal Vidhyalaya – 950 m</li>
            <li>HLC International School – 11.2 km</li>
            <li>Chettinad Health City – 13.6 km</li>
            <li>Jeppiaar Engineering College – 3.2 km</li>
            <li>KCG College of Technolog – 4.6 km</li>
          </ul>
          <div className='but'>
            <Link to="/Radvantages">
              <button type='button'>MORE ADVANTAGES</button>
            </Link>
          </div>
        </div>
      </div>
        </>



    )
}

export default Royale;  
