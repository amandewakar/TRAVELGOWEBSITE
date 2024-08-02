import React from "react";
import hotelsCSS from './../Hotels/Hotels.module.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import { Autoplay } from 'swiper/modules';

import img1 from './../../assets/img1.jpg';
import img2 from './../../assets/img2.jpg';
import img3 from './../../assets/img3.jpg';
import img4 from './../../assets/img4.jpg';
import img5 from './../../assets/img5.jpg';
import img6 from './../../assets/img6.jpg';
import img7 from './../../assets/img7.jpg';
import img8 from './../../assets/img8.jpg';
import img9 from './../../assets/img9.jpg';
import img10 from './../../assets/img10.jpg';

function Hotels() {
  return (
    <div className={`${hotelsCSS.HotelsWrapper} section`} id="recommended">
      <div className="Section_heading">
        <div>
          <h2>Popular Hotels</h2>
          <p>Top-Rated Hotels: Discover the Most Popular Stays Worldwide</p>
        </div>
        <button><small>View All Hotels</small><i className="ri-arrow-right-up-line"></i></button>
      </div>

      <Swiper
        spaceBetween={100}
        slidesPerView={4}
        autoplay={{ delay: 2500 }}
        loop={true}
        modules={[Autoplay]}
        breakpoints={{
            0:{slidesPerView:1},
            700:{slidesPerView:2},
            1024:{slidesPerView:3},
            1200:{slidesPerView:4},
            }}
        className={hotelsCSS.swiper} >
        <SwiperSlide>
          <div className={hotelsCSS.card}>
            <div className={hotelsCSS.imgWrapper}>
              <img src={img1} alt="Park Plaza Westminster Bridge London" />
            </div>
            <h3>Park Plaza Westminster London</h3>
            <h4>South Bank of the Thames</h4>
            <small>Park Plaza Westminster Bridge London is set opposite the Houses of Parliament 
            </small>
            <p><span>4.7</span> Exceptional 3,025 Rating</p>
            <h4>Starting From<span>$1200</span></h4>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={hotelsCSS.card}>
            <div className={hotelsCSS.imgWrapper}>
              <img src={img2} alt="Hotel Cristoforo Colombo" />
            </div>
            <h3>Hotel Cristoforo Colombo</h3>
            <h4>Hotel in Torrino, Rome</h4>
            <small>Cristoforo Colombo is set in Rome's EUR district, and close to Rome's GRA ring road. 
            </small>
            <p><span>8.2</span> Exceptional 8,829 Rating</p>
            <h4>Starting From <span>$1500</span></h4>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={hotelsCSS.card}>
            <div className={hotelsCSS.imgWrapper}>
              <img src={img3} alt="Hyatt Regency Sydney" />
            </div>
            <h3>Hyatt Regency Sydney</h3>
            <h4>Hotel in Sydney CBD, Sydney</h4>
            <small>A Premium, Waterside Retreat in Sydney Located to Darling Harbour in Sydney's.</small>
            <p><span>8.0</span> Exceptional 7,729 Rating</p>
            <h4>Starting From <span>$1800</span></h4>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={hotelsCSS.card}>
            <div className={hotelsCSS.imgWrapper}>
              <img src={img4} alt="Hotel Zephyr San Francisco" />
            </div>
            <h3>Hotel Zephyr San Francisco</h3>
            <h4> San Francisco</h4>
            <small>Hotel Zephyr San Francisco is located a short 300 metres from Pier 39 Fisherman's Wharf.</small>
            <p><span>7.3</span> Exceptional 5,556 Rating</p>
            <h4>Starting From <span>$1300</span></h4>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={hotelsCSS.card}>
            <div className={hotelsCSS.imgWrapper}>
              <img src={img5} alt="Grand Hyatt Barcelona" />
            </div>
            <h3>Grand Hyatt Barcelona</h3>
            <h4>Hotel in Les Corts, Barcelona</h4>
            <small>A five star iconic hotel located on the renowned Avenida Diagonal</small>
            <p><span>8.5</span> Exceptional 8,729 Rating</p>
            <h4>Starting From <span>$2000</span></h4>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={hotelsCSS.card}>
            <div className={hotelsCSS.imgWrapper}>
              <img src={img6} alt="Grand Hyatt Barcelona" />
            </div>
            <h3>K+K Hotel Opera</h3>
            <h4> Terézváros, Budapest, Hungary</h4>
            <small>Get your trip off to a great start with a stay at this property, which offers free Wi-Fi.</small>
            <p><span>4.5</span> Exceptional 5,229 Rating</p>
            <h4>Starting From <span>$1100</span></h4>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={hotelsCSS.card}>
            <div className={hotelsCSS.imgWrapper}>
              <img src={img7} alt="Grand Hyatt Barcelona" />
            </div>
            <h3>ME Dubai by Melia</h3>
            <h4>  Dubai, United Arab Emirates </h4>
            <small>Stay at ME Dubai by Melia for a memorable solo travel experience in the heart of Dubai.</small>
            <p><span>8.8</span> Exceptional 9,229 Rating</p>
            <h4>Starting From <span>$2500</span></h4>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={hotelsCSS.card}>
            <div className={hotelsCSS.imgWrapper}>
              <img src={img8} alt="Grand Hyatt Barcelona" />
            </div>
            <h3>HOTEL DU LOUVRE </h3>
            <h4> Paris, France</h4>
            <small>Experience luxury and convenience at Hotel Park Lane Paris.</small>
            <p><span>7.7</span> Exceptional 7,989 Rating</p>
            <h4>Starting From <span>$1800</span></h4>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={hotelsCSS.card}>
            <div className={hotelsCSS.imgWrapper}>
              <img src={img9} alt="Grand Hyatt Barcelona" />
            </div>
            <h3>Steigenberger Hotel El Tahrir</h3>
            <h4>  Downtown, Cairo, Egypt</h4>
            <small>
            Immerse yourself in the heart of Downtown Cairo at the Steigenberger Hotel El Tahrir.</small>
            <p><span>9.5</span> Exceptional 13,229 Rating</p>
            <h4>Starting From <span>$2800</span></h4>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={hotelsCSS.card}>
            <div className={hotelsCSS.imgWrapper}>
              <img src={img10} alt="Grand Hyatt Barcelona" />
            </div>
            <h3>La Griffe Hotel Roma</h3>
            <h4>  Rome, Italy</h4>
            <small>Conveniently situated in the Termini Central Station part of Rome.</small>
            <p><span>8.1</span> Exceptional 9,229 Rating</p>
            <h4>Starting From <span>$2300</span></h4>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Hotels;
