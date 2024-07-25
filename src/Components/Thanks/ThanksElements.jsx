import styled from "styled-components";
import { colors } from "../../Settings/colors";

export const ThanksBox = styled.div`

    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${colors.base};
`;

export const ThanksContainer = styled.div`

    text-align: center;
    width: 70%;
`;

export const ThanksTitle = styled.h1`

    font-size: 60px;
    color: ${colors.main};

    @media (max-width: 600px) {

        font-size: 40px;
    }
`;

export const ThanksImage = styled.img`

    width: 35%;
    margin-bottom: 30px;

    
    @media (max-width: 600px) {

        width: 80%;
    }
`;

export const ThanksButton = styled.button`

    font-size: 30px;
    padding: 10px 30px;
    border: 2px solid ${colors.main};
    background-color: ${colors.main};
    color: ${colors.base};
    margin-top: 50px;
    cursor: pointer;

    &:hover {

        background-color: ${colors.base};
        color: ${colors.main};
    }

    @media (max-width: 600px) {

        font-size: 24px;
        padding: 10px 20px;
    }
`;