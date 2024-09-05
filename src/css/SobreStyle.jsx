import styled from 'styled-components';

export const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  color: #333333;
  font-family: 'Lato', sans-serif;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 20px;
  text-align: center;
  border-bottom: 2px solid #80c1ff;
  padding-bottom: 10px;
`;

export const Image = styled.img`
  display: block;
  width: 70%;
  height: 37rem;
  margin: 20px auto;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

export const Paragraph = styled.p`
  font-size: 1.125rem;
  line-height: 1.8;
  color: #555555;
  text-align: justify;
  margin-bottom: 20px;
`;
