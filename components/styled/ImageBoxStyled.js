import styled from "styled-components";

const ImageBoxStyled = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  .image {
    width: 20rem;
    position: relative;
    z-index: 3;
  }
  .image-1,
  .image-2 {
    position: relative;
  }
  .image-1 {
    .green-circle {
      top: 8rem;
      right: -0.9rem;
    }
    .nutrition-box {
      left: 13rem;
      top: 5rem;
    }
  }
  .image-2 {
    .image {
      margin-top: 10rem;
      width: 18rem;
    }
    .result-box {
      left: 8rem;
      bottom: 15rem;
    }
  }
`;

export default ImageBoxStyled;
