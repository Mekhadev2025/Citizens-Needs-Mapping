import React from "react";
import "../AttemptSurvey/Survey.css"

const Survey = () => {
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
      <form action="" className="surveyForm">
        <label htmlFor="name">Name</label>
        <input type="text" ></input>
        <label htmlFor="age">Age</label>
        <input type="text"  ></input>
        <label htmlFor="district">Select District</label>
        <select name="district" id="">
          <option >Trivandrum</option>
        </select>
        <label htmlFor="occupation">Select Occupation</label>
        <select name="occupation" id="">
          <option>Occupation</option>
        </select>
        <label htmlFor="basicNeed">Basic Need</label>
        <select   id="">
          <option value="primarySchool">Primary School</option>
        </select>
        <label htmlFor="stdNeed">Standard Need</label>
        <select   id="">
          <option value="publicLibrary">Public Library</option>
        </select>
        <label htmlFor="preNeed">Premium Need</label>
        <select   id="">
          <option >Gym</option>
        </select>
        <label htmlFor="issue">
          Mention a serious public issue faced in the locality ,if any
        </label>
        <select   id="">
          <option value="gym">Stray Dogs</option>
        </select>
        <button>SUBMIT</button>
      </form>
    </div>
  );
};

export default Survey;
