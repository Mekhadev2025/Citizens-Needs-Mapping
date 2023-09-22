import React from 'react';
import "../ReportCard/ReportCard.css";

const ReportCard = ({ data,report,type }) => {
  if (!data || data.length === 0) {
    return <div className="reportCont">No data available</div>;
  }
  const firstRecord = data[0];

  return (
    <div className='reportCont'>
      <div className='voteCount'>
        <div className='vote'>{report}</div>
      </div>
      <div className='cardContentCont'>
        <p className="cardContent">
          {report} votes for {type} need which requires immediate attention
        </p>
        <div className='cardDate'>Date of publication: {firstRecord.publicationDate}</div>
      </div>
      <div className='countdown'>
        <div className="countdownNo">3</div>
        <div className="countdowntext">Days</div>
      </div>
    </div>
  );
}

export default ReportCard;
