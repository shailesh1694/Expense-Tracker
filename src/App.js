import React, { useState,useEffect} from "react";
import Expenses from "./components/Expense/Expenses";
import NewExpesne from "./components/NewExpense/NewExpense";

// let dummyexpense = [
//   {
//     id: 1,
//     titel: "School Fee",
//     amount: 2000,
//     date: new Date(2022, 10, 16),
//   },
//   {
//     id: 2,
//     titel: "Hostel Fee",
//     amount: 3000,
//     date: new Date(2022, 11, 16),
//   },
//   {
//     id: 3,
//     titel: "Stationary Fee",
//     amount: 5000,
//     date: new Date(2022, 0, 16),
//   },
//   {
//     id: 4,
//     titel: "Transport Fee",
//     amount: 2200,
//     date: new Date(2022, 7, 16),
//   },
// ];

const App = () => {
  const [updatexpense, setupdateexpense] = useState([]);

  const fetchdata = () => {
    fetch("http://localhost:3000/user")
      .then((response) => {
        console.log(response);
        return response.json();
      })

      .then((data) => {
        console.log(data);
        setupdateexpense(data);
      });
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const Recieved_Expensedata = (receiveddatafromnewExpense) => {
    fetch("http://localhost:3000/user", {
      method: "POST",
      body: JSON.stringify(receiveddatafromnewExpense),
      headers: {
        "Accept": "application/json",
       
        "content-Type": "application/json"
      },
    }).then((response) => {
      response.json().then((current)=>{console.log(current)})
      fetchdata();
      
    });
    // const update = [receiveddatafromnewExpense,...updatexpense];
    // setupdateexpense(receiveddatafromnewExpense);
    // console.log(updatexpense);
  };

  return (
    <div>
      <h1> Let's Go Start ReactJs !</h1>
      <NewExpesne receiverfromExpesnse={Recieved_Expensedata} />
      <Expenses item={updatexpense} />
    </div>
  );
};
export default App;
