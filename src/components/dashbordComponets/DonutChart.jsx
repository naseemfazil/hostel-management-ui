import React from "react";
import { Chart } from "react-google-charts";

const DonutChart = ({ data }) => {
    // Prepare the data to match the expected format for DonutChart
    const chartData = data;

    const donutChartOptions = {
        title: "Payment Breakdown",
        pieHole: 0.4,
    };

    return (
        <Chart
            chartType="PieChart"
            data={chartData}
            options={donutChartOptions}
            width="100%"
            height="400px"
        />
    );
};

export default DonutChart;
