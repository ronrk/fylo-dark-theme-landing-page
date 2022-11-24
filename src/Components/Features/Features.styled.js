import styled from "styled-components";

const FeaturedSection = styled.section`
  background-color: var(--dark-blue-2);
  grid-row: 3/4;
  grid-column: center-start / center-end;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(55rem, 1fr));
  justify-items: center;
  align-items: center;
  row-gap: 9rem;
`;
export default FeaturedSection;
