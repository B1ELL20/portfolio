import styled from "styled-components";
import { colors } from "../../../Sentings/colors";

export const ContactsBox = styled.section`

    width: 100%;
    margin: 50px 0px;
`;

export const ContactsContainer = styled.div`

    display: flex;
    flex-wrap: wrap-reverse;
    justify-content: space-between;
    width: 100%;
    max-width: 1200px;
    margin: auto;
`;

export const ContactsList = styled.div`

    width: 40%;
    padding: 10px;

    @media (max-width: 600px) {

        width: 100%;
    }

    @media (min-width: 601px) and (max-width: 912px) {

        width: 60%;
    }
`;

export const BoxList = styled.div`

    margin-right: auto;
`;

export const ListContact = styled.ul`

    list-style: none;
    padding: 10px;
`;

export const ItemContact = styled.li`

    display: flex;
    align-items: center;
    margin: 10px 0px;
    cursor: pointer;
`;

export const IconContact = styled.i`

    font-size: 45px;
    color: ${colors.contrast};
    margin: 5px 15px 0px 0px;

    @media (max-width: 600px) {

        font-size: 30px;
    }

    @media (min-width: 601px) and (max-width: 912px) {

        font-size: 32px;
    }
`;

export const ContactDescription = styled.p`

    font-size: 30px;
    letter-spacing: 2px;
    font-weight: bold;
    color: ${colors.main};

    @media (max-width: 600px) {

        font-size: 20px;
    }

    @media (min-width: 601px) and (max-width: 912px) {

        font-size: 26px;
    }
`;

export const BoxMedia = styled.div`

    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-right: auto;
    margin-top: 50px;

    @media (max-width: 600px) {

        margin-top: 10px;
    }

    @media (min-width: 601px) and (max-width: 912px) {

        margin-top: 20px;
    }
    
`;

export const MediaIcon = styled.i`

    font-size: 50px;
    color: ${colors.main};
    margin: 0px 10px;
    transition: 0.5s;
    cursor: pointer;

    @media (max-width: 600px) {

        font-size: 50px;
    }

    :hover {

        color: ${colors.contrast};
    }
`;

export const Media = styled.div`

    width: 50%;
    padding: 10px;

    @media (max-width: 600px) {

        width: 100%;
    }

    @media (min-width: 601px) and (max-width: 912px) {

        width: 40%;
    }
`;

export const MediaContent = styled.img`

    width: 70%;
    display: block;
    margin: auto;

    @media (max-width: 600px) {

        width: 90%;
    }

    @media (min-width: 601px) and (max-width: 912px) {

        width: 95%;    
    }
`;

