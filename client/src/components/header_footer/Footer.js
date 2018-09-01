import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__wrapper">
        <ul className="footer__list">
          <li className="footer__item">
            <i class="fab fa-facebook"> </i>
            <a href="https://m.facebook.com/escapesfl">FaceBook Page </a>
          </li>
          <li className="footer__item">
            <i class="fas fa-home"> </i>
            <a href="https://www.homeadvisor.com/rated.EscapesOutdoorLiving.78696798.html">
              Home Advisor
            </a>
          </li>
          <li className="footer__item">
           <i class="fab fa-houzz"></i>
            <a href="https://www.houzz.es/pro/escapesoutdoorliving/escapes-outdoor-living?irs=US">
              Houzz
            </a>
          </li>
        </ul>
        <ul>
          <li className="footer__item">
           <i class="fab fa-instagram"></i>
            <a href="https://www.instagram.com/escapesfl/">Instagram</a>
          </li>
          <li className="footer__item">
            <i class="far fa-envelope"> </i>
            <p> Office@escapesfl.com </p>
          </li>
          <li className="footer__item">
            <i class="fas fa-phone-square"> </i>
            <p> 813-613-3559 </p>
          </li>
        </ul>
      </div>

      <p className="footer__dev">
        &copy; 2018 This site is powered by Lexx Solutions{" "}
      </p>
    </div>
  );
};

export default Footer;
