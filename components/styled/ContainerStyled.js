import styled from "styled-components";

const ContainerStyled = styled.div`
  width: 100%;
  max-width: min(80vw, 1200px);
  margin: 0 auto;
  position: relative;
  padding: 0 2rem;
  &.nav {
    max-width: 1300px;
  }
  &.hero {
    .rectangle {
      transform: rotate(45deg);
      right: -20rem;
      top: 5rem;
    }
  }
  @media (max-width: 900px) {
    & {
      width: 100%;
      padding: 0;
    }
  }
`;

export default ContainerStyled;
