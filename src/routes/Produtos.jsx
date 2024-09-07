import Image4 from '../assets/Acessorios.jpg';
import BolaFutebol from '../assets/bola_futebol.png'
import tenisNike from '../assets/tenis_nike.png'
import { PageContainer, Title, Image, Div} from '../css/ProdutosStyle';

const Produtos = () => {
  return (
    <PageContainer>
      <Title>Produtos</Title>
      <Image src={Image4} alt="Acessórios" />
      <Div>
		<div className='card'>
			<h3 className='cardTitle'>Bola de Futebol</h3>
			<img className='cardImg' src={BolaFutebol} alt='Bola_Futebol'></img>
			<h5 className='cardPrice'>R$ 99.99</h5>
			<button className='cardButton'>Comprar</button>
		</div>
      </Div>
	  <Div>
		<div className='card'>
			<h3 className='cardTitle'>Tênis Nike Revolution 7</h3>
			<img className='cardImg' src={tenisNike} alt='Bola_Futebol'></img>
			<h5 className='cardPrice'>R$ 249.99</h5>
			<button className='cardButton'>Comprar</button>
		</div>
      </Div>
	  <Div>
		<div className='card'>
			<h3 className='cardTitle'>Bola de Futebol</h3>
			<img className='cardImg' src={BolaFutebol} alt='Bola_Futebol'></img>
			<h5 className='cardPrice'>R$ 100.00</h5>
			<button className='cardButton'>Comprar</button>
		</div>
      </Div>
	  <Div>
		<div className='card'>
			<h3 className='cardTitle'>Bola de Futebol</h3>
			<img className='cardImg' src={BolaFutebol} alt='Bola_Futebol'></img>
			<h5 className='cardPrice'>R$ 100.00</h5>
			<button className='cardButton'>Comprar</button>
		</div>
      </Div>
	  <Div>
		<div className='card'>
			<h3 className='cardTitle'>Bola de Futebol</h3>
			<img className='cardImg' src={BolaFutebol} alt='Bola_Futebol'></img>
			<h5 className='cardPrice'>R$ 100.00</h5>
			<button className='cardButton'>Comprar</button>
		</div>
      </Div>
	  <Div>
		<div className='card'>
			<h3 className='cardTitle'>Bola de Futebol</h3>
			<img className='cardImg' src={BolaFutebol} alt='Bola_Futebol'></img>
			<h5 className='cardPrice'>R$ 100.00</h5>
			<button className='cardButton'>Comprar</button>
		</div>
      </Div>
    </PageContainer>
  );
};

export default Produtos;
