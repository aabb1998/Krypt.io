import React from 'react';
import './Footer.css';
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <div className="footer__section">
      <div className="footer__section-container">
        <div className="footer__section-left">
          <p>Take your crypto to the next level with pureCrypto.io</p>
          <button className="footer__button-login">Log In</button>
          <button className="footer__button-signup">Sign Up</button>
        </div>
        <div className="footer__section-right">
          <nav>
            <ul>
              <li>Cryptocurrencies</li>
              <li>Exchanges</li>
              <li>News</li>
              <li>Calendars</li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="footer__section-logo">
        <img src={logo} alt="" />
        <p>© 2021 pureCrypto.io. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
