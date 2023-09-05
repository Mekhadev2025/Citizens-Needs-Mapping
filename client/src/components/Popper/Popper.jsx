import React from 'react'
import closeimg from "../../assets/close.svg"
import "../Popper/Popper.css"
function Popper(props) {
  return (props.trigger)?(
    <div className="popup">
        <div className="popup-inner">
            <img className="close-btn" src={closeimg} onClick={()=>{
                props.setTrigger(false)
            }} >
            </img>
            
            {props.children}
        </div>
    </div>
  ):""
}

export default Popper;