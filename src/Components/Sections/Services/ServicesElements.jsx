import styled from "styled-components";
import { colors } from "../../../Settings/colors";
import back from '../../../images/back_service.png'

export const ServiceBox = styled.section`

    background-color: transparent;
    background-image: url(${back});
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    margin: 50px 0px;
    padding: 100px 0px 200px 0px;
`;

export const ServiceContainer = styled.div`

    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    margin: auto;
    margin-top: 50px;
`;

export const Service = styled.div`

    text-align: center;
    background-color: ${colors.base};
    width: 26%;
    height: 350px;
    padding: 60px 15px 20px 15px;
    border-radius: 5px;
    border-bottom: 5px solid ${colors.contrast};
    transition: 0.2s;
    cursor: pointer;

    @media (max-width: 600px) {

        width: 80%;
        margin-bottom: 40px;
    }

    @media (min-width: 601px) and (max-width: 912px) {

        width: 55%;
        height: 300px;
        margin-bottom: 50px;
    }

    @media (min-width: 912px) and (max-width: 1024px) {

        width: 28%;
    }

    &:hover {

        border-bottom: 10px solid ${colors.contrast};
        transform: scale(1.1);
    }
`;

export const ServiceIcon = styled.i`

    color: ${colors.contrast};
    font-size: 80px;

`;

export const ServiceDescription = styled.h3`

    color: ${colors.main};
    font-size: 28px;
    font-weight: bold;
    letter-spacing: 2px;
    text-align: center;
    line-height: 36px;

    @media (min-width: 912px) and (max-width: 1024px) {

        font-size: 24px;
    }
`;

export const ServiceDetail = styled.p`

    color: ${colors.light};
    font-size: 17px;
    font-weight: bold;
    letter-spacing: 1px;
    text-align: center;
    line-height: 22px;
    padding: 0px 10px;
`;

export const Destaque = styled.span`

    color: ${colors.contrast};
`;

export const ServiceHR = styled.hr`

    width: 90%;
    height: 2px;
    border: 2px solid ${colors.main};
    margin: auto;
    margin-top: 20px;
    margin-bottom: 20px;
`;