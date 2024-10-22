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
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1200px;
    margin: auto;
    padding: 50px 0px;
`;

export const Project = styled.div`

    width: 45%;
    height: 280px;
    transition: 0.2s;
    margin-bottom: 50px;
    clip-path: polygon(0% 5%, 5% 0%, 100% 0%, 100% 95%, 95% 100%, 0% 100%);
    border-radius: 5px;
    border: 4px solid #01ee88;
    background-color: ${colors.base};
    cursor: pointer;

    @media (max-width: 600px) {

        width: 90%;
        height: unset;
    }

    @media (min-width: 601px) and (max-width: 912px) {

        height: 320px;
    }

    &:hover {

        transform: scale(1.1);
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