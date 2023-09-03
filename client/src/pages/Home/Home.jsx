import React from "react";
import "../Home/Home.css";
import Hero from "../../components/Hero/Hero";
import Map from "../../components/Map/Map"
const Home = () => {
  return (
    <div>
      <Hero />
      <p className="homeDescription">
        Our Citizen Needs Project is an initiative led by Governance Innovation
        Labs (GIL), an organization deeply committed to the power of community
        and collective action. We are dedicated to creating a platform that
        empowers citizens to voice their needs, no matter how basic or complex
        they may be. Through collaborative efforts, we aim to build stronger,
        more responsive communities that prioritize the well-being of every
        member
      </p>
      <Map/>
    </div>
  );
};

export default Home;
