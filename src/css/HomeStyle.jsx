import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 80%;
	margin: 0;
	overflow: hidden;
`;

export const StyledImage = styled.img`
	width: 100%;
	height: 100%; 
	object-fit: cover; 
	object-position: center;
	border-radius: 30px;
`;

export const Mensagem = styled.div`
	width: 100%;
	text-align: center;
	padding: 50px;
	font-family: 'Lato', sans-serif;

	h1{
		font-size: 35px;
		margin-bottom: 35px;
		
	}
`