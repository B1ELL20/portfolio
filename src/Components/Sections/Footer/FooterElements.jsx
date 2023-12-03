import styled from "styled-components";
import { colors } from "../../../Settings/colors";

export const FooterBox = styled.section`

    width: 100%;
    background-color: ${colors.main};
    margin-top: 50px;
`;

export const FooterContainer = styled.div`

    width: 100%;
    max-width: 1200px;
    margin: auto;
    padding: 10px 0px;
`;

export const Copy = styled.span`

    display: block;
    text-align: center;
    color: ${colors.base};
    font-size: 20px;
    letter-spacing: 1px;
    font-weight: bold;
`;