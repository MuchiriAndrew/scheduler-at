import React, { useEffect, useState } from 'react';
import '../styles/taskAdder.css'

const TaskAdder = ({tasks2, setTasks2}) => {

  const [taskInput, setTaskInput] = useState('');
  const [selectedPriority, setSelectedPriority] = useState('');
  const [content, setContent] = useState('Add Task')

  const handleChange = (event) => {
    setSelectedPriority(event.target.value);
  };

  const handleAddTask = () => {
    if (taskInput && selectedPriority) {
      setTasks2([...tasks2, { task: taskInput, priority: selectedPriority }]);
      // setTaskInput('');
      // setSelectedPriority('');
      setContent('Added!!')
    }
  };


  return (
    <>
      <div className='rounded-3 mb-5' id='new-task'>

        <div id='inputs'>
        <label htmlFor="task" className='px-2'>TASK</label>
        <textarea
          name="task"
          id="task"
          cols="30"
          rows="2"
          value={taskInput}
          className='rounded-3 px-2 py-1'
          onChange={(e) => setTaskInput(e.target.value)}
        />
        </div>

        <div id='inputs'>
        <label htmlFor="priority" className='px-2'>PRIORITY</label>
        <select
          name="priority"
          id="priority"
          className='rounded-3 px-2 py-1 border-none'
          value={selectedPriority}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        </div>

        <div id='button'>
        <button className='btn btn-primary' onClick={handleAddTask}>{content}</button>
        </div>
      </div>


      {/* {tasks2.map((task, index) => (
        <div key={index}>
          <h3>Task {index + 1}</h3>
          <p>Task: {task.task}</p>
          <p>Priority: {task.priority}</p>
        </div>
      ))} */}
      </>
  );
};

export default TaskAdder;
