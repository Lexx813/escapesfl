import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__wrapper">
        <ul className="footer__list">
          <li className="footer__item">
            <i className="fab fa-facebook"> </i>
            <a href="https://m.facebook.com/escapesfl">FaceBook Page </a>
          </li>
          <li className="footer__item">
            <i className="fas fa-home"> </i>
            <a href="https://www.homeadvisor.com/rated.EscapesOutdoorLiving.78696798.html">
              Home Advisor
            </a>
          </li>
          <li className="footer__item">
            <i className="fab fa-houzz" />
            <a href="http://www.houzz.com/pro/escapesfl">Houzz</a>
          </li>
          <li className="footer__item">
         < a href = "http://www.homeadvisor.com/rated.EscapesOutdoorLiving.78696798.html"
         style = "display: block; margin: 0 auto;" > < img alt = "Screened Contractor on HomeAdvisor"
         style = "display:block;"
         src = "http://www.homeadvisor.com/images/sp-badges/soap-solid-border.png?sp=78696798&key=ddfb515a645a0c16f4d202e119332d44" / > </a>
          </li>
        </ul>
        <ul>
          <li className="footer__item">
            <i className="fab fa-instagram" />
            <a href="https://www.instagram.com/escapesfl/">Instagram</a>
          </li>
          <li className="footer__item">
            <i className="far fa-envelope"> </i>
            <p> Office@escapesfl.com </p>
          </li>
          <li className="footer__item">
            <i className="fas fa-phone-square"> </i>
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
