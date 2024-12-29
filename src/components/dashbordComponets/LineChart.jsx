import React from "react";
import { Chart } from "react-google-charts";

const LineChart = ({ data }) => {
    // Prepare the data to match the expected format for LineChart
    const chartData =data

    const lineChartOptions = {
        title: "Revenue Trends",
        curveType: "function",
        legend: { position: "bottom" },
    };

    return (
        <Chart
            chartType="LineChart"
            data={chartData}
            options={lineChartOptions}
            width="100%"
            height="400px"
        />
    );
};

export default LineChart;
