import React from "react";
import Wrapper from "./GetEarlySection.styled";

const GetEarlySection = () => {
  return (
    <Wrapper>
      <h2 className="heading-2">Get early access today</h2>
      <p className="get__text">
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </p>

      <form className="input-control">
        <input type="email" placeholder="email@example.com" />
        <button className="btn btn-hero">Get Started For Free</button>
        <span className="input__error">Please enter a valid email address</span>
      </form>
    </Wrapper>
  );
};

export default GetEarlySection;
