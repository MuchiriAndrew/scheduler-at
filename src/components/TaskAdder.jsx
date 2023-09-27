import React, { useState } from 'react';
import '../styles/taskAdder.css'

const TaskAdder = () => {

  return (

      <div className='rounded-3 mb-5' id='new-task'>

        <div id='inputs'>
        <label htmlFor="task" className='px-2'>TASK</label>
        <textarea
          name="task"
          id="task"
          cols="30"
          rows="2"
          className='rounded-3 px-2 py-1'
        />
        </div>

        <div id='inputs'>
        <label htmlFor="priority" className='px-2'>PRIORITY</label>
        <select
          name="priority"
          id="priority"
          className='rounded-3 px-2 py-1 border-none'
        >
          <option value="">Select</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        </div>


      </div>
  );
};

export default TaskAdder;
