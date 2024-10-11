import React, { useState } from "react";
import "./Main.css";

const Main = ({ addExpense }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [purchaseDate, setPurchaseDate] = useState("");
  const [memo, setMemo] = useState("");
  const [showMemo, setShowMemo] = useState(false);
  const [repurchase, setRepurchase] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = {
      name,
      price: +price,
      type,
      purchaseDate,
      memo,
      repurchase,
    };
    addExpense(newExpense);
  };

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <div className="name">
        <span>이름</span>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="price">
        <span>가격</span>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>

      <div className="type">
        <span>유형</span>
        <select value={type} onChange={(e) => setType(e.target.value)} required>
          <option value="all">전체</option>
          <option value="grocery">식료품</option>
          <option value="transfer">교통비</option>
          <option value="shopping">쇼핑</option>
        </select>
      </div>

      <div className="purchaseDate">
        <span>구입 날짜</span>
        <input
          type="date"
          value={purchaseDate}
          onChange={(e) => setPurchaseDate(e.target.value)}
          required
        />
      </div>

      <div className="memo">
        <span>메모</span>
        <label>
          <input
            type="checkbox"
            checked={showMemo}
            onChange={() => setShowMemo(!showMemo)}
          />
          메모 추가
        </label>
        {showMemo && (
          <input
            value={memo}
            onChange={(e) => setMemo(e.target.value)}
            placeholder="메모"
          ></input>
        )}
      </div>

      <div className="Repurchase">
        <span>재구매 의사</span>
        <label>
          <input
            type="radio"
            value={true}
            checked={repurchase === true}
            onChange={() => setRepurchase(true)}
          />{" "}
          한다
        </label>
        <label>
          <input
            type="radio"
            value={false}
            checked={repurchase === false}
            onChange={() => setRepurchase(false)}
          />{" "}
          안한다
        </label>
      </div>

      <button className="submit-btn" type="submit">
        소비 항목 추가
      </button>
    </form>
  );
};

export default Main;
