import React from 'react'
import "../ReportCard/ReportCard.css"
const ReportCard = () => {
  return (
    <div className='reportCont'>
     <div className='voteCount'>
      <div className='vote'>13</div>
     </div>
     <div className='cardContentCont'>
      <p className="cardContent"> 13 votes for Public Toilet which needs immediate attention</p>
      <div className='cardDate'>Date of publication:13-4-24</div>
     
     </div>
      <div className='countdown'>
        <div className="countdownNo">3</div>
        <div className="countdowntext">Days</div>
      </div>
    </div>
  )
}

export default ReportCard
