import React, { useState } from "react";
import "./App.css";
import DateFilter from "./components/DateFilter";
import ExpenseList from "./components/ExpenseList";
import Main from "./components/Main";
import ExpenseItem from "./components/ExpenseItem";

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
      <div>
        {expenses.length === 0 ? (
          <p>소비 항목이 없습니다.</p>
        ) : (
          expenses.map((expense, index) => (
            <ExpenseItem key={index} expense={expense} />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
