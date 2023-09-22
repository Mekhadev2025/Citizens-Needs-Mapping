import React, { useState, useEffect } from 'react';
import '../ReportCard/ReportCard.css';

const ReportCard = ({ data, report, type }) => {
  console.log('reposting=', report);
  console.log('dathai====', data);
  console.log('type=', type);
  const responseDateString = data.date; // Your response date
  // Create a Date object from the response date string
  const responseDate = new Date(responseDateString);
  console.log('date', responseDate);

  // Calculate the time difference in milliseconds
  const currentDate = new Date(); // This creates a Date object representing the current date and time
  const timeDifference = currentDate - responseDate;

  // Calculate the difference in days
  const daysDiff = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  let backgroundColor = '';

  if (type === 'basic') {
    backgroundColor = 'red';
  } else if (type === 'standard') {
    backgroundColor = 'orange';
  } else {
    backgroundColor = 'blue';
  }
  
  return (
    <div className='reportCont'>
      <div className='voteCount'style={{ backgroundColor }}>
        <div className='vote' >{report}</div>
      </div>
      <div className='cardContentCont'>
      <p className='cardContent'>
          {report} votes for <span style={{ fontWeight: 'bold', textTransform: 'capitalize' }}>{type} need</span>  which requires immediate attention
        </p>
        <div className='cardDate'>Date of publication:{responseDate.getDate()}-{responseDate.getMonth()+1}-{responseDate.getFullYear()} </div>
      </div>
      <div className='countdown'>
        <div className='countdownNo'>{daysDiff}</div>
        <div className='countdowntext'>Days</div>
      </div>
    </div>
  );
};

export default ReportCard;
