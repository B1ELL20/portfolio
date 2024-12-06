import styled, { keyframes } from "styled-components";

export const KnowledgeBox = styled.section`

    width: 100%;
    margin: 50px 0px;
    position: relative;
    margin-bottom: 100px;
`;

export const SliderContainer = styled.div`

    width: 100%;
    max-width: 1200px;
    margin: auto;
    overflow: hidden;
`;

const scroll = keyframes`

    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(calc(-300px * 4));
    }
`;

export const KnowledgeContainer = styled.div`

    width: calc(300px * 8);
    display: flex;
    justify-content: space-around;
    align-items: center;
    animation-name: ${scroll};
    animation-duration: 20s;
    animation-iteration-count: infinite;
`;

export const Client = styled.div`

    width: 300px;
    height: 130px;
    margin: 0px 20px;

    @media (max-width: 600px) {

        width: 80%;
        margin-top: 20px;
    }

    @media (min-width: 601px) and (max-width: 912px) {

        width: 45%;
    }
`;

export const ClientImg = styled.img`

    display: block;
    margin: auto;
    height: 100%;
    width: ${({large}) => large};
`;