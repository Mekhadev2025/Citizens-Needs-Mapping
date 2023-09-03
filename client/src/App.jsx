import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Survey from "./pages/AttemptSurvey/Survey.jsx";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/survey" element={<Survey />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;