import Chart from "../Chart/Chart";


const ExpensesChart = (props) =>{
    return(
        <div>
            <Chart chartExpenses = {props.chartData}></Chart>
        </div>
    )
}

export default ExpensesChart;