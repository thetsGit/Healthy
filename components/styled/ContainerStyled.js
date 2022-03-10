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
  &.discover {
    .green-circle {
      position: absolute;
      right: -20rem;
      top: 5rem;
      opacity: .1;
    }
    .rectangle {
      position: absolute;
      left: -20rem;
      // top: 5rem;
      transform: rotate(135deg);
    }
  }
  &.footer {
    max-width: 1300px!important;
    width: 80%;
    .rectangle {
      transform: rotate(45deg);
      right: -20rem;
      bottom: 5rem;
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
