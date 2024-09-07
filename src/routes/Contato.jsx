import { ContactWrapper, Title, Info, Highlight, PageWrapper } from '../css/ContatoStyle'; 

const Contato = () => {
  return (
    <PageWrapper>
      <ContactWrapper>
        <Title>Contato</Title>
        <Info>Telefone: <Highlight>(11) 3456-7890</Highlight></Info>
        <Info>Email: <Highlight>contato@BVPsports.com.br</Highlight></Info>
        <Info>Endereço: <Highlight>Rua das Palmeiras, 1234 - Bairro Jardim Paulista, São Paulo - SP, CEP 01423-001</Highlight></Info>
        <Info>Instagram: <Highlight>@BVPsports</Highlight></Info>
        <Info>Facebook: <Highlight>BVPsports.io</Highlight></Info>
        <Info>Parceiros: <Highlight>Sportingbet</Highlight></Info>
      </ContactWrapper>
    </PageWrapper>
  );
};

export default Contato;
