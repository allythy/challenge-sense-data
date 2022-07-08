import { useContext } from "react";
import Modal from "react-modal";
import closeImg from "../../assets/close.svg";
import { TransactionsContext } from "../../TransactionsContext";
import { schema } from "../../services/schema";
import { Container } from "./styles";
import { format } from "date-fns";
import { Formik, Field, ErrorMessage } from "formik";
import { v4 as uuidv4 } from "uuid";

export function NewTransactionModal({ isOPen, onRequestClose }) {
  const { createTransaction } = useContext(TransactionsContext);

  function handleNewTransaction(values) {
    const date = {
      id: uuidv4(),
      title: values.title,
      value: values.value,
      category: values.category,
      type: values.type,
      date: format(new Date(), "MM/dd/yyyy"),
    };
    createTransaction(date);
    onRequestClose();
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
      <Formik
        initialValues={{ title: "", value: 0, category: "", type: "" }}
        validationSchema={schema}
        onSubmit={(values) => {
          handleNewTransaction(values);
        }}
      >
        {() => (
          <Container>
            <h2>Cadastrar transação</h2>

            <Field
              name="title"
              placeholder="Titulo"
              alt="Nome do título da transação"
            />

            <ErrorMessage name="title" component="p" />

            <Field
              type="number"
              name="value"
              placeholder="Valor"
              alt="Valor da transação"
            />

            <ErrorMessage name="value" component="p" />

            <Field
              as="select"
              name="type"
              alt="Selecione se transação é de entrada ou saída"
            >
              <option value="">Selecione o tipo</option>
              <option value="deposit">Entrada</option>
              <option value="withdraw">Saida</option>
            </Field>

            <ErrorMessage name="type" component="p" />

            <Field
              name="category"
              placeholder="Categoria"
              alt="Categoria da transação"
            />

            <ErrorMessage name="category" component="p" />

            <button type="submit">Cadastrar</button>
          </Container>
        )}
      </Formik>
    </Modal>
  );
}
