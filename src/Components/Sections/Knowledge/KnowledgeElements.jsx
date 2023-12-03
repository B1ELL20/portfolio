import styled from "styled-components";
import { colors } from "../../../Settings/colors";

export const KnowledgeBox = styled.section`

    width: 100%;
    margin: 50px 0px;
    position: relative;
    margin-bottom: 100px;
`;

export const KnowledgeContainer = styled.div`

    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    margin: auto;
    overflow-y: auto;

    @media (max-width: 600px) {

        height: 500px;
    }
`;

export const ContainerSection = styled.div`

    width: 30%;
    text-align: start;

    @media (max-width: 600px) {

        width: 80%;
    }

    @media (min-width: 601px) and (max-width: 912px) {

        width: 45%;
    }
`;

export const ContainerList = styled.ul`

    list-style: none;
    padding: 10px;
    margin-left: 20px;
`;

export const ListItem = styled.li`

    display: flex;
    align-items: center;
    margin: 10px 0px;
    transition: 0.2s;
    border-bottom: 7px solid transparent;
    cursor: pointer;

    &:hover {

        border-bottom: 7px solid ${colors.contrast};
    }
`;

export const IconItem = styled.i`

    font-size: 45px;
    color: ${colors.contrast};
    margin: 5px 15px 0px 0px;
`;

export const ItemDescription = styled.p`

    font-size: 36px;
    letter-spacing: 2px;
    font-weight: bold;
    color: ${colors.main};
`;

export const Background = styled.div`

    position: absolute;
    top: 170px;
    width: 100%;
    height: 70%;
    z-index: -1;
    opacity: 0.2;

    @media (max-width: 600px) {

        display: none;
    }
`;

export const Backimage = styled.img`

    display: block;
    margin: auto;
    height: 500px;
`;