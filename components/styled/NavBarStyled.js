import styled from "styled-components";

const NavBarStyled = styled.nav`
  // padding: 0.8rem;
  width: 100%;
  padding: 0;
  position: relative;
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
      transition: all ease-in 0.3s;
      & > ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
        display: flex;
        li:not(last-child) {
          margin-left: 2rem;
        }
        & > li {
          a {
            color: ${({ theme: { colors } }) => colors.tertiary};
            font-weight: bold;
            transition: all ease-in 0.2s;
            display: inline-block;
            &:not(.login,.register):hover {
              color: ${({ theme: { colors } }) => colors.primary};
              transform: scale(0.9);
            }
          }
          .login {
            color: ${({ theme: { colors } }) => colors.secondary};
            &:hover {
              opacity: 0.6 !important;
              transform: scale(0.9);
            }
          }
          .register {
            color: ${({ theme: { colors } }) => colors.primary};
            &:hover {
              opacity: 0.6 !important;
              transform: scale(0.9);
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
        // display: none;
        opacity: 0;
        z-index: 2;
        height: 92vh;
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
        transform: translateX(0) scale(1);
        opacity: 1;
        display: flex;
      }
    }
  }
`;

export default NavBarStyled;
