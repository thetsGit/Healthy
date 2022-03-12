import styled from "styled-components";

const ImageBoxStyled = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  .sheet {
    border-radius: 50% 50% 1.5rem 1.5rem;
    position: relative;
    width: 13rem;
    padding: 3rem 2rem;
    padding-top: 8rem;
    background: linear-gradient(
      to right,
      ${({ theme: { colors } }) => colors.background},
      #fff
    );
    box-shadow: ${({ theme: { shadow } }) => shadow.rightBottom};
    margin-right: 5rem;
    &:nth-child(2) {
      margin-top: 10rem;
    }
    .title {
      font-size: 1.8rem;
      line-height: 1em;
      color: ${({ theme: { colors } }) => colors.secondary};
      @media (max-width: 1200px) {
        font-size: 1.5rem;
      }
    }
    .content {
      display: flex;
      justify-content: start;
      .each-category {
        margin-right: 1.5rem;
        .amount {
          font-size: 1.3rem;
          margin: 0;
          font-weight: bold;
          .main {
            color: ${({ theme: { colors } }) => colors.special};
          }
        }
        .unit {
          color: ${({ theme: { colors } }) => colors.tertiary};
          font-size: 0.8rem;
          margin: 0;
        }
        @media (max-width: 1200px) {
          .amount {
            font-size: 1rem;
          }
          .unit {
            font-size: 0.6rem;
          }
        }
      }
    }
    .arrow {
      position: absolute;
      background-color: ${({ theme: { colors } }) => colors.secondary};
      color: #fff;
      box-shadow: ${({ theme: { shadow } }) => shadow.sm};
      border-radius: 50%;
      width: 3.5rem;
      height: 3.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      bottom: 0;
      right: 0;
      transform: translate(30%, 30%);
      transition: all ease-in 0.3s;
      &:hover {
        transform: translate(30%, 30%) scale(0.9);
        // box-shadow: 0 0 0 #000;
      }
      i {
        font-size: 1.5rem;
      }
      @media (max-width: 1200px) {
        width: 2.5rem;
        height: 2.5rem;
        i {
          font-size: 1rem;
        }
      }
    }
    .image {
      position: absolute;
      top: -10%;
      width: 90%;
      align-self: center;
      left: 0;
      margin-left: 5%;
      display: inline-block;
    }
    @media (max-width: 1200px) {
      width: 11rem;
      padding-top: 7rem;
    }
    @media (max-width: 1050px) {
      &:nth-child(2) {
        margin-right: 0 !important;
      }
    }
    @media (max-width: 650px) {
      width: 15rem;
      padding-top: 11rem;
      margin: 0;
      margin-top: 4rem !important;
    }
  }
  @media (max-width: 650px) {
    flex-direction: column;
  }
`;

export default ImageBoxStyled;
