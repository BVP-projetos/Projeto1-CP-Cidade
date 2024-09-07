import Image3 from '../assets/SportWorld.jpg';
import { Container, Mensagem, StyledImage } from '../css/HomeStyle';

const Home = () => {
    return (
      <>
        <Mensagem>
          <h1>Bem-Vindo ao nosso site de esportes!</h1>
          <h3>Somos um grupo de alunos treinando a montagem de sites usando a ferramenta REACT e suas tecnologias.
            Ficamos agradecidos de te ver em nosso humilde site, estamos aprimorando nossas habilidades e tentando fazer sites cada vez
            mais profissionais. Obrigado pela visita e esperamos que goste do site!
          </h3>
        </Mensagem>
        <Container>
          <StyledImage src={Image3} alt="Home" />
        </Container>
      </>
    );
  };
  
  export default Home;