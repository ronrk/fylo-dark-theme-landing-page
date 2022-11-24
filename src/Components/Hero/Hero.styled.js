import styled from "styled-components";
import bg from "../../assets/images/bg-curvy-desktop.svg";

const HeroWrapper = styled.div`
  background-color: var(--dark-blue-1);
  grid-row: 2/3;
  grid-column: full-start / full-end;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-position: bottom center;
  background-size: contain;

  margin-bottom: 10rem;

  @media screen and (max-width: 800px) {
    & img {
      width: 80%;
    }
  }

  & .heading-2 {
    width: 35ch;

    @media screen and (max-width: 800px) {
      width: 100%;
    }
  }

  & .hero__text {
    font-size: 1.8rem;
    color: var(--white);
    font-family: var(--font-open-sans);
    width: 55ch;
    text-align: center;
    line-height: 1.5;
  }
`;
export default HeroWrapper;
