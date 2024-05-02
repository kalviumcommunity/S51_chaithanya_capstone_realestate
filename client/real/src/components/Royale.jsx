import React from 'react'
import { Link } from 'react-router-dom';
import royale from "../asserts/royale.webp"

function Royale() {
    return (
        <>
            <div className="linore-container">
                {/* Villa Image */}
                <img src={royale} alt="flagship" className="villa-image" /> {/* Use the flagship1 image */}
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
        <div className='aminities'></div>
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
            </>



    )
}

export default Royale;  
