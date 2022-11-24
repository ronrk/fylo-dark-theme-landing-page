import React from "react";
import Wrapper from "./Footer.styled";
import logo from "../../assets/images/logo.svg";

import { ReactComponent as IconLocation } from "../../assets/images/icon-location.svg";
import { ReactComponent as IconPhone } from "../../assets/images/icon-phone.svg";
import { ReactComponent as IconEmail } from "../../assets/images/icon-email.svg";
import { CiFacebook, CiTwitter, CiInstagram } from "react-icons/ci";

const Footer = () => {
  return (
    <Wrapper>
      <img src={logo} alt="logo" className="footer__logo" />
      <div className="footer__location">
        <IconLocation className="footer__icon" />
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </span>
      </div>
      <div className="footer__contact">
        <div className="footer__phone ">
          <IconPhone className="footer__icon" />
          <span>+1-543-123-4567</span>
        </div>
        <div className="footer__email ">
          <IconEmail className="footer__icon" />
          <span>example@fylo.com</span>
        </div>
      </div>
      <ul className="footer__links">
        <li>
          <a href="/">About Us</a>
        </li>
        <li>
          <a href="/">Jobs</a>
        </li>
        <li>
          <a href="/">Press</a>
        </li>
        <li>
          <a href="/">Blog</a>
        </li>
      </ul>
      <ul className="footer__links">
        <li>
          <a href="/">Contact Us</a>
        </li>
        <li>
          <a href="/">Terms</a>
        </li>
        <li>
          <a href="/">Privacy</a>
        </li>
      </ul>
      <div className="social-icons">
        <CiFacebook className="icon" />
        <CiTwitter className="icon" />
        <CiInstagram className="icon" />
      </div>
    </Wrapper>
  );
};

export default Footer;
