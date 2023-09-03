 // src/components/AnalysisPage.js
import React from 'react';
import "../AnalysisPage/Analysis.css"
const AnalysisPage = ({ selectedDistrict }) => {
  return (
    <div>
      <h2 className='districtName'>{selectedDistrict}</h2>
      <div className="btnGrp">
        <button className="basic">Basic</button>
        <button className="std">Standard</button>
        <button className="premium">Premium</button>
      </div>
    </div>
  );
};

export default AnalysisPage;