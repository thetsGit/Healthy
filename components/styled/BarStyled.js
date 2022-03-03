import styled from "styled-components";

const BarStyled = styled.div`
  border-top: 0.3rem solid ${({ theme: { colors } }) => colors.secondary};
  border-radius: 100px;
  width: 2rem;
  margin-bottom: 0.5rem;
`;

export default BarStyled;
