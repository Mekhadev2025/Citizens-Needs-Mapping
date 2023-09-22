import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import "../Bar/BarGraph.css";

const BarGraph = ({ data }) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    // Assuming your data prop contains an array of data
    // You need to transform the data into the format expected by Chart.js
    if (data && Array.isArray(data)) {
      const labels = data.map((item) => item.district);
      const dataValues = data.map((item) => item.totalUnmetNeed);

      const newData = {
        labels: labels,
        datasets: [
          {
            label: "Unmet Needs",
            backgroundColor: "#BF0C0F",
            borderColor: "none",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(191, 12, 15, 0.4)",
            hoverBorderColor: "none",
            data: dataValues,
          },
        ],
      };

      setChartData(newData);
    }
  }, [data]);

  const options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="bars">
      {chartData ? <Bar data={chartData} options={options} /> : "Loading..."}
    </div>
  );
};

export default BarGraph;
