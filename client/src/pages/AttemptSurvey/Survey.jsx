import React from "react";
import "../AttemptSurvey/Survey.css"

const Survey = () => {

  const handleClick=()=>{
    console.log("Thank you for your contribution")



  }
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
      <form  className="surveyForm">
        <label htmlFor="name" className="nameLabel">Name</label>
        <input type="text"  className="surveyName"></input>
        <label htmlFor="age"  className="ageLabel">Age</label>
        <input type="text"  className="surveyAge" ></input>
        <label htmlFor="district"  className="distLabel">Select District</label>
        <select name="district"  className="surveyDist" id="">
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
        <select name="occupation"  className="occup"id="">
          <option>Select an Occupation</option>
          <option>Teacher</option>
          <option>Engineer</option>
          <option>Housewife</option>
          <option>Doctor</option>
          <option>Student </option>
          <option>Unemployed </option>
        </select>
        <label htmlFor="basicNeed" className="basicLabel">Basic Need</label>
        <select  id="" className="basicSurvey">
          <option >Select one</option>
          <option value="">Primary School </option>
          <option value="">Public Toilet</option>
          <option value="">Strret Light</option>
          <option value="">Health Clinic</option>
          <option value="">Municipal Water Supply</option>
          <option value="">Road Reconstruction</option>
          <option value="">Avoid Powercuts</option>
        </select>
        <label htmlFor="stdNeed" className="stdLabel">Standard Need</label>
        <select   id=""className="stdSurvey">
        <option value="">Select One</option>
          <option value="publicLibrary">Public Library</option>
          <option value="">Taxi Service</option>
          <option value="">Public Park and Playground</option>
          <option value="">Traffic Control</option>
          <option value="">Night Patrol</option>
          <option value="">Bus Waiting Shed</option>
          <option value="">Better Disaster Prevention Schemes</option>
        </select>
        <label htmlFor="preNeed" className="preLabel">Premium Need</label>
        <select   id="" className="preSurvey">
        <option value="">Select one</option>
          <option >Gym</option>
          <option value="">Theatre</option>
          <option value="">Tourist Resorts</option>
          <option value="">Metro rail Services</option>
          <option value="">Free Wifi</option>
          <option value="">Turf</option>
        </select>
        <label htmlFor="issue"className="issueLabel">
          Mention a serious public issue faced in the locality ,if any
        </label>
        <select   id=""className="issueSurvey">
        <option value="">Select one</option>
          <option value="strayDogs">Stray Dogs</option>
          <option value="">Theft Attacks</option>
          <option value="">Broken Sewage</option>
          <option value="">Damaged Roads</option>

        </select>
        <label className="textLabel">Add Your Need</label>
        <textarea className="textSurvey">

        </textarea>
        <button onClick={handleClick}  className="surveyBtn"
        >SUBMIT</button>
      </form>
    </div>
  );
};

export default Survey;
