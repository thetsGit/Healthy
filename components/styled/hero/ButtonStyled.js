import styled from "styled-components";

const ButtonStyled = styled.button`
  outline: 0;
  border: 0;
  width: 12rem;
  height: 3rem;
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: #fff;
  position: relative;
  transition: all ease-in 0.3s;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  & > span:not(.text) {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
  }
  span:nth-child(1) {
    background-color: ${({ theme: { colors } }) => colors.secondary};
  }
  span:nth-child(2),
  span:nth-child(3) {
    // background-color: ${({ theme: { colors } }) => colors.primary};
    background-color: #fff;
    opacity: 0;
    height: 0;
    transition: all ease-in 0.3s;
  }
  span:nth-child(2) {
    top: 0;
    left: 0;
  }
  span:nth-child(3) {
    bottom: 0;
  }
  span.text {
    z-index: 3;
    transition: all ease-in 0.3s;
  }
  &:hover {
    box-shadow: 5px 5px 2px 1px rgba(0, 0, 0, 0.2);
    span:nth-child(2),
    span:nth-child(3) {
      height: 60%;
      opacity: 1;
    }
    span.text {
      color: ${({ theme: { colors } }) => colors.primary};
    }
  }
  // @media (max-width: 1050px) {
  //   width: 10rem;
  //   height: 2.5rem;
  //   font-size: 0.9rem;
  // }
`;

export default ButtonStyled;
