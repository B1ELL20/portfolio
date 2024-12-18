import styled, { keyframes } from "styled-components";
import { colors } from "../../../Settings/colors";

import luimit from '../../../images/luimit.webp'
import logo_luimit from '../../../images/logo_luimit.webp'
import sinergia from '../../../images/sinergia.webp'
import logo_sinergia from '../../../images/logo_sinergia.webp'
import ctst from '../../../images/ctst.webp'
import logo_ctst from '../../../images/logo_ctst.webp'
import bank from '../../../images/bank.webp'
import logo_bank from '../../../images/logo_bank.svg'
import back from '../../../images/projects.png'

const projectsImg = [luimit, sinergia, ctst, bank];

export const ProjectsBox = styled.section`

    width: 100%;
    margin: 50px 0px;
    background-color: ${colors.main};
    background-image: url(${back});
    background-repeat: no-repeat;
    background-size: cover;
    padding: 50px 0px 100px 0px;

    @media (max-width: 600px) {

        background-size: cover;
        background-position: center;
    }
`;

const flutua = keyframes`

    0% {

        transform: translateY(0);
    }

    50% {

        transform: translateY(30px);
    }

    100% {

        transform: translateY(0);
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

    animation-name: ${flutua};
    animation-duration: 3s;
    animation-iteration-count: infinite;
`;


export const Project = styled.div`

    width: 90%;
    height: 550px;
    position: relative;
    transition: 0.2s;
    border-radius: 10px;
    cursor: pointer;

    @media (max-width: 600px) {

        width: 100%;
        height: 700px;
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

    @media (max-width: 600px) {

        flex-direction: column;
    }

    
    @media (min-width: 601px) and (max-width: 912px) {

        width: 90%;
        margin: auto;
    }

    @media (min-width: 913px) and (max-width: 1200px) {

        width: 90%;
        margin: auto;
    }
`;

export const ProjectsLine = styled.div`

    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    position: absolute;
    top: 0%;
    left: 0%;
`;

export const RowProject = styled.div`

    width: 100%;
    height: 100%;

    background-image: linear-gradient(to right, ${({ $sld })=>($sld === 1 ? 'rgba(0,0,0,0.4)' : 'transparent')}, transparent 20%), url(${({ $img, $count })=>($img === 1 && $count === 1? `${luimit}` : $img === 1 && $count != 1 ? `${logo_luimit}` : $img === 2 && $count === 2 ? `${sinergia}` : $img === 2 && $count != 2 ? `${logo_sinergia}` : $img === 3 && $count === 3 ? `${ctst}` : $img === 3 && $count != 3 ? `${logo_ctst}` : $img === 4 && $count === 4 ? `${bank}` : $img === 4 && $count != 4 ? `${logo_bank}`: 'none')});

    background-size: ${({ $sld })=>($sld === 1 ? 'cover' : 'contain')};
    background-position: ${({ $sld })=>($sld === 1 ? 'unset' : 'center')};
    background-repeat: no-repeat;
    background-color: white;

    box-shadow: 0px 0px 0px white;
    border-radius: 10px;
    //border: 4px solid ${colors.contrast};

    transition: 0.5s;
    cursor: pointer;

    @media (max-width: 600px) {

        background-size: contain;
        background-position: center;
    }
`;

export const LinkProject = styled.div`

    width: 100%;
    height: 0px;
    padding: 0px;
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 1px;
    text-align: center;
    color: transparent;
    background-color: transparent;
    border-radius: 0px 0px 10px 10px;
    transition: 0.4s;
`;

export const BoxProject = styled.a`

    width: ${({ $sld })=>($sld === 1 ? '90%' : '20%')};
    height: ${({ $sld })=>($sld === 1 ? '550px' : '40%')};
    position: absolute;
    left: ${({ $sld })=>($sld === 2 ? '38%' : $sld === 3 ? '59%' : $sld === 4 ? '80%' : '0')};
    z-index: ${({ $sld })=>($sld === 1 ? '0' : '3')};
    transition: 0.5s;
    text-decoration: none;
    cursor: pointer;

    &:hover {

        transform: scale(${({ $sld })=>($sld === 1 ? '1' : '1.05')});
        transform: translateY(${({ $sld })=>($sld === 1 ? '0px' : '-40px')});
        box-shadow: 0px 0px 10px black;
        z-index: ${({ $sld })=>($sld === 1 ? '1' : '999')};

        ${LinkProject} {

            height: unset;
            padding: ${({ $sld })=>($sld === 1 ? '0px' : '10px 0px')};
            color: ${({ $sld })=>($sld === 1 ? 'transparent' : `${colors.base}`)};
            background-color: ${({ $sld })=>($sld === 1 ? 'transparent' : `${colors.contrast}`)};
        }

        ${RowProject} {

            border-radius: ${({ $sld })=>($sld === 1 ? '10px' : '10px 10px 0px 0px')};
        }
    }

    @media (max-width: 600px) {

        width: ${({ $sld })=>($sld === 1 ? '90%' : '60%')};
        height: ${({ $sld })=>($sld === 1 ? '200px' : '16%')};
        top: ${({ $sld })=>($sld === 2 ? '30%' : $sld === 3 ? '48%' : $sld === 4 ? '66%' : '0')};
        left: unset;
    }
`;

export const LineButtons = styled.div`

    width: 100%;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
    z-index: 999;

    
    @media (max-width: 600px) {

        bottom: -5%;
    }
`;

export const ContainerButtons = styled.div`

    display: flex;
    justify-content: space-around;
    padding: 10px;
`;

export const LineButton = styled.div`

    width: 40px;
    height: 40px;
    color: ${colors.contrast_main};
    background-color: ${colors.base};
    border-radius: 10px;
    padding: 10px;
    margin: 0px 5px;
    font-size: 20px;
    opacity: 0.9;
    cursor: pointer;

    &:hover {

        transform: scale(1.2);
    }

    @media (max-width: 600px) {

        width: 50px;
        height: 50px;
        font-size: 30px;
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