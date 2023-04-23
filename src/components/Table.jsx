/* eslint-disable react/prop-types */
// import React from "react";
import arrow from "../assets/arrow.svg";

const Table = ({ transactionData, setTransactionData }) => {
  console.log(transactionData);

  const sortColumn = () => {

    // this sorts the categories alphabatically disending order.
    const sortedData = [...transactionData].sort((a, b) =>
      (a.category).localeCompare(b.category)
    );

    
    setTransactionData(
      transactionData[0].category === sortedData[0].category
        ? sortedData.reverse()
        : sortedData
    );
  };

  return (
    <div>
      <table>
        <thead>
          <th>Date</th>
          <th>
            <div className="sort" onClick={sortColumn}>
              <p>Category</p> <img src={arrow} />
            </div>
          </th>
          <th>Description</th>
          <th>Amount</th>
        </thead>
        {transactionData.map((item, i) => {
          return (
            <tbody key={i}>
              <td>{item.date}</td>
              <td>{item.category}</td>
              <td>{item.description}</td>
              <td>Ksh.{item.amount}</td>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default Table;
