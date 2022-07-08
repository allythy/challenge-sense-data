import { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";
import { Container } from "./styles";

export function TransactionsTable() {
  const { transactions, deleteTransactions } = useContext(TransactionsContext);

  return (
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
          {transactions.map((transaction, index) => {
            return (
              <tr key={index}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(transaction.value)}
                </td>
                <td>{transaction.category}</td>
                <td>
                  {transaction.date}
                </td>
                <td>{transaction.type === 'deposit'? 'Entrada' : 'Saída'}</td>
                <td>
                  <button onClick={() => deleteTransactions(transaction.id)}>
                    {"Deletar"}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
}
