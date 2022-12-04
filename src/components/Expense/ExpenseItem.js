import React, { useState}from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  return (
    <Card className="ExpenseItem-Container">
      <ExpenseDate date={new Date(props.date)} />
      <div className="ExpenseItem-Description">
        <h2>{props.title}</h2>
        <div className="ExpenseItem-Price">${props.price}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
