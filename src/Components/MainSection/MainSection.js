import React from "react";
import Wrapper from "./MainSection.styled";
import sectionImg from "../../assets/images/illustration-stay-productive.png";
import { ReactComponent as IconArrow } from "../../assets/images/icon-arrow.svg";

const MainSection = () => {
  return (
    <Wrapper>
      <img src={sectionImg} alt="illustration" />
      <div className="content">
        <h2 className="heading-2">Stay productive, wherever you are</h2>
        <p className="content__text">
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>
        <p className="content__text">
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>

        <a href="" className="btn btn-link">
          See how Fylo works
          <IconArrow className="link__icon" />
        </a>
      </div>
    </Wrapper>
  );
};

export default MainSection;
