import styled from "styled-components";
import { colors } from "../../../Sentings/colors";
import back from '../../../images/Back_me.png'

export const MeBox = styled.section`

    background-color: ${colors.base};
    width: 100%;
    padding: 20px 0px;
    background-color: transparent;
`;

export const MeContainer = styled.div`

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    margin: auto;
    max-width: 1200px;
    padding: 20px 0px;

    @media (min-width: 601px) and (max-width: 912px) {

        justify-content: space-around;
    }
`;

export const ContainerText = styled.div`

    width: 55%;

    @media (max-width: 600px) {

        width: 100%;
        padding: 0px 10px;
    }

    @media (min-width: 601px) and (max-width: 912px) {

        width: 53%;
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

    font-size: 19px;
    font-weight: 700;
    letter-spacing: 2px;
    line-height: 32px;
    color: ${colors.light};

    @media (max-width: 600px) {

        font-size: 20px;
    }
`;

export const Card = styled.div`

    display: flex;
    justify-content: space-around;
    width: 100%;
    padding: 10px;
    border: 3px solid ${colors.main};
    clip-path: polygon(0% 5%, 5% 0%, 100% 0%, 100% 95%, 95% 100%, 0% 100%);
    margin-top: 20px;

        
    @media (max-width: 600px) {

        display: block;
        margin-top: 50px;
    }
`;

export const CardItem = styled.li`

    display: flex;
    align-items: center;
    margin: 5px 0px;
    color: ${colors.main};
    transition: 0.1s;
    cursor: pointer;

    &:hover {
        
        color: ${colors.contrast};
        transform: scale(1.06);
    }
`;

export const ItemIcon = styled.i`

    font-size: 20px;
    margin: 5px 10px;

    @media (max-width: 600px) {

        font-size: 30px;
    }
`;

export const ItemContent = styled.p`

    font-size: 16px;
    letter-spacing: 1px;
    font-weight: bold;
    margin: 5px 0px;

    @media (max-width: 600px) {

        font-size: 22px;
    }
`;

export const ContainerImg = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;

    @media (max-width: 600px) {

        width: 100%;
        padding-top: 50px;
    }

    @media (min-width: 601px) and (max-width: 912px) {

        width: 45%;
    }
`;

export const MeImg = styled.img`

    width: 80%;
    display: block;
    border: 5px solid white;
    box-shadow: 7px 7px 10px ${colors.light};
    border-radius: 5px;
`;