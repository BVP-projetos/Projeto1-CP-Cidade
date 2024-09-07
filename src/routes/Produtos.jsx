import Image4 from '../assets/Acessorios.jpg';
import BolaFutebol from '../assets/bola_futebol.png';
import tenisNike from '../assets/tenis_nike.png';
import camisaCorinthians from '../assets/camisa_Corinthians.png';
import calcaPuma from '../assets/calca_Puma.png';
import raqueteTenis from '../assets/raquete_Tenis.png';
import meiaNike from '../assets/meia_Nike.png'
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
			<img className='cardImg' id='tenis_Nikeimg' src={tenisNike} alt='Tenis_Nike'></img>
			<h5 className='cardPrice'>R$ 249.99</h5>
			<button className='cardButton'>Comprar</button>
		</div>
      </Div>
	  <Div>
		<div className='card'>
			<h3 className='cardTitle'>Camisa do Corinthians 24</h3>
			<img className='cardImg' id='camisaCorinthiansimg' src={camisaCorinthians} alt='Camisa_Corinthians'></img>
			<h5 className='cardPrice'>R$ 299.99</h5>
			<button className='cardButton'>Comprar</button>
		</div>
      </Div>
	  <Div>
		<div className='card'>
			<h3 className='cardTitle'>Calça Puma Active Tricot</h3>
			<img className='cardImg' id='calcaPumaimg' src={calcaPuma} alt='Caça_Puma'></img>
			<h5 className='cardPrice'>R$ 159.99</h5>
			<button className='cardButton'>Comprar</button>
		</div>
      </Div>
	  <Div>
		<div className='card'>
			<h3 className='cardTitle'>Raquete De Tênis Wilson Federer</h3>
			<img className='cardImg' id='raqueteTenisimg' src={raqueteTenis} alt='Raquete_Tenis'></img>
			<h5 className='cardPrice'>R$ 499.99</h5>
			<button className='cardButton'>Comprar</button>
		</div>
      </Div>
	  <Div>
		<div className='card'>
			<h3 className='cardTitle'>Meia Nike Cushioned (6 Pares)</h3>
			<img className='cardImg' id='meiaNikeimg' src={meiaNike} alt='Meia_Nike'></img>
			<h5 className='cardPrice'>R$ 109.99</h5>
			<button className='cardButton'>Comprar</button>
		</div>
      </Div>
    </PageContainer>
  );
};

export default Produtos;
