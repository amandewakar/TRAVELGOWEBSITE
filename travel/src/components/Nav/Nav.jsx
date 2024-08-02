import React, { useRef } from "react";
import navCSS from'./../Nav/Nav.module.css';
function Nav(){

    const Menu=useRef()
    const Navbar=useRef()

    const NavHandler=()=>{
        Menu.current.classList.toggle(navCSS.activeNav)
    }
    window.addEventListener('scroll', function(){
        if(this.window.scrollY>100){
            Navbar.current.classList.add(navCSS.navbarActive);
        }
        else{
            Navbar.current.classList.remove(navCSS.navbarActive);
        }
    })
    return(
        <div className={navCSS.NavWrapper} ref={Navbar}>
            <div className={navCSS.ContainerNav}>
            <div className={navCSS.logo}>
                <a href="#">TravelGo.</a>
            </div>
            <ul ref={Menu}>
                <li><a href="#home">Home</a></li> 
                <li><a href="#destination">Destination</a></li> 
                <li><a href="#recommended">Recommended</a></li> 
                <li><a href="#Testimonials">Testimonials</a></li> 
                <li><a href="#inspiration">Inspiration</a></li> 
            </ul>

            </div>

            <div className={navCSS.NavButtons}>
                <button className={navCSS.button}>Sign Up</button>
                <i className="ri-menu-3-line" onClick={NavHandler}></i>
            </div>
        </div>
    )
}
 
export default Nav