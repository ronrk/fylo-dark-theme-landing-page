import styled from "styled-components";

const FooterWrapper = styled.footer`
  background-color: var(--dark-blue-3);

  grid-row: 7/8;
  grid-column: full-start / full-end;
  padding-top: 20rem;
  padding-left: 10rem;
  padding-right: 10rem;

  display: grid;
  /* justify-items: center; */
  align-items: flex-start;
  grid-template-columns: repeat(auto-fit, minmax(min-content, 20%));
  grid-template-rows: repeat(2, min-content);
  row-gap: 4rem;
  column-gap: 5rem;

  @media screen and (max-width: 900px) {
    /*    grid-template-columns: 1fr;
    grid-template-rows: repeat(auto-fit, minmax(min-content, 20%)); */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-bottom: 4rem;
    padding-top: 25rem;
    padding-left: 3rem;
    padding-right: 0;
  }

  & .footer__logo {
    grid-row: 1/2;
    grid-column: 1/6;
    /*   @media screen and (max-width: 900px) {
      grid-column: 1/2;
    } */
  }

  & .footer__location,
  & .footer__phone,
  & .footer__email {
    display: flex;
    align-items: flex-start;
  }

  & .footer__location {
    & .footer__icon {
      flex-basis: 10rem;
    }
  }

  & .footer__contact {
    grid-column: 2/3;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
  }
  & .footer__phone {
    margin-bottom: 2rem;
  }

  & span {
    display: block;
    font-size: 1.8rem;
    color: var(--white);
    font-family: var(--font-open-sans);
    opacity: 0.7;
    margin-left: 1rem;
    max-width: 45ch;
  }

  & .footer__links {
    list-style: none;

    & li {
      padding: 0.9rem 0;
      & a {
        text-decoration: none;
        color: var(--white);
        font-size: 1.8rem;
        font-family: var(--font-open-sans);
        opacity: 0.7;
        transition: all 0.2s;

        &:hover {
          opacity: 1;
          font-weight: 700;
        }
      }
    }
  }

  & .social-icons {
    display: flex;
    align-items: center;
    gap: 3rem;
    & .icon {
      fill: var(--white);
      width: 5rem;
      height: 5rem;
      cursor: pointer;
      transition: all 0.2s;
      @media screen and (max-width: 1400px) {
        width: 3rem;
        height: 3rem;
      }
      &:hover {
        fill: var(--cyan);
      }
    }
  }
`;
export default FooterWrapper;
