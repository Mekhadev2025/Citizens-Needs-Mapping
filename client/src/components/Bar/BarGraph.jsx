import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import "../Bar/BarGraph.css";

const BarGraph = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    axios
      .get("https://citizens-needs-mapping-whzj.vercel.app/api/total")
      .then((res) => {
        console.log("Data received:", res.data);

        // Assuming your API response contains an array of data
        // You need to transform the data from the API response into the format expected by Chart.js
        const labels = res.data.map((item) => item.district);
        const dataValues = res.data.map((item) => item.totalUnmetNeed);

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
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
