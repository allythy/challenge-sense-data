import { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";
import { Container } from "./styles";
import { FaTrash } from "react-icons/fa";

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
                <td data-label="Título">{transaction.title}</td>
                <td data-label="Valor" className={transaction.type}>
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(transaction.value)}
                </td>
                <td data-label="Categoria">{transaction.category}</td>
                <td data-label="Data">
                  {transaction.date}
                </td>
                <td data-label="Tipo">{transaction.type === 'deposit'? 'Entrada' : 'Saída'}</td>
                <td>
                  <span onClick={() => deleteTransactions(transaction.id)}>
                    <FaTrash />
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
}
