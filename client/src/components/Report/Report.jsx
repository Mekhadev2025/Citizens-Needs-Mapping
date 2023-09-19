import React from "react";
import "../Report/Report.css";
import BarGraph from "../Bar/BarGraph";
import ReportCard from "../ReportCard/ReportCard"
const Report = () => {
  return (
    <div>
      <div className="reportTitleCont">
        <div className="sideRect"></div>
        <h1 className="reportTitle">
          Beyond the Surface: Uncovering Districts' Hidden Needs
        </h1>
      </div>
      <BarGraph />
      <div className="reportContentCont">
        <p className="reportContent">
          Our study pinpoints <span className="distSpan">Malappuram</span> as the district grappling with the
          highest unmet needs, demanding immediate attention.
        </p>
        <ReportCard/>
      </div>
    </div>
  );
};

export default Report;
