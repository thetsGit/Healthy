import styled from "styled-components";

const FlexStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 98vh;
  .content {
    flex-basis: 40%;
  }
  .image {
    flex-basis: 60%;
  }
`;

export default FlexStyled;
