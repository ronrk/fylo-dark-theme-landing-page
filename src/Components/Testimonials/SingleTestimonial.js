import React from "react";
import Wrapper from "./SingleTestimonial.styled";

const SingleTestimonial = ({ text, img, username, position }) => {
  return (
    <Wrapper>
      <p className="testimonial__text">{text}</p>
      <div className="user">
        <img src={img} alt="user profile" />
        <h4 className="user__name">{username}</h4>
        <span className="user__position">{position}</span>
      </div>
    </Wrapper>
  );
};

export default SingleTestimonial;
