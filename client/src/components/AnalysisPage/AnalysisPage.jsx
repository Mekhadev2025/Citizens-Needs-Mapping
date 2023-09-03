 // src/components/AnalysisPage.js

import React,{useState} from 'react';
import "../AnalysisPage/Analysis.css"
import Card from "../../components/Card/Card"
const AnalysisPage = ({ selectedDistrict }) => {
  const [selectedButton,setSelectedButton]=useState("basic")

  const handleButton=(btnName)=>{
   setSelectedButton(btnName)
  }
  return (
    <div>
      <h2 className='districtName'>{selectedDistrict}</h2>
      <div className="btnGrp">
        <button  className={`basic ${selectedButton === 'basic' ? 'active-button' : ''}`}
         onClick={()=>handleButton("basic")}>Basic</button>
        <button className={`std ${selectedButton === 'standard' ? 'active-button' : ''}`}
         onClick={()=>handleButton("standard")}>Standard</button>
        <button className={`premium ${selectedButton === 'premium' ? 'active-button' : ''}`}
        onClick={()=>handleButton("premium")}>Premium</button>
      </div>
      <div className='analysisCard'>
         <h2 className='analysisTitle'>
        {selectedButton} Needs
         </h2>
         <div className="analysisCont">
            <Card/>
            <Card/>
         </div>
      </div>
    </div>
  );
};

export default AnalysisPage;