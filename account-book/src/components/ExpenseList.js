import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ expenses }) => {
  const [sortType, setSortType] = useState("latest");
  const [filterType, setFilterType] = useState("all");

  const sortedExpenses = [...expenses].sort((a, b) => {
    if (sortType === "가격 높은 순") return b.price - a.price;
    if (sortType === "가격 낮은 순") return a.price - b.price;
    if (sortType === "최신 순")
      return new Date(b.purchaseDate) - new Date(a.purchaseDate);
    return new Date(a.purchaseDate) - new Date(b.purchaseDate);
  });

  const filteredExpenses = sortedExpenses.filter(
    (expense) => filterType === "all" || expense.type === filterType
  );

  return (
    <div>
      <div className="filter-sort">
        <select value={sortType} onChange={(e) => setSortType(e.target.value)}>
          <option value="price-high">가격 높은 순</option>
          <option value="price-low">가격 낮은 순</option>
          <option value="latest">최신 순</option>
          <option value="oldest">오래된 순</option>
        </select>
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="all">전체</option>
          <option value="grocery">식료품</option>
          <option value="transfer">교통비</option>
          <option value="shopping">쇼핑</option>
        </select>
      </div>

      {filteredExpenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expenses} />
      ))}
    </div>
  );
};

export default ExpenseList;
