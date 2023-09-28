import React from 'react';
import { Link } from 'react-router-dom';

const ScheduleDisplay = ({ generatedSchedule }) => {
  return (
    <div className='bg-blue'>
      <a href='/' className='floating-back-btn m-3 mt-2'>
          <i className='bi bi-arrow-left'></i>
      </a>
      <h1>Schedule Display</h1>

      <div id='schedule'>
        <h2>Your Generated Schedule:</h2>
        <p>{generatedSchedule}</p>
      </div>

      <button><Link to={'/classes'}>Back to Input</Link></button>
    </div>
  );
};

export default ScheduleDisplay;
