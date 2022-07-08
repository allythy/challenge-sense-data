import { useContext } from "react";
import { Container } from "./styles";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import total from "../../assets/total.svg";
import { TransactionsContext } from "../../TransactionsContext";

export function Summary() {
  const { transactions } = useContext(TransactionsContext);

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type == "deposit") {
        acc.deposits += transaction.value;
        acc.total += transaction.value;
      } else {
        acc.withdraws += transaction.value;
        acc.total -= transaction.value;
      }
      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  );

  return (
    <Container>
      <article>
        <header>
          <p>Entrada</p>
          <img src={incomeImg} alt="Entrada" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.deposits)}
        </strong>
      </article>

      <article>
        <header>
          <p>Saidas</p>
          <img src={outcomeImg} alt="Saidas" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(- summary.withdraws)}
        </strong>
      </article>

      <article className="highlight-background">
        <header>
          <p>Total</p>
          <img src={total} alt="Total" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.total)}
        </strong>
      </article>
    </Container>
  );
}
