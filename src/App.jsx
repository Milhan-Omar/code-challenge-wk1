// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useEffect, useState } from "react";
import "./App.css";
import AddTransaction from "./components/AddTransaction";
import Search from "./components/Search";
import Table from "./components/Table";

function App() {
  const [transactionData, setTransactionData] = useState([]);
  function fetchedData() {
    fetch("http://localhost:8001/transactions")
      .then((res) => res.json())
      .then((data) => setTransactionData(data));
  }

  useEffect(() => {
    fetchedData();
  }, []);
  return (
    <>
      <Search />
      <Table
        transactionData={transactionData}
        setTransactionData={setTransactionData}
      />
      <AddTransaction setTransactionData={setTransactionData} />
    </>
  );
}

export default App;
