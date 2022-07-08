import { useContext } from "react";
import { Container } from "./styles";
import { TransactionsContext } from "../../TransactionsContext";
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown, FaMoneyBillAlt} from "react-icons/fa";


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
          <FaRegArrowAltCircleUp size={30} color='var(--green)' alt="Entrada"/>
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
          <FaRegArrowAltCircleDown size={30} color='var(--red)' alt="Saída"/>
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
          <FaMoneyBillAlt size={30} color='var(--shape)' alt="Total"/>
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
