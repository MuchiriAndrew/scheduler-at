import React, { useState } from 'react';
import '../styles/taskAdder.css'

const TaskAdder = () => {
  const [tasks, setTasks] = useState([]); // State to store the tasks
  const [taskInput, setTaskInput] = useState(''); // State for the task input
  const [selectedPriority, setSelectedPriority] = useState('');

  const handleChange = (event) => {
    setSelectedPriority(event.target.value);
  };

  const handleAddTask = () => {
    if (taskInput && selectedPriority) {
      // Add a new task to the tasks array
      setTasks([...tasks, { task: taskInput, priority: selectedPriority }]);
      // Clear the task input and selected priority
      setTaskInput('');
      setSelectedPriority('');
    }
  };

  return (
    <div className='container'>
      <h1>TaskAdder</h1>

      <div id='new-task'>
        <label htmlFor="task" className='px-2'>TASK</label>
        <textarea
          name="task"
          id="task"
          cols="30"
          rows="2"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          className='rounded-3 px-2 py-1'
        />
        <label htmlFor="priority" className='px-2'>PRIORITY</label>
        <select
          name="priority"
          id="priority"
          value={selectedPriority}
          onChange={handleChange}
          className='rounded-3 px-2 py-1 border-none'
        >
          <option value="">Select</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>

      <button onClick={handleAddTask} className='add'><h1>+</h1></button>

      <button type="submit" className='submit'>Submit & Generate</button>

      {/* Render the task divs */}
      {tasks.map((task, index) => (
        <div key={index}>
          <h3>Task {index + 1}</h3>
          <p>Task: {task.task}</p>
          <p>Priority: {task.priority}</p>
        </div>
      ))}
    </div>
  );
};

export default TaskAdder;
