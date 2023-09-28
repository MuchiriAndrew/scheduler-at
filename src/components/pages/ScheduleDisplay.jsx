import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/ScheduleDisplay.css'

const ScheduleDisplay = () => {

  const hours = Array.from({ length: 20 }, (_, index) => index + 6);

  return (
    <div id='wrapper2'>

      <div id='header'>
        <div id='salute'>
        <h1>Good Afternoon User!!</h1>
        </div>

        <div id='time' className=''>
          <h2>Current Time</h2>
          <h2>12.10PM</h2>
        </div>
      </div>


      <div id='status-container' className='mt-5'>
        <div className='rounded-3' id='graph'>
          <h2>Live Status</h2>
        </div>

        <div className='rounded-3' id='calender'>
          <h2>Calender</h2>
        </div>


      </div>

    <div className="timetable mt-5">
      {hours.map((hour) => (
        <div id='hrtable'>
          <div key={hour} className="hour">
          {hour}:00 - {hour + 1}:00
          </div>

          <div id='task'>
            hello
          </div>

        </div>
      ))}
    </div>

    </div>



  );
};

export default ScheduleDisplay;
