import React, { useState, useEffect } from "react";
import Chart from "../../components/Chart/Chart";
import "../Map/Map.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Map = ({ selectDistrict, onSelectDistrict }) => {
  const navigate = useNavigate();
  const [selectedDistrict, setSelectedDistrict] = useState("Kasaragod");
  const [cardContent, setCardContent] = useState(false);
  const [propsData, setPropsData] = useState({});
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
 
  const districtColors = {
    defaultColor: "#FF3358",
    selectedColor: "grey",
  };

  const fetchData = async (districtId) => {
    try {
      const response = await axios.get(
        `https://citizens-needs-mapping-whzj.vercel.app/api/surveys/${districtId}`
      );
      const data = response.data;
      console.log(data);
      setPropsData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSubmit = (district) => {
    navigate(`/analysis?district=${district}`);
  };

  const handleDistrictClick = (districtId) => {
    console.log(districtId);
    fetchData(districtId);
    setSelectedDistrict(districtId);
    setCardContent(true);
    onSelectDistrict(districtId);
  };

  useEffect(() => {
    handleDistrictClick("Kasaragod");
  }, []);


   const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    fetchData(event.target.value);
    setSelectedDistrict(selectedValue);
    setCardContent(true);
    onSelectDistrict(selectedValue);

  };


 



  // Function to update screen width when the window is resized
  const updateScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  // Add an event listener to track window resize
  useEffect(() => {
    window.addEventListener("resize", updateScreenWidth);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);

  return (
    <>
      <h1 className="mapTitle">District Map Visualization</h1>
      <div className="mapContainer">
        {screenWidth > 480 ? (
       
          <div className="mapImg">
     
          </div>
        ) : (
        
          <div className="selectDist" onChange={handleSelectChange} value={selectedDistrict}>
         
            < select>
              <option value=" ">Select District</option>
              <option value="Kasaragod" >Kasaragod</option>
              <option value="Kannur" >Kannur</option>
              <option  >Kozhikode</option>
              <option  >Wayanad</option>
              <option  >Malappuram</option> 
              <option  >Thrissur</option>
              <option  >Palakkad</option> 
              <option  >Ernakulam</option> 
              <option  >Alappuzha</option> 
              <option  >Kottayam</option>
              <option  >Idukki</option>
               <option  >Pathanamthitta</option>
              <option  >Kollam</option>
              <option  >Thiruvananthapuram</option>
             

            </select>
          </div>
        )}
        <div className="card">
          <>
            <h1 className="cardTitle">{selectedDistrict}</h1>
            <Chart value={propsData} />
            <div className="btn-container">
              <button
                className="cardButton"
                onClick={() => handleSubmit(selectedDistrict)}
              >
                View Detailed Analysis
              </button>
            </div>
          </>
        </div>
      </div>
    </>
  );
};

export default Map;
