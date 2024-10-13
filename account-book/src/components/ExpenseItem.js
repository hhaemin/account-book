import React from "react";
import "./ExpenseItem.css";

const ExpenseItem = ({ expense }) => {
  const { name, price, type, purchaseDate, memo, repurchase } = expense;
  console.log(expense);

  return (
    <div className="expense-item">
      <h3 className="expense-item__name">{name}</h3>
      <div className="expense-item__details">
        <p>가격: {price} 원</p>
        <p>유형: {type}</p>
        <p>구입 날짜: {new Date(purchaseDate).toLocaleDateString()}</p>
        {memo && (
          <p className="expense-item__memo">
            <strong>메모:</strong> {memo}
          </p>
        )}
        <p>재구매 의사: {repurchase ? "한다" : "안한다"}</p>
      </div>
    </div>
  );
};

export default ExpenseItem;
