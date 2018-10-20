import React from "react";
import FooterLogo from "../../images/logo/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo-box">
        <img src={FooterLogo} alt="footer logo" className="footer__logo" />
        <p className="footer__copyright">
          &copy; 2018 This site is powered by Lexx Solutions
        </p>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item">
                <i className="fab fa-facebook"> </i>
                &nbsp;
                <a
                  className="footer__link"
                  href="https://m.facebook.com/escapesfl"
                >
                  FaceBook Page
                </a>
              </li>
              <li className="footer__item">
                <i className="fas fa-home"> </i>
                &nbsp;
                <a
                  className="footer__link"
                  href="https://www.homeadvisor.com/rated.EscapesOutdoorLiving.78696798.html"
                >
                  Home Advisor
                </a>
              </li>
              <li className="footer__item">
                <i className="fab fa-houzz" />
                &nbsp;
                <a
                  className="footer__link"
                  href="http://www.houzz.com/pro/escapesfl"
                >
                  Houzz
                </a>
              </li>
              <li className="footer__item">
                <i className="fab fa-instagram" />
                &nbsp;
                <a
                  className="footer__link"
                  href="https://www.instagram.com/escapesfl/"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-1-of-2">
          <ul className="footer__contact_info">
            <li className="footer__item">
              <i className="far fa-envelope"> </i>
              &nbsp;
              <a className="footer__link" href="mailto:office@escapesfl.com">
                Office@escapesfl.com
              </a>
            </li>
            <li className="footer__item">
              <i className="fas fa-phone-square"> </i>
              &nbsp;
              <a href="tel:813-613-3559" className="footer__link">
                813-613-3559
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
