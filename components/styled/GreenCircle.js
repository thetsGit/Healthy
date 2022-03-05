import styled from "styled-components";

const GreenCircle = styled.div`
  position: absolute;
  width: min(${({ size }) => size + "rem"}, ${({ size }) => size + "vw"});
  height: min(${({ size }) => size + "rem"}, ${({ size }) => size + "vw"});
  background-color: ${({ theme: { colors } }) => colors.primary};
  opacity: 0.2;
  border-radius: 50%;
`;

export default GreenCircle;
