import React from "react";
import { Chart } from "react-google-charts";

const BarChart = ({ data }) => {
    // Prepare the data to match the expected format for BarChart
    const chartData = data;

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

    return (
        <Chart
            chartType="BarChart"
            data={chartData}
            options={barChartOptions}
            width="100%"
            height="400px"
        />
    );
};

export default BarChart;
