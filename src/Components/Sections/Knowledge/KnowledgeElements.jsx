import styled from "styled-components";

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
`;

export const Client = styled.div`

    width: 25%;
    height: 130px;

    @media (max-width: 600px) {

        width: 80%;
        margin-top: 20px;
    }

    @media (min-width: 601px) and (max-width: 912px) {

        width: 45%;
    }
`;

export const ClientImg = styled.img`

    display: block;
    margin: auto;
    height: 100%;
    width: ${({large}) => large};
`;