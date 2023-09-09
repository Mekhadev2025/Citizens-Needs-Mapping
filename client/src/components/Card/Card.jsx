import React,{useState,useEffect} from 'react'
import "../Card/Card.css"
import LinearGauge from '../LinearGuage/LinearGuage';
const Card = (props) => {
    const guageValue=props.value
    const [color, setColor] = useState(null);

    useEffect(() => {
      // Set color based on props.type
      switch (props.type) {
        case "basic":
          setColor("red");
          break;
        case "standard":
          setColor("orange");
          break;
        default:
          setColor("blue");
      }
    }, [props.type]);

  return (
 
       <div className="cardCont">
           <div className='sideBox'></div>
           <div className='cardNeed'>{props.need}</div>
           <div className='cardVote'>{props.vote} votes</div>
           <div className='cardBar'>
            <LinearGauge value={guageValue} maxValue={props.maxValue} />
           </div>
           
       </div>
    
  )
}

export default Card
