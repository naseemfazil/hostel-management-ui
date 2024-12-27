import React from "react";
import { Chart } from "react-google-charts";

const donutChartData = [
    ["Category", "Amount"],
    ["Rent", 5000],
    ["Utilities", 1500],
    ["Additional Charges", 700],
];

const donutChartOptions = {
    title: "Payment Breakdown",
    pieHole: 0.4,
};

const DonutChart = () => (
    <Chart
        chartType="PieChart"
        data={donutChartData}
        options={donutChartOptions}
        width="100%"
        height="400px"
    />
);

export default DonutChart;