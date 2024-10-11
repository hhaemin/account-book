import React from "react";

const ExpenseItem = ({ expense }) => {
  const { name, price, type } = expense;

  return (
    <div className="expense-item">
      <h3 className="expense-item__name">{name}</h3>
      <div className="expense-item__details">
        <p>가격: {price} 원</p>
        <p>유형: {type}</p>
      </div>
    </div>
  );
};

export default ExpenseItem;
