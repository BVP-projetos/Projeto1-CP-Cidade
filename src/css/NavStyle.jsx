import styled from 'styled-components'

export const NavStyle =styled.section `

.nav {
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    background-image: linear-gradient(to right, #e0eafc, #cfdef3);
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid #ddd;
    font-family: 'Lato', sans-serif;
}

.link {
    font-size: 1.3rem;
    color: #333;
    font-weight: 600;
    padding: 10px 15px;
    text-transform: uppercase;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s ease, color 0.3s ease;
}

.link:hover {
    background-color: #cfdef3;
    color: #000;
}




`