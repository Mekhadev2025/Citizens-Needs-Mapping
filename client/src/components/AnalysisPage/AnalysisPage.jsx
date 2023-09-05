import axios from "axios";
import React, { useState, useEffect } from 'react';
import "../AnalysisPage/Analysis.css";
import Card from "../../components/Card/Card";

const AnalysisPage = ({ selectedDistrict }) => {
  console.log("selected", selectedDistrict);
  const [propsData, setPropsData] = useState({});
  const [selectedButton, setSelectedButton] = useState("basic");
  const [basicNeeds, setBasicNeeds] = useState([]); // Initialize basicNeeds state
  const [stdNeeds, setStdNeeds] = useState([]); // Initialize stdNeeds state
  const [preNeeds, setPreNeeds] = useState([]); 
  const fetchData = async (districtId) => {
    try {
      const response = await axios.get(`https://citizens-needs-mapping-whzj.vercel.app/api/surveys/${districtId}`);
      const data = response.data;
      setPropsData(data);
      console.log("data=", data);
      // Update basicNeeds and stdNeeds states with data
      setBasicNeeds(data.basicNeeds);
      setStdNeeds(data.standardNeeds);
      setPreNeeds(data.premiumNeeds);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData(selectedDistrict);
  }, [selectedDistrict]);

  // Basic needs categories and counts
  const categories = [
    "Primary School",
    "Public Toilet",
    "Street Light",
    "Health Clinic",
    "Municipal Water Supply",
    "Road Reconstruction",
    "Avoid Powercuts"
  ];

  const categoryCounts = {};

  categories.forEach(category => {
    categoryCounts[category] = 0;
  });

  basicNeeds.forEach(need => {
    if (categoryCounts.hasOwnProperty(need)) {
      categoryCounts[need]++;
    }
  });

  // Standard needs categories and counts
  const categories2 = [
    "Public Library",
    "Taxi Service",
    "Public Parks and Playgrounds",
    "Traffic Control",
    "Night Patrol",
    "Bus Waiting Shed",
    "Better Disaster Prevention Schemes"
  ];

  const categoryCounts2 = {};

  categories2.forEach(category => {
    categoryCounts2[category] = 0;
  });

  stdNeeds.forEach(need => {
    if (categoryCounts2.hasOwnProperty(need)) {
      categoryCounts2[need]++;
    }
  });
  //Premium
  const categories3 = [
"Gym",
"Theatre",
"Tourist Resorts",
"Metro Rail Services",
"Free Wifi",
"Turf"
  ];

  const categoryCounts3 = {};

  categories3.forEach(category => {
    categoryCounts3[category] = 0;
  });

  preNeeds.forEach(need => {
    if (categoryCounts3.hasOwnProperty(need)) {
      categoryCounts3[need]++;
    }
  });

  const totalBasicCount = Object.values(categoryCounts).reduce((acc, curr) => acc + curr, 0);
  const totalStandardCount = Object.values(categoryCounts2).reduce((acc, curr) => acc + curr, 0);
  const totalPremiumCount = Object.values(categoryCounts3).reduce((acc, curr) => acc + curr, 0);






  console.log("categoryCounts", categoryCounts);
  console.log("categoryCounts2", categoryCounts2);
  console.log("categoryCounts2", categoryCounts3);
  const handleButton = (btnName) => {
    setSelectedButton(btnName);
  };

  return (
    <div>
      <h2 className='districtName'>{selectedDistrict}</h2>
      <div className="btnGrp">
        <button className={`basic ${selectedButton === 'basic' ? 'active-button' : ''}`} onClick={() => handleButton("basic")}>Basic</button>
        <button className={`std ${selectedButton === 'standard' ? 'active-button' : ''}`} onClick={() => handleButton("standard")}>Standard</button>
        <button className={`premium ${selectedButton === 'premium' ? 'active-button' : ''}`} onClick={() => handleButton("premium")}>Premium</button>
      </div>
      <div className='analysisCard'>
        <h2 className='analysisTitle'>
          {selectedButton} Needs
        </h2>
        <div className="analysisCont">
          {
            selectedButton === "basic" ? (
              Object.entries(categoryCounts).map((item, index) => (
                <Card key={index} need={item[0]} vote={item[1]} value={item[1]} maxValue={totalBasicCount} />
              ))
            ) : selectedButton === "standard" ? (
              Object.entries(categoryCounts2).map((item, index) => (
                <Card key={index} need={item[0]} vote={item[1]} value={item[1]}  maxValue={totalStandardCount}/>
              ))
            ) : (Object.entries(categoryCounts3).map((item, index) => (
              <Card key={index} need={item[0]} vote={item[1]} value={item[1]}  maxValue={totalPremiumCount}/>
            ))
               
            )
          }
          
        </div>
      </div>
    </div>
  );
};

export default AnalysisPage;
