import styled from "styled-components";

export const Shadow = styled.div`
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    background: rgba(0,0,0,0.5);
    opacity: 0;
    animation: animateShadow 0.3s forwards;
    @keyframes animateShadow {
        to {
        opacity: 1;
        }
    }
`