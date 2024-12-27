import React from "react";
import { Chart } from "react-google-charts";

const lineChartData = [
    ["Month", "Revenue"],
    ["January", 3000],
    ["February", 4000],
    ["March", 3500],
    ["April", 5000],
];

const lineChartOptions = {
    title: "Revenue Trends",
    curveType: "function",
    legend: { position: "bottom" },
};

const LineChart = () => (
    <Chart
        chartType="LineChart"
        data={lineChartData}
        options={lineChartOptions}
        width="100%"
        height="400px"
    />
);

export default LineChart;