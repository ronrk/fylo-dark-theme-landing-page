import styled from "styled-components";

const SingleTestimonialWrapper = styled.div`
  background-color: var(--dark-blue-4);

  padding: 2vw;
  border-radius: 6px;
  box-shadow: 0 1rem 10rem rgba(0, 0, 0, 0.3);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & .testimonial__text {
    font-size: 1.7rem;
    color: var(--white);
    opacity: 0.7;
    font-family: var(--font-open-sans);
    line-height: 1.6;
    margin-bottom: 4rem;
  }
  & .user {
    display: grid;
    grid-template-columns: repeat(2, max-content);
    grid-template-rows: repeat(2, max-content);
    align-items: center;
    column-gap: 1rem;
    & img {
      height: 5rem;
      width: 5rem;
      border-radius: 50%;
      grid-row: 1/3;
      grid-column: 1/2;
    }
    & .user__name {
      font-size: 1.4rem;
      grid-column: 2/3;

      color: var(--white);
      font-family: var(--font-open-sans);
      letter-spacing: 1.3px;
      opacity: 0.9;
    }
    & .user__position {
      font-size: 1.3rem;
      color: var(--white);
      font-family: var(--font-open-sans);
      opacity: 0.7;
      align-self: flex-start;
    }
  }
`;

export default SingleTestimonialWrapper;
