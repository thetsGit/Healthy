import styled from "styled-components";

const Ball = styled.div`
    width: 1rem;
    height: 1rem;
    background-color: #6CC57C;
    border-radius: 50%;
    animation: jump .5s ease-in-out alternate infinite;
    @keyframes jump {
        0% {
          transform: translateX(-35px) translateY(0);
        }
        50% {
          transform: translateX(0) translateY(-50px);
        }
        100% {
          transform: translateX(35px) translateY(0);
        }
      }
`;

export default Ball;