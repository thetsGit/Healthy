import styled from "styled-components";

const ResultBoxStyled = styled.section`
  border-radius: 1rem;
  padding: ${({ theme: { paddings } }) => paddings.box};
  box-shadow: ${({ theme: { shadow } }) => shadow.lg};
  background-color: #fff;
  z-index: 5;
  position: absolute;
  width: 19rem;
  & {
    .more-btn {
      text-align: right;
      color: ${({ theme: { colors } }) => colors.tertiary};
    }
    .content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .text {
        .title {
          font-size: ${({
            theme: {
              box: { fontsize },
            },
          }) => fontsize.lg};
          margin: 0;
        }
        .content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: ${({
            theme: {
              box: { fontsize },
            },
          }) => fontsize.sm};
          margin: 0;
          .left,
          .right {
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: start;
            flex-direction: column;
            .main {
              margin-top: 0;
              line-height: 1em;
              color: ${({ theme: { colors } }) => colors.primary};
              font-size: ${({
                theme: {
                  box: { fontsize },
                },
              }) => fontsize.lg};
              font-weight: bold;
            }
          }
        }
      }
      .circle {
        margin-top: 1rem;
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        background-color: ${({ theme: { colors } }) => colors.lightblue};
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        .semi {
          position: absolute;
          background-color: ${({ theme: { colors } }) => colors.primary};
          width: 2rem;
          height: 4rem;
          border-radius: 0 8rem 8rem 0;
          right: 0;
          top: 0;
          //   transform: rotate(90deg);
        }
        .upper-circle {
          background-color: #fff;
          box-shadow: ${({ theme: { shadow } }) => shadow.sm};
          width: 3.2rem;
          height: 3.2rem;
          border-radius: 50%;
          z-index: 3;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          line-height: 1em;
          font-size: ${({
            theme: {
              box: { fontsize },
            },
          }) => fontsize.normal};
          font-weight: bold;
          span {
            // line-height: 1em;
            display: block;
          }
        }
      }
    }
    .footer-link {
      margin-top: 1rem;
      text-align: right;
      position: relative;
      font-size: ${({
        theme: {
          box: { fontsize },
        },
      }) => fontsize.sm};
      .know-more {
        color: ${({ theme: { colors } }) => colors.primary};
      }
      .arrow-btn {
        position: absolute;
        width: 2.5rem;
        height: 2.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: ${({ theme: { shadow } }) => shadow.lg};
        color: ${({ theme: { colors } }) => colors.secondary};
        background-color: #fff;
        position: absolute;
        left: -2.5rem;
        bottom: -1.5rem;
        border-radius: 50%;
        i {
          font-size: 0.9rem;
        }
      }
    }
  }
`;

export default ResultBoxStyled;
