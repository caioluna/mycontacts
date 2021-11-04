import { Container, Header, Ruler, Contact } from './styles';

export default function ContactsList() {
  return (
    <Container>
      <Header>
        <span>3 contatos</span>
        <a href="javascript.void(0)">Novo contato</a>
      </Header>
      <Ruler />
      <Contact />
    </Container>
  );
}
