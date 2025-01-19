import React from 'react';
import './style.css';

function Home() {
  return (
    <>
      <header>
        <nav>
          <div className="nav__header">
            <div className="nav__logo">
              <a href="#">AeroKElite</a>
            </div>
            <div className="nav__menu__btn" id="menu-btn">
              <i className="ri-menu-line"></i>
            </div>
          </div>

          <ul className="nav__links" id="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#buy">Buy</a></li>
            <li><a href="#service">Services</a></li>
            <li><a href="#ride">Ride</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>


        </nav>

        <div className="section__container header__container" id="home">
          <div className="header__image">
            <img src="public/Emirates A380.png" alt="header" />
          </div>
          <div className="header__content">
            <h1>Looking to save more on buying an aircraft?</h1>
            <p>
              Experience the excellence of AeroKElite in the UAE. 
              Purchase your ideal aircraft from our extensive selection 
              of first-hand and second-hand options, tailored to meet your unique needs.
            </p>
            
          </div>
        </div>
      </header>

      
      <footer>
        <div className="section__container footer__container">
          <div className="footer__col">
            <h4>Our Products</h4>
            <ul className="footer__links">
              <li><a href="#">Career</a></li>
              <li><a href="#">Hotels</a></li>
              <li><a href="#">Aircraft</a></li>
              <li><a href="#">Packages</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">Priceline</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>About AeroKElite</h4>
            <ul className="footer__links">
              <li><a href="#">Why AeroKElite</a></li>
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Investors</a></li>
              <li><a href="#">Press Centers</a></li>
              <li><a href="#">Advertise</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>Resources</h4>
            <ul className="footer__links">
              <li><a href="#">Download</a></li>
              <li><a href="#">Help Centers</a></li>
              <li><a href="#">Guides</a></li>
              <li><a href="#">Partner Network</a></li>
              <li><a href="#">Mechanics</a></li>
              <li><a href="#">Developer</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>Extras</h4>
            <ul className="footer__links">
              <li><a href="#">AeroKElite Deal</a></li>
              <li><a href="#">Repair Shop</a></li>
              <li><a href="#">View Booking</a></li>
              <li><a href="#">Hire Companies</a></li>
              <li><a href="#">New Offers</a></li>
            </ul>
          </div>
        </div>
        <div className="section__container footer__bar">
          <h4>AeroKElite</h4>
          <p>Copyright ©AeroKElite. All rights reserved.</p>
          <ul className="footer__socials">
            <li>
              <a href="#"><i className="ri-facebook-fill"></i></a>
            </li>
            <li>
              <a href="#"><i className="ri-twitter-fill"></i></a>
            </li>
            <li>
              <a href="#"><i className="ri-google-fill"></i></a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Home;
