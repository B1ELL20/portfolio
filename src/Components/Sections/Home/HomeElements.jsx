import styled from "styled-components";
import { colors } from "../../../Sentings/colors";
import background from '../../../images/background.png'

export const HomeBox = styled.header`

    width: 100%;
    height: 100vh;
    background-image: url(${background});
    background-size: contain;
    background-position: right;
    background-repeat: no-repeat;

    @media (max-width: 600px) {

        display: block;
        background-size: cover;
        background-position: 45% 50%;
        height: unset;
        margin-bottom: 30px;
    }

    @media (min-width: 601px) and (max-width: 912px) {

        display: block;
        background-size: cover;
        background-position: 40% 50%;
        height: unset;
        margin-bottom: 50px;
    }

    @media (min-width: 912px) and (max-width: 1024px) {

        height: unset;
        margin-bottom: 50px;
    }
`;

export const HomeContainer = styled.div`

    display: flex;
    flex-wrap: wrap-reverse;
    width: 100%;
    height: 100%;
    margin: auto;
    max-width: 1300px;
    padding: 10px;

    @media (max-width: 600px) {

        display: block;
        padding-top: 60px;
    }

    @media (min-width: 912px) and (max-width: 1024px) {

        height: unset;
        padding: 0px;
    }
`;

export const ContainerText = styled.div`

    width: 50%;
    margin-top: 10%;

    @media (max-width: 600px) {

        width: 100%;
    }

    @media (min-width: 601px) and (max-width: 912px) {

        width: 70%;
        padding-left: 20px;
    }

    @media (min-width: 913px) and (max-width: 1024px) {

        width: 62%;
        padding-left: 20px;
    }
`;

export const Text = styled.div`

    width: 90%;
    padding: 20px;
    text-align: center;

    @media (max-width: 600px) {

        width: 100%;
    }

    @media (min-width: 601px) and (max-width: 912px) {

        width: 100%;
    }
`;

export const TopTitle = styled.h2`

    padding: 10px 0px;
    font-size: 24px;
    color: ${colors.contrast};
    text-align: start;
`;

export const Title = styled.h1`

    font-size: 65px;
    font-weight: 700;
    color: ${colors.main};
    text-align: start;
`;

export const Description = styled.p`

    margin: 30px 0px;
    font-size: 24px;
    font-weight: bold;
    color: ${colors.light};
`;

export const ButtonHome = styled.button`

    padding: 10px 40px;
    width: 100%;
    font-size: 30px;
    color: ${colors.base};
    background-color: ${colors.contrast};
    border: none;
    border-radius: 3px;
    transition: 0.1s;
    cursor: pointer;

    &:hover {

        transform: scale(1.05);
    }
`;

export const HomeLinks = styled.div`

    display: flex;
    justify-content: space-around;
    width: 100%;    
    margin-top: 20px;

    @media (max-width: 600px) {

        display: block;
        margin-top: 40px;
        border-left: 1px solid ${colors.light};
        border-radius: 3px;
    }
`;

export const LinkIcon = styled.i`

    font-size: 30px;
    color: ${colors.contrast};

    @media (max-width: 600px) {

        font-size: 50px;
    }
`;

export const ButtonDiv = styled.div`

    position: absolute;
    bottom: -10%;
    left: 0;
    width: 100%;
    padding: 2px;
    transition: 0.4s;
    z-index: -1;
`;

export const LinkDescription = styled.p`

    padding: 10px;
    font-size: 20px;
    letter-spacing: 1px;
    font-weight: bold;
    color: ${colors.main};

    @media (max-width: 600px) {

        font-size: 30px;
    }
`;

export const ButtonLink = styled.button`

    position: relative;
    display: flex;
    align-items: center;
    padding: 0px 15px;
    border: none;
    background-color: transparent;
    cursor: pointer;

    @media (max-width: 600px) {

        margin-top: 20px;
    }

    &:hover ${ButtonDiv}{

        border-radius: 50%;
        height: 130%;
        background-color: ${colors.main};
    }

    &:hover ${LinkIcon}{

        color: ${colors.base};
    }

    &:hover ${LinkDescription}{

        color: ${colors.base};
    }
`;

export const ContainerMe = styled.div`

    width: 50%;
    overflow-x: hidden;

    @media (max-width: 600px) {

        display: none;
    }
`;
