import styled from "styled-components";

const ImageBoxStyled = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  .image-1,
  .image-2 {
    position: relative;
    display: flex;
    align-items: center;
    .image {
      width: 100%;
      position: relative;
      z-index: 3;
      @media (max-width: 1050px) {
        width: 80%;
      }
      @media (max-width: 850px) {
        width: max(10rem, 100%);
      }
    }
  }
  .image-1 {
    justify-content: end;
    .green-circle {
      transform: translate(-50%, -50%);
      left: 50%;
      top: 50%;
      @media (max-width: 1050px) {
        transform: translate(-50%, -50%) scale(2);
      }
    }
    .nutrition-box {
      left: min(13rem, 13vw);
      top: min(4rem, 4vw);
      @media (max-width: 1200px) {
        transform: scale(0.5);
        left: 5rem;
      }
      @media (max-width: 1050px) {
        transform: scale(1);
        left: 15rem;
        top: 5rem;
      }
      @media (max-width: 1000px) {
        left: 10rem;
        top: 4rem;
        transform: scale(0.7);
      }
      @media (max-width: 600px) {
        left: 3rem;
        top: 2rem;
        transform: scale(0.5);
      }
    }
  }
  .image-2 {
    justify-content: start;
    .image {
      margin-top: min(10vw, 10rem);
    }
    .result-box {
      left: min(8rem, 8vw);
      bottom: min(15rem, 15vw);
      @media (max-width: 1200px) {
        transform: scale(0.7);
        left: 5rem;
      }
      @media (max-width: 1050px) {
        left: -13rem;
        bottom: 5rem;
        transform: scale(1);
      }
      @media (max-width: 1000px) {
        transform: scale(0.7);
        bottom: 3rem;
      }
      @media (max-width: 600px) {
        transform: scale(0.5);
        bottom: 1rem;
      }
    }
    @media (max-width: 1050px) {
      margin-top: 5rem;
    }
  }
`;

export default ImageBoxStyled;
