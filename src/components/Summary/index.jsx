import { Container } from "./styles";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import total from "../../assets/total.svg";

export function Summary() {
  return (
    <Container>
      <article>
        <header>
          <p>Entrada</p>
          <img src={incomeImg} alt="Entrada" />
        </header>
        <strong>R$10000</strong>
      </article>

      <article>
        <header>
          <p>Saidas</p>
          <img src={outcomeImg} alt="Saidas" />
        </header>
        <strong> - R$10000</strong>
      </article>

      <article className="highlight-background">
        <header>
          <p>Total</p>
          <img src={total} alt="Total" />
        </header>
        <strong> - R$10000</strong>
      </article>
    </Container>
  );
}
