import styled from "styled-components";

const HeaderWrapper = styled.header`
  grid-row: 1/2;
  grid-column: full-start / full-end;

  background-color: var(--dark-blue-1);

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: var(--main-padding);

  & .header__nav {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 6rem;

    @media screen and (max-width: 800px) {
      gap: 3rem;
    }

    & li {
      & a {
        text-decoration: none;
        font-size: 1.8rem;
        text-transform: capitalize;
        font-family: var(--font-open-sans);
        color: var(--white);
        opacity: 0.7;
        transition: all 0.2s;

        &:hover {
          opacity: 1;
          font-weight: 700;
        }
      }
    }
  }
`;
export default HeaderWrapper;
