// Write your code at relevant places in the code below

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";
function App() {
  const expenses = [
    { id: "1", date: new Date(2023, 7, 15), title: "Insurance", price: 100 },
    { id: "2", date: new Date(2025, 3, 25), title: "Book", price: 10 },
    { id: "3", date: new Date(2023, 10, 11), title: "Pen", price: 1 },
    { id: "4", date: new Date(2024, 1, 14), title: "Laptop", price: 200 },
    {id: "e1", date: new Date("2023-01-01"), title: "Expense 1",price: 10}
  ];

  const [expensesData, setExpensesData] = useState(expenses);
  const addExpenseHandler = (expense) => {
   setExpensesData((prevExpenses)=>{
    return [...prevExpenses, expense]
   })
  //  console.log([...expenses, expense])
  }
  return (
    <div>
      <h1>Let's get Started</h1>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses expenses={expensesData}></Expenses>
    </div>
  );
}

export default App;