import React from "react";
import "../AttemptSurvey/Survey.css"
import { useState } from "react";
import Popper from "../../components/Popper/Popper"
 
const Survey = () => {
  const [submit,setSubmit]=useState(false)
  const [nameError, setNameError] = useState("");
  const [ageError, setAgeError] = useState("");
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
    if (name === "name") {
      setNameError("");
    }
    if (name === "age") {
      setAgeError("");
    }

  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nameRegex = /^[a-zA-Z0-9\s]+$/; 
    const ageRegex = /^[0-9]+$/;

    if (!nameRegex.test(formData.name)) {
      setNameError("Name should consist of only letters and digits.");
      console.error("Name should consist of only letters and digits.");
      return; 
    }

    if (!ageRegex.test(formData.age) || parseInt(formData.age) <= 3) {
      setAgeError("Invalid age. Please enter an age greater than 3 ");
      console.error("Age should consist of only numbers and be greater than 3 years.");
      return; 
    }
  console.log(formData)
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
        setFormData("")
         setSubmit(true)
      
      } else {
        console.error("Error submitting the form");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };


  return (
    <div className="surveyContainer">
      {
        submit ===true?(
          <Popper trigger={submit} setTrigger={setSubmit}>
                <h1 className="voteMsg">Thanks for voting</h1>
        </Popper>):(
          <><h1 className="surveyHeader">Citizen Needs</h1>
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
        required
        onChange={handleChange}></input>
          {nameError && <p className="error">{nameError}</p>}
        <label htmlFor="age"  className="ageLabel">Age</label>
        <input type="text"  
        name="age"
        required
        className="surveyAge"
        value={formData.age}
        onChange={handleChange} >

        </input>

      {ageError && <p className="error">{ageError}</p>}
        <label htmlFor="district"  className="distLabel">Select District</label>
        <select name="district"  className="surveyDist" 
        type="text"  
        required
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
          <option >Palakkad</option>
          <option >Thrissur </option>
          <option >Ernakulam</option>
          <option >Idukki</option>
          <option >Kottayam</option>
          <option >Alappuzha</option>
          <option >Pathanamthitta</option>
          <option >Kollam</option>
          <option >Thiruvananthapuram</option>
        </select>
        <label htmlFor="occupation"  className="occuLabel">Select Occupation</label>
        <select name="occupation"
        type="text" 
        required 
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
          <option >Street Light</option>
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
          <option  >Public Parks and Playgrounds</option>
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
          <option  >Metro Rail Services</option>
          <option  >Free WiFi</option>
          <option  >Turf</option>
        </select>
         
        <label className="textLabel">If your need is not mentioned in the list above ,add your need here</label>
        <textarea className="textSurvey"  
        id=""
         type="text"  
        value={formData.text}
        onChange={handleChange}
        name="text">

        </textarea>
        <div className="textMsg">
 Your need will be subject to a comprehensive review upon submission, and if it is deemed appropriate, it will be subsequently updated on the website.</div>
        <button  className="surveyBtn"
        >SUBMIT</button>
      </form>
          </>
        )
      }
      
    </div>
  );
};

export default Survey;
