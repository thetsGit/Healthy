import styled from "styled-components";

const FlexStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .content {
    flex-basis: 40%;
  }
  .image {
    flex-basis: 60%;
  }
  &.hero {
    height: 98vh;
    min-height: 700px;
    @media (max-width: 1050px) {
      height: auto;
      flex-direction: column-reverse;
    }
  }
  &.discover {
    padding: 3rem 0;
    @media (max-width: 1050px) {
      flex-direction: column;
    }
  }
`;

export default FlexStyled;
