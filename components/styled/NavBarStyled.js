import styled from "styled-components";

const NavBarStyled = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 10;
  padding: 0;
  transition: all ease-in .5s;
  .container {
    display: flex !important;
    align-items: center;
    padding: 0.8rem;
    #logo {
      width: 150px;
      height: auto;
    }
    #menu-btn {
      display: none;
      position: relative;
      cursor: pointer;
    }
    #menu-btn::before,
    #menu-btn::after {
      content: "";
      position: relative;
      display: inline-block;
      border-top: 0.25rem solid ${({ theme: { colors } }) => colors.secondary};
      width: 1.3rem;
      transform: rotateZ(-45deg);
      transition: all ease-in 0.5s;
    }
    #menu-btn.open {
      &:before {
        transform: rotateZ(-135deg);
        left: 0.8rem;
      }
    }
    #menu-btn::after {
      right: 0.5rem;
    }
    #menu-btn:hover,
    #menu-btn.open:hover {
      transform: scale(0.9);
    }
    & > *:nth-child(2) {
      flex-grow: 1;
    }
    .nav-links-wrap {
      display: flex;
      justify-content: space-between;
      align-items: center;
      transition: all ease-in 0.5s;
      & > ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
        display: flex;
        li:not(last-child) {
          margin-left: 3rem;
        }
        & > li {
          a {
            color: ${({ theme: { colors } }) => colors.tertiary};
            font-weight: bold;
            transition: all ease-in 0.2s;
            display: inline-block;
            &:not(.login,.register):hover {
              color: ${({ theme: { colors } }) => colors.primary};
              transform: scale(1.1);
            }
            &:hover {
              text-shadow: 1px 1px 2px #fff;
            }
          }
          .login {
            color: ${({ theme: { colors } }) => colors.secondary};
            &:hover {
              opacity: 0.6 !important;
              transform: scale(1.1);
            }
          }
          .register {
            color: ${({ theme: { colors } }) => colors.primary};
            &:hover {
              opacity: 0.6 !important;
              transform: scale(1.1);
            }
          }
        }
      }
    }
    @media (max-width: 650px) {
      #menu-btn {
        display: block;
        margin-left: auto;
      }
      .nav-links-wrap {
        transform: translateX(-1000px) scale(.2);
        opacity: 0;
        z-index: 10;
        height: 95vh;
        width: 100%;
        top: 8vh;
        left: 0;
        position: absolute;
        background-color: ${({ theme: { colors } }) => colors.background};
        justify-content: center;
        align-items: center;
        text-align: center;
        flex-direction: column;
        & > ul {
          flex-direction: column;
          & > li {
            margin-bottom: 1.5rem;
            }
          }
        }
      }
      .nav-links-wrap.open {
        position: fixed;
        bottom: 0;
        transform: translateX(0) scale(1);
        opacity: 1;
        display: flex;
      }
    }
  }
  &.filled {
    background-color: #fff;
    box-shadow: ${({theme: {shadow}}) => shadow.lg}
  }
`;

export default NavBarStyled;
