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
  max-width: 100%;
  height: auto;
  margin: 20px auto;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

export const Div = styled.div`
width:300px;
display: inline-block;
margin-left: 60px;
margin-top: 40px;

*{
	font-family: 'Lato', sans-serif;
}

.card{
	width: 300px;
	border: solid 1px rgba(0,0,0,0.1);
	border-radius: 50px;
	height:480px;
}
.cardTitle{
	font-size:25px;
	width: 100%;
	text-align: center;
	padding:20px;
}
.cardImg{
	width: 100%;
	padding: 20px;
}
.cardPrice{
	font-size:25px;
	width: 100%;
	text-align: center;
	padding: 5px;
	margin-bottom: 10px;
}
.cardButton{
	background-color: #00f8a5;
	border: solid 1px rgba(0,0,0,0.3);
	border-radius: 20px;
	width: 80%;
	padding: 10px;
	margin: 10px;
	margin-left: 30px;
	transition: ease-in-out 0.5s;
	font-weight: 700;
}
.cardButton:hover{
	background-color: #00f884;
	padding: 11px;
	font-size: 15px;
	transition: ease-in-out 0.5s;
	font-weight: 700;
}
`