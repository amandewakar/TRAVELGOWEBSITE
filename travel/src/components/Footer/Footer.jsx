import React from "react";

import footerCSS from './../Footer/Footer.module.css';
import IMGMobile from './../../assets/app-store-google-play-logo.png'

function Footer(){
    return(
        <footer className={`${footerCSS.footerWrapper}`}>
            
            <div className={footerCSS.banner}>
                <div className={footerCSS.content}>
                    <i className="ri-newspaper-line"></i>
                    <h2>Get the latest news and updates <span>Your Travel Journey starts here </span> </h2>
                </div>
                <div className={footerCSS.form}>
                    <input type="text" placeholder="Type Here Email" />
                    <button>Subscribe</button>
                </div>
            </div>
           <div className={footerCSS.FooterContainer}>
           <div className={footerCSS.footerLinks}>
                <h3>Company</h3>
                <a href="#">About Us</a>
                <a href="#">Carrier</a>
                <a href="#">Blog</a>
                <a href="#">Press</a>
                <a href="#">Gift Cards</a>
            </div>
            <div className={footerCSS.footerLinks}>
                <h3>Service</h3>
                <a href="#">Contact</a>
                <a href="#">Legal Notice</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Tearms and Conditions</a>
                <a href="#">SiteMap</a>
            </div>
            <div className={footerCSS.footerLinks}>
                <h3>Other Services</h3>
                <a href="#">Car Hire</a>
                <a href="#">Activity Finder</a>
                <a href="#">Tour List</a>
                <a href="#">Flight Finder</a>
                <a href="#">Cruise Tickets</a>
                <a href="#">Holiday Speacils</a>
            </div>
            <div className={footerCSS.footerLinks}>
                <h3>Mobile</h3>
                <img src={IMGMobile} alt="" />
            </div>
           </div>

           </footer>

    )
}
export default Footer
