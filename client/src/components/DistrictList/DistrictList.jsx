import React from 'react';
import { useNavigate } from 'react-router-dom';


const DistrictList = ({ districts, onSelectDistrict }) => {const navigate = useNavigate();

  const handleDistrictClick = (district) => { 
    onSelectDistrict(district)
    navigate(`/analysis?district=${district}`);
   
  };
  return (
    <div>
      <h2>Select a District:</h2>
      <ul>
        {districts.map((district, index) => (
          <li key={index} onClick={() => handleDistrictClick(district)}>
            {district}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DistrictList;