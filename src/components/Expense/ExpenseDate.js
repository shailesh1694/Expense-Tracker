import React from "react";
import "./ExpenseDate.css";
import Card from "../UI/Card";

const ExpenseDate = (props) => {
 

    const day = props.date.toLocaleString("en-us", { day: "2-digit" });
  const month = props.date.toLocaleString("en-us", { month: "long" });
  const year = props.date.getFullYear();
  return (
    <Card className="ExpenseDate">
      <div className="ExpenseDate_month">{month}</div>
      <div className="ExpenseDate_year">{year}</div>
      <div className="ExpenseDate_day">{day}</div>
    </Card>
  );
}

export default ExpenseDate;
