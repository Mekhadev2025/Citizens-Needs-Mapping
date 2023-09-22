import React, { useState, useEffect } from "react";
import "../Report/Report.css";
import BarGraph from "../Bar/BarGraph";
import ReportCard from "../ReportCard/ReportCard";
import axios from "axios";

const Report = () => {
  const [apiData, setApiData] = useState(null);
  console.log("api data",apiData)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://citizens-needs-mapping-whzj.vercel.app/api/report"
        );
        console.log("response data", response.data);
        const finalRes=response.data[response.data.length-1]
        console.log(finalRes)
        setApiData(finalRes);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="reportTitleCont">
        <div className="sideRect"></div>
        <h1 className="reportTitle">
          Beyond the Surface: Uncovering Districts' Hidden Needs
        </h1>
      </div>
      {apiData && (
        <>
          <BarGraph value={apiData} />
          <div className="reportContentCont">
            <p className="reportContent">
              Our study pinpoints{" "}
              <span className="distSpan">{apiData.district}</span> as the district grappling
              with the highest unmet needs, demanding immediate attention.
            </p>
            <ReportCard type="basic" data={apiData} report={apiData.basicNeeds}/>
            <ReportCard type="standard" data={apiData} report={apiData.stdNeeds}/>
            <ReportCard type="premium" data={apiData} report={apiData.preNeeds}/>
          </div>
        </>
      )}
    </div>
  );
};

export default Report;
