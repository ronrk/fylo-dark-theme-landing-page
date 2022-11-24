import React from "react";
import Wrapper from "./Header.styled";

import logo from "../../assets/images/logo.svg";

const Header = () => {
  return (
    <Wrapper>
      <img src={logo} alt="logo" className="header__logo" />
      <ul className="header__nav">
        <li>
          <a href="/">features</a>
        </li>
        <li>
          <a href="/">team</a>
        </li>
        <li>
          <a href="/">sign in</a>
        </li>
      </ul>
    </Wrapper>
  );
};

export default Header;
