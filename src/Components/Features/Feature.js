import React from "react";
import Wrapper from "./Feature.styled";

const Feature = ({ icon, title, text }) => {
  return (
    <Wrapper>
      {icon}
      <h3 className="heading-3">{title}</h3>
      <p className="feature__text">{text}</p>
    </Wrapper>
  );
};

export default Feature;
