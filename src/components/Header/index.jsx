import { Container, Content, Title } from "./styles";

export function Header({onOpenNewTransactionModal}) {

  return (
    <Container>
      <Content>
        <Title>SenFinança</Title>
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
