/* eslint-disable react/prop-types */
import React from "react";

const AddTransaction = ({ setTransactionData }) => {
  const [formData, setformData] = React.useState({
    date: "",
    category: "",
    description: "",
    amount: "",
  });

  function handleChange(event) {
    setformData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  const addData = async () => {
    let response = await fetch("http://localhost:8001/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    let newlyAddedTransaction = await response.json();

    if (response.status >= 200 && response.status <= 299) {
      // add one more transaction to the already existing transactions to ui table

      // add newlyAddedTransaction at the end
      setTransactionData((prevState) => {
        return [...prevState, newlyAddedTransaction];
      });

      // Empty the form values
      setformData({
        date: "",
        category: "",
        description: "",
        amount: "",
      });
    }
    // console.log(response);
    // console.log(newlyAddedTransaction);
  };

  const submit = async (event) => {
    event.preventDefault();
    await addData();
  };

  return (
    <div className="addForm">
      AddTransaction
      <form onSubmit={submit}>
        <input
          type="date"
          placeholder="Date"
          onChange={handleChange}
          required
          name="date"
          value={formData.date}
        />
        <input
          type="text"
          placeholder="Category"
          onChange={handleChange}
          name="category"
          required
          value={formData.category}
        />
        <textarea
          placeholder="Description"
          onChange={handleChange}
          name="description"
          required
          value={formData.description}
          rows={6}
        ></textarea>
        <input
          type="number"
          placeholder="Amount"
          required
          onChange={handleChange}
          name="amount"
          value={formData.amount}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddTransaction;
