import styled from "styled-components";

const NavBarStyled = styled.nav`
  padding: 0.8rem;
  .container {
    display: flex;
    align-items: center;
    #logo {
      width: 150px;
      height: auto;
    }
    #menu-btn {
      display: none;
    }
    & > *:nth-child(2) {
      flex-grow: 1;
    }
    .nav-links-wrap {
      display: flex;
      justify-content: space-between;
      align-items: center;
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
          }
          .login {
            color: ${({ theme: { colors } }) => colors.secondary};
          }
          .register {
            color: ${({ theme: { colors } }) => colors.primary};
          }
        }
      }
    }
  }
`;

export default NavBarStyled;
