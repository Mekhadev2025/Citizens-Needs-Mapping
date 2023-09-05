import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import "chartjs-plugin-datalabels"; // Import the datalabels plugin

const DoughnutChart = (props) => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Data for the doughnut chart
    const data = {
      labels: ["Basic Need", "Standard Need", "Premium Need"],
      datasets: [
        {
          data: [props.value.totalBasicNeeds, props.value.totalStandardNeeds, props.value.totalPremiumNeeds],
          backgroundColor: ["#FF0000", "#FF8126", "#1C61C8"],
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
  }, [props.value.totalBasicNeeds, props.value.totalStandardNeeds, props.value.totalPremiumNeeds]);

  return (
    <div className="doughnut-chart-container" style={{ margin: "20px" }}>
      <canvas ref={chartRef} />
    </div>
  );
};

export default DoughnutChart;
