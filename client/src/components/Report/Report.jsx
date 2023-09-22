import React, { useState, useEffect } from "react";
import "../Report/Report.css";
import BarGraph from "../Bar/BarGraph";
import ReportCard from "../ReportCard/ReportCard";
import axios from "axios";

const Report = () => {
  const [apiData, setApiData] = useState(null);
  const [first, setFirst] = useState(null);
  const [disName, setDisName] = useState("");
  const [filteredData, setFilteredData] = useState({
    totalBasicNeeds: 0,
    totalStandardNeeds: 0,
    totalPremiumNeeds: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://citizens-needs-mapping-whzj.vercel.app/api/total"
        );
        console.log("response data", response.data);
        setApiData(response.data);

        if (response.data.length > 0) {
          const firstItem = response.data[0];
          setFirst(firstItem);
          setDisName(firstItem?.district);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchFilteredData = async () => {
      try {
        if (disName) {
          const response = await axios.get(
            `https://citizens-needs-mapping-whzj.vercel.app/api/surveys/${disName}`
          );
    
          console.log("filtered response", response.data);
    
          // Create a new object with only the needed properties
          const filteredData = {
            totalBasicNeeds: response.data.totalBasicNeeds,
            totalStandardNeeds: response.data.totalStandardNeeds,
            totalPremiumNeeds: response.data.totalPremiumNeeds,
          };
    
          setFilteredData(filteredData);
          console.log("Filtered Data", filteredData);
        }
      } catch (error) {
        console.error("Error fetching filtered data:", error);
      }
    };
    
    fetchFilteredData();
  }, [disName]);
 
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
        <ReportCard type="basic" data={apiData} report={filteredData.totalBasicNeeds}/>
        <ReportCard type="standard" data={apiData} report={filteredData.totalStandardNeeds}/>
        <ReportCard type="premium" data={apiData} report={filteredData.totalPremiumNeeds}/>
      </div>
    </div>
  );
};

export default Report;
