import React from 'react';
import closeimg from "../../assets/close.svg";
import { useNavigate } from "react-router-dom"; // Import useNavigate

import "../Popper/Popper.css";

function Popper(props) {
  const navigate = useNavigate(); // Create the navigate function

  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <img
          className="close-btn"
          src={closeimg}
          alt="Close"
          onClick={() => {
            props.setTrigger(false);
            navigate("/"); // Navigate to the home page
          }}
        />
        {props.children}
      </div>
    </div>
  ) : null;
}

export default Popper;