import styled from 'styled-components';

export const FooterStyle = styled.h5`

    div{
        display: flex;
        width: 100%;
    }

    h5{
        width: 100%;
        font-size: 1rem;
        height: 50px;
        text-align: center;
        background: black;
        color: white;
        align-content: center;
    }

    @media (max-width: 768px) {
        height: auto;
        padding: 15px 10px; /* Ajusta o padding do footer em telas menores */
    }

`;