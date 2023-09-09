import React from 'react';
import "../LinearGuage/Guage.css"

const LinearGauge = ({ value ,maxValue,color}) => {
  const fillPercentage = maxValue !== 0 ? (value / maxValue) * 100 : 0;
  console.log(value)
  console.log(maxValue)
  console.log(fillPercentage)
  return (
    <div className="horizontal-linear-gauge">
      <div className="gauge-bar">
        <div className="gauge-fill" style={{ width: `${fillPercentage}%` ,backgroundColor: `${color}`}}></div>
      </div>
      
    </div>
  );
};

export default LinearGauge;