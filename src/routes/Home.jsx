
import Image3 from '../assets/SportWorld.jpg';
import { Container, StyledImage } from '../css/HomeStyle';

const Home = () => {
    return (
      <Container>
        <StyledImage src={Image3} alt="Home" />
      </Container>
    );
  };
  
  export default Home;