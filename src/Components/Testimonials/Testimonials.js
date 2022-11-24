import React from "react";
import SingleTestimonial from "./SingleTestimonial";
import Wrapper from "./Testimonials.styled";
import profileImg1 from "../../assets/images/profile-1.jpg";
import profileImg2 from "../../assets/images/profile-2.jpg";
import profileImg3 from "../../assets/images/profile-3.jpg";

const Testimonials = () => {
  return (
    <Wrapper>
      <SingleTestimonial
        img={profileImg1}
        text="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
  become a well-oiled collaboration machine."
        username="Satish Patel"
        position="Founder & CEO, Huddle"
      />
      <SingleTestimonial
        img={profileImg2}
        text="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
  become a well-oiled collaboration machine."
        username="Bruce McKenzie"
        position="Founder & CEO, Huddle"
      />
      <SingleTestimonial
        img={profileImg3}
        text="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
  become a well-oiled collaboration machine."
        username="Iva Boyd"
        position="Founder & CEO, Huddle"
      />
    </Wrapper>
  );
};

export default Testimonials;
