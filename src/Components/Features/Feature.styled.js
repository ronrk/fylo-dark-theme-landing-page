import styled from "styled-components";

const FeatueWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
  gap: 0.5rem;

  & .feature__icon {
    margin-bottom: 3rem;
  }

  & .feature__text {
    margin-top: 1rem;
    font-size: 1.6rem;
    width: 50ch;
    color: var(--white);
    font-family: var(--font-raleway);
    line-height: 1.3;
    letter-spacing: 1.3px;
    opacity: 0.7;
  }
`;

export default FeatueWrapper;
