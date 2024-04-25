import ExpenseItem from "./ExpenseItem.js";
import ExpensesFilter from "./ExpensesFilter.js";
import ExpensesChart from "./ExpensesChart.js";
import Card from "../UI/Card.js";
import { useState } from "react";
function Expenses(props){
  const [filteredYear, setFilteredYear] = useState("2023");

  function changeFilterHandler(selectedYear){
    setFilteredYear(selectedYear);
  }
  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
    return (
        <Card className="expenses">
          <ExpensesFilter selected={filteredYear} onChangeHandler={changeFilterHandler}/>
          <ExpensesChart chartData={filteredExpenses} />
          {filteredExpenses.length === 0 ? <p>No Data FOund</p> :
          filteredExpenses.map((expense, index) => {
            return ( 
              <ExpenseItem
                key={expense.id}
                date={expense.date}
                title={expense.title}
                price={expense.price}
              ></ExpenseItem>
            );
          })
        }
        </Card> 
    ) 
}

export default Expenses;