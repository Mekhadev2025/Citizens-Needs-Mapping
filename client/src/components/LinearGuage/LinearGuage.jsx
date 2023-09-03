import React from 'react';
import "../LinearGuage/Guage.css"

const LinearGauge = ({ value }) => {
  return (
    <div className="horizontal-linear-gauge">
      <div className="gauge-bar">
        <div className="gauge-fill" style={{ width: `${value}%` }}></div>
      </div>
      
    </div>
  );
};

export default LinearGauge;