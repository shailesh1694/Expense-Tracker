import React from "react";
import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';


const Expenses =(props) =>{
    return(
        <Card className='Expenses'>


          {
              props.item.map( (value,index) => (
                          < ExpenseItem
                              key= {index}
                              date={value.date}
                              title={value.titel}
                              price={value.amount} />)
                            )
          }
        
      
      </Card> 

    );


}




export default Expenses;