import React from "react";
import { Chart } from "react-google-charts";

const barChartData = [
    ["Status", "Count"],
    ["Pending", 10],
    ["In Progress", 5],
    ["Resolved", 15],
];

const barChartOptions = {
    title: "Maintenance Requests Overview",
    chartArea: { width: "50%" },
    hAxis: {
        title: "Count",
        minValue: 0,
    },
    vAxis: {
        title: "Status",
    },
};

const BarChart = () => (
    <Chart
        chartType="BarChart"
        data={barChartData}
        options={barChartOptions}
        width="100%"
        height="400px"
    />
);

export default BarChart;