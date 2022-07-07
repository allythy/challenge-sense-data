import { Container, Content, Title } from "./styles"

export function Header(){
  return(
    <Container>
      <Content>
        <Title>SenFinança</Title>
        <button type="button">Nova transação</button>
      </Content>
    </Container>
  )
}
