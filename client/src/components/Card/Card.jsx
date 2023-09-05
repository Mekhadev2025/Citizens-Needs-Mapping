import React from 'react'
import "../Card/Card.css"
import LinearGauge from '../LinearGuage/LinearGuage';
const Card = (props) => {
    const guageValue=props.value
  return (
 
       <div className="cardCont">
           <div className='sideBox'></div>
           <div className='cardNeed'>{props.need}</div>
           <div className='cardVote'>{props.vote} votes</div>
           <div className='cardBar'>
            <LinearGauge value={guageValue} maxValue={props.maxValue}/>
           </div>
           
       </div>
    
  )
}

export default Card
