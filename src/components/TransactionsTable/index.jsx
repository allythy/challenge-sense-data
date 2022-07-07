import { Container } from "./styles";

export function TransactionsTable(){
  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
            <th>Tipo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de App</td>
            <td className="deposit">R$20.000</td>
            <td>Desenvolvimento</td>
            <td>06/07/2022</td>
            <td>Entrada</td>
          </tr>

          <tr>
            <td>Soverte</td>
            <td className="withdraw">R$50</td>
            <td>Desenvolvimento</td>
            <td>06/07/2022</td>
            <td>Entrada</td>
          </tr>
        </tbody>
      </table>

    </Container>
  )
}
