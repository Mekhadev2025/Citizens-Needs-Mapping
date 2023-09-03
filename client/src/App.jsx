import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import DistrictList from "./components/DistrictList/DistrictList";
import AnalysisPage from "./components/AnalysisPage/AnalysisPage";
import "./App.css";

import Survey from "./pages/AttemptSurvey/Survey.jsx";
import Home from "./pages/Home/Home";

const App = () => {
  const [selectedDistrict, setSelectedDistrict] = useState("Kasaragod");

  const onSelectDistrict = (district) => {
    setSelectedDistrict(district);
  };

  return (
    <Router>
      <Routes>
        <Route path="/survey" element={<Survey />} />
        <Route
          path="/"
          element={
            <Home
              selectedDistrict={selectedDistrict}
              onSelectDistrict={onSelectDistrict}
            />
          }
        />
        <Route
          path="/analysis"
          element={<AnalysisPage selectedDistrict={selectedDistrict} />}
        />
       
       
      </Routes>
    </Router>
  );
};

export default App;
