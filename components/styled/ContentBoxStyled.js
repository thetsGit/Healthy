import styled from "styled-components";

const ContentBox = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  grid-gap: 2rem;
  grid-auto-flow: row;
  padding-top: 8rem;
  color: ${({ theme: { colors } }) => colors.tertiary};
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
    padding-top: 2rem;
    justify-items: center;
    text-align: center;
    .snippet {
      display: none;
    }
    .social-links {
      margin-top: 0;
    }
  }
`;

export default ContentBox;
