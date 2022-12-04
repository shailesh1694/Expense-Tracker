import React, { useState } from "react";
import "./NewExpenseform.css";

const NewExpenseform = (props) => {
  const [EnterTitleHandler, setEnterTitleHandler] = useState("");
  const [EnterAmountHandler, setEnterAmountHandler] = useState("");
  const [EnterDateHandler, setEnterDateHandler] = useState("");

  const TitlechangeHandler = (event) => {
    setEnterTitleHandler(event.target.value);
    // console.log(event.target.value);
  };
  const AmountchangeHandler = (event) => {
    setEnterAmountHandler(event.target.value);
    // console.log(event.target.value);
  };
  const DatechangeHandler = (event) => {
    setEnterDateHandler(event.target.value);
    // console.log(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const ExpenseData = {
      titel: EnterTitleHandler,
      amount: EnterAmountHandler,
      date: new Date(EnterDateHandler),
    };
    console.log(ExpenseData);
    props.datareceiver(ExpenseData);

    setEnterTitleHandler(""); //three variable valu set to black when add expesne in object and set value of variable set to black
    setEnterAmountHandler("");
    setEnterDateHandler("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="NewExpense__control">
        <div className="NewExpense__control">
          <label>Title</label>
          <input
            type="text"
            value={EnterTitleHandler}
            onChange={TitlechangeHandler}
          />
        </div>
        <div className="NewExpense__control">
          <label>Amount</label>
          <input
            type="number"
            value={EnterAmountHandler}
            onChange={AmountchangeHandler}
          />
        </div>
        <div className="NewExpense__control">
          <label>Date</label>
          <input
            type="date"
            value={EnterDateHandler}
            onChange={DatechangeHandler}
          />
        </div>
      </div>
      <div className="NewExpense__Action">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default NewExpenseform;
