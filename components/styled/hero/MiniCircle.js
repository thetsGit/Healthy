import styled from "styled-components";

const MiniCircle = styled.div`
  width: 0.3rem;
  height: 0.3rem;
  display: inline-block;
  margin-left: 0.2rem;
  background-color: ${({ theme: { colors } }) => colors.tertiary};
  border-radius: 50%;
`;

export default MiniCircle;
