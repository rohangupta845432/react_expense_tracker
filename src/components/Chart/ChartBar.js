import React from "react"
import "./ChartBar.css";
const ChartBar = (props)=>{
   let fillHeight = '0%';
   if(props.value > 0){
    fillHeight = Math.round((props.value /props.maxValue) * 100) + "%";
   }

    return <div className="chart-bar">
        <div className="chart-bar__inner">
            <div className="chart-bar__fill" style={{height : fillHeight}}></div>
        </div>
        <div className="chart-label">
        {props.lable}
        </div>
    </div>
}

export default ChartBar;