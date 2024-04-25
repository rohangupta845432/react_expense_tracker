import ChartBar from "./ChartBar.js";
import "./Chart.css";
const Chart = (props) =>{

    const expensesOnlyArray = props.chartExpenses.map((monthExpenseData) => {
        return monthExpenseData.price;
    })
    const maxValue = Math.max(...expensesOnlyArray)


    const chartData = [
        {expenseMonth:'Jan', expenseValue:0},
        {expenseMonth:'Feb', expenseValue:0},
        {expenseMonth:'Mar', expenseValue:0},
        {expenseMonth:'Apr', expenseValue:0},
        {expenseMonth:'May', expenseValue:0},
        {expenseMonth:'Jun', expenseValue:0},
        {expenseMonth:'Jul', expenseValue:0},
        {expenseMonth:'Aug', expenseValue:0},
        {expenseMonth:'Sep', expenseValue:0},
        {expenseMonth:'Oct', expenseValue:0},
        {expenseMonth:'Nov', expenseValue:0},
        {expenseMonth:'Dec', expenseValue:0}
    ]

    // for(let i=0;i<props.charExpenses.length; i++){
    //     chartData[props.chartExpenses[i].date.getMonth()].expenseValue += props.chartExpenses[i].price;  
    // }


    for(let expense of props.chartExpenses){
        console.log(expense.date.getMonth());
        chartData[expense.date.getMonth()].expenseValue += expense.price;
    }

    // console.log(chartData);
    return <div className="chart">
        {
            chartData.map((monthdata)=>{
                return <ChartBar 
                key={monthdata.expenseMonth}
                value={monthdata.expenseValue}
                lable={monthdata.expenseMonth}
                maxValue={maxValue}/>
            })
        }
    </div>
}

export default Chart;