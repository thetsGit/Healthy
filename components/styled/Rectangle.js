import styled from "styled-components";

const Rectangle = styled.div`
  border-radius: 2rem;
  background: linear-gradient(
    45deg,
    #f8f8f8,
    ${({ theme: { colors } }) => colors.background}
  );
  box-shadow: ${({ theme: { shadow } }) => shadow.md};
  width: 15rem;
  height: 15rem;
  position: absolute;
`;

export default Rectangle;
