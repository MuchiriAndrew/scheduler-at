import React from 'react';
import '../../styles/ScheduleDisplay.css'
import { DoughNut } from './DoughNut';
import { Chart } from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

Chart.register(CategoryScale);

const ScheduleDisplay = () => {

  const hours = Array.from({ length: 20 }, (_, index) => index + 6);
  const doughData = {
    labels: [
      'Red',
      'Blue',
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50],
      backgroundColor: [
        'rgb(255, 0, 0)',
        'rgb(54, 162, 235)',
      ],
      hoverOffset: 4
    }]
  };

  function onCalendarChange() {}

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
          <DoughNut data={doughData} />
        </div>

        {/* <div className='rounded-3' id='calender'> */}
          <Calendar onChange={onCalendarChange}/>
        {/* </div>   */}


      </div>

    <div className="timetable mt-5">
      {hours.map((hour, ix) => (
        <div key={ix} id='hrtable'>
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
