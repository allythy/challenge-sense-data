import { useState } from "react";
import Modal from "react-modal";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { Container, TransactionTypeContainer, RadioBox } from "./styles";

export function NewTransactionModal({ isOPen, onRequestClose }) {
  const [type, setType] = useState("deposit");

  function handleSetTypeDeposit() {
    setType("deposit");
  }

  function handleSetTypeWithdraw() {
    setType("withdraw");
  }

  return (
    <Modal
      isOpen={isOPen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-contenct"
    >
      <button type="submit" onClick={onRequestClose}>
        <img src={closeImg} alt="Fechar modal" className="react-modal-close" />
      </button>
      <Container>
        <h2>Cadastrar transação</h2>
        <input placeholder="Titulo" />
        <input type="number" placeholder="Valor" />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={handleSetTypeDeposit}
            isActive={type === "deposit"}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={handleSetTypeWithdraw}
            isActive={type === "withdraw"}
            activeColor="red"

          >
            <img src={outcomeImg} alt="Saida" />
            <span>Saida</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
