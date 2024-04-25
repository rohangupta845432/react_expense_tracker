import react, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) =>{
    const [isformOpen, setIsFormOpen] = useState(0);

    const formOpenCloseHandler = () => {
        if(isformOpen === 0){
            setIsFormOpen(1);
        } else {
            setIsFormOpen(0);
        }
            
    }
    
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
        props.onAddExpense(expenseData);
    };


    return (
        <div className="new-expense">
            {isformOpen === 1 && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelClicked={formOpenCloseHandler}></ExpenseForm>}
            {isformOpen === 0 && <button onClick={formOpenCloseHandler}>Add Expense</button>}
        </div>           
    )

}
export default NewExpense;