import React from 'react';
import "../LinearGuage/Guage.css"

const LinearGauge = ({ value ,maxValue}) => {
  const fillPercentage=value/maxValue *100;
  console.log(value)
  console.log(maxValue)
  console.log(fillPercentage)
  return (
    <div className="horizontal-linear-gauge">
      <div className="gauge-bar">
        <div className="gauge-fill" style={{ width: `${fillPercentage}%` }}></div>
      </div>
      
    </div>
  );
};

export default LinearGauge;