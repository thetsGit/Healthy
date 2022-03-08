import styled from "styled-components";

const ContentBoxStyled = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  grid-gap: 2rem;
  grid-auto-flow: row;
  color: ${({ theme: { colors } }) => colors.tertiary};
  &.hero {
    padding-top: 8rem;
    // @media (max-width: 1050px) {
    //   padding-top: 3rem;
    // }
  }
  & > * {
    margin: 0;
  }
  .snippet {
    font-size: 1.3rem;
  }
  .title {
    font-size: 3rem;
    line-height: 1.2em;
    color: ${({ theme: { colors } }) => colors.secondary};
    .main {
      color: ${({ theme: { colors } }) => colors.primary};
    }
  }
  .description {
    font-size: 1rem;
    line-height: 1.5em;
  }
  .action-btns {
    .button {
      margin-right: 1.5rem;
    }
    display: flex;
    justify-content: start;
    align-items: center;
    .icon {
      margin-left: 1rem;
      width: 1.5rem;
      height: 1.5rem;
    }
  }
  .social-links {
    margin: 0;
    margin-top: 5rem;
    padding: 0;
    list-style-type: none;
    display: flex;
    justify-content: start;
    align-items: center;
    font-size: ${({
      theme: {
        box: { fontsize },
      },
    }) => fontsize.normal};
    & > *:not(li) {
      margin: 0 0.5rem;
    }
    .main {
      color: ${({ theme: { colors } }) => colors.primary};
    }
  }
  @media (max-width: 1200px) {
    .snippet {
      font-size: 1rem;
    }
    .title {
      font-size: 2.5rem;
    }
    .description {
      font-size: 0.9rem;
    }
  }
  @media (max-width: 1200px) {
    .snippet {
      font-size: 1rem;
    }
    .title {
      font-size: 2.3rem;
    }
    .description {
      font-size: 0.9rem;
    }
  }
  @media (max-width: 1050px) {
    padding-top: 3rem !important;
    justify-items: center;
    text-align: center;
    max-width: 600px;
    .snippet {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
    }
    .social-links {
      margin-top: 0;
    }
  }
`;

export default ContentBoxStyled;
