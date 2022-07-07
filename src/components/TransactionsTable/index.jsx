import { useEffect, useState } from "react";
import { Container } from "./styles";

export function TransactionsTable() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("transactions");
    console.log(data);
    setTransactions([JSON.parse(data)]);
  }, []);

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
          {transactions.map((transaction) => {
            return (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(transaction.value)}
                </td>
                <td>{transaction.category}</td>
                <td>
                  {new Intl.DateTimeFormat("pt-BR").format(
                    new Date(transaction.date)
                  )}
                </td>
                <td>{transaction.type}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
}
