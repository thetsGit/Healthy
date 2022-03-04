import styled from "styled-components";

const GreenCircle = styled.div`
  position: absolute;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  background-color: ${({ theme: { colors } }) => colors.primary};
  opacity: 0.2;
  border-radius: 50%;
`;

export default GreenCircle;
