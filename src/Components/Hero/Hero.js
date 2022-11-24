import React from "react";
import Wrapper from "./Hero.styled";

import heroImg from "../../assets/images/illustration-intro.png";

const Hero = () => {
  return (
    <Wrapper>
      <img src={heroImg} alt="hero illustration" className="hero__img" />
      <h2 className="heading-2">
        All your files in one secure location, accessible anywhere.
      </h2>
      <p className="hero__text">
        Fylo stores all your most important files in one secure location. Access
        them wherever you need, share and collaborate with friends family, and
        co-workers.
      </p>
      <button className="btn btn-hero">Get Started</button>
    </Wrapper>
  );
};

export default Hero;
