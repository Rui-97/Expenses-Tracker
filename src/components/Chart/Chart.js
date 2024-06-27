import ChartBar from "./ChartBar";

import "./Chart.css";

function Chart(props) {
  //------GET MAXIMUM VALUE IN ALL MOUNTHES------
  // map through the chartDataPoints array and get the value(property name)'s value and a new array for the value.
  const dataPointsValue = props.dataPoints.map((dataPoint) => {
    return dataPoint.value;
  });
  //...dataPointsValue: pull out each element in the array
  const totalMax = Math.max(...dataPointsValue);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            label={dataPoint.label}
            maxValue={totalMax}
          />
        );
      })}
    </div>
  );
}

export default Chart;
