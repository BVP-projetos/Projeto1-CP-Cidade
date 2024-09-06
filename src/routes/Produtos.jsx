import Image4 from '../assets/Acessorios.jpg';
import { PageContainer, Title, Image } from '../css/ProdutosStyle';

const Produtos = () => {
  return (
    <PageContainer>
      <Title>Produtos</Title>
      <Image src={Image4} alt="Acessórios" />
    </PageContainer>
  );
};

export default Produtos;
