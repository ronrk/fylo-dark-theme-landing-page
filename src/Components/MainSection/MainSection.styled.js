import styled from "styled-components";

const MainSectionWrapper = styled.section`
  background-color: var(--dark-blue-2);
  grid-row: 4/5;
  grid-column: full-start / full-end;
  margin: 10rem 0;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  padding: var(--main-padding);

  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }

  & img {
    /* flex: 1; */
    width: 50%;
    /* height: 100%; */
    display: block;
    @media screen and (max-width: 1000px) {
      width: 70%;
    }
  }
  & .content {
    /* width: 50%; */
    & .heading-2 {
      text-align: left;
      margin-bottom: 2rem;

      width: 25ch;
    }
    & .content__text {
      color: var(--white);
      font-size: 1.8rem;

      line-height: 1.4;
      letter-spacing: 1.3px;
      opacity: 0.8;
      font-family: var(--font-raleway);
      margin-bottom: 2rem;
    }

    & .btn-link {
      text-decoration: none;
      color: var(--cyan);
      font-size: 1.8rem;
      font-family: var(--font-raleway);
      display: inline-flex;
      align-items: center;
      gap: 0.9rem;

      padding-bottom: 0.3rem;
      border-bottom: 1px solid currentColor;
      opacity: 0.7;
      transition: all 0.2s;

      & .link__icon {
        fill: var(--cyan);
      }

      &:hover {
        color: var(--white);

        & .link__icon {
          fill: var(--white);
        }
      }
    }
  }
`;
export default MainSectionWrapper;
