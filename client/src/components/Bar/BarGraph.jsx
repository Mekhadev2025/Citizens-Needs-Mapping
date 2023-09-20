import React from "react";
import { Bar } from "react-chartjs-2";
import "../Bar/BarGraph.css"
const BarGraph = () => {
  const data = {
    labels: [
      "Malappuram",
      "Trivanndrum",
      "Trivanndrum",
      "Trivanndrum",
      "Trivanndrum",
      "Trivanndrum",
      "Trivanndrum",
      "Trivanndrum",
      "Trivanndrum",
      "Trivanndrum",
      "Trivanndrum",
      "Trivanndrum",
      "Trivanndrum",
      "Trivanndrum",
      "Trivanndrum",
      "Trivanndrum",
      "Trivanndrum",
      "Trivanndrum",
      "Trivanndrum",
      "Trivanndrum",

    ],
    datasets: [
      {
        label: "Unmet Needs",
        backgroundColor: "#BF0C0F",
        borderColor:"none",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(191, 12, 15, 0.4)",
       hoverBorderColor:"none",
        data: [65, 59, 80, 81, 56],
      },
    ],
  };

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

  return  <div className="bars">  <Bar data={data} options={options} /></div>

};

export default BarGraph;
