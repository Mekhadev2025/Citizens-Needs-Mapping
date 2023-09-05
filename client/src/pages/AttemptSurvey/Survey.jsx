import React from "react";
import "../AttemptSurvey/Survey.css"
import { useState } from "react";
const Survey = () => {


  const [formData, setFormData] = useState({
    name: "",
    age: "",
    district: "",
    occupation: "",
    basicNeed: "",
    stdNeed: "",
    preNeed: "",
    issue: "",
    text: "",
  });

  const handleChange=(e)=>{
    console.log("Field entered")
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });


  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://citizens-needs-mapping-whzj.vercel.app/api/surveys", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Thank you for your contribution");
        // You can perform any additional actions here after a successful submission.
      } else {
        console.error("Error submitting the form");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };


  return (
    <div className="surveyContainer">
      <h1 className="surveyHeader">Citizen Needs</h1>
      <p className="surveyContent">
        The whole purpose of this form is to satisfy the requirement of public
        data for a data science internship and the information collected will be
        solely used for the fulfilment of the Citizens needs mapping project.
        Your sincere contribution and time would greatly help in this initiative
        for a social cause and would be greatly appreciated. Thank you!Note:
        There are 3 kinds of needs required for this project from each citizens.
        You can choose a need from the drop down which you feel that could bring
        a considerably great developmental change in your locality in the near
        future
      </p>
      <form  className="surveyForm" onSubmit={handleSubmit}>
        <label htmlFor="name" className="nameLabel">Name</label>
        <input type="text"  className="surveyName"
        name="name"
        value={formData.name}
        onChange={handleChange}></input>
        <label htmlFor="age"  className="ageLabel">Age</label>
        <input type="text"  
        name="age"
        className="surveyAge"
        value={formData.age}
        onChange={handleChange} >

        </input>
        <label htmlFor="district"  className="distLabel">Select District</label>
        <select name="district"  className="surveyDist" 
        type="text"  
        value={formData.district}
        onChange={handleChange}
        id=""
        >
          <option >Select a district </option>
          <option >Kasaragod</option>
          <option>Kannur</option>
          <option >Kozhikode</option>
          <option >Wayanad</option>
          <option >Malappuram </option>
          <option > Palakkad</option>
          <option >Thrissur </option>
          <option >Ernakulam</option>
          <option >Idukki</option>
          <option >Kottayam</option>
          <option >Alappuzha</option>
          <option >Pathanamthitta</option>
          <option >Kollam</option>
          <option >Thiruvanathapuram</option>
        </select>
        <label htmlFor="occupation"  className="occuLabel">Select Occupation</label>
        <select name="occupation"
        type="text"  
        value={formData.occupation}
        onChange={handleChange}
        id=""
          className="occup">
          <option>Select an Occupation</option>
          <option>Teacher</option>
          <option>Engineer</option>
          <option>Housewife</option>
          <option>Doctor</option>
          <option>Student </option>
          <option>Unemployed </option>
        </select>
        <label htmlFor="basicNeed" className="basicLabel">Basic Need</label>
        <select  name="basicNeed" id="" 
        className="basicSurvey" 
        type="text"  
        value={formData.basicNeed}
        onChange={handleChange}
        
        >
          <option >Select one</option>
          <option >Primary School </option>
          <option >Public Toilet</option>
          <option >Strret Light</option>
          <option >Health Clinic</option>
          <option  >Municipal Water Supply</option>
          <option  >Road Reconstruction</option>
          <option  >Avoid Powercuts</option>
        </select>
        <label htmlFor="stdNeed" className="stdLabel">Standard Need</label>
        <select   id="" 
        className="stdSurvey"  
        type="text"  
        value={formData.stdNeed}
        onChange={handleChange}
        name="stdNeed"
        >
        <option  >Select One</option>
          <option  >Public Library</option>
          <option  >Taxi Service</option>
          <option  >Public Park and Playground</option>
          <option  >Traffic Control</option>
          <option  >Night Patrol</option>
          <option  >Bus Waiting Shed</option>
          <option  >Better Disaster Prevention Schemes</option>
        </select>
        <label htmlFor="preNeed" className="preLabel">Premium Need</label>
        <select   id="" className="preSurvey"  type="text"  
        value={formData.preNeed}
        onChange={handleChange}
        name="preNeed"
      >
        <option  >Select one</option>
          <option >Gym</option>
          <option  >Theatre</option>
          <option  >Tourist Resorts</option>
          <option  >Metro rail Services</option>
          <option  >Free Wifi</option>
          <option  >Turf</option>
        </select>
        <label htmlFor="issue"className="issueLabel">
          Mention a serious public issue faced in the locality ,if any
        </label>
        <select   id=""className="issueSurvey" type="text"  
        value={formData.issue}
        onChange={handleChange}
        name="issue"
       >
        <option  >Select one</option>
          <option  >Stray Dogs</option>
          <option  >Theft Attacks</option>
          <option  >Broken Sewage</option>
          <option  >Damaged Roads</option>

        </select>
        <label className="textLabel">Add Your Need</label>
        <textarea className="textSurvey"  
        id=""
         type="text"  
        value={formData.text}
        onChange={handleChange}
        name="text">

        </textarea>
        <button  className="surveyBtn"
        >SUBMIT</button>
      </form>
    </div>
  );
};

export default Survey;
