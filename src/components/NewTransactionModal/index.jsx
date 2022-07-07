import { useState } from "react";
import Modal from "react-modal";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { Container, TransactionTypeContainer, RadioBox } from "./styles";

export function NewTransactionModal({ isOPen, onRequestClose }) {
  const [title, setTitle] = useState("");
  const [valueTransaction, setValueTransaction] = useState(0);
  const [category, setCategory] = useState("");
  const [type, setType] = useState("deposit");

  function handleChangeTitle(event){
    setTitle(event.target.value);
  }

  function handleChangeValue(){
    setValueTransaction(Number(event.target.value));
  }

  function handleChangeCategory(event){
    setCategory(event.target.value);
  }


  function handleSetTypeDeposit() {
    setType("deposit");
  }

  function handleSetTypeWithdraw() {
    setType("withdraw");
  }

  function handleNewTransaction(event) {
    event.preventDefault();
    const date = {
      id: Math.round(Math.random() * 1000),
      title: title,
      value: valueTransaction,
      category: category,
      type: type,
      date: new Date()
    }
    window.localStorage.setItem('transactions', JSON.stringify(date))
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
      <Container onSubmit={handleNewTransaction}>
        <h2>Cadastrar transação</h2>
        <input placeholder="Titulo" value={title} onChange={handleChangeTitle}/>
        <input type="number" placeholder="Valor" value={valueTransaction} onChange={handleChangeValue}/>

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

        <input placeholder="Categoria" value={category} onChange={handleChangeCategory}/>
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
