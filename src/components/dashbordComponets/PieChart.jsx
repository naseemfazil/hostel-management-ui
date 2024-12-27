import React from "react";
import { Chart } from "react-google-charts";

const pieChartData = [
    ["Status", "Number of Rooms"],
    ["Occupied", 60],
    ["Available", 40],
];

const pieChartOptions = {
    title: "Room Occupancy Overview",
    is3D: true,
};

const PieChart = () => (
    <Chart
        chartType="PieChart"
        data={pieChartData}
        options={pieChartOptions}
        width="100%"
        height="400px"
    />
);

export default PieChart;