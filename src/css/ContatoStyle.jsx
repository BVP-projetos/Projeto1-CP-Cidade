import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
`;

export const ContactWrapper = styled.div`
  max-width: 800px;
  max-height: 100%;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  color: #333;
  font-family: 'Lato', sans-serif;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    padding: 15px;
    max-width: 100%; /* Ajusta a largura em telas menores */
  }
  
  @media (max-width: 480px) {
    padding: 10px;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 30px;
  text-align: center;
  border-bottom: 2px solid #80c1ff;
  padding-bottom: 10px;
  
  @media (max-width: 768px) {
    font-size: 2rem; /* Diminui o tamanho do título em telas menores */
  }
  
  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

export const Info = styled.p`
  font-size: 1.2rem;
  margin-bottom: 15px;
  color: #555;
  
  @media (max-width: 768px) {
    font-size: 1.1rem; /* Ajusta o tamanho do texto em telas menores */
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const Highlight = styled.span`
  font-weight: bold;
  color: #2980b9;
`;
