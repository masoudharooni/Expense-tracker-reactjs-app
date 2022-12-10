import React from 'react';
import './Chart.css';
import ChartBar from './ChartBar';

const Chart = props => {
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
  const maxDataPointValue = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map(dataPoint => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          label={dataPoint.label}
          maxValue={maxDataPointValue}
        />
      ))}
    </div>
  );
};
export default Chart;
