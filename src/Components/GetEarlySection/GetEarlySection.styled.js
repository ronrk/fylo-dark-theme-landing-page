import styled from "styled-components";

const GetEarlySection = styled.section`
  background-color: var(--dark-blue-4);

  grid-row: 6/7;
  grid-column: center-start / center-end;
  padding: 4rem;
  border-radius: 6px;
  justify-self: center;
  transform: translateY(50%);

  & .heading-2 {
    font-weight: 400;
  }

  & .get__text {
    text-align: center;
    color: var(--white);
    opacity: 0.8;
    font-size: 1.6rem;
    font-family: var(--font-raleway);
    letter-spacing: 1.3x;
    /* width: 100ch; */
    margin: 1.5rem auto;
  }

  & .input-control {
    position: relative;
    margin-top: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5rem;

    @media screen and (max-width: 1200px) {
      flex-direction: column;
      gap: 2rem;
    }

    & input {
      width: 40%;
      height: 5rem;
      border-radius: 10000px;
      padding: 1.5rem;
      font-size: 2rem;
      flex: 1;
      @media screen and (max-width: 1200px) {
        width: 90%;
      }

      &::placeholder {
        opacity: 0.3;
      }
      &:focus {
        outline: none;
        border: 5px solid var(--blue);
      }
      &:valid {
        border-color: var(--cyan);
      }
      &:invalid ~ span {
        display: block;
      }
    }

    & .input__error {
      position: absolute;
      font-size: 1.3rem;
      color: var(--light-red);
      font-family: var(--font-raleway);
      bottom: -2.5rem;
      left: 3rem;
      display: none;
    }
  }
`;
export default GetEarlySection;
