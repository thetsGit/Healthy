import styled from "styled-components";

const Rectangle = styled.div`
  border-radius: 2rem;
  background: linear-gradient(
    45deg,
    #fff,
    ${({ theme: { colors } }) => colors.background}
  );
  box-shadow: ${({ theme: { shadow } }) => shadow.sm};
  width: 15rem;
  height: 15rem;
  position: absolute;
`;

export default Rectangle;
