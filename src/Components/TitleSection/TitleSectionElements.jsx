import styled from "styled-components";

export const Title = styled.h2`

    font-size: 70px;
    font-weight: 400;
    padding: 50px 0px;
    text-align: center;
    color: ${({color}) => (color === 0 ? '#303e7c' : '#fff')};

    @media (max-width: 600px) {

        font-size: 45px;
    }

    @media (min-width: 601px) and (max-width: 912px) {

        font-size: 50px;
    }
`;