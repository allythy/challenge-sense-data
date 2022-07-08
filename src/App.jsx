import React, { useState } from "react";
import Modal from "react-modal";

import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./TransactionsContext";

import { GlobalStyle } from "./styles/global.js";
import { Summary } from "./components/Summary";
import { TransactionsTable } from "./components/TransactionsTable";

Modal.setAppElement("#root");

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }
  return (
    <TransactionsProvider>
      <GlobalStyle />
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <main className="container">
        <Summary />
        <TransactionsTable />
      </main>
      <NewTransactionModal
        isOPen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
    </TransactionsProvider>
  );
}
