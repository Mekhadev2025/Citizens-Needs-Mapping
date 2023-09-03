import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import "chartjs-plugin-datalabels"; // Import the datalabels plugin

const DoughnutChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Data for the doughnut chart
    const data = {
      labels: ["Basic Need", "Standard Need", "Premium Need"],
      datasets: [
        {
          data: [30, 40, 50],
          backgroundColor: ["#62F54A", "#FF6433", "#3333FF"],
        },
      ],
    };

    // Doughnut chart configuration options
    const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
            position: 'right'
        },
        datalabels: { // Configure the datalabels plugin
          color: "white", // Label text color
          font: {
            weight: "bold", // Label font weight
          },
          formatter: (value, context) => { // Custom label formatter
            return context.chart.data.labels[context.dataIndex]; // Display label text
          },
        },
      },
    };

    // Create the doughnut chart
    const myDoughnutChart = new Chart(chartRef.current, {
      type: "doughnut",
      data: data,
      options: options,
    });

    return () => {
      // Cleanup chart on unmount
      myDoughnutChart.destroy();
    };
  }, []);

  return (
    <div className="doughnut-chart-container" style={{ margin: "20px" }}> {/* Add margin */}
      <canvas ref={chartRef} />
    </div>
  );
};

export default DoughnutChart;
