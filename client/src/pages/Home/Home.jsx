import React from "react";
import "../Home/Home.css";
import heroImage from "../../assets/hero.svg";
import {Link} from "react-router-dom"
const Home = () => {
  return (
    <div>
      <div className="hero">
        <h1 className="heroTitle1">Citizen</h1>
        <h1 className="heroTitle2">Needs Mapping</h1>
        <p className="heroContent">
          Discover, Understand, and Address the Needs of Citizens
        </p>
        <Link to="/survey">
          <button className="heroButton">Attempt Survey</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
