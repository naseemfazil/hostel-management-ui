import React from "react";
import { Chart } from "react-google-charts";

const PieChart = ({ data }) => {
    // Prepare the data to match the expected format for PieChart
    const chartData = data;

    const pieChartOptions = {
        title: "Room Occupancy Overview",
        is3D: true,
    };

    return (
        <Chart
            chartType="PieChart"
            data={chartData}
            options={pieChartOptions}
            width="100%"
            height="400px"
        />
    );
};

export default PieChart;
