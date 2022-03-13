import styled from "styled-components";

const ImageBoxStyled = styled.section`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  padding-left: 7rem;
  .details-ui {
    position: absolute;
    display: inline-block;
    width: 20rem;
    right: 10.5rem;
    @media (max-width: 600px) {
      width: 15rem;
      right: 0;
      left: 0;
    }
  }
  .ingredients-box {
    margin-top: 10rem;
    .image {
      z-index: 5;
      position: relative;
      display: inline-block;
      border-radius: 50%;
      width: 5rem;
      height: 5rem;
      margin-right: 3.5rem;
      object-fit: cover;
      object-position: center;
      box-shadow: ${({ theme: { shadow } }) => shadow.lg};
      @media (max-width: 600px) {
        margin-right: 1rem;
        width: 3.5rem;
        height: 3.5rem;
      }
    }
  }
  @media (max-width: 600px) {
    padding: 0;
  }
`;

export default ImageBoxStyled;
