import styled from "styled-components";
import bgQuote from "../../assets/images/bg-quotes.png";

const TestimonialsWrapper = styled.section`
  grid-row: 5/6;
  grid-column: full-start / full-end;
  padding: var(--main-padding);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  background-image: url(${bgQuote});
  background-repeat: no-repeat;
  background-position: left top;
  background-position-x: 3vw;
  background-size: 8rem;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;
export default TestimonialsWrapper;
