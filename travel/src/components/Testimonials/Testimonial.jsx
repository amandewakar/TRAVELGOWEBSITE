import React from "react";
import Testimoanialcss from './../Testimonials/Testimonial.module.css';

import user1 from './../../assets/User1.png';
import user2 from './../../assets/User2.png';
import user3 from './../../assets/User3.png';
import user4 from './../../assets/User4.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from "swiper/modules";
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

function Testimoanial() {
  return (
    <div className={`${Testimoanialcss.TestimoanialWrapper} section`} id="Testimonials">
      <div className={Testimoanialcss.content}>
        <h2>What Our Clients Say?</h2>
        <p>Our clients have shared a range of positive experiences and feedback on our travel website. Many have praised the seamless booking process, highlighting the user-friendly interface and comprehensive information provided.</p>
        <div className={Testimoanialcss.Rating}>
          <div>
            <h3>50+ <span>Happy Clients</span></h3>
          </div>
          <div>
            <h3>7.9+ <span>Overall Rating</span></h3>
          </div>
        </div>
      </div>

      <Swiper className={Testimoanialcss.swiper} 
      loop={true}
      modules={[Autoplay]}
      autoplay={{
        delay:2500
      }}
      
      >
        <SwiperSlide>
          <div className={Testimoanialcss.Testimoanial}>
            <div className={Testimoanialcss.profile}>
              <img src={user1} alt="User 1" />
              <h3>John Stevens <span>-Software Engineer</span></h3>
            </div>
            <p>"I had an excellent experience using this travel website. The booking process was straightforward, and I found great deals on flights and accommodations. The site is user-friendly and provides all the information I needed. I will definitely use it again for my future travels."</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={Testimoanialcss.Testimoanial}>
            <div className={Testimoanialcss.profile}>
              <img src={user2} alt="User 2" />
              <h3>Michael Collins<span>-Marketing Manager</span></h3>
            </div>
            <p>"This platform made my vacation planning a breeze. The variety of options and competitive prices were impressive. The customer service team was incredibly helpful when I had questions about my itinerary. I highly recommend this site to anyone looking to book their trips easily."</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={Testimoanialcss.Testimoanial}>
            <div className={Testimoanialcss.profile}>
              <img src={user3} alt="User 3" />
              <h3>David Ramirez<span>-Financial Analyst</span></h3>
            </div>
            <p>"I appreciate the transparency and ease of use on this travel website. The pricing was clear, with no hidden fees, and the booking process was quick. The website's design is sleek and intuitive, making it simple to find what you're looking for. My family and I had a wonderful trip, thanks to the great deals we found here." </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={Testimoanialcss.Testimoanial}>
            <div className={Testimoanialcss.profile}>
              <img src={user4} alt="User 4" />
              <h3>James Turner<span>-Graphic Designer</span></h3>
            </div>
            <p>"As a frequent traveler, I was impressed by the range of options available on this site. The filters allowed me to narrow down my choices quickly, and the customer reviews helped me make informed decisions. The entire experience, from booking to travel, was smooth and hassle-free. Highly recommend!"</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Testimoanial;
