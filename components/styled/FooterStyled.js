import styled from "styled-components";

const FooterStyled = styled.footer`
display: flex;
justify-content: space-between;
align-items: start;
padding: 3rem 0;
margin-bottom: 3rem;
.logo {
    max-width: 40rem;
}
.list-links {
    list-style-type: none;
    margin: 0;
    padding: 0;
    font-weight: bold;
    li {
        color: ${({theme: {colors}}) => colors.tertiary};
        transition: all ease-in .3s;
        &:hover:not(.main) {
            color: ${({theme: {colors}}) => colors.primary};
            transform: scale(1.1);
        }
        .main {
            font-size: 1.2rem;
            color: ${({theme: {colors}}) => colors.primary};
        }
        a {
            text-decoration: none;
            cursor: pointer;
        }
    }
}
.social-links {

    ul {
        font-weight: bold;
        list-style-type: none;
        margin: 0;
        padding: 0;
        display: flex;
        color: ${({theme: {colors}}) => colors.tertiary};
        font-size: 1.3rem;
        li:not(:first-child) {
            margin-left: .7rem;
        }
        * {
            cursor: pointer;
            transition: all ease-in .3s;
            &:hover {
                color: ${({theme: {colors}}) => colors.primary};
                transform: scale(1.1);
            }
        }
        @media (max-width: 1050px) {
            justify-content: center;
        }
    }

    p {
        font-weight: bold;
        color: ${({theme: {colors}}) => colors.tertiary};
        margin-top: 0;
        .me {
            text-decoration: none;
            color: ${({theme: {colors}}) => colors.tertiary};
            &:hover {
                color: ${({theme: {colors}}) => colors.primary};
                transform: scale(1.1);
            }
        }
        i {
            font-size: .8rem;
        }
    }
}
@media (max-width: 1050px) {
    flex-direction: column;
    align-items: center;
    & > * {
        margin-bottom: 2rem!important;
        text-align: center;
    }
}
`;

export default FooterStyled;