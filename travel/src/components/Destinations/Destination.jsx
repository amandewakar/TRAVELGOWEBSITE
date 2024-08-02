import React from "react";
import destinationCSS from './../Destinations/Destination.module.css';

import Destination01 from './../../assets/Destination01.jpg';
import Destination02 from './../../assets/Destination02.jpg';
import Destination03 from './../../assets/Destination03.jpg';
import Destination04 from './../../assets/Destination04.jpg';
import Destination05 from './../../assets/Destination05.jpg';
import Destination06 from './../../assets/Destination06.jpg';
import Destination07 from './../../assets/Destination07.jpg';
import Destination08 from './../../assets/Destination08.jpg';
import Destination09 from './../../assets/Destination09.jpg';
import Destination10 from './../../assets/Destination10.jpg';

function Destination() {
  return (
    <div className={`${destinationCSS.DestinationWrapper} section`} id="destination">
      <div className="Section_heading">
        <div>
          <h2>Popular Destinations</h2>
          <p>Top Travel Destinations for Your Next Getaway</p>
        </div>
        <button>
          <small>View All Destinations</small>
          <i className="ri-arrow-right-up-line"></i>
        </button>
      </div>
      <div className={destinationCSS.DestinationCards}>
        <div className={destinationCSS.DestinationCard}>
          <img src={Destination01} alt="San Francisco" />
          <div className={destinationCSS.Content}>
            <h2>San Francisco</h2>
            <button>Discover</button>
          </div>
        </div>
        <div className={destinationCSS.DestinationCard}>
          <img src={Destination02} alt="London" />
          <div className={destinationCSS.Content}>
            <h2>London</h2>
            <button>Discover</button>
          </div>
        </div>
        <div className={destinationCSS.DestinationCard}>
          <img src={Destination03} alt="Sydney" />
          <div className={destinationCSS.Content}>
            <h2>Sydney</h2>
            <button>Discover</button>
          </div>
        </div>
        <div className={destinationCSS.DestinationCard}>
          <img src={Destination04} alt="Rome" />
          <div className={destinationCSS.Content}>
            <h2>Rome</h2>
            <button>Discover</button>
          </div>
        </div>
        <div className={destinationCSS.DestinationCard}>
          <img src={Destination05} alt="Barcelona" />
          <div className={destinationCSS.Content}>
            <h2>Barcelona</h2>
            <button>Discover</button>
          </div>
        </div>
        <div className={destinationCSS.DestinationCard}>
          <img src={Destination06} alt="Paris" />
          <div className={destinationCSS.Content}>
            <h2>Paris</h2>
            <button>Discover</button>
          </div>
        </div>
        <div className={destinationCSS.DestinationCard}>
          <img src={Destination07} alt="Maldives" />
          <div className={destinationCSS.Content}>
            <h2>Maldives</h2>
            <button>Discover</button>
          </div>
        </div>
        <div className={destinationCSS.DestinationCard}>
          <img src={Destination08} alt="Egypt" />
          <div className={destinationCSS.Content}>
            <h2>Egypt</h2>
            <button>Discover</button>
          </div>
        </div>
        <div className={destinationCSS.DestinationCard}>
          <img src={Destination09} alt="Maldives" />
          <div className={destinationCSS.Content}>
            <h2>China</h2>
            <button>Discover</button>
          </div>
        </div>
        <div className={destinationCSS.DestinationCard}>
          <img src={Destination10} alt="Maldives" />
          <div className={destinationCSS.Content}>
            <h2>Dubai</h2>
            <button>Discover</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destination;
