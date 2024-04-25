// Write your code at relevant places in the code below
import Card from "../UI/Card.js";
import ExpenseDate from "./ExpenseDate.js";
import "./ExpenseItem.css";

function ExpenseItem(props) {
    return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.price}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
