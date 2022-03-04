import styled from "styled-components";

const ContentBox = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  grid-gap: 2rem;
  grid-auto-flow: row;
  padding: 3rem 0;
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
`;

export default ContentBox;
