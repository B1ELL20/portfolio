import styled from "styled-components";
import { colors } from "../../../Settings/colors";

import luimit from '../../../images/luimit.webp'
import sinergia from '../../../images/sinergia.webp'
import ctst from '../../../images/ctst.webp'
import bank from '../../../images/bank.webp'
import back from '../../../images/projects.png'

const projectsImg = [luimit, sinergia, ctst, bank];

export const ProjectsBox = styled.section`

    width: 100%;
    margin: 50px 0px;
    background-color: ${colors.main};
    background-image: url(${back});
    background-repeat: no-repeat;
    background-size: cover;

    @media (max-width: 600px) {

        background-size: contain;
    }
`;

export const ProjectsContainer = styled.div`

    display: flex;
    justify-content: start;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1200px;
    margin: auto;
    padding: 50px 0px;
    position: relative;
`;

export const Project = styled.div`

    width: 90%;
    height: 550px;
    position: relative;
    transition: 0.2s;
    border-radius: 10px;
    background-color: ${colors.base};
    cursor: pointer;

    @media (max-width: 600px) {

        width: 90%;
        height: unset;
    }

    @media (min-width: 601px) and (max-width: 912px) {

        height: 320px;
    }
`;

export const SlideBox = styled.div`

    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    overflow: hidden;
`;

export const ProjectsLine = styled.div`

    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0%;
`;

export const RowProject = styled.div`

    width: ${({ $sld })=>($sld === 1 ? '90%' : '15%')};
    height: ${({ $sld })=>($sld === 1 ? '550px' : '40%')};
    position: absolute;
    left: ${({ $sld })=>($sld === 2 ? '51%' : $sld === 3 ? '68%' : $sld === 4 ? '85%' : '0')};
    z-index: ${({ $sld })=>($sld === 1 ? '0' : '3')};
    background-color: ${({ $sld })=>($sld === 1 ? 'red' : 'yellow')};
    border-radius: 10px;
    border: 1px solid gray;
    transition: 0.5s;
`;

export const LineButtons = styled.div`

    width: 100%;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
    z-index: 999;
`;

export const ContainerButtons = styled.div`

    display: flex;
    justify-content: space-around;
    padding: 10px;
`;

export const LineButton = styled.div`

    width: 40px;
    height: 40px;
    color: ${colors.base};
    background-color: ${colors.contrast_main};
    border-radius: 10px;
    padding: 10px;
    margin: 0px 5px;
    font-size: 20px;
    opacity: 0.8;
    cursor: pointer;

    &:hover {

        opacity: 1;
    }
`;

export const ProjectImg = styled.div`

    width: 100%;
    height: 80%;
    background-image: linear-gradient(to top, transparent, transparent), url(${({ img }) => projectsImg[img]});
    background-size: cover;
    background-repeat: no-repeat;

    @media (max-width: 600px) {

        background-position: center;
        height: 190px;
    }

    
    @media (min-width: 601px) and (max-width: 912px) {

        height: 65%;
    }
`;

export const ProjectTitle = styled.h3`

    font-size: 28px;
    letter-spacing: 2px;
    width: 100%;
    text-align: center;
    font-weight: bold;
    padding-left: 15px;
    padding-top: 12px;
    color: ${colors.main};

    @media (max-width: 600px) {

        padding: 20px 0px;
        border-top: 3px solid ${colors.main};
        width: 95%;
        margin: auto;
        margin-top: 10px;
    }

    
    @media (min-width: 601px) and (max-width: 912px) {

        padding: 30px 0px;
        font-size: 28px;
    }
`;

export const Destaque = styled.span`

    color: ${colors.contrast};
`;