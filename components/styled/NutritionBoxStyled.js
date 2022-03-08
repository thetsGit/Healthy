import styled from "styled-components";

const NutritionBoxStyled = styled.section`
  border-radius: 1rem;
  padding: ${({ theme: { paddings } }) => paddings.box};
  box-shadow: ${({ theme: { shadow } }) => shadow.lg};
  background-color: #fff;
  width: 17rem;
  z-index: 5;
  position: absolute;
  .title {
    text-align: center;
    font-weight: normal;
    margin: 0;
    margin-bottom: 1.5rem;
    font-size: ${({
      theme: {
        box: { fontsize },
      },
    }) => fontsize.normal};
  }
  .content {
    display: flex;
    justify-content: space-between;
    .each-category {
      h4 {
        font-size: ${({
          theme: {
            box: { fontsize },
          },
        }) => fontsize.lg};
        font-weight: bold;
        margin: 0;
        margin-bottom: 0rem;
        color: ${({ theme: { colors } }) => colors.secondary};
        line-height: 0em;
      }
      .main {
        color: ${({ theme: { colors } }) => colors.special};
      }
      text-align: center;
      .mini {
        font-size: ${({
          theme: {
            box: { fontsize },
          },
        }) => fontsize.sm};
        color: ${({ theme: { colors } }) => colors.tertiary};
      }
    }
  }
  &.details {
    position: relative;
    z-index: 5;
    padding: 1rem 2rem;
    width: 25rem;
    margin-top: 10rem;
    .title {
      font-size: 1.2rem;
      margin-bottom: 2rem;
      @media (max-width: 600px) {
        font-size: 1rem;
      }
    }
    .content {
      .each-category {
        h4 {
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
          @media (max-width: 600px) {
            font-size: 1rem;
          }
        }
        .mini {
          font-size: 0.9rem;
          @media (max-width: 600px) {
            font-size: 0.7rem;
          }
        }
      }
    }
    @media (max-width: 600px) {
      padding: 1rem;
      width: 18rem;
    }
  }
`;

export default NutritionBoxStyled;
