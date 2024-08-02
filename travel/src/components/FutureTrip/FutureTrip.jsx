import React from "react";
import futureTripCSS from './../FutureTrip/FutureTrip.module.css'

import image1 from'./../../assets/image1.jpg'
import image2 from'./../../assets/image2.jpg'
import image3 from'./../../assets/image3.jpg'

function FutureTrip(){
    return(
        <div className={`${futureTripCSS.FutureTrip_Wrapper} section`} id="inspiration">
            <div className={futureTripCSS.FutureTripCards}>
            <div className={futureTripCSS.FutureTripCard}>
            <div className={futureTripCSS.FutureTripCardImage}>
              <img src={image1} alt="" />
            </div>
            <h3>10 Europeian Ski Destination you should Visit this winter</h3>
            <p>Feb-05-2024</p>
            </div>
            <div className={futureTripCSS.FutureTripCard}>
            <div className={futureTripCSS.FutureTripCardImage}>
              <img src={image2} alt="" />
            </div>
            <h3>Booking Travel During Corona : Good Advice in an uncertain Time</h3>
            <p>jan-15-2024</p>
            </div>
            <div className={futureTripCSS.FutureTripCard}>
            <div className={futureTripCSS.FutureTripCardImage}>
              <img src={image3} alt="" />
            </div>
            <h3>Where Can i go ? Amazing Countryies that Open right now.</h3>
            <p>june-05-2024</p>
            </div>
            </div>
        </div>
    )
}
export default FutureTrip