import { createContext, useEffect, useState } from "react";

export const TransactionsContext = createContext([]);

export function TransactionsProvider({ children }) {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("transactions");
    console.log(data);
    if (data !== null) {
      setTransactions(JSON.parse(data));
    }
  }, []);

  function createTransaction(transaction) {
    const allTransactions = [...transactions, transaction];
    setTransactions(allTransactions);
    localStorage.setItem("transactions", JSON.stringify(allTransactions));
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}
