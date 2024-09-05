import { ContactWrapper, Title, Info, Highlight } from '../css/ContatoStyle'; 

const Contato = () => {
    return (
      <ContactWrapper>
        <Title>Contato</Title>
        <Info>Telefone: <Highlight>(11) 3456-7890</Highlight></Info>
        <Info>Email: <Highlight>contato@sportworld.com.br</Highlight></Info>
        <Info>Endereço: <Highlight>Rua das Palmeiras, 1234 - Bairro Jardim Paulista, São Paulo - SP, CEP 01423-001</Highlight></Info>
        <Info>Instagram: <Highlight>LojaSportWorld</Highlight></Info>
        <Info>Facebook: <Highlight>SportWorld.io</Highlight></Info>
        <Info>Parceiros: <Highlight>Sportingbet</Highlight></Info>
      </ContactWrapper>
    );
  };
  
  export default Contato;
  