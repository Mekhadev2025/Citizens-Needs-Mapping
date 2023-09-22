import React, { useState, useEffect } from "react";
import "../Report/Report.css";
import BarGraph from "../Bar/BarGraph";
import ReportCard from "../ReportCard/ReportCard";
import axios from "axios";

const Report = () => {
  const [apiData, setApiData] = useState(null);
  const [first, setFirst] = useState(null);

  useEffect(() => {
    axios
      .get("https://citizens-needs-mapping-whzj.vercel.app/api/total")
      .then((response) => {
        setApiData(response.data);
        if (response.data.length > 0) {
          setFirst(response.data[0]);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <div className="reportTitleCont">
        <div className="sideRect"></div>
        <h1 className="reportTitle">
          Beyond the Surface: Uncovering Districts' Hidden Needs
        </h1>
      </div>
      <BarGraph data={apiData} />
      <div className="reportContentCont">
        <p className="reportContent">
          Our study pinpoints{" "}
          <span className="distSpan">{first?.district}</span> as the district grappling
          with the highest unmet needs, demanding immediate attention.
        </p>
        <ReportCard data={apiData} />
      </div>
    </div>
  );
};

export default Report;
