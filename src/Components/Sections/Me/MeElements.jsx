import styled from "styled-components";
import { colors } from "../../../Sentings/colors";
import back from '../../../images/Back_me.png'

export const MeBox = styled.section`

    background-color: ${colors.base};
    width: 100%;
    padding-bottom: 50px;
    background-color: transparent;
`;

export const MeContainer = styled.div`

    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    margin: auto;
    max-width: 1200px;
    padding: 20px 0px;
`;

export const ContainerText = styled.div`

    display: flex;
    justify-content: center;
    align-items: start;
    width: 65%;

    @media (max-width: 600px) {

        width: 100%;
        padding: 0px 10px;
    }

    @media (min-width: 601px) and (max-width: 912px) {

        width: 55%;
    }
`;

export const TextBox = styled.div`

    width: 95%;
    text-align: center;

    @media (min-width: 601px) and (max-width: 912px) {

        width: 90%;
    }
`;

export const Text = styled.p`

    font-size: 24px;
    font-weight: 700;
    letter-spacing: 2px;
    line-height: 32px;
    color: ${colors.light};

    @media (max-width: 600px) {

        font-size: 20px;
    }
`;

export const ContainerCard = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    width: 35%;

    @media (max-width: 600px) {

        width: 100%;
        padding-top: 50px;
    }

    @media (min-width: 601px) and (max-width: 912px) {

        width: 45%;
    }
`;

export const Card = styled.div`

    width: 85%;
    background-color: ${colors.contrast};
    background-image: url(${back});
    background-size: cover;
    border-left: 7px solid ${colors.main};
    padding: 60px 20px;
    border-radius: 5px;
    clip-path: polygon(0% 5%, 5% 0%, 100% 0%, 100% 95%, 95% 100%, 0% 100%);
    box-shadow: 0px 0px 50px black;
`;

export const CardList = styled.ul`

    list-style: none;
`;

export const CardItem = styled.li`

    display: flex;
    align-items: center;
    margin: 5px 0px;
    color: ${colors.base};
    transition: 0.35s;
    cursor: pointer; 

    &:hover {
        
        color: ${colors.main};
        transform: scale(1.1);
    }
`;

export const ItemIcon = styled.i`

    font-size: 35px;
    margin: 5px 10px;
`;

export const ItemContent = styled.p`

    font-size: 24px;
    font-weight: 700;
    margin: 5px 0px;
`;