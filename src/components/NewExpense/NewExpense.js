import React from "react";
import './NewExpense.css';
import NewExpesneform from "./NewExpenseform";
import Card from '../UI/Card'


const NewExpense= (props) => {

        const Received__formdata = (receiveddata) => {
            
                    
                   
                    props.receiverfromExpesnse(receiveddata);
        };
            
            
                    
        return (
            <Card className="new-expense">
                <NewExpesneform  datareceiver={Received__formdata}/>
            </Card>
        );




};

export default NewExpense;