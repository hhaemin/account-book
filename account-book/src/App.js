import React, { useState } from "react";
import "./App.css";
import DateFilter from "./components/DateFilter";
import ExpenseList from "./components/ExpenseList";
import Main from "./components/Main";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const addExpense = (expense) => {
    setExpenses([{ ...expense, id: Date.now() }, ...expenses]);
  };

  const filteredByDate = expenses.filter((expense) => {
    const date = new Date(expense.purchaseDate);
    return (
      (!startDate || date >= new Date(startDate)) &&
      (!endDate || date <= new Date(endDate))
    );
  });

  return (
    <div className="App">
      <Main addExpense={addExpense} />
      <ExpenseList expenses={filteredByDate} />
      <DateFilter setStartDate={setStartDate} setEndDate={setEndDate} />
    </div>
  );
}

export default App;
