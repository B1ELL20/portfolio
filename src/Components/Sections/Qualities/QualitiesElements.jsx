import styled from "styled-components";
import { colors } from "../../../Settings/colors";

export const QualitiesBox = styled.section`

    width: 100%;
    padding: 100px 0px;

    @media (max-width: 600px) {

        padding: 20px 0px;
    }
`;

export const QualitiesContainer = styled.div`

    display: flex;
    flex-wrap: wrap;
    flex-direction: ${({reverse}) => (reverse === 0 ? 'row' : 'row-reverse')};
    align-items: center;
    width: 100%;
    max-width: 1200px;
    margin: auto;
`;

export const QualitiesDivision = styled.div`

    width: 50%;

    @media (max-width: 600px) {

        width: 100%;
        margin-bottom: 50px;
    }
`;

export const TextBox = styled.div`

    width: 80%;
    padding: 10px;
    margin: auto;
    
    @media (max-width: 600px) {

        width: 90%;
    }
`;

export const TopTitle = styled.h3`

    padding: 10px 0px;
    font-size: 22px;
    font-weight: bold;
    letter-spacing: 1px;
    color: ${colors.contrast};
`;

export const MidTitle = styled.h4`

    padding: 10px 0px;
    font-size: 40px;
    font-weight: bold;
    letter-spacing: 1px;
    color: ${colors.main};
`;

export const DescServ = styled.p`

    font-size: 20px;
    font-weight: bold;
    letter-spacing: 2px;
    line-height: 24px;
    color: ${colors.light};
    
    @media (max-width: 600px) {

        margin-top: 10px;
    }
`;

export const QualitiesImg = styled.img`

    width: 75%;
    display: block;
    margin: auto;
`;