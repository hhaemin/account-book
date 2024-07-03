import React from "react";
import "./Main.css";

const Main = () => {
  return (
    <form>
      <div className="main-box">
        <div className="name">
          <label>이름</label>
          <input type="text"></input>
        </div>
        <div className="price">
          <label>가격</label>
          <input type="number"></input>
        </div>
        <div className="type">
          <label>유형</label>
          <input type=""></input>
        </div>
        <div className="date">
          <label>구입 날짜</label>
          <input type="date"></input>
        </div>
        <div className="memo">
          <label>메모</label>
          <input type="checkbox"></input>
          <label>메모 작성</label>
          <input type="text"></input>
        </div>
        <div className="boolean">
          <label>재구매 의사</label>
          <input type="radio"></input>
          <label>한다</label>
          <input type="radio"></input>
          <label>안한다</label>
        </div>
      </div>
    </form>
  );
};

export default Main;
